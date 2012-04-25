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

var actInd = Titanium.UI.createActivityIndicator({
	bottom:10, 
	height:50,
	width:10,
	topMost: true,
	style:Titanium.UI.iPhone.ActivityIndicatorStyle.PLAIN
});

function loadingScreen(){
	actInd.style = Titanium.UI.iPhone.ActivityIndicatorStyle.PLAIN;
	actInd.font = {fontFamily:'Helvetica Neue', fontSize:15,fontWeight:'bold'};
	actInd.width = 210;
	actInd.show();

	setTimeout(function()
	{
		actInd.hide();
		//
		// Create Windows
		//
		//  add tabs
		//
		win1.open();



	
	},10);
}


function piball_zoom()
{Titanium.UI.create2DMatrix().scale(0.4);
var circle = Titanium.UI.createView({
	backgroundImage:'../images/cloud.png',
	height:178,
	width:261,
	top:10,
	transform:piball_zoom
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



piballWin.add(piball_zoom)
piballWin.add(circle);
piballWin.add(back_button);