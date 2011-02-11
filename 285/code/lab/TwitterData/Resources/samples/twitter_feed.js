var win = Titanium.UI.currentWindow;

win.orientationModes = [
	Titanium.UI.PORTRAIT
];

// set up a twitter screen name.
var twitter_name = 'appcelerator';
win.title = '@'+twitter_name;

// Include helper functions
Ti.include("../includes/functions.js");


/**
* Twitter Parser Credit: https://gist.github.com/819929, https://gist.github.com/dawsontoth
* Define our parser class. It takes in some text, and then you can call "linkifyURLs", or one of the other methods,
* and then call "getHTML" to get the fully parsed text back as HTML!
* @param text that you want parsed
*/
function Parser(text) {

    var html = text;

    var urlRegex = /((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi;
    var hashTagRegex = /#([^ ]+)/gi;

	// Recreate links
    this.linkifyURLs = function() {
        html = html.replace(urlRegex, '<a href="$1">$1</a>');
    };

    // Create links for Twitter Hash Items
    this.linkifyHashTags = function() {
        html = html.replace(hashTagRegex, '<a href="http://twitter.com/#!/search?q=%23$1">#$1</a>');
    };

    this.getHTML = function() {
        return html;
    };

}



function getTweets(screen_name){

	// create table view data object
	var data = [];

	var xhr = Ti.Network.createHTTPClient();
	xhr.timeout = 1000000;
	xhr.open("GET","http://api.twitter.com/1/statuses/user_timeline.json?screen_name="+screen_name);

	xhr.onload = function(){
		// When working with remote data it is always best to use error trapping.
		// For this example we are just catching the error in an alert,
		// however in production code you will want to process the error and possibly retry.
		try{
		
			/*
			//
			// Debug information
			//
			rtrt = 'status ' + this.status + '\n';
			rtrt += 'connected ' + this.connected + '\n';
			rtrt += 'readyState ' + this.readyState + '\n';
			rtrt += 'responseText ' + this.responseText + '\n';
			rtrt += 'responseXML ' + this.responseXML + '\n';
			rtrt += 'responseData ' + this.responseData + '\n';
			rtrt += 'connectionType ' + this.connectionType +'\n';
			rtrt += 'location ' + this.location + '\n';
			alert(rtrt);
			*/
		
			var tweets = eval('('+this.responseText+')');

			for (var c=0;c<tweets.length;c++){

				// parse the tweet and set it as the HTML for the web view
				var parser = new Parser(tweets[c].text);
				parser.linkifyURLs();
				parser.linkifyHashTags();		

				var tweet = parser.getHTML();
				var user = tweets[c].user.screen_name;
				var avatar = tweets[c].user.profile_image_url;
				var created_at = prettyDate(strtotime(tweets[c].created_at));
				var bgcolor = (c % 2) == 0 ? '#fff' : '#eee';

				var row = Ti.UI.createTableViewRow({hasChild:true,height:'auto',backgroundColor:bgcolor});

				// Create a vertical layout view to hold all the info labels and images for each tweet
				var post_view = Ti.UI.createView({
					height:'auto',
					layout:'vertical',
					left:5,
					top:5,
					bottom:5,
					right:5
				});

				var av = Ti.UI.createImageView({
						image:avatar,
						left:0,
						top:0,
						height:48,
						width:48
					});
				// Add the avatar image to the view
				post_view.add(av);

				var user_label = Ti.UI.createLabel({
					text:user,
					left:54,
					width:120,
					top:-48,
					bottom:2,
					height:16,
					textAlign:'left',
					color:'#444444',
					font:{fontFamily:'Trebuchet MS',fontSize:14,fontWeight:'bold'}
				});
				// Add the username to the view
				post_view.add(user_label);

				var date_label = Ti.UI.createLabel({
					text:created_at,
					right:0,
					top:-18,
					bottom:2,
					height:14,
					textAlign:'right',
					width:110,
					color:'#444444',
					font:{fontFamily:'Trebuchet MS',fontSize:12}
				});
				// Add the date to the view
				post_view.add(date_label);

				/*
				var tweet_text = Ti.UI.createWebView({
					html:tweet,
					left:54,
					top:0,
					bottom:2,
					height:'auto',
					width:236
				});
				// Add the tweet to the view
				post_view.add(tweet_text);				
				*/
				
				var tweet_text = Ti.UI.createLabel({
					/*html:tweet,*/
					text: tweet, 
					left:54,
					top:0,
					bottom:2,
					height:'auto',
					width:236,
					textAlign:'left',
					font:{fontSize:14}
				});
				// Add the tweet to the view
				post_view.add(tweet_text);

				// Add Listeners
				row.addEventListener('click', function(e){
					var alertDialog = Titanium.UI.createAlertDialog({
						title: 'Tweet',
						message: e.row.children[0].children[3].html,
						buttonNames: ['close']
					});
					alertDialog.show();
				});


				
				// Add the vertical layout view to the row
				row.add(post_view);
				row.className = 'item'+c;
				data[c] = row;
			}
			// Create the tableView and add it to the window.
			var tableview = Titanium.UI.createTableView({data:data,minRowHeight:58});
			Ti.UI.currentWindow.add(tableview);
		}
		catch(E){
			alert(E);
		}
	};
	// Get the data
	xhr.send();
}




// Get the tweets for 'twitter_name'
getTweets(twitter_name);