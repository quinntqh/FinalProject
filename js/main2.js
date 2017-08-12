const navbar= document.querySelectorAll('.mobilenav')

navbar.forEach(function (node){
	const menu = document.querySelector('.burgerbutton')

	console.log(menu)
	menu.addEventListener('click', function(event){
		console.log('buttonclicked')

	const sidebar= document.querySelector('.mobilenav')
	
	if (sidebar.classList.contains('clicked')){
		sidebar.classList.remove('clicked')
	}	
		else{
		sidebar.classList.add('clicked')
	}
	})
})


