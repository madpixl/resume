//Rotation script copyright 2017 Thomas Ford Ghoreyeb. All rights reserved.

// Reset should empty select Players
$("#reset").click( function() {  
 $("#periods").empty();
 $("#team-color").parent().removeClass();
 $("#team-color").text("");
 $("#generate").show();
 $(".source").empty();
 $(".target").empty();
 $(".alert").text(""); 
 $("#reset").hide();
 
});
//Generate rotation - herewego

$("#generate").click( function() {
//but not if you have less than 6 players, then you don't need a rotation.
 if($("#sortable2 li").length < 6 ) {
   $(".alert").text("You don't need a rotation. There are 5 players or less."); 
 }
 //okay now here we go...
 if($("#sortable2 li").length > 5 ) {
  $(".alert").text("");
  $("#periods").empty(); 
  $("#reset").show();
  $("#rotation-title").show();
 //hide the info panel
  if ($("#overview-ctrl").text()=== "-") {
  $("#overview-ctrl").click();
  }
  
  var players = 0;
  var periodCount = 1;   
  $( "#periods" ).append('<div class="panel panel-primary"><div class="panel-header ' + $("#team-color").text() + '">Period ' + periodCount + '</div><ul class="panel-body" id="period-'+ periodCount +'"></ul></div>');
  
  for(var j=0; j<40;) {  
   $("#sortable2 li").each(function() {
     if ( periodCount < 9) { 
       if (players == 5) { 
        if (periodCount<8) {
          console.log("period="+(++periodCount)); 
          $( "#periods" ).append('<div class="panel panel-primary"><div class="panel-header '+$("#team-color").text()+ '">Period ' + periodCount + '</div><ul class="panel-body" id="period-' + periodCount + '"></ul></div>');
        }
        players = 0;  
      } 
    }
    if (j<40) {
     console.log($(this).text() + "j"+(++j));  
     $("#period-"+periodCount).append('<li><span class="num">'+ parseInt($(this).index()+1) +'</span> '   + $(this).text() + '</li>');
   }
         //5 players on the floor 
         players++;  
       });
 }
 
 $("#sortable1").empty();
 
     }// end if not empty li
   });
 //initialize some things...
 $(function() {
     //just grab all the json since its not very big.
     var jason = "json/teams.json";
     //hide the reset until somebody does something
     $("#reset").hide(); 
     $("#rotation-title").hide(); 
     /* dynamic
     var navyblue = "<li> Aslanian, J </li><li> Beckwith, H</li><li> Costanza, M</li><li> Glover, E </li><li> Gunderson, S </li><li> Harris, C. </li><li> R, Benjamin <li>Romero, C </li>"; 
     var gold ="<li>Ciocca, A.</li><li>G, Gabriel</li><li>Iaspara, M</li><li>Lemon, E</li><li>Medvecky, A</li><li>Mulligan, W</li><li>St Denis, D</li><li>Ulrich, C</li>";
     var green = "<li>H, Sam</li><li>M, Ronan</li><li>M, Joseph</li><li>O, Niall</li><li>S, Cole</li><li>S, Evan</li><li>S, Jack</li><li>Z, Harrison</li>";
     var orange ="<li>B, Harper</li><li>B, Aidan</li><li>C, Mark</li><li>H, Zachary</li><li>L, Collin</li><li>P, Joey</li><li>S, Ryan</li><li>T, Cooper </li>";
     var silver = "<li>D, Sal</li><li>D, Christopher</li><li>H, Sammy</li><li>J, Brady</li><li>M, Logan</li><li>M, Michael</li><li>R, Henry</li><li>S, Aj </li>";
     var black = " <li>A, Tristan</li><li>C, Evan</li><li>C, Jake</li><li>C, Mason</li><li>H, Bobby</li><li>M, Jake</li><li>P, Jack</li><li>T, Ryan </li>";
     var blue = "<li> Celotto, N</li><li> Hinding, T</li><li> Ghoreyeb, E</li><li> Derda, I</li><li> Putnam, K</li><li> Malatesta, M</li><li> DeAngelo, E</li><li> Updyke, T</li>";
     var purple ="<li>A, Adam </li><li>C, Joey </li><li>G, Shane </li><li>I, Anthony </li><li>S, Rayaan </li><li>T, Jackson </li><li>T, Niko </li><li>W, Dylan </li>";
     */

     
     $.getJSON( jason, function( data ) {
      console.log(jason);
      $.each( data, function( teams, key) {
       var btns = [];

       $(key).each(function(keys,val) {   
	  //btns.push('<button class="butt-team">'+val.name+'</button>');
    window[val.name] = val.roster;
  });
 // $("#team-buttons").append(btns);
});


    }); 


     ///dragon drops       
     $( "ul.droptrue" ).sortable({
      connectWith: "ul",
      connectWith: "ul"
    });
     
     $( "ul.dropfalse" ).sortable({
      connectWith: "ul",
      dropOnEmpty: false
    });
     
     $( "#sortable1, #sortable2").disableSelection();

      //source list for teams
      $(".butt-team").on('click', function() {
        $("#team-color").parent().removeClass();
        var teamName = $(this).text(); 
        $(".butt-team").removeClass("yellow");
        $("#team-color").text($(this).text());
        $("#team-color").parent().addClass(teamName);
        $("#sortable1").empty();
        $("#sortable2").empty();
        $(this).addClass("yellow");
        
        var items = [];
        $(eval('window["'+teamName+'"]')).each(function(i){ 


          items.push( "<li>"+this +"</li>" );

        });

        $("#sortable1").append(items);
        
        
        $(".source li").click(function() {
          $('#sortable2').append($(this)); 
        });
        
        $(".target li").click(function() {
          $('#sortable1').append($(this)); 
        });
      });
      
      //minimize team list
      $(".show-hide").click(function() {
         var target;

        if(this.id === "overview-ctrl") {
           target = ".overview-body";
          }  else {
           target = ".lineups";
          }
          if($(this).text() === "-") { 
            $(target).hide();
            $(this).text("+");
            $(target).closest("section").css("paddingBottom","0");
          } else {
            $(target).show();
            $(this).text("-");
             $(target).closest("section").css("paddingBottom","18px");
          } 
  
    });
      
    });  
