/*jslint browser:true */
'use strict';
 
var weatherConditions = new XMLHttpRequest();
var weatherForecast = new XMLHttpRequest();
var cObj;
var fObj;
var zipC; 

function loadWeather() {
  zipC = document.getElementById('zip').value;
  var conditionsLoc = "http://api.wunderground.com/api/7356ea37ecca21ae/conditions/q/"+zipC+".json"; 
  var forecastLoc = "http://api.wunderground.com/api/7356ea37ecca21ae/forecast/q/"+zipC+".json";
  
  
  // GET THE CONDITIONS
  
weatherConditions.open('GET', conditionsLoc, true);
weatherConditions.responseType = 'text';
weatherConditions.send(null);
  
// GET THE FORECAST 
weatherForecast.open('GET', forecastLoc, true);
weatherForecast.responseType = 'text'; 
weatherForecast.send();  
  

  
}//end loadWeather

function fullWeather() {
var  weLoc = "https://www.wunderground.com/weather/"+zipC;  
  window.location = weLoc;
  }
 
// end fullWeather

// GET THE CONDITIONS

 
//key 7356ea37ecca21ae
weatherConditions.onload = function() {
    
    if (weatherConditions.status === 200){
        cObj = JSON.parse(weatherConditions.responseText); 
        //console.log(cObj);
document.getElementById('temperature').innerHTML = Math.round(cObj.current_observation.temp_f);
document.getElementById('weather').innerHTML = cObj.current_observation.weather;
document.getElementById('location').innerHTML = cObj.current_observation.display_location.full;
    } //end if
}; //end function

 
// GET THE FORECAST
//"http://api.wunderground.com/api/7356ea37ecca21ae/forecast/q/"+06437+".json";

 

weatherForecast.onload = function() {
if (weatherForecast.status === 200){
	fObj = JSON.parse(weatherForecast.responseText);
	//console.log(fObj);
   
	document.getElementById('desc').innerHTML = fObj.forecast.txt_forecast.forecastday["0"].fcttext; 
     
  for (var i=1; i<4; i++){
  document.getElementById('r'+i+'c1').innerHTML = fObj.forecast.simpleforecast.forecastday[i].date.weekday; 
  document.getElementById('r'+i+'c3').innerHTML = fObj.forecast.simpleforecast.forecastday[i].high.fahrenheit+"°";
  document.getElementById('r'+i+'c4').innerHTML = fObj.forecast.simpleforecast.forecastday[i].low.fahrenheit+"°";
    
  var imgPath = fObj.forecast.simpleforecast.forecastday[i].icon_url;
  var imgAlt = fObj.forecast.simpleforecast.forecastday[i].icon;
  var imgTitle = fObj.forecast.txt_forecast.forecastday[i].fcttext; 
    
  document.getElementById('r'+i+'c2').src = imgPath;
  document.getElementById('r'+i+'c2').alt = imgAlt;
  document.getElementById('r'+i+'c2').title = imgTitle; 
  }
    
} //end if
}; //end function

