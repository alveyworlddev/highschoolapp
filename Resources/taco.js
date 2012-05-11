Ti.include("tacodatabase.js");
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

var b4 = Titanium.UI.createButton({
	title:'Edit Locations',
	width:200,
	height:40,
	top:350,
	left: 80
});
b4.addEventListener('click', function()
{
	initialize_database("test");
	var subwin = Ti.UI.createWindow({
		backgroundImage:'images/paper.png'
	});

		subwin.orientationModes = [ 
		Titanium.UI.PORTRAIT, 
		Titanium.UI.UPSIDE_PORTRAIT, 
		Titanium.UI.LANDSCAPE_LEFT, 
		Titanium.UI.LANDSCAPE_RIGHT, 
		Titanium.UI.FACE_UP, 
		Titanium.UI.FACE_DOWN
	];

	
	var close = Titanium.UI.createButton({
		title:'Close',
		width:200,
	    height:40,
	    top:350,
	    left: 80
	});
	var tableview = Titanium.UI.createTableView({
	top:110,
	left:20,
	right:20,
	height:230,
	width:220,
	borderWidth:3,
	borderRadius:10,
	borderColor:'#214792'
});
		subwin.add(tableview);
		subwin.add(close);
	close.addEventListener('click', function()
	{
		if (Titanium.Platform.osname == 'android')
		{
			// reset the orientation modes on the parent to ensure the orientation gets reset on the previous window
			win.orientationModes = win.orientationModes;
		}
		subwin.close();
	});
	subwin.open();
    
//add table view to the window
Titanium.UI.currentWindow.add(tableview);
    
var win = Ti.UI.currentWindow;
var scrollview = Ti.UI.createScrollView({
    contentWidth:'auto',
	contentHeight:'auto',
	top:0,
	showVerticalScrollIndicator:true,
	showHorizontalScrollIndicator:false
});
var v1 = Ti.UI.createView({
	top:10,
	left:10,
	width:300,
	height:30
});

});
var win = Titanium.UI.currentWindow;

var l = Titanium.UI.createLabel({
	text:'Shake to find lunch location',
	top: 10,
	color:'#999',
	height: 835,
	width:'auto',
	left: 80
});

//scrollview.add(v1);
//tacoWin.add(scrollview);

tacoWin.add(l);
tacoWin.add(back_button);
tacoWin.add(b4);