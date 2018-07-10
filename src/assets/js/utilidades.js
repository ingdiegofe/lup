
function Finalizado(){
	//$('#mdLoading').modal('hide');
	setInterval(function(){ $('#mdLoading').modal('hide'); }, 2000);
}

function Cargando(){
	$('#mdLoading').modal('show');
}


function ValidarCampo(campo){
  if( campo == null || campo == undefined || campo == "" ) return false;
  return true;
}


function DesplegarMensajeAdmin(strTipo, strMensaje){
	var strClass = "";
	if(strTipo=="Ok"){
		strClass = strClass + " alert-success";
	}else if(strTipo=="Error"){
		strClass = strClass + " alert-danger";
	}else if(strTipo=="Advertencia"){
		strClass = strClass + " alert-warning";
	}
	$('#dvMensajeForm').removeClass('alert-danger alert-success alert-warning d-none').addClass(strClass);
	$('#spMensajeForm').html(strMensaje);
}
