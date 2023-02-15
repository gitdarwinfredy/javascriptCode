//agrega  dos puntos


let formPuntos = document.getElementById('formPuntos');
let resultado ='';
formPuntos.addEventListener('submit',(e)=>{
    let puntos = document.getElementById('puntos').value;
    if(!puntos){
        alert('no ingresastes datos');

    }else{

        
        resultado = puntos.replace(':', "");
    }
    document.getElementById('text3').innerHTML = resultado
    e.preventDefault();
    formPuntos.reset();
})
