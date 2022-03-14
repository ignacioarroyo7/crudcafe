//funcion para controlar si escribio algo en el campo o no, 
//devuelve true o false y se guarda en la variable campo requerido
const campoRequerido = (dato)=>{
    if(dato.trim().length>0) return true;
    else return false;
}

const rangoPrecio = (dato) =>{
    if(dato>0 && dato<=5000) return true;
    else return false;
}

export {campoRequerido,rangoPrecio}