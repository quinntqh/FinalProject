


function toggle() {
	var ele = document.getElementByClass("clickhere");
	var text = document.getElementByClass("popupbox");
	if(ele.style.display == "block") {
    		ele.style.display = "none";
		text.innerHTML = "show";
  	}
	else {
		ele.style.display = "block";
		text.innerHTML = "hide";
	}
} 
