exports.init = function(server) {

var dbManager = require('../../../BD/manager');
var options = require('../../../BD/options');
var funciones = require('../../../Funciones/funciones');
var bcrypt = require('bcrypt-nodejs');
var funciones = require('../../../Funciones/funciones');
var Empresa;
var Reply;

// #########################################  ACTUALIZAR EMPRESA  #########################################

server.route({
	method: 'POST',
	path: '/admin-empresas/actualizar-empresa',
	config: {
	  auth: false,
	  handler: ActualizarEmpresa
	}
});

function ActualizarEmpresa(request, reply){
	Reply = reply;
	Empresa = request.payload.empresa;
	
	// Validar valores obligatorios
	if( !funciones.validaParametro(Empresa.nombre) ){
		Reply({ code: 0, message: "Nombre de empresa no puede ir en blanco" });
	}else{
		// Validar que nuevo nombre no exista en base de datos
		dbManager.show('id_empresa','ad_empresa',"nombre='" + Empresa.nombre + "'", "", cbVerificarEmpresaRepetidaAct);
	}
}

function cbVerificarEmpresaRepetidaAct(result){
	if(!result.success){
		Reply({ code: 0, message: "Ya existe una empresa con el nuevo nombre ingresado" });
	}else{
		let strSQLSet = " nombre = '" + Empresa.nombre + "'";
		// Adjuntar valores opcionales
		if (funciones.validaParametro(Empresa.correo)) strSQLSet += ", correo = '" + Empresa.correo  + "'";
		if (funciones.validaParametro(Empresa.telefono)) strSQLSet += ", telefono = '" + Empresa.telefono  + "'";
		if (funciones.validaParametro(Empresa.direccion)) strSQLSet += ", direccion = '" + Empresa.direccion  + "'";
		if (funciones.validaParametro(Empresa.url)) strSQLSet += ", url = '" + Empresa.url  + "'";
		// update(set, table, restriction, reply)
		dbManager.update(strSQLSet, 'ad_empresa', "id_empresa = " + Empresa.id_empresa, cbActualizarEmpresa);
	}
}

function cbActualizarEmpresa(result){
	if(!result.success){
		Reply({ code: 0, message: "Error actualizando información de empresa" });
	}else{
		Reply({ code: 1, message: "Empresa actualizada exitosamente" });
	}
}



// #########################################  INFORMACION DE EMPRESA  #########################################

server.route({
	method: 'POST',
	path: '/admin-empresas/info-empresa',
	config: {
	  auth: false,
	  handler: InformacionEmpresa
	}
});

function InformacionEmpresa(request, reply){
	Reply = reply;
	dbManager.show('id_empresa, nombre, correo, telefono, direccion, url',
		'ad_empresa', 'id_empresa = ' + request.payload.idempresa, '', cbInformacionEmpresa);
}

function cbInformacionEmpresa(result){
	if (!result.success) {
		console.log(result.err);
		Reply({ code: 0, message: "Error obteniendo información de empresa" });
	} else {
		Reply({ code: 1, message: "Información obtenida exitosamente", body: { empresa: result.data.rows } });
	}
}



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
	if (!funciones.validaParametro(Empresa.nombre)) {
	  Reply({ code: 0, message: "Error en solicitud = > " + JSON.stringify(request.payload.empresa) });
	} else {
	  // Validar que no exista otra empresa con el mismo nombre => PENDIENTE
	  _strSQL = "SELECT * " +
				"FROM 	ad_empresa " +
				"WHERE 	nombre = '" + Empresa.nombre + "'";
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
			_strCampos += "nombre";
			_strValores += "'" + Empresa.nombre + "'";
			// Validar parametros opcionales
			if (funciones.validaParametro(Empresa.correo)) {
				_strCampos += ", correo";
				_strValores += ", '" + Empresa.correo + "'";
			}
			if (funciones.validaParametro(Empresa.telefono)) {
				_strCampos += ", telefono";
				_strValores += ", '" + Empresa.telefono + "'";
			}
			if (funciones.validaParametro(Empresa.direccion)) {
				_strCampos += ", direccion";
				_strValores += ", '" + Empresa.direccion + "'";
			}
			if (funciones.validaParametro(Empresa.url)) {
				_strCampos = _strCampos + ", url";
				_strValores += ", '" + Empresa.url + "'";
			}
			// Agregar campos de gestión internos
			_strCampos += ", fecha_creacion, estado, fecha_modificacion, usuario_modifica";
			_strValores += ", now(), 1, now(), 4";
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
