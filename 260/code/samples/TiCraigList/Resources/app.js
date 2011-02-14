// main window creation
var win = Titanium.UI.createWindow({  
    backgroundColor:'#fff'
});

// searchBar to input search query
var searchBar = Titanium.UI.createSearchBar({ 
	showCancel: false,
	top:0,
	height:44
});

// tableview display the results
var tv = Titanium.UI.createTableView({
	top:44, 
	visible:false
});

// hidden WebView needed to parse HTML pages
var web = Ti.UI.createWebView({
	// this returns all the items for sale in sf bay
	url:'http://sfbay.craigslist.org/search/sss?hasPic=1', 
	visible:false
});

//adding all the UI component to the main window
win.add(searchBar);
win.add(tv);
win.add(web);

// this function will be run inside the hidden WebView, so it's possible to use all the DOM API to parse HTML
// jQuery and other similar library could have been used to parse the DOM
// it will return the parsed page in a JSON dictionary
function craig_parser() {
	
	String.prototype.trim = function () {
    	return this.replace(/^\s*/, "").replace(/\s*$/, "");
	};
	
	var rows = document.getElementsByClassName('row');
	
	var ads = [];
	var ad, ad_date, ad_text, ad_location, ad_thumb_url, ad_price, iP;
	
	for (var i=0, j=rows.length; i < j; i++) {
		ad_date = rows[i].childNodes[2].nodeValue.trim();
		ad_text = rows[i].childNodes[3].firstChild.nodeValue;
        ad_price = rows[i].childNodes[4].nodeValue.trim();
        if (rows[i].childNodes[5].firstChild.nodeValue) {
        	ad_location = rows[i].childNodes[5].firstChild.nodeValue.trim();
        }
        if (rows[i].childNodes[1].firstChild.firstChild) {
        	ad_thumb_url = rows[i].childNodes[1].firstChild.firstChild.getAttribute('src');
		} else {
			if (rows[i].childNodes[1].attributes[1]) {
				iP = rows[i].childNodes[1].attributes[1].nodeValue.split(':');
				ad_thumb_url='http://'+iP[0]+'.craigslist.org/thumb/'+iP[1];
			}
		}
		ad = {'date': ad_date, 'title': ad_text, 'price': ad_price, 'cat_and_city': ad_location, 'image': ad_thumb_url};
		ads.push(ad);
	}
	return JSON.stringify(ads);
};

// this variables are used by the showIndicator and hideIndicator function
var actInd;
var indWin;

// this function create a centered squared window with a spinning indicator to be used while
// retrieving data from the craiglist server
function showIndicator()
{
	// window container
	indWin = Titanium.UI.createWindow({
		height:150,
		width:150
	});

	// black view
	var indView = Titanium.UI.createView({
		height:150,
		width:150,
		backgroundColor:'#000',
		borderRadius:10,
		opacity:0.8
	});
	indWin.add(indView);

	// loading indicator
	actInd = Titanium.UI.createActivityIndicator({
		style:Titanium.UI.iPhone.ActivityIndicatorStyle.BIG,
		height:30,
		width:30
	});
	indWin.add(actInd);

	// message
	var message = Titanium.UI.createLabel({
		text:'Loading',
		color:'#fff',
		width:'auto',
		height:'auto',
		font:{fontSize:20,fontWeight:'bold'},
		bottom:20
	});
	indWin.add(message);
	indWin.open();
	actInd.show();

};

// this function will hide the spinning indicator when needed
function hideIndicator()
{
	actInd.hide();
	indWin.close({opacity:0,duration:500});
};


// this callback will be called once the WebView has loaded the craiglist page in memory
// then it will call the parser function using evalJS to parse the page inside the WebView thread
web.addEventListener('load', function(e) {
		
		Ti.API.info(web.url);
		// after converting the function to string, it's necessary to actually call it
		var results = web.evalJS(craig_parser.toString() + 'craig_parser();');
						
		var data = JSON.parse(results);
		var ads_num = data.length;
		var ads = [];
		
		// here we fill the tableview with the parsed JSON results coming from the WebView
		for (var c = 0 ;c < ads_num; c++)
		{
			var thmb_url = data[c].image;
		    var row = Ti.UI.createTableViewRow({height:60});
			var title = Ti.UI.createLabel({
				left:70,
				right:50,
				textAlign:'left',
				top:5,
				height:'auto',
				borderWidth:0,
				text:data[c].title,
				color:'#576996',
				font:{fontSize:13,fontWeight:'bold', fontFamily:'Arial'}
			});
			var price = Ti.UI.createLabel({
				right:5,
				textAlign:'right',
				height:50,
				text:data[c].price,
				font:{fontSize:11}
			});
			var date = Ti.UI.createLabel({
				left:70,
				textAlign:'right',
				top:40,
				text: data[c].date,
				color:'#999',
				font:{fontSize:10,fontWeight:'normal', fontFamily:'Arial'}
			});
			var image = Ti.UI.createImageView({
				image : thmb_url,
				height:60,
				width:60,
				left:0
			});
			row.add(image);
			row.add(title);
			row.add(price);
			row.add(date);
			ads[c] = row;
		}
		tv.setData(ads);
		tv.show();
		hideIndicator();
		
});


// this view is used to put a opaque layer on the current results while the user type a new query in the searchbar
var opaqueView = Titanium.UI.createView({
		backgroundColor:'#000',
		opacity:0.7
});

// this removes the opaque view once the user click on the results
opaqueView.addEventListener('click', function(e) {
	tv.remove(indView);
	searchBar.blur();
});

// here we issue a new query to the craiglist server getting the input from the searchBar and creating the proper URL 
// to be passed to the WebView
searchBar.addEventListener('return', function(e)
{
	tv.remove(opaqueView);
	tv.hide();
	searchBar.blur();
   	showIndicator();
   	query = e.value;
   	web.url = 'http://sfbay.craigslist.org/search/sss?query=' + query + '&hasPic=1';
});

searchBar.addEventListener('focus', function(e) {
	tv.add(opaqueView);	
});

win.open();
showIndicator();