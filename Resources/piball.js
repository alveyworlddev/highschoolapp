var piballWin = Titanium.UI.createWindow({  
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
		piballWin.close()
	});

var circle = Titanium.UI.createView({
	height:100,
	width:100,
	borderRadius:50,
	backgroundColor:'#336699',
	top:10
});



Ti.Gesture.addEventListener('shake',function(e)
{
	circle.animate({top:200,right:30,duration:500})
});

piballWin.add(circle);
piballWin.add(back_button);