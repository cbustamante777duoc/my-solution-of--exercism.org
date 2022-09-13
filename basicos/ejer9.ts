//una tienda ofrece un 35% de descuento en el valor neto de un producto se necesita saber cuanto debe pagar (esto inclueye iva %19)


//creo el pro
let producto = {
    'nombre': 'televisor',
    'precio': 1000
}


const productoSinIva = ()=>{
    let precioDescuento = producto.precio - ( producto.precio * 0.35);
    return precioDescuento;
}

console.log(productoSinIva());//650


const totalAPagar = (iva:number = 0.19) =>{

    let mensaje = '';
    let ivaAlpicado = productoSinIva() * iva;
    let total = Math.round( productoSinIva() + ivaAlpicado);

    mensaje = `
    el ${producto.nombre} el total a pagar es : ${total} 
    descuento: ${productoSinIva()}`
    return mensaje;
}

console.log(totalAPagar()); //774
// el televisor el total a pagar es : 774  
// descuento: 650 