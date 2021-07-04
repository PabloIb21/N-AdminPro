const Medico = require('../models/medico');
const Hospital = require('../models/hospital');

const getMedicos = async(req, res) => {

    const medicos = await Medico.find()
        .populate('usuario', 'nombre img')
        .populate('hospital', 'nombre img');;

    res.json({
        ok: true,
        medicos
    });

}

const getMedicoById = async(req, res) => {

    const id = req.params.id;

    try {
        const medico = await Medico.findById(id)
        .populate('usuario', 'nombre img')
        .populate('hospital', 'nombre img');;

        res.json({
            ok: true,
            medico
        });
    } catch (error) {
        console.log(error);
        res.json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }

}

const crearMedico = async(req, res) => {

    const uid = req.uid;
    const medico = new Medico({
        usuario: uid,
        ...req.body
    });

    try {
        
        const medicoDB = await medico.save();

        res.json({
            ok: true,
            medico: medicoDB
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }

}
const actualizarMedico = async(req, res) => {

    const id = req.params.id;
    const uid = req.uid;
    const { hospital } = req.body;

    try {

        const [ hospitalDB, medico ] = await Promise.all([
            Hospital.findById( hospital ),
            Medico.findById( id )
        ]);

        if ( !hospitalDB ) {
            return res.status(404).json({
                ok: false,
                msg: 'Hospital no encontrado'
            });
        }

        if ( !medico ) {
            return res.status(404).json({
                ok: false,
                msg: 'Medico no encontrado'
            });
        }

        const cambiosMedico = {
            ...req.body,
            usuario: uid
        }

        const medicoActualizado = await Medico.findByIdAndUpdate( id, cambiosMedico, { new: true } );
    
        res.json({
            ok: true,
            medico: medicoActualizado
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }

}
const borrarMedico = async(req, res) => {

    const id = req.params.id;

    try {

        const medico = Medico.findById( id );

        if ( !medico ) {
            return res.status(404).json({
                ok: false,
                msg: 'Medico no encontrado'
            });
        }

        await Medico.findByIdAndDelete( id );
    
        res.json({
            ok: true,
            msg: 'Médico eliminado'
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }

}

module.exports = {
    getMedicos,
    getMedicoById,
    crearMedico,
    actualizarMedico,
    borrarMedico
}