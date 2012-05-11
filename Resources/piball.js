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

var piball = Titanium.UI.createImageView({
	image:'/images/pibowl.png',
	width:200,
	height:200,
});

var scaled1 = false;
piball.addEventListener('click', function()
{
	var t = Titanium.UI.create2DMatrix();
		t = t.scale(4.8);
		center1 = piball.center;
		piball.animate({transform:t,center:win.center,zIndex:10,duration:500});
});

Ti.Gesture.addEventListener('shake',function(e)
{
	piball.animate({right:75,duration:100},function() 
	{
		piball.animate({left:75,duration:100},function() 
		{
			piball.animate({right:65,duration:100},function() 
			{
				piball.animate({left:75,duration:100},function()
				{
					piball.animate({right:75,duration:100},function() 
					{
						piball.animate({left:85,duration:100})
					});
				})
			});
		});	
	});
});
piballWin.add(piball);
piballWin.add(back_button);