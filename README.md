# AdminPro Backend

_Backend de un administrador de hospitales._

## Instalaci贸n 馃敡

_Escribe el siguiente comando para instalar los m贸dulos de Node.js_

```
npm install
```

_Crear una archivo en la ra铆z llamado .env con las sig. variables_

```
PORT=Tu puerto en desarrollo
DB_CNN=Tu conexi贸n a la BD
JWT_SECRET=Una "password" para JWT
GOOGLE_ID=El ID proporcionado por tu app de Google
GOOGLE_SECRET=El password proporcionado por tu app de Google
```

_Iniciar la aplicaci贸n (modo desarrollo)_

```
npm run dev
```

_Iniciar la aplicaci贸n (modo "producci贸n")_

```
npm start
```

## Construido con 馃洜锔?

* [Node](https://nodejs.org/en/) - Entorno de desarrollo de JS
* [Express](http://expressjs.com/) - Framework para Node
* [express-validator](https://express-validator.github.io/docs/) - Librer铆a para validaciones en Express
* [express-fileupload](https://www.npmjs.com/package/express-fileupload) - Librer铆a para subida de archivos en Express
* [dotenv](https://www.npmjs.com/package/dotenv) - Librer铆a para manejar variables de entorno
* [cors](https://www.npmjs.com/package/cors) - Librer铆a para habilitar el cors
* [Mongoose](https://mongoosejs.com/) - Librer铆a para trabajar con MongoDB
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Librer铆a para trabajar con JWT
* [bcryptjs](https://www.npmjs.com/package/bcryptjs) - Librer铆a para hashing de passwords
* [uuid](https://www.npmjs.com/package/uuid) - Librer铆a para generar uids
* [google-auth-library](https://www.npmjs.com/package/google-auth-library) - Librer铆a para autenticaci贸n con Google
