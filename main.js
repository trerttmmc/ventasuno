
const elemento = document.querySelector('.contenido-texto');

document.querySelector('#btn-copy').addEventListener('click',()=>{

    document.querySelector('.mensaje-copy').classList.add('show');
    copyToClipBoard(elemento);

    setTimeout(()=>{
        document.querySelector('.mensaje-copy').classList.remove('show');
    },1300);
})

function copyToClipBoard(elemento){
    const inputOculto = document.createElement('input');

    inputOculto.setAttribute('value', elemento.innerText);

    document.body.appendChild(inputOculto);

    inputOculto.select();

    document.execCommand('copy');

    document.body.removeChild(inputOculto);


}
document.querySelector('#btn-cop').addEventListener('click',()=>{

    document.querySelector('.mensaje-copy').classList.add('show');
    copyToClipBoard(elemento);

    setTimeout(()=>{
        document.querySelector('.mensaje-copy').classList.remove('show');
    },1300);
})

function copyToClipBoard(elemento){
    const inputOculto = document.createElement('input');

    inputOculto.setAttribute('value', elemento.innerText);

    document.body.appendChild(inputOculto);

    inputOculto.select();

    document.execCommand('copy');

    document.body.removeChild(inputOculto);


}
