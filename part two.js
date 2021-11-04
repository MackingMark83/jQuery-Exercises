

$('form').on('submit', function(e){
    e.preventDefault();   
    
      let title = $('input').eq(0).val();
      let rating = $('input').eq(1).val();
      let newButton = $('<button>delete</button>').css('color','green' ).addClass('delete');
      
      $('#first').append(title,);
      $('#second').append(rating);
      $('#third').append(newButton); 
      
  });
  
  
  $('#third').on('click','.delete',function(){
   
     $('#first').remove();
    $('#second').remove();
    $('#third').remove();
    });