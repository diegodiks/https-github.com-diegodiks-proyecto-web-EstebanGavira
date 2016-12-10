//console.log("Hola Mundo");
    //alert("Hola Mundo");
    
    //Tabla
    
   $.ajax({
        url:'http://localhost:9090/agenda',
        type:'get',
        success:function(datos){
             $.each(datos, function(i,agenda){
                $("#tabla").append("<tr><td>"+agenda.id+"</td>\n\
                  <td>"+agenda.fec_inicio+"</td>\n\
                  <td>"+agenda.fec_final+"</td>\n\
                  <td>"+agenda.responsable+"</td>\n\
                  <td>"+agenda.cliente+"</td>\n\
                  <td>"+agenda.descripcion+"</td></tr>"); 
             });
         }
    });

    //$ es un selector
    $("#boton").click(function(){
      //  alert("Me has apachurrado");
      $.ajax({
         url:'http://localhost:9090/agenda/'+$('#id').val()+'/'+$('#fec_inicio').val()+'/'+$('#fec_final').val()+
               '/'+$('#responsable').val()+'/'+$('#cliente').val()+'/'+$('#descripcion').val(),
         type:'post',
         success:function(datos){
             $("#etiqueta").html(datos);
         }
      });
      //  $("#etiqueta").html("Me has hecho click");
    });
    
        $("#boton-buscartodos").click(function(){
      //  alert("Me has apachurrado");
      $.ajax({
         url:'http://localhost:9090/agenda',
         type:'get',
         success:function(datos){
             $("#etiqueta").html(datos.length);
         }
      });
      
    });
    
         $("#boton-actualizar").click(function(){
      //  alert("Me has apachurrado");
      $.ajax({
         url:'http://localhost:9090/agenda/'+$('#id').val()+'/'+$('#fec_inicio').val()+'/'+$('#fec_final').val()+
               '/'+$('#responsable').val()+'/'+$('#cliente').val()+'/'+$('#descripcion').val(),
         type:'put',
         success:function(datos){
             $("#etiqueta").html(datos);
         }
      });
      });
           $("#boton-borrar").click(function(){
      //  alert("Me has apachurrado");
      $.ajax({
         url:'http://localhost:9090/agenda/'+$('#id').val(),
         type:'delete',
         success:function(datos){
             $("#etiqueta").html(datos);
         }
      });
      });