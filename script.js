/*global $*/
var choises = 0;
var count = 1;


function conversation() {
        var johnLeft = $("#civilian").offset().left;
        var enemyLeft = $("#Johnas").offset().left;
        var johnRight = johnLeft + $("#civilian").width();
        var enemyRight = enemyLeft + $("#Johnas").width();
        var johnUp = $("#civilian").offset().top;
        var enemyDown = $("#Johnas").offset().top;
        var johnDown = johnUp + $("#civilian").height();
        var enemyUp = enemyDown + $("#Johnas").height();
        if(johnDown > enemyDown && johnUp < enemyUp && johnRight > enemyLeft && johnLeft < enemyRight) {
             $("#dialog").append( "<p>" + " Johnas : What do you want?" + "</p>" );
             $("#choise1").append( "<p>" + " John : Could you please stop littering." + "</p>" );
             $("#choise2").append( "<p>" + "John : Who do you think you are!!?!!");
        }
}



function talk() {
        var johnLeft = $("#civilian").offset().left;
        var enemyLeft = $("#dialog").offset().left;
        var johnRight = johnLeft + $("#civilian").width();
        var enemyRight = enemyLeft + $("#dialog").width();
        var johnUp = $("#civilian").offset().top;
        var enemyDown = $("#dialog").offset().top;
        var johnDown = johnUp + $("#civilian").height();
        var enemyUp = enemyDown + $("#dialog").height();
        if(johnDown > enemyDown && johnUp < enemyUp && johnRight > enemyLeft && johnLeft < enemyRight) {
             $("#dialog").append( "<p>" + " Narrator : Get off me please." + "</p>" );
        }
}

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
            $("#dialog").append( "<p>" + " Narrator : The ocean is dumped with 9 billion tons every year." + "</p>" );
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
            $("#dialog").append( "<p>" + " Narrator : The recycling of aluminum cans saves 95% of the energy required to make the same amount of aluminum from its virgin source." + "</p>" );
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
            $("#dialog").append( "<p>" + " Narrator : $11.5 billion are wasted every year cleaning up your trash" + "</p>" );
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
            $("#dialog").append( "<p>" + " Narrator : There are over 176,000,000 pounds of discarded cigarette butts in the United States each year. Over 4.5 trillion cigarettes are littered worldwide each year." + "</p>" );
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
            $("#dialog").append("<p>" + " Narrator : Each ton (2000 pounds) of recycled paper can save 17 trees, 380 gallons of oil, three cubic yards of landfill space, 4000 kilowatts of energy, and 7000 gallons of water. This represents a 64% energy savings, a 58% water savings, and 60 pounds less of air pollution! So recycle." + "</p>");
            $('#count').text(count++);
            $("#ball").hide();
        }
}

function pickupcig() {
        var johnLeft = $("#civilian").offset().left;
        var enemyLeft = $("#cig").offset().left;
        var johnRight = johnLeft + $("#civilian").width();
        var enemyRight = enemyLeft + $("#cig").width();
        var johnUp = $("#civilian").offset().top;
        var enemyDown = $("#cig").offset().top;
        var johnDown = johnUp + $("#civilian").height();
        var enemyUp = enemyDown + $("#cig").height();
        if(johnDown > enemyDown && johnUp < enemyUp && johnRight > enemyLeft && johnLeft < enemyRight) {
            $("#dialog").append( "<p>" + " Narrator : 50% of all trash are cigarette butts, so don't smoke! " + "</p>");
            $('#count').text(count++);
            $("#cig").hide();
        }
}

function right(){
    $("#civilian").css("left", $("#civilian").offset().left + 10);

    
}

function left(){
    $("#civilian").css("left", $("#civilian").offset().left - 10);

   
}

function up() {
    $("#civilian").css("top", $("#civilian").offset().top - 10);

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
        pickupcig();
      if(count === 7){
        $("#dialog").append( "<p>" + "Congradualtions you win!!!" + "</p>");
      }
   });
   
  $("body").keydown(function(event) {
   
    if (event.which === 37) {
        left();
   
    } else if (event.which === 39) {
       right();
       
    } else if (event.which === 38) {
        up();

    } else if (event.which === 40) {
         down();

    } else if(event.which === 72){
        conversation();
        talk();
    }
     

});
   
   $("#choise1").click(function(){

        choises ++ ;
        if(choises === 1){
         $("#dialog").append( "<p>" + " John : Could you please stop littering. " + "</p>" );
         $("#dialog").append( "<p>" + " Johnas : Why should I?");
         $("#choise1").html("Littering harms the envirnment");
        } else if(choises === 2){
         $("#dialog").append( "<p>" + " John : Littering harms the envirnment. " + "</p>" );
         $("#dialog").append( "<p>" + " Johnas : Why should I care?");
         $("#choise1").html("Recycling could save us billions of dollars.");
        } else if(choises === 3){
         $("#dialog").append( "<p>" + " John : Recycling could save us billions of dollars, which would have otherwise been used to simply clean up cigarette butts. " + "</p>" );
         $("#dialog").append( "<p>" + " Johnas : Fine i'll be more considerate in the future.");
         $("#dialog").append("<p>" + "John : Thank you." + "</p>");
         $("#choise1").html("...");   
        }
        return;
       
   });
   
   $("#choise2").click(function(){

       choises ++ ;
       if(choises === 1){
        $("#dialog").append( "<p>" + " John : Who do you think you are!!?!! " + "</p>" );
        $("#dialog").append( "<p>" + " Johnas : What?" + "</p>");
        $("#choise2").html(" Stop littering!!! ");
       } else if(choises === 2){
        $("#dialog").append( "<p>" + " John : Stop littering!!! " + "</p>" );
        $("#dialog").append( "<p>" + " Johnas : What?" + "</p>");
        $("#choise2").html(" You heard me. ");
       } else if(choises === 3){
        $("#dialog").append("<p>" + " You heard me. " + "</p>");
        $("#dialog").append( "<p>" + " Johnas : O'k i'll clean up after myself. " + "</p>");
        $(".litter").hide();
        $("#choise2").html("...");
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