

var xhr = new XMLHttpRequest();
xhr.open('GET', "json/data.json", true);
xhr.responseType = 'text';
xhr.send();


xhr.onload = function() {
    if(xhr.status === 200) {
         jep = JSON.parse(xhr.responseText);
        console.log(jep);
   		
 		$('.block.title p').each(function(index) {
 			
			this.innerText = jep.categories[index].category;
 		      var paren = $(this).parent().parent();
 		     paren.children('.block.points').each(function(i){
 		     	  var points = (i+1) * 200;
 		     	this.children[0].innerText = points;
 		     	// this.children[0].innerText = jep.categories[index].questions[i].question;
 		     	this.id = 'categories['+index+'].questions['+i+']';
 		     });
 		     });
 		

   }//end if
}
 


  $( function() {
   
 
     $('.block.points').on( "click", function() {
     	 
     $("#modal-one").show();
    var quest = eval('jep.' + this.id +'.question') + "  ("+ this.children[0].innerText +"pts.)";
    var responses =  eval('jep.' + this.id +'.choices');
    //question
     $('.modal-header .question').text(quest);
     
     //choices
     
    var resp ='<ul class="choices">';

    for (var i=0; i<responses.length; i++){
    resp +=  '<li onclick=answer("'+this.id+'choices['+i+']")>'+ responses[i] +'</li>';
     }
    resp += '</ul>';
    
    $('.modal-body').html(resp); 
    responses = "";

    });
  });
   function answer(guess) {
alert(guess);

   }
  // send selection to see if its the answer.

  // if its the answer say correct add points

 // if its not the answer say incorrect

 // send according state and value to the square from which we came.

 


 

 
 /*	var j = 0;
     $.getJSON( jason, function( data ) {
     	//Object
      var i=0;
      $.each( data, function( category, value) {
       
       //category 
		console.log("category="+category + "value="+value);
       
	       $(value).each(function(keys,val) {  

	 		 	//get categories
	 		 	//console.log("i="+i + "keys="+keys + "val="+val.category); 
				if (val.category !== undefined) {
					$(".block.title p").eq(i).text(val.category); 
					//console.log("category="+val.category + i);
					i++; 
					//console.log("count = "+i)
				 	} else {
				 		var q = []; 
				 		var qq
				 	if (val.questions !== undefined) {
				 		var ii=0;
					 	$(val.questions).each(function(num,quest){
					 		//console.log(quest.question);
					 		var gridId ="gridId-"+i+ "-"+ii;
					 		var uestId ="uestId-"+i+ "-"+ii;
					 		console.log(uestId + "=" + gridId);
					        var points = (ii+1) * 200;
					        $(".block.points a").eq(j).text(points);  
					      //  console.log("gridId-"+i+ "-"+ii);
					 		$(".block.points a").eq(j).attr('id',gridId); 
					 		if (quest.question !== undefined) {  
					       	qq = "q"+uestId;
					       	console.log(qq);
					       	window[qq] = quest.question; 

					       	console.log("xxxx="+ window["questId-2-3"]);

					       }
					       //all questions in grid
					       j++; 
					       //questions in column
					 	   ii++;
				 		});
			 		}
			 	}
		  
 		});
 	});

 		 
});

    */
 
function stop() {
    var audio = document.getElementById('audio-1');     
        audio.pause();
        audio.currentTime = 0;
    }
window.onclick = stop;
    