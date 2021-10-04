const express = require('express');
const cors = require('cors');


class Server {

    constructor() {
        this.app= express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //middlewares (funciones que se ejecutan simepre, añaden funcionalidades)
        this.middlewares();

        //Rutas de mi aplicación.


        this.routes();
    }

    middlewares() {
        //CORS
        this.app.use(cors() );

        //Parseo y lectura del body
        this.app.use(express.json() );

        //Directorio público.
        this.app.use(express.static('public'));

        //

    }

    routes() {

        //middleware, exclusivo para rutas
        this.app.use(this.usuariosPath, require('../routes/usuarios'));


    }

    lister() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto: ', this.port);
        });
    }


}

module.exports = Server;