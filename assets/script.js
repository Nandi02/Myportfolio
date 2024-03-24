window.addEventListener("load",function(){
	var loadwrapper = document.querySelector('.wrapper');
	if(loadwrapper){
		loadwrapper.style.transition = "opacity 0.5s ease"
		loadwrapper.style.opacity ="0"
		setTimeout(function(){
			loadwrapper.style.display = 'none';
		},600);
	
	}
});