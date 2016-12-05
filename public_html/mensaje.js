


//console.log("Hola Mundo");

//alert("Hola Mundo");
//Probrar Guardado
$("#boton").click(function(){
    //alert("Me haz apucharrado");
    $.ajax({
        url:'http://localhost:9090/mensaje/hola/tengo hambre',
        type: 'post',
        success:function(datos){
            $("#etiqueta").html(datos);
        }
    
   // $("#etiqueta").html("Me haz hecho clic");
});
});
$("#boton-buscartodos").click(function(){
    //alert("Me haz apucharrado");
    $.ajax({
        url:'http://localhost:9090/mensaje',
        type: 'get',
        success:function(datos){
            $("#etiqueta").html(datos[1].titulo+" cuerpo "+ datos[1].cuerpo);
          //  $.each(datos, function(i,mensaje)){
            //    $("#etiqueta").append("<br>"+mensaje.titulo);
            }
            
            
            
        
 
});
});
$("#boton-actualizar").click(function(){
    //alert("Me haz apucharrado");
    $.ajax({
        url:'http://localhost:9090/mensaje/3/nuevo/ya cambiado',
        type: 'put',
        success:function(datos){
            $("#etiqueta").html(datos);
        }
 
});
});


$("#boton-borrar").click(function(){
    //alert("Me haz apucharrado");
    $.ajax({
        url:'http://localhost:9090/mensaje/4',
        type: 'delete',
        success:function(datos){
            $("#etiqueta").html(datos);
        }
 
});
});
