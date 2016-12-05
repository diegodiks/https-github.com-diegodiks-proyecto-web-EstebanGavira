


//console.log("Hola Mundo");

//alert("Hola Mundo");

$("#boton").click(function(){
    //alert("Me haz apucharrado");
    $.ajax({
        url:'http://localhost:9090/hola',
        type: 'get',
        success:function(datos){
            $("#etiqueta").html(datos);
        }
    
   // $("#etiqueta").html("Me haz hecho clic");
});

});