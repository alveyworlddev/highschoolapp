// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});
var win = Titanium.UI.createWindow({
    fullscreen: true,
    visible: true
});

var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 1',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win1.add(label1);

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);



//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  

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
//
// Create Windows
//
// add tabs
//
tabGroup.open();

},10000);
}

// open tab group

loadingScreen();
win.open();
