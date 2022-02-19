function none() {
    var posicaoAtual = document.documentElement.scrollTop;


    if (posicaoAtual >= 250) {
        document.getElementById("go-topo").style.display = "block";
    } else {
        document.getElementById("go-topo").style.display = "none";
    }
}

//Quando ocorre o scroll
window.onscroll = function(oEvent) {
    none();
}
$(document).ready(function() {
    none();
});