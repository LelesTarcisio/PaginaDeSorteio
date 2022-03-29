function sorteio() { //todo sorteio acontecerá dentro dessa função//

    const min = document.getElementById("minimo").value;
    const max = document.getElementById("maximo").value;

    const sort = Math.floor((Math.random() * max) + min);

    document.getElementById("resultado").innerHTML = sort; //quero colocar dentro do html o valor sort//


}