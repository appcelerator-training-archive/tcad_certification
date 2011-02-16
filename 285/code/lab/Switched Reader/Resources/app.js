var url="http://www.switched.com/rss.xml";
var WindowWidth = Ti.Platform.displayCaps.platformWidth; 
var WindowHeight = Ti.Platform.displayCaps.platformHeight;
var xhr = Titanium.Network.createHTTPClient();
xhr.open('GET',url);
var data = [];
var WindowWidth = Ti.Platform.displayCaps.platformWidth;
Titanium.UI.setBackgroundColor('#000');


var tabGroup = Titanium.UI.createTabGroup();

var rssWindow = Titanium.UI.createWindow({  
    title:'',
    backgroundColor:'#fff'
});
var rssTab = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Switched RSS Reader',
    window:rssWindow
});

tabGroup.addTab(rssTab);  

tabGroup.open();

xhr.onload = function() {
	//Ti.API.info(this.responseText);
	var xml = this.responseXML;
	var channel = xml.documentElement.getElementsByTagName("channel");
	var title = channel.item(0).getElementsByTagName("title").item(0).text;
	rssWindow.title = title;
	var items = xml.documentElement.getElementsByTagName("item");
	for (var i=0;i<items.length;i++) {
		var this_post_title = items.item(i).getElementsByTagName("title").item(0).text;
		var post_link = items.item(i).getElementsByTagName("link").item(0).text;
		var row = Ti.UI.createTableViewRow({height:'auto',width:WindowWidth,top:0,hasChild: true});
		var post_title = Ti.UI.createLabel({
			text: this_post_title,
			textAlign:'left',
			left:0,
			height:50,
			width:'auto',
			top:5,
			bottom: 5,
			color: 'black'
		});	
		row.add(post_title);
		row.link = post_link;
		data.push(row);			
	}
	var tv = Titanium.UI.createTableView({
		data:data,
		top:0,
		width:WindowWidth,
		height:WindowHeight
	});
	rssWindow.add(tv);
	tv.addEventListener('click',function(e) {
		var webwin = Titanium.UI.createWindow({
			url: 'showweb.js',
			backgroundColor: '#fff',
			myurl: e.rowData.link
		});
		rssTab.open(webwin);
	});
};

xhr.send();