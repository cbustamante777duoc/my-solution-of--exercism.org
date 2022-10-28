(()=>{

    //un vendedor recibe una comision del 10% de los productos vendidos, el desea saber cuanto sera el sueldo mas las comisiones 

    interface Producto {
        precio: number;
        nombre: string;
    }



    let producto1:Producto = {
        precio : 10,
        nombre: 'sillon'
    }

    let producto2:Producto = {
        precio : 10,
        nombre: 'mesa'
    }
    let producto3:Producto = {
        precio : 1,
        nombre: 'cartas pokemon'
    }

    let arrProductos = [producto1, producto2, producto3];

    const sum = arrProductos.reduce((acumulator,object) =>{
        return acumulator + object.precio
    },0 )


    const total = (sueldo:number, suma:number) =>{
        let comision = suma * 0.10;

        return sueldo + comision
    }


    console.log(total(100,sum)); // total 102.1






})();    