// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var winTwitterFeed = Titanium.UI.createWindow({  
    url:'/samples/twitter_feed.js',
    titleid:'Twitter Data',
    backgroundColor:'#000'
});
var tabTwitterFeed = Titanium.UI.createTab({  
    icon:'images/tabs/23-bird.png',
    title:'Twitter Feed',
    window:winTwitterFeed
});


//
//  add tabs
//
tabGroup.addTab(tabTwitterFeed);  


// open tab group
tabGroup.open();
