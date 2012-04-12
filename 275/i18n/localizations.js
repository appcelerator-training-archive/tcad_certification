/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_filetitle": "This is the lesson title",
		"%l_lessontitle": "Appcelerator Cloud Services",
		"%l_subtitle": "Building Native Mobile Apps With Appcelerator Titanium",
		"%l_slidenote_titleslide": "Teaching time: 30 mins<br/>Lab time: 30 mins",

		"%l_agenda_title": "AGENDA",
		"%l_agenda1": "What is ACS?",
		"%l_agenda2": "ACS vs. D.I.Y.",
		"%l_agenda3": "Requirements and setup",
		"%l_agenda4": "Using ACS in your app",
		"%l_agenda5": "Lab",
		"%l_slidenote_agenda": "We'll discuss ACS and what you might use it for. We'll also compare using ACS to creating your own web service. Then, we'll move on to covering how to implement ACS, including the setup and configuration work needed as well as implementing ACS in your app. We'll finish with a lab.",

		"%l_whatis": "What is ACS?",
		"%l_whatis1": "Pre-built Web Backend",
		"%l_whatis2": "25+ APIs",
		"%l_whatis3": "Reliable &amp; Scalable",
		"%l_whatis4": "Managed for You",
		"%l_whatis5": "Cross-platform SDKs for Titanium, Native, &amp; REST",
		"%l_slidenote_whatis": "ACS is a pre-built cloud hosted backend for your apps. It provides 25 pre-built APIs, including:<ul><li>User management</li><li>Push notifications</li><li>Social integration</li><li>File/photo storage</li><li>and more</li></ul><br/>It is a hosted and managed service.<br/>SDKs for Objective C, Java, REST (= web), and Titanium",

		"%l_apis": "APIs",
		"%l_slidenote_apis": "ACS offers many pre-built APIs and object types. You can create custom obects too.",

		"%l_apis_users": "Users",
		"%l_apis_users_explanation": "Create, delete, and search for users.<br/>Plus, enable users to link to their accounts on popular social networks.",
		"%l_slidenote_users": "Many of the APIs require users to be logged on.<br/>For that, you can use the Users API.<br/>Alternately, you could use the Social API to let users log in via a Facebook or Twitter account.",

		"%l_apis_places": "Places",
		"%l_apis_places_explanation": "Create and manage places, and enable users to check into locations to help them connect with you and their peers.",
		"%l_slidenote_places": "By creating places, you can associate activities with those places. For example, users can check in, post a status message related to a place, etc.",

		"%l_apis_social": "Social Integration",
		"%l_apis_social_explanation": "Connect users to major social networks, such as Facebook, Twitter, and LinkedIn",
		"%l_slidenote_social": "User can login to your app using an external account without creating an ACS account. Logging on via a social network account will create an ACS account, if one doesn't exist. Otherwise, it will login using the user who has the matching external account info.",

		"%l_apis_photos": "Photo Collections",
		"%l_apis_photos_explanation": "Enable users to upload photos and share single photos or collections.",
		"%l_slidenote_photos": "Collections contain one or more photos and/or subcollections. These can be used as photo albums for a user.<br/><br/>Photo files are stored on Amazon S3 and automatically provided in a range of sizes. So you don't have to create thumbnails, etc.",

		"%l_apis_keyvalues": "Key Values",
		"%l_apis_keyvalues_explanation": "Store any type of data with key/value pairs.",
		"%l_slidenote_keyvalues": "For generic data storage, you can use the Key Values API. <br/>Keys can be up to 256 characters; values are storedas String or Binary up to 2 MB.",

		"%l_acsdiy": "ACS vs. DIY",
		"%l_acsdiy1": "Pre-built Web Backend",
		"%l_acsdiy2": "No IT Team Required",
		"%l_acsdiy3": "Scalable",
		"%l_acsdiy4": "Cost Scales as Use Scales",
		"%l_slidenote_acsdiy": "<ul><li>ACS is easier and less expensive than creating your own Web backend.</li><li>Appcelerator maintains the system and provides 24/7 monitoring and management.</li><li>Scaleable and cloud based so your server grows as you need.</li><li>Pricing not settled yet, but is likely to be far less than staffing your own cloud data center.</li></ul>",

		"%l_requirements": "Requirements & Setup",
		"%l_require1": "Register your App",
		"%l_require2": "Configure App to Use ACS",
		"%l_require3": "Implement the ACS APIs",
		"%l_slidenote_requirements": "This is an overview slide, details on next slides.",

		"%l_register": "Register",
		"%l_register1": "Option 1: Via tiapp.xml",
		"%l_register2": "Option 2: Manually:<ul style='margin-left:30px;'><li style='font-size:smaller;'>Visit cloud.appcelerator.com</li><li style='font-size:smaller;'>Log in</li><li style='font-size:smaller;'>Click <strong>Register a new app</strong></li></ul>",
		"%l_slidenote_register": "Registering an app creates OAuth keys, and also creates app objects in our cloud servers.<br/><br/>You can do this in two ways:<br/><br/>Option 1 is simple and works great for Titanium apps. Simply check the box when you create your app.<br/>Option 2 is what you'd use for native or REST apps. You'll have to manually copy the keys into your app, which we'll cover on the next slide.",

		"%l_configure": "Configure",
		"%l_configure1": "Option 1: In tiapp.xml<br/><pre style='width:900px;'><code contenteditable>&lt;property name='acs-api-key-production' type='string'>API_KEY_HERE&lt;/property>\n&lt;property name='acs-oauth-key-production' type='string'>OAUTH_KEY_HERE&lt;/property>\n&lt;property name='acs-oauth-secret-production' type='string'>OAUTH_SECRET_HERE&lt;/property>		</code></pre><p style='font-size:0.65em;'>Then, add <code>var Cloud = require('ti.cloud');</code> in JavaScript</p>",
		"%l_configure2": "Option 2: In code<br/><pre style='width:675px;'><code contenteditable>var Cloud = require('ti.cloud');\nCloud.apiKey = 'YOUR_API_KEY_HERE';\nCloud.consumerKey = 'YOUR_OAUTH_KEY_HERE';\nCloud.consumerSecret = 'YOUR_OAUTH_SECRET_HERE';		</code></pre>",
		"%l_slidenote_configure": "You can add your API keys to either the tiapp.xml or in your code.<br/><br/>Both production and development keys will be generated<br/><br/>Because of server-side restrictions, admin functions via ACS APIs are prohibited and most actions require the user to be authenticated. These measures provide security for ACS and lessen the risks associated with losing or publicizing your keys.",

		"%l_implement": "Implement",
		"%l_implementcode": "var loggedIn = false;\nexports.login = function(username, password, callback) {\n  Cloud.Users.login({\n    login: username,\n    password: password\n  }, function (e) {\n    if (e.success) n      currentUser = e.users[0]n      loggedIn = true;\n      callback(loggedIn);\n    } else {\n      Ti.API.info('Error:\\n' + ((e.error &amp;&amp; e.message) || JSON.stringify(e)));\n      loggedIn = false;\n      currentUser = null;\n      callback(loggedIn);\n    }\n  });\n};\n ",

		"%l_slidenote_implement": "Once you've registered and configured your app with your keys, you're ready to implement the ACS functions.<br/><br/>Key points - Point out the call to <code>Cloud.Users.login()</code> and the <code>e.success</code> test within the callback.<br/><br/>Important: the Cloud APIs are asynchronous, which means you can't rely on a <code>return</code> statement. You have to implement a callback as shown.",

		"%l_manage": "Management",
		"%l_manage_explanation": "Visit my.appcelerator.com to manage your apps.<br/><img src='images/acs_manage.png' style='height:400px'/>" ,
		"%l_slidenote_manage": "You can view stats, see the objects that have been created, data that's been uploaded, and so forth via your my.appcelerator page.<br/><br/><em>During the pre-release phase, you have to visit cloud.appcelerator.com instead of my.appcelerator.com</em>",

		"%l_analytics": "Analytics",
		"%l_analytics1": "Log onto your <strong>my.appcelerator.com</strong> page",
		"%l_analytics2": "Right-click Resources, choose <strong>Open Analytics Page</strong>",
		"%l_analytics3": "Visit <strong style='font-size:0.75em;'>http://analytics.appcelerator.net/#app=YOUR_APP_GUID</strong>",
		"%l_slidenote_analytics": "You have three options for viewing your app's statistics.<br/>Pre-launch, the my.appcelerator.com page isn't working.",

		"%l_qa": "Q&amp;A",
		"%l_slidenote_qa": "Questions?",

		"%l_lab": "Lab Objectives",
		"%l_labobjective1": "Implement ACS in the TiBountyHunter app",
		"%l_labobjective2": "Brag about our captures (via Status messages)",
		"%l_labobjective3": "Support logging in and creating accounts",
		"%l_labobjective4": "UI code pre-written for you",	
		"%l_slidenote_lab": "You will download the starting point code. The UI-specific code is written so you can concentrate on the ACS-specific code.",
		"%l_labURL": "Lab: <a href='https://wiki.appcelerator.org/display/td/275+Appcelerator+Cloud+Services'>wiki.appcelerator.org/display/td/275+Appcelerator+Cloud+Services</a>",

		"%l_solution": "Solution Walkthrough",
		"%l_slidenote_solution": "<b>Code Walk through &mdash; TiBH275</b><br><ul><li>tiapp.xml &mdash; show API keys</li><li>lib/acs.js &mdash; require(ti.cloud)</li><li>lib/acs.js &mdash; explain each of the functions</li><li>ui/common/DetailWindow.js &mdash; show how the ACS functions are called in the brag button event listener (don't have to cover all of them, just point out the overall pattern)</li></ul>",


	}
});
