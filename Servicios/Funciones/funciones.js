function concatenarSQL(query,instruccion,simbolo){
    if(query != ""){
        query = query + simbolo + instruccion;
    }else{
        query = instruccion;
    }
    return query;
}

function validaParametro(parametro){
    if(parametro != "" && parametro != null && parametro != 'null'){
        return true;
    }else{
        return false;
    }
}


exports.concatenarSQL = concatenarSQL;
exports.validaParametro = validaParametro;
