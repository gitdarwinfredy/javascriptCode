// progama para contar  caracteres texto

// function countText(cadena = ""){
//     if(!cadena){
//         console.warn('no ha ingresado el texto')
        
//     }else{
//         console.log(`la cantidad de caracteres 
//         que hay en tu Texto es ${cadena.length}`)
//     }

// }

//funciona para contar texto
usuario =()=>{
var text=""
var num1=""
var num2=""
let suma=""

names = prompt('digital tu nombre')
num1 = prompt('digital numero 1')
num2 = prompt('digita numero 2')

if(names){
    text = ` hola gracias por venir ${names}`
}else{
    text = 'no haz ingresado datos'
}

if(num1 && num2){
    suma = parseInt(num1) + parseInt(num2)
}else{
    suma = 'no ingresaste datos para sumar'
}


document.getElementById('saludo').innerHTML = text;
document.getElementById('suma').innerHTML = suma

}




countText =() => {
let conteoTexto="" 
let conteo = prompt("Ingresa el Texto")
if (!conteo){
    alert('no ha ingresado Texto')
    } else{
    conteoTexto = `la cadena es ${conteo.length}`
    }
    document.getElementById('contar').innerHTML = conteoTexto
}


// boton para contar texto
const boton = document.getElementById('boton');

boton.addEventListener('click', function (e){

const texto1= document.getElementById('text1').value
const forms = document.getElementById('forms');
console.log(texto1)
const fila = e.target
console.log(fila)

    let conteoTexto2="" 

if (!texto1){
    alert('no ha ingresado Texto')
    } else{
    conteoTexto2 = `la cadena es ${texto1.length}`
    
    }
    document.getElementById('text2').innerHTML = conteoTexto2
    
  
})

//?console.warn('no ha ingresado cadena')
//:console.info(`la cadena es ${cadena.length}`)

//countText();
//countText('hola mundo');

//funcion para recortar un texto
recortText = (cadena= '', longitud = undefined)=>
    (!cadena)
    ?console.warn('no ingreso texto')
    :(longitud === undefined)
    ?console.warn('no ingresaste una longitud a recortar')
    :console.info(cadena.slice(0,longitud))

recortText(4);
recortText("hola mundo", 4);  


//funcion para agregar un espacio a un texto
separadorTexto =(text = "", separador = undefined, recort = undefined)=>
(!text)
    ? console.warn('Favor ingresar un texto')
    : (separador === undefined)
        ?console.warn('no ingresaste el tipo de separador')
        :console.info(text.split(separador));


separadorTexto();
separadorTexto("AB1C1A1578BC", ";")   
separadorTexto("lunes,Martes,Miercoles,Jueves,Viernes", ",") 

// crear una funcion que se repita eol numero de veces un texto

repeatText = (text ="", veces = undefined)=>{
   if (!text) return console.warn("Por favor ingresa un texto");
   if ( veces === undefined) return console.warn("Por favor ingresa el numero de veces");
   if ( veces === 0) return console.error("El numero de veces no puede ser 0");
   if (Math.sign(veces)=== -1) return console.warn("Por favor el numero no puede ser negativo");

   for (let i=1;i<= veces; i++){
    console.info(`${text}, ${i}`)
   };

}

repeatText("hola",2);

// crea una funcion para agregar un valor ; despues del segundo numero


