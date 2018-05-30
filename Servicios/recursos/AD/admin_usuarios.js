exports.init = function(server) {

var dbManager = require('../../BD/manager');
var options = require('../../BD/options');
var funciones = require('../../Funciones/funciones');
var bcrypt = require('bcrypt-nodejs');
var funciones = require('../../Funciones/funciones');
var Usuario;
var Reply;


// #########################################  LISTA DE USUARIOS  #########################################

server.route({
	method: 'GET',
	path: '/admin-usuarios/lista-usuarios',
	config: {
	  auth: 'jwt',
	  handler: ListaUsuarios
	}
});

function ListaUsuarios(request, reply) {
	Reply = reply;
	_strSQL = 	"SELECT id_usuario, nombre, estado, fecha_modificacion, " + 
				"CASE  WHEN logueado::int = 1 THEN 'Si' ELSE 'No' END as logueado, id_rol " +
				"FROM 	ad_usuario";
	dbManager.Correr(_strSQL, cbListaUsuarios);
}

function cbListaUsuarios(result) {
	if (!result.success) {
		Reply({ code: 0, message: "Error obteniendo listado de usuarios" });
	} else {
		Reply({ code: 1, message: "Usuarios obtenidos exitosamente", data: { body: result.data.rows } });
	}
}



}
