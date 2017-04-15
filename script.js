/*global $*/

var count = 1;

function pickup() {
        var johnLeft = $("#civilian").offset().left;
        var enemyLeft = $("#bottle").offset().left;
        var johnRight = johnLeft + $("#civilian").width();
        var enemyRight = enemyLeft + $("#bottle").width();
        var johnUp = $("#civilian").offset().bottom;
        var enemyDown = $("#bottle").offset().bottom;
        var johnDown = johnUp + $("#civilian").height();
        var enemyUp = enemyDown + $("#bottle").height();
        if(johnDown > enemyDown && johnUp < enemyUp && johnRight > enemyLeft && johnLeft < enemyRight) {
            alert("If only the companies accepted back their own bottles.");
            $('#count').text(count++);
            $("#bottle").hide();
        }
}

function pickupbottleb() {
        var johnLeft = $("#civilian").offset().left;
        var enemyLeft = $("#bottleb").offset().left;
        var johnRight = johnLeft + $("#civilian").width();
        var enemyRight = enemyLeft + $("#bottleb").width();
        var johnUp = $("#civilian").offset().bottom;
        var enemyDown = $("#bottleb").offset().bottom;
        var johnDown = johnUp + $("#civilian").height();
        var enemyUp = enemyDown + $("#bottleb").height();
        if(johnDown > enemyDown && johnUp < enemyUp && johnRight > enemyLeft && johnLeft < enemyRight) {
            alert("If only the companies accepted back their own bottles.");
            $('#count').text(count++);
            $("#bottleb").hide();
        }
}

function right(){
    $("#civilian").css("left", $("#civilian").offset().left + 10);
    
}

function left(){
    $("#civilian").css("left", $("#civilian").offset().left - 50);
   
}

function up() {
    $('#civilian').css('bottom', $('#civilian').offset().bottom + 50);
}

function down() {
    $("#civilian").css("bottom", $("#civilian").offset().bottom - 30);
}



$(document).ready(function() {
    
    
   $('#clean').click(function() {
        pickup();
        pickupbottleb();
      
   });
   
  
  
   
   $("body").keydown(function(e) {
       
      if(e.keyCode == 37) { // left
      
        left();
        
      }
      else if(e.keyCode == 39) { // right
      
        right();
        
      } else if(e.keyCode == 49) {
          
         up();
         
      }else if(e.keyCode == 40 || e.keyCode == 83){
         down();
      }
      
   });
     
    $("body").keydown(function(e) {
        
      if (event.which === 32 || event.which === 87 || event.which === 38) {
          
        up();
        
       
        
      }
      
    });
    
  
    
    
    
    
    $("body").keydown(function(event) {
        
    //moves left
    if (event.which === 65) {
        
        left();
        
     
        
    } else if (event.which === 68) {
        
       right();
       
    
       
    } 
    
    });
    
    



    
});