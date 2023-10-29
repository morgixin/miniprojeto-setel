let counter = getCounter(); // obtem o valor do counter salvo em localstorage

if (counter === null) // se não existir a variável no localstorage
    counter = 0; // zera contador

counter++; // incrementa contador
setCounter(counter); // e atualiza o contador no localstorage

let numSpan = document.getElementsByClassName('number'); // obtem o espaco para o numero no html
Array.from(numSpan)[0].innerHTML = counter; // preenche o span com o valor atual do contador
Array.from(numSpan)[1].innerHTML = counter; // preenche o span com o valor atual do contador

function getCounter() {
    return localStorage.getItem('counter'); // busca o valor do contador no localstorage
}

function setCounter(num) {
    localStorage.setItem('counter', num); 
    // define o valor passado por parametro do contador no localstorage
}