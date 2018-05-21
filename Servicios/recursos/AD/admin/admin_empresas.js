exports.init = function(server) {

var dbManager = require('../../../BD/manager');
var options = require('../../../BD/options');
var funciones = require('../../../Funciones/funciones');
var bcrypt = require('bcrypt-nodejs');
var funciones = require('../../../Funciones/funciones');
var Empresa;
var Reply;

// #########################################  AGREGAR EMPRESA  #########################################

server.route({
	method: 'POST',
	path: '/admin-empresas/agregar-empresa',
	config: {
	  auth: false,
	  handler: AgregarEmpresa
	}
});

function AgregarEmpresa(request, reply) {
	Reply = reply;
	Empresa = request.payload.empresa;
	// Validar parametros obligatorios
	if (!funciones.validaParametro(_objEmpresa.nombre)) {
	  Reply({ code: 0, message: "Error en solicitud = > " + JSON.stringify(request.payload.empresa) });
	} else {
	  // Validar que no exista otra empresa con el mismo nombre => PENDIENTE
	  _strSQL = "SELECT * " + 
				"FROM 	ad_empresa " + 
				"WHERE 	nombre = '" + _objEmpresa.nombre + "'";
	  dbManager.Correr(_strSQL, cbVerificarEmpresaRepetida);
	}
}

function cbVerificarEmpresaRepetida(result){
	let _strCampos = "";
	let _strValores = "";
	if(!result.success){
	console.log(result.err);
	Reply({ code: 0, message: "Error agregando empresa" });
	}else{
		if(result.data.rows > 0){
			console.log(result.err);
			reply({ code: 0, message: "Ya existe otra empresa con el nombre ingresado" });
		}else{ 
			// Armar campos para query de inserción
			_strCampos = _strCampos + "nombre";
			_strValores = _strValores + "'" + _objEmpresa.nombre + "'";
			// Validar parametros opcionales
			if (funciones.validaParametro(_objEmpresa.correo)) {
				_strCampos = _strCampos + ", correo";
				_strValores = _strValores + ", '" + _objEmpresa.correo + "'";
			}
			if (funciones.validaParametro(_objEmpresa.telefono)) {
				_strCampos = _strCampos + ", telefono";
				_strValores = _strValores + ", '" + _objEmpresa.telefono + "'";
			}
			if (funciones.validaParametro(_objEmpresa.direccion)) {
				_strCampos = _strCampos + ", direccion";
				_strValores = _strValores + ", '" + _objEmpresa.direccion + "'";
			}
			if (funciones.validaParametro(_objEmpresa.url)) {
				_strCampos = _strCampos + ", url";
				_strValores = _strValores + ", '" + _objEmpresa.url + "'";
			}
			dbManager.add(_strCampos, "ad_empresa", _strValores, cbAddEmpresa);
		}	
	}
}

function cbAddEmpresa(result) {
	if (!result.success) {
		console.log(result.err);
		Reply({ code: 0, message: "Error agregando empresa" });
	} else {
		Reply({ code: 1, message: "Empresa agregada exitosamente" });
	}
}


// #########################################  LISTA DE EMPRESAS  #########################################

server.route({
	method: 'GET',
	path: '/admin-empresas/lista-empresas',
	config: {
	  auth: false,
	  handler: ListaEmpresas
	}
});

function ListaEmpresas(request, reply) {
	Reply = reply;
	_strSQL = 	"SELECT E.nombre, E.fecha_modificacion, U.nombre AS usuario_modifica " +
				"FROM ad_empresa E, ad_usuario U " +
				"WHERE E.usuario_modifica = U.id_usuario ";
	dbManager.Correr(_strSQL, cbListaEmpresas);
}

function cbListaEmpresas(result) {
	if (!result.success) {
		Reply({ code: 0, message: "Error obteniendo listado de empresas" });
	} else {
		Reply({ code: 1, message: "Empresas obtenidas exitosamente", data: { body: result.data.rows } });
	}
}



}
