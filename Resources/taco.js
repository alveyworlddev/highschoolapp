var tacoWin = Titanium.UI.createWindow({  
    backgroundColor:'#fff',
    backgroundImage:'images/paper.png',
    });
    
var back_button = Titanium.UI.createButton({
	top: 10,
	right: '75%',
	width: 25,
	height: 20,
	backgroundImage:'/images/back.png'
});

back_button.addEventListener('click', function()
	{
		tacoWin.close()
	});


tacoWin.add(back_button);