
exports.init = function(server) {

    var manager = require('../BD/manager');
    var options = require('../BD/options');
    var funciones = require('../Funciones/funciones');
    var md_auth = require('../middlewares/authenticated');


    var nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'diego.fernandez.58@gmail.com',
        pass: 'password'
      }
    });


    /*INICIO - Envio correo */
    server.route({

        method: 'POST',
        path: '/correo',
        config:{
            auth: false,
            handler: function(request, reply) {

                console.log("POST /correo");

                var strNombre = "";
                var strEmail = "";
                var strTelefono = "";
                var strAsunto ="";
                var strMensaje = "";
                var strMensajeEnvio = "";

          			if (funciones.validaParametro(request.payload.nombre)) {
                  strNombre = request.payload.nombre;
                }
          			if (funciones.validaParametro(request.payload.email)) {
                  strEmail = request.payload.email;
                }
                if (funciones.validaParametro(request.payload.telefono)) {
                  strTelefono = request.payload.telefono;
                }
          			if (funciones.validaParametro(request.payload.asunto)) {
                  strAsunto = request.payload.asunto;
                }
                if (funciones.validaParametro(request.payload.mensaje)) {
                  strMensaje = request.payload.mensaje;
                }

                strMensajeEnvio = "<p> El siguiente mensaje ha sido enviado por un cliente.</p> <br>" +
                                  "Nombre: " + strNombre + "<br>" +
                                  "Email: " + strEmail + "<br>" +
                                  "Teléfono: " + strTelefono + "<br> <br>" +
                                  "Mensaje: <br><br>" + strMensaje;


               var mailOptions = {
                  from: 'diego.fernandez.58@gmail.com',
                  to: 'diego.fernandez.58@gmail.com',
                  subject: strAsunto,
                  html: strMensajeEnvio
                };

                transporter.sendMail(mailOptions, function(error, info){
                  if (error) {
                    console.log("Error: " + error);
                    reply({
                        success: false,
                        message: "Error email:" + error,
                        data: {
                            body: 'Error al enviar correo.'
                        }
                    });
                  } else {
                    console.log('Correo enviado con exito.');
                    reply({
                        success: true,
                        message: "Correo enviado con exito",
                        data: {
                            body: 'Correo recibido con exito.'
                        }
                    });
                  }
                });

            }
        }
    });
    /*FIN - INSERTAR correo */


}
