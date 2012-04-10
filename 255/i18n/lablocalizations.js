/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_labname": "Lab - Working with Remote Data",
		"%l_mission": "<img src='labimages/finished_iphone.png' style='height:300px;float:right;margin-top:-40px;margin-bottom: 10px;'><strong>Mission: </strong>In this lab assignment, you will enhance the TiBountyHunter application by retrieving a list of fugitives from a remote web service and adding them to the local database. Once a fugitive is captured, you'll notify the remote web service, which keeps count of busted fugitives.",
		"%l_specification": "<strong>Specification: </strong>Start with the TiBountyHunter project you created for the last assignment. We need to implement the logic to get the list of fugitives from the remote URL. This Web service will return that list as an array of objects in JSON format, where each object represents a fugitive. Each object has one property, 'name', which is a string with the full name of the fugitive. Once this list is retrieved, we  store each fugitive in the local DB, using the functions created in the previous lab. This operation should be executed at the start of the app, and only one time. Each time the user clicks on the 'Capture' button, a request will be sent to the remote web service. It will pass the device's MAC address as a parameter. The web service tracks the number of fugitives busted by the hunter-owner of that device, and returns the value.",
		"%l_spec1": "Retrieve bounties from http://bountyhunterapp.appspot.com/bounties (via GET call).",
		"%l_spec2": "Post captured bounties to the same address (via POST).",
		
		"%l_labstep1": "1. Open the TiBountyHunter project you created for the last assignment, or download the starting point code and import it as a new project in Studio: <a href='http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/TiBH255.zip'>http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/TiBH255.zip</a>",
		"%l_labstepexplanation1": "",

		"%l_labstep2": "2. In the 'lib' folder, create a network module. It should contain two exported methods:<ul style='list-style:none;'><li>getFugitives(FUNCTION) &mdash; Accepts a callback function, which will be called and passed the XHR payload in the HTTP client's onload handler. </li><li>bustFugitive(STRING, FUNCTION) &mdash; Accepts the MAC address as a string and a callback function. Pass the XHR payload to the callback in the HTTP client's onload handler. Post the MAC address in field named 'udid'.</li></ul>",
		"%l_labstepexplanation2": "",

		"%l_labstep3": "3. Edit lib/db.js. At the end of the file, add a conditional block. If an app property named 'seeded' has <em>not</em> been set, require in your network library. Call the getFugitives() method. Pass to it a function that loops through the resulting data array and for each member calls the db.add() function. Within that callback, set the 'seeded' application property to any value so that this block won't be executed the next time the app is run.",
		"%l_labstepexplanation3": "",

		"%l_labstep4": "4. Update the /ui/common/DetailWindow.js file. In the Capture button's click handler, require your network library. Pass to it the device's MAC address and a callback function. That function should alert() the data returned from the network service. It should also close the window after a two-second delay on Android or immediately on iOS and Mobile Web.",
		"%l_labstepexplanation4": "",

		"%l_labstep5": "5. Build your app for the iOS simulator or Android emulator. Correct any problems that exist. ",
		"%l_labstepexplanation5": "",

		"%l_summary": "Summary",
		"%l_summarypara": "In this lab, you connected TiBountyHunter to a remote web service. On the app's first run, it seeds its database from a remote data store. As the user captures fugitives, the web service counts their actions and returns a simple message. These tasks illustrate the types of network interactions your real-world apps might implement.",

		"%l_resources": "Resources",
		"%l_resources1": "API docs: Network: <a href='http://docs.appcelerator.com/titanium/2.0/index.html#!/api/Titanium.Network'>http://docs.appcelerator.com/titanium/2.0/index.html#!/api/Titanium.Network</a>",
		"%l_resources2": "API docs: Properties <a href='http://docs.appcelerator.com/titanium/2.0/index.html#!/api/Titanium.App.Properties'>http://docs.appcelerator.com/titanium/2.0/index.html#!/api/Titanium.App.Properties</a>",
		"%l_resources3": "Guides: Remote Data: <a href='http://docs.appcelerator.com/titanium/2.0/index.html#!/guide/Working_with_Remote_Data_Sources'>http://docs.appcelerator.com/titanium/2.0/index.html#!/guide/Working_with_Remote_Data_Sources</a>",
		"%l_resources4": "Finished code: See the next lab or <a href='https://github.com/appcelerator-training/tcad-code/tree/master/Finished_code/TiBH255'>GitHub</a>",

	}
});
