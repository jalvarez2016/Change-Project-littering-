/*global $*/

var count = 1;

function pickup() {
        var johnLeft = $("#civilian").offset().left;
        var enemyLeft = $("#bottle").offset().left;
        var johnRight = johnLeft + $("#civilian").width();
        var enemyRight = enemyLeft + $("#bottle").width();
        var johnUp = $("#civilian").offset().top;
        var enemyDown = $("#bottle").offset().top;
        var johnDown = johnUp + $("#civilian").height();
        var enemyUp = enemyDown + $("#bottle").height();
        if(johnDown > enemyDown && johnUp < enemyUp && johnRight > enemyLeft && johnLeft < enemyRight) {
            alert("Everyone should be doing this.");
            $('#count').text(count++);
            $("#bottle").hide();
        }
}

function pickupbottleb() {
        var johnLeft = $("#civilian").offset().left;
        var enemyLeft = $("#bottleb").offset().left;
        var johnRight = johnLeft + $("#civilian").width();
        var enemyRight = enemyLeft + $("#bottleb").width();
        var johnUp = $("#civilian").offset().top;
        var enemyDown = $("#bottleb").offset().top;
        var johnDown = johnUp + $("#civilian").height();
        var enemyUp = enemyDown + $("#bottleb").height();
        if(johnDown > enemyDown && johnUp < enemyUp && johnRight > enemyLeft && johnLeft < enemyRight) {
            alert("One human can only do so much.");
            $('#count').text(count++);
            $("#bottleb").hide();
        }
}

function pickupplastic() {
        var johnLeft = $("#civilian").offset().left;
        var enemyLeft = $("#plastic").offset().left;
        var johnRight = johnLeft + $("#civilian").width();
        var enemyRight = enemyLeft + $("#plastic").width();
        var johnUp = $("#civilian").offset().top;
        var enemyDown = $("#plastic").offset().top;
        var johnDown = johnUp + $("#civilian").height();
        var enemyUp = enemyDown + $("#plastic").height();
        if(johnDown > enemyDown && johnUp < enemyUp && johnRight > enemyLeft && johnLeft < enemyRight) {
            alert("$11.5 billion are wasted every year cleaning up your trash");
            $('#count').text(count++);
            $("#plastic").hide();
        }
}

function pickuppaper() {
        var johnLeft = $("#civilian").offset().left;
        var enemyLeft = $("#paper").offset().left;
        var johnRight = johnLeft + $("#civilian").width();
        var enemyRight = enemyLeft + $("#paper").width();
        var johnUp = $("#civilian").offset().top;
        var enemyDown = $("#paper").offset().top;
        var johnDown = johnUp + $("#civilian").height();
        var enemyUp = enemyDown + $("#paper").height();
        if(johnDown > enemyDown && johnUp < enemyUp && johnRight > enemyLeft && johnLeft < enemyRight) {
            alert("It doesn't have to be this way");
            $('#count').text(count++);
            $("#paper").hide();
        }
}

function pickupball() {
        var johnLeft = $("#civilian").offset().left;
        var enemyLeft = $("#ball").offset().left;
        var johnRight = johnLeft + $("#civilian").width();
        var enemyRight = enemyLeft + $("#ball").width();
        var johnUp = $("#civilian").offset().top;
        var enemyDown = $("#ball").offset().top;
        var johnDown = johnUp + $("#civilian").height();
        var enemyUp = enemyDown + $("#ball").height();
        if(johnDown > enemyDown && johnUp < enemyUp && johnRight > enemyLeft && johnLeft < enemyRight) {
            alert("Earth doesn't have a reset button. Don't mess it up.");
            $('#count').text(count++);
            $("#ball").hide();
        }
}

function pickuppaperb() {
        var johnLeft = $("#civilian").offset().left;
        var enemyLeft = $("#paperb").offset().left;
        var johnRight = johnLeft + $("#civilian").width();
        var enemyRight = enemyLeft + $("#paperb").width();
        var johnUp = $("#civilian").offset().top;
        var enemyDown = $("#paperb").offset().top;
        var johnDown = johnUp + $("#civilian").height();
        var enemyUp = enemyDown + $("#paperb").height();
        if(johnDown > enemyDown && johnUp < enemyUp && johnRight > enemyLeft && johnLeft < enemyRight) {
            alert("50% of all trash are cigarette butts, so don't smoke! ");
            $('#count').text(count++);
            $("#paperb").hide();
        }
}

function right(){
    $("#civilian").css("left", $("#civilian").offset().left + 10);
    
}

function left(){
    $("#civilian").css("left", $("#civilian").offset().left - 20);
   
}

function up() {
    $("#civilian").css("top", $("#civilian").offset().top - 1);
}

function down() {
    $("#civilian").css("top", $("#civilian").offset().top + 10);
}



$(document).ready(function() {
    
    
   $('#clean').click(function() {
        pickup();
        pickupbottleb();
        pickuppaper();
        pickupplastic();
        pickupball();
        pickuppaperb();
   });
   
  $("body").keydown(function(event) {
   
    if (event.which === 37) {
        $("#blue").css("left", $("#blue").offset().left - 10);
   
    } else if (event.which === 39) {
       $("#blue").css("left", $("#blue").offset().left + 10);
       
    } else if (event.which === 38) {
        $("#blue").css("top", $("#blue").offset().top - 10);
        
    } else if (event.which === 40) {
         $("#blue").css("top", $("#blue").offset().top + 10);
         
     }else {
        return;
    }
    
        
        

});
  
   
   $("body").keydown(function(event) {
   
    if (event.which === 65) {
        $("#civilian").css("left", $("#civilian").offset().left - 10);
   
    } else if (event.which === 68) {
       $("#civilian").css("left", $("#civilian").offset().left + 10);
       
    } else if (event.which === 87) {
        $("#civilian").css("top", $("#civilian").offset().top - 10);
        
    } else if (event.which === 83) {
         $("#civilian").css("top", $("#civilian").offset().top + 10);
         
    } else if (event.which === 32) {
        $("#civilian").css("top", $("#civilian").offset().top - 50);
        
     }else {
        return;
    }
   });




    
});