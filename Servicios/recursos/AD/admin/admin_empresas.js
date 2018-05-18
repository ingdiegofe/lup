
exports.init = function(server) {
	
	var manager = require('../../../BD/manager');
    var options = require('../../../BD/options');
    var funciones = require('../../../Funciones/funciones');
	
	var bcrypt = require('bcrypt-nodejs');
	
	server.route({
		method: 'GET',
		path: '/admin-empresas/lista-empresas',
		 config:{
            auth: false,
			handler: function(request, reply) {
				let empresas = [
					{ nombre: "Cemaco S.A.", fecha_modificacion: "2018-05-18 15:30:00", usuario_modifica: "marodriguez" },
					{ nombre: "Malher S.A.", fecha_modificacion: "2018-05-18 15:30:00", usuario_modifica: "marodriguez"  },
					{ nombre: "Farmacias Meykos S.A.", fecha_modificacion: "2018-05-18 15:30:00", usuario_modifica: "admin1"   },
					{ nombre: "Guadalupana S.A.", fecha_modificacion: "2018-05-18 15:30:00", usuario_modifica: "admin1"   },
					{ nombre: "Pollo Campero S.A.", fecha_modificacion: "2018-05-18 15:30:00", usuario_modifica: "marodriguez"  },
					{ nombre: "Paiz S.A.", fecha_modificacion: "2018-05-18 15:30:00", usuario_modifica: "marodriguez"   }
			    ];
				reply({
					codigo: 1, empresas: empresas
				});
			}
		 }
	});
	
}