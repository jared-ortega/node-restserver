const { response, request } = require('express');



const usuariosGet = (req = request, res = response) => {

    const { q, nombre = 'No name', apikey } = req.query;

    res.json({
        msg: 'get API - Controlador',
        q,
        nombre,
        apikey
});
}

const usuariosPut = (req, res = response) => {

    const id = req.params.id;


    res.json({
        msg: 'put API - Controlador',
        id
    });
}

const usuariosPost = (req, res = response) => {

    const {nombre, edad} = req.body; //Se recibe excatamente lo que manda el usuario, limpieza necesaria

    res.json({
        msg: 'post API - Controlador',
        nombre,
        edad
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - Controlador'
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'patch API - Controlador'
    });
}









module.exports = {
    usuariosGet, 
    usuariosPut,
    usuariosPatch,
    usuariosPost,
    usuariosDelete
}
