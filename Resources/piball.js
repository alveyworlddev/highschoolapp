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
	height:160,
	width:160,
	borderRadius:80,
	backgroundColor:'#660066',
	top:'35%'
});



Ti.Gesture.addEventListener('shake',function(e)
{
	circle.animate({right:75,duration:100},function() 
	{
		circle.animate({left:75,duration:100},function() 
		{
			circle.animate({right:65,duration:100},function() 
			{
				circle.animate({left:75,duration:100},function()
				{
					circle.animate({right:75,duration:100},function() 
					{
						circle.animate({left:85,duration:100})
					});
				})
			});
		});	
	});
});
piballWin.add(circle);
piballWin.add(back_button);