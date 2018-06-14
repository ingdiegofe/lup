exports.init = function(server) {

var dbManager = require('../../BD/manager');
var options = require('../../BD/options');
var funciones = require('../../Funciones/funciones');
var bcrypt = require('bcrypt-nodejs');
var funciones = require('../../Funciones/funciones');
var Usuario;
var Reply;
var bitacora = require('../../Funciones/bitacora');


// #########################################  AGREGAR PERSONA  #########################################

server.route({
	method: 'POST',
	path: '/admin-personas/agregar-persona',
	config: {
	  auth: 'jwt',
	  handler: AgregarPersona
	}
});

function AgregarPersona(request, reply) {
	Reply = reply;
	Persona = request.payload.persona;
	// Validar parametros obligatorios
	if (!funciones.validaParametro(Persona.nombres) || !funciones.validaParametro(Persona.apellidos)
		|| !funciones.validaParametro(Persona.email) || !funciones.validaParametro(Persona.fecha_nacimiento)
		|| !funciones.validaParametro(Persona.genero) ) {
	  Reply({ code: 0, message: "Error en solicitud = > " + JSON.stringify(request.payload.persona) });
	} else {
		let _strCampos = "";
		let _strValores = "";
		// Armar campos para query de inserción
		_strCampos += "nombres, apellidos, email, fecha_nacimiento, genero ";
		_strValores += "'" + Persona.nombres + "', '" + Persona.apellidos + "', '" + Persona.email + "', '"
								+ Persona.fecha_nacimiento + "', B'" + Persona.genero.toString() + "'";
		// Validar parametros opcionales
		if (funciones.validaParametro(Persona.celular)) {
			_strCampos += ", celular";
			_strValores += ", '" + Persona.celular + "'";
		}
		if (funciones.validaParametro(Persona.dpi)) {
			_strCampos += ", dpi";
			_strValores += ", '" + Persona.dpi + "'";
		}
		if (funciones.validaParametro(Persona.direccion)) {
			_strCampos += ", direccion";
			_strValores += ", '" + Persona.direccion + "'";
		}
		// Agregar campos de gestión internos
		_strCampos += ", fecha_creacion, fecha_modificacion ";
		_strValores += ", now(), now()";
		dbManager.add(_strCampos, "ad_persona", _strValores, cbAddPersona);
	}
}


function cbAddPersona(result) {
	if (!result.success) {
		Reply({ code: 0, message: "Error agregando persona" });
	} else {
		Reply({ code: 1, message: "Persona agregada exitosamente" });
	}
}



// #########################################  LISTA DE PERSONAS  #########################################

server.route({
	method: 'GET',
	path: '/admin-personas/lista-personas',
	config: {
	  auth: 'jwt',
	  handler: ListaPersonas
	}
});

function ListaPersonas(request, reply) {
	Reply = reply;
	_strSQL = "SELECT id_persona, nombres, apellidos, to_char(fecha_modificacion, 'yyyy/MM/dd hh:mm:ss') as fecha_modificacion " +
            "FROM   ad_persona";

	dbManager.Correr(_strSQL, cbListaPersonas);
}

function cbListaPersonas(result) {
	if (!result.success) {
		Reply({ code: 0, message: "Error obteniendo listado de personas" });
	} else {
		Reply({ code: 1, message: "Personas obtenidas exitosamente", data: { body: result.data.rows } });
	}
}

}
