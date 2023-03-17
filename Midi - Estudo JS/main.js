//Método Alura todavia com Váriaveis disconéxas para treinar a lógica.
/*
function som(idsom){
    document.querySelector(idsom).play();
}
const teclas = document.querySelectorAll('.tecla');
let i = 0;

while ( i < teclas.length){
    
    const tecla = teclas[i];
    const pos = tecla.classList[1];
    const aid = `#som_${pos}`;
    tecla.onclick = function(){
       som(aid);
    }

    i++;
}
*/

/* ---------- Aplicação do aprendizado ------------- 

const listTeclas = document.querySelectorAll('.tecla');
const listaSom = document.querySelectorAll('audio'); 

for(let i = 0; i < listTeclas.length; i++){
    listTeclas[i].onclick = function(){
        listaSom[i].play();
    }
}
*/

/* --------------- Aplicação com function -----------*/ 

function som(idaudio){
    const listaSom = document.querySelectorAll('audio'); 
    
    if(idaudio === undefined || idaudio >= listTeclas.length || idaudio < 0){
        console.log("O Instrumento apresentado não existe.");
    }else{
        listaSom[idaudio].play();
    }
}

const listTeclas = document.querySelectorAll('.tecla');

for(let i = 0; i < listTeclas.length; i++){
    
    const teclas = listTeclas[i];    

    teclas.onclick = function(){
        som(i);
    }

    teclas.onkeydown = function(e){
        if(e.code === 'Space' || e.code === 'Enter'){
        teclas.classList.add('ativa');
    }        
    }
    teclas.onkeyup = function(){
        teclas.classList.remove('ativa');
    }
}