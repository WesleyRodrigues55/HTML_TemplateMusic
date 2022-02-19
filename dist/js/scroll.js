 // scroll slow
 $(document).ready(function() {

     $("#go-topo").click(function() {
         var posicao = $("#topo").offset().top;
         $("html, body").animate({
             scrollTop: posicao
         }, 1000);
     });

     $("#go-quemsomos").click(function() {
         var posicao = $("#quem-somos").offset().top;
         $("html, body").animate({
             scrollTop: posicao
         }, 1000);
     });

     $("#go-midia").click(function() {
         var posicao = $("#midia").offset().top;
         $("html, body").animate({
             scrollTop: posicao
         }, 1000);
     });

     $("#go-comentarios").click(function() {
         var posicao = $("#comentarios").offset().top;
         $("html, body").animate({
             scrollTop: posicao
         }, 1000);
     });
 });