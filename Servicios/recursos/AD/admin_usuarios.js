exports.init = function(server) {

var dbManager = require('../../BD/manager');
var options = require('../../BD/options');
var funciones = require('../../Funciones/funciones');
var bcrypt = require('bcrypt-nodejs');
var funciones = require('../../Funciones/funciones');
var Usuario;
var Reply;

// #########################################  LISTA DE ROLES  #########################################

server.route({
	method: 'GET',
	path: '/admin-usuarios/lista-roles',
	config: {
	  auth: 'jwt',
	  handler: ListaRolesUsuario
	}
});

function ListaRolesUsuario(request, reply){
	Reply = reply;
	dbManager.show('id_rol, nombre', 'ad_rol', '1=1', '', cbListaRolesUsuario);
}

function cbListaRolesUsuario(result){
	if(!result.success){
		Reply({ code: 0, message: "Error obteniendo roles de usuario" });
	}else{
		Reply({ code: 1, message: "Roles de usuario obtenidos exitosamente", data: { body: result.data.rows } });
	}
}


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
	_strSQL = 	"SELECT 	U.id_usuario, U.nombre,  " +
		"CASE	WHEN U.estado = 1 THEN 'Activo' ELSE 'Inactivo' END as estado, U.fecha_modificacion, " +
		"CASE  	WHEN U.logueado::int = 1 THEN 'Si' ELSE 'No' END as logueado, R.nombre  as rol " +
		"FROM 	ad_usuario U, ad_rol R " +
		"WHERE	R.id_rol = U.id_rol";

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
