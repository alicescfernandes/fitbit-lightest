import document from "document";
import { display } from "display";

(function(){
  let isOn = true;
  let defaultDisplayValue = display.brightnessOverride
  let defaultAutoOff = display.autoOff
  let root = document.getElementById("background")
  let background = document.getElementById("root")
  
  function changeDisplay(){
    if(isOn){
      background.class = "on"
      background.animate("enable"); // Specify the name of the event to trigger
      display.brightnessOverride = "max"
    }else{
      background.class = "off"
      background.animate("disable"); // Specify the name of the event to trigger
      display.brightnessOverride = defaultDisplayValue;      
    }
  }
  
  root.onmouseup =  function(){
    isOn = !isOn;
    changeDisplay();
  }
  
  changeDisplay();

  
})()