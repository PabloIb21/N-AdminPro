# AdminPro Backend

_Backend de un administrador de hospitales._

## Instalación 🔧

_Escribe el siguiente comando para instalar los módulos de Node.js_

```
npm install
```

_Crear una archivo en la raíz llamado .env con las sig. variables_

```
PORT=Tu puerto en desarrollo
DB_CNN=Tu conexión a la BD
JWT_SECRET=Una "password" para JWT
GOOGLE_ID=El ID proporcionado por tu app de Google
GOOGLE_SECRET=El password proporcionado por tu app de Google
```

_Iniciar la aplicación (modo desarrollo)_

```
npm run dev
```

_Iniciar la aplicación (modo "producción")_

```
npm start
```

## Construido con 🛠️

* [Node](https://nodejs.org/en/) - Entorno de desarrollo de JS
* [Express](http://expressjs.com/) - Framework para Node
* [express-validator](https://express-validator.github.io/docs/) - Librería para validaciones en Express
* [express-fileupload](https://www.npmjs.com/package/express-fileupload) - Librería para subida de archivos en Express
* [dotenv](https://www.npmjs.com/package/dotenv) - Librería para manejar variables de entorno
* [cors](https://www.npmjs.com/package/cors) - Librería para habilitar el cors
* [Mongoose](https://mongoosejs.com/) - Librería para trabajar con MongoDB
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Librería para trabajar con JWT
* [bcryptjs](https://www.npmjs.com/package/bcryptjs) - Librería para hashing de passwords
* [uuid](https://www.npmjs.com/package/uuid) - Librería para generar uids
* [google-auth-library](https://www.npmjs.com/package/google-auth-library) - Librería para autenticación con Google
