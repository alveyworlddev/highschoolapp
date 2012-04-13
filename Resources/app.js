Ti.include('taco.js');
Ti.include('piball.js');
Ti.include('esplainer.js');

// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    backgroundColor:'#fff',
    backgroundImage:'/images/paper.png',
});

var taco_button = Titanium.UI.createButton({
	top: 230,
	width:170,
	height: 117,
	right:'8%',
	backgroundImage:'/images/taco.png'	
})
taco_button.addEventListener('click', function()
	{
		tacoWin.open()
	}
	
	
);
var esplainer_button = Titanium.UI.createButton({
	top: 113,
	width: 232,
	height: 114,
	left: '13%',
	
	backgroundImage:'/images/esplainer.png'	
	
});

esplainer_button.addEventListener('click', function()
	{
		esplainerWin.open()
	});

var piball_button = Titanium.UI.createButton({
	top: 320,
	width: 220,
	height: 217,

	
	backgroundImage:'/images/piball.png'	
	
});

piball_button.addEventListener('click', function()
	{
		piballWin.open()
	});


var win = Titanium.UI.createWindow({
    fullscreen: true,
    visible: true
    
});

var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    window:win1
});

var label1 = Titanium.UI.createLabel({
	color:'#999',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win1.add(label1);
win1.add(taco_button);
win1.add(esplainer_button);
win1.add(piball_button);

//
// create controls tab and root window
//




//
//  add tabs
//
tabGroup.addTab(tab1);  

// Loading Screen Start

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
actInd.color = 'white';
actInd.message = 'Loading...';
actInd.width = 210;
actInd.show();
var imageView = Titanium.UI.createImageView({
image:'/iphone/Default.png',
width:'100%',
height:'100%'
});
win.add(imageView);
win.add(actInd);

setTimeout(function()
{
actInd.hide();
},10000);
}

// open tab group

loadingScreen();
win.open();
win1.open();
