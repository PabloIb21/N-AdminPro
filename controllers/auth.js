const bcrypt = require('bcryptjs');
const Usuario = require("../models/usuario");
const { generarJWT } = require('../helpers/jwt');
const { googleVerify } = require('../helpers/google-verify');
const { getMenuFrontEnd } = require('../helpers/menu-frontend');

const login = async ( req, res ) => {

    const { email, password } = req.body;

    try {

        // verificar email
        const usuarioDB = await Usuario.findOne({ email });

        if ( !usuarioDB ) {
            return res.status(404).json({
                ok: false,
                msg: 'Email no encontrado'
            });
        }

        // verificar contraseña
        const validPassword = bcrypt.compareSync( password, usuarioDB.password );
        
        if ( !validPassword ) {
            return res.status(400).json({
                ok: false,
                msg: 'Contraseña no válida'
            });
        }

        // Generar el token
        const token = await generarJWT( usuarioDB.id );

        res.json({
            ok: true,
            token,
            menu: getMenuFrontEnd( usuarioDB.rol )
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }

}

const googleSignIn = async ( req, res ) => {

    const googleToken = req.body.token;

    try {

        const { name, email, picture } = await googleVerify( googleToken );

        const usuarioDB = await Usuario.findOne({ email });
        let usuario;

        if ( !usuarioDB ) {
            // si no existe el usuario
            usuario = new Usuario({
                nombre: name,
                email,
                password: '@@@',
                img: picture,
                google: true
            });
        } else {
            // existe usuario
            usuario = usuarioDB;
            usuario.google = true;
            // usuario.password = '@@@'
        }

        // guardar en DB
        await usuario.save();

        // Generar el token
        const token = await generarJWT( usuario.id );

        res.json({
            ok: true,
            token,
            menu: getMenuFrontEnd( usuario.rol )
        });

    } catch (error) {
        res.status(401).json({
            ok: true,
            msg: 'El token no es correcto'
        });
    }

}

const renewToken = async( req, res ) => {

    const uid = req.uid;

    // Generar el token
    const token = await generarJWT( uid );

    // Obtener el usuario por UID
    const usuario = await Usuario.findById( uid );

    res.json({
        ok: true,
        token,
        usuario,
        menu: getMenuFrontEnd( usuario.rol )
    });

}

module.exports = {
    login,
    googleSignIn,
    renewToken
}