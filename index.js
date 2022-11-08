//mi primera variable

let name = prompt('Introduce Nombre y Apellido')
let age =  parseInt( prompt('Introduce tu edad'))

alert (`Hola ${name} felicidades por tus ${age} años, el año que viene tendras ${age+1} años...Vamos a comprar`);
console.log (`El señor(a) ${name} tiene ${age} años`);

let producto = parseInt(prompt('Escoge el producto que deseas comprar: 1.Iphone - 2.Tv - 3.Computador 4.Ipad'))
let seguirComprando = true
let totalCompra = 0
let decision

class NewProduct{
    constructor(id, name, price, stock){
        this.id = id
        this.name = name
        this.price = price
        this.stock = stock
    }
}

const iphone = new NewProduct (1,'iphone', 600, 20)
const tv = new NewProduct (2,'tv', 1000, 40)
const ipad = new NewProduct (3,'ipad', 200, 30)
const computador = new NewProduct (4,'computador', 800, 15)

while (seguirComprando===true){
    if(producto===iphone.id){
        totalCompra = totalCompra + iphone.price
        console.log(`El total de la compra es ${totalCompra}`);
    } else if(producto===tv.id){
        totalCompra = totalCompra + tv.price
        console.log(`El total de la compra es ${totalCompra}`);
    } else if(producto===ipad.id){
        totalCompra = totalCompra + ipad.price
        console.log(`El total de la compra es ${totalCompra}`);
    }else if(producto===computador.id){
        totalCompra = totalCompra + computador.price
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

let num = parseInt(prompt('Introduce un numero no mayor a 20'))

console.log('Inicio de Ciclo');

if(num<=20){
for( let i =1; i<=num; i++){
    if(i%2 ===0){
        console.log(`${i} es par`);
    }else{
        console.log(`${i} es impar`);
    }
}
}else{
    alert('El numero ingresado es mayor a 20')
}
console.log('Fin del Ciclo');
alert('Gracias por su compra')
