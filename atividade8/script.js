let contasorte = 0;
let contaazar = 0;

function sorte() {
    let min = 1;
    let max = 100;
    let dif = max - min + 1; 
    let aleatorio = Math.random();
    let num = min + Math.trunc(dif * aleatorio);


    let mostrar = document.getElementById('resultado');

    if (num > 50) {
        contasorte++;
        mostrar.innerHTML = `<h1>SORTE: ${contasorte}</h1><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShTto89wS9GCMjbyFoPnU_LsPfuMfFZHazAEg1fKsW4Q&s=10">`;
    } else {
        contaazar++;
        mostrar.innerHTML = `<h1>AZAR: ${contaazar}</h1><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSQT_TBiVVwz8-QxoHhqENyv4-tPANPekJqKL9vcH-WA&s=10">`;
    }
}
