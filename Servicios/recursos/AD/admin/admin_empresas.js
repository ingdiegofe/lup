exports.init = function(server) {

  var manager = require('../../../BD/manager');
  var options = require('../../../BD/options');
  var funciones = require('../../../Funciones/funciones');
  var bcrypt = require('bcrypt-nodejs');
  var funciones = require('../../../Funciones/funciones');

  server.route({
    method: 'POST',
    path: '/admin-empresas/agregar-empresa',
    config: {
      auth: false,
      handler: function(request, reply) {
        let empresa = request.payload.empresa;
        console.log(empresa);
        let fields = "";
        let values = "";
        let error = false;
        // Validar parametros obligatorios
        if (!funciones.validaParametro(empresa.nombre)) {
          let message = "Error en solicitud = > " + JSON.stringify(request.payload.empresa);
          console.log(message);
          error = true;
          reply({
            code: 0,
            message: message
          });
        } else {
          // Validar que no exista otra empresa con el mismo nombre => PENDIENTE

          // Armar campos para query de inserción
          fields = fields + "nombre";
          values = funciones.concatenarSQL(values, "'" + empresa.nombre + "'");
          // Validar parametros opcionales
          if (funciones.validaParametro(empresa.correo)) {
            fields = fields + ", correo";
            values = values + ", '" + empresa.correo + "'";
          }
          if (funciones.validaParametro(empresa.telefono)) {
            fields = fields + ", telefono";
            values = values + ", '" + empresa.telefono + "'";
          }
          if (funciones.validaParametro(empresa.direccion)) {
            fields = fields + ", direccion";
            values = values + ", '" + empresa.direccion + "'";
          }
          if (funciones.validaParametro(empresa.url)) {
            fields = fields + ", url";
            values = values + ", '" + empresa.url + "'";
          }
        }

        if (!error) {
          //add(fields, table, values, reply)
          manager.add(fields, "ad_empresa", values, function(result) {
            if (!result.success) {
              console.log(result.err);
              reply({
                code: 0,
                message: "Error agregando empresa"
              });
            } else {
              reply({
                code: 1,
                message: "Empresa agregada exitosamente"
              });
            }
          });
        }
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/admin-empresas/lista-empresas',
    config: {
      auth: false,
      handler: function(request, reply) {
        sql = "SELECT E.nombre, E.fecha_modificacion, U.nombre AS usuario_modifica " +
          "FROM ad_empresa E, ad_usuario U " +
          "WHERE E.usuario_modifica = U.id_usuario ";
        manager.Correr(sql, function(result) {
          if (!result.success) {
            reply({
              code: 0,
              message: "Error obteniendo listado de empresas"
            });
          } else {
            reply({
              code: 1,
              message: "Empresas obtenidas exitosamente",
              data: {
                body: result.data.rows
              }
            });
          }
        });
      }
    }
  });

}
