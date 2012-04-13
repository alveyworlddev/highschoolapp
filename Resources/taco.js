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

var win = Titanium.UI.currentWindow;

var b1 = Titanium.UI.createButton({
	title:'Edit Places',
	height:40,
	width:200,
	top : 350,
	left : 80
});

tacoWin.add(b1)
tacoWin.add(back_button);
