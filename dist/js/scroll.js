 // scroll slow
 $(document).ready(function() {

     $("#go-topo").click(function() {
         var posicao = $("#topo").offset().top;
         $("html, body").animate({
             scrollTop: posicao
         }, 1000);
     });

     $("#go-cursos").click(function() {
         var posicao = $("#cursos").offset().top;
         $("html, body").animate({
             scrollTop: posicao
         }, 1000);
     });

     $("#go-biblioteca").click(function() {
         var posicao = $("#biblioteca").offset().top;
         $("html, body").animate({
             scrollTop: posicao
         }, 1000);
     });

     $("#go-contato").click(function() {
         var posicao = $("#contato").offset().top;
         $("html, body").animate({
             scrollTop: posicao
         }, 1000);
     });
 });