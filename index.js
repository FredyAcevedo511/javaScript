//mi primera variable

let name = prompt('Introduce Nombre y Apellido')
let age =  parseInt( prompt('Introduce tu edad'))

alert (`Hola ${name} felicidades por tus ${age} años, el año que viene tendras ${age+1} años...Vamos a comprar`);
console.log (`El señor(a) ${name} tiene ${age} años`);

let producto = parseInt(prompt('Escoge el producto que deseas comprar: 1.Iphone - 2.Tv - 3.Computador 4.Ipad'))
let seguirComprando = true
let totalCompra = 0
let decision

while (seguirComprando===true){
    if(producto===1){
        totalCompra = totalCompra + 600
        console.log(`El total de la compra es ${totalCompra}`);
    } else if(producto===2){
        totalCompra = totalCompra + 1000
        console.log(`El total de la compra es ${totalCompra}`);
    } else if(producto===3){
        totalCompra = totalCompra + 200
        console.log(`El total de la compra es ${totalCompra}`);
    }else if(producto===4){
        totalCompra = totalCompra + 800
        console.log(`El total de la compra es ${totalCompra}`);
    }

    decision = parseInt(prompt('Quieres seguir comprando? 1.Si - 2.No'))
    if(decision ===1){
        producto = parseInt (prompt('Escoge el producto que deseas comprar: 1.Iphone - 2.Tv - 3.Computador 4.Ipad'))
    } else {
        seguirComprando = false
    }
}

alert(`El total de tu compra es ${totalCompra}`)
console.log(`El total de la compra de ${name} es de ${totalCompra}`);