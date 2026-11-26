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
        mostrar.innerHTML = `<h1>SORTE: ${contasorte}</h1><img src="https://imgs.search.brave.com/hakYL8xv1-u5piyLDtbpgvFcZ1DUMM9wp-xtxVvN6l4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zcC1h/by5zaG9ydHBpeGVs/LmFpL2NsaWVudC90/b19hdXRvLHFfZ2xv/c3N5LHJldF9pbWcs/d180MDUsaF8yMDIv/aHR0cHM6Ly9zbG90/cy1wZy5jb20uYnIv/d3AtY29udGVudC91/cGxvYWRzL2NhcnRp/bmhhLWJyaWxoYS5q/cGc">`;
    } else {
        contaazar++;
        mostrar.innerHTML = `<h1>AZAR: ${contaazar}</h1><img src="https://sitesdeaposta.com/wp-content/uploads/2023/04/auto-bet-no-jogo-do-aviator-apostas.png">`;
    }
}
