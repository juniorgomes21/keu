function escolha(num) {

    let resposta = window.prompt("selecione a resposta");

    let pagina = String(num)

    if (resposta == "1") {
        if(num == 45) {
            return window.location.href = "fimDeJogo.html"
        }     
        window.location.href = "fase" + pagina + ".html" // "fase2.html"
    } 
    else if(resposta == "2") {
        alert("lamentamos vc perdeu o Jogo! =(")
        window.location.href = "../../../index.html";
    }
    else if(resposta == "3") {
        alert("lamentamos vc perdeu o Jogo! =(")
        window.location.href = "../../../index.html";
    }
    else {
        alert("insira o número corretamente (1, 2, 3)")
        escolha();
    }
}