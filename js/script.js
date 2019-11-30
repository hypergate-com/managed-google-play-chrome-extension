var findIframe = function(){
	var iframes = document.getElementsByTagName('iframe');
    for(i = 0; i < iframes.length; i++){
    	if(iframes[i].src.startsWith('https://play.google.com')){
    		var userInput = prompt("Please insert the package name from the license file (i.e com.hypergate.professional)", "");
    		if (userInput == null || userInput == "") {
    			alert('Invalid input');
    			return;
    		}
	    	iframes[i].src = 'https://play.google.com/managed/apps/details?id=' + userInput + '&' + iframes[i].src.split('?')[1];
	    	return;
    	}
    }
    alert('No google play store found');
};
findIframe();