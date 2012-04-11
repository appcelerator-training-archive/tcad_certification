/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_labname": "Lab - Using Location Services",
		"%l_mission": "<img src='labimages/finished_iphone.png' style='height:300px;float:right;margin-top:-40px;margin-bottom: 10px;'><strong>Mission: </strong>In this lab assignment, you will add geolocation support to TiBountyHunter. You will capture the latitude and longitude values marking the location where a fugitive is captured and store that data in the database. You'll offer the user an option to plot that location on a map.",
		"%l_specification": "<strong>Specification: </strong>Start with the TiBountyHunter project you created for the last assignment. You will add the features needed to support location services. To successfully complete this lab, you must develop an application that meets the following description:",
		"%l_spec1": "Modify the database to store the latitude and longitude of where the fugitive was captured. For simplicity, rather than altering the existing database, modify the CREATE TABLE statement to define fields for those values. Then, uninstall the app from the simulator/emulator to force the database to be created again.",
		"%l_spec2": "When the Capture button is tapped, store the geo location in the database.",
		"%l_spec3": "Add a Show on Map button that will display a map when clicked. The map should display the region surrounding the location where the fugitive was captured. An annotation should mark the specific location.",
		"%l_spec4": "Tip: To install onto an Android device, use the Google maps key from the Kitchen Sink app so that the map will work.",
		
		"%l_labstep1": "1. Open the TiBountyHunter project you created for the last assignment, or download the starting point code and import it as a new project in Studio: <a href='http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/TiBH270.zip'>http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/TiBH270.zip</a>",
		"%l_labstepexplanation1": "",

		"%l_labstep2": "2. Edit the lib/db.js file. <ul style='list-style:none;'><li>Update the 'bootstrap' code so that your database will include two new REAL fields named capturedLat and capturedLong</li><li>Update list() to return the value of those fields</li><li>Update the bust() function to accept two arguments for the latitude and longitude; store those values in the database</li></ul>",
		"%l_labstepexplanation2": "Because you're changing the database and we're not writing any alter-table statements, you will need to uninstall the app from the simulator/emulator. If you're starting a new project rather than editing your earlier work, this won't be a problem for you.",

		"%l_labstep3": "3. Edit the ui/common/DetailWindow.js file. In the Capture button's event listener, make these changes:<ul style='list-style:none;'><li>Add a geolocation purpose message to support iOS.</li><li>Use an if/else block and determine if location services are enabled. If so, set the accuracy to <code>ACCURACY_HIGH</code> on Android and <code>ACCURACY_BEST</code> on iOS.</li><li>Grab the one-time location value and if there's no error, call <code>db.bust()</code> and pass the lat/long values.</li><li>If there is an error, alert() the error to the user.</li><li>You'll need one more else block for the outer-if block: if location services are disabled, alert() a message to the user with the details.</ul>",
		"%l_labstepexplanation3": "You will need to keep the existing net.bustFugitive() code; it should be within the block that successfully grabs the current location information.",

		"%l_labstep4": "4. Below the Capture button, add a 'Show on Map' button. When tapped, instantiate a map window (you'll write the module for that next), which you should open as a modal window. You'll be putting this module's file in the ui/common folder. Pass the bounty object to the map window's constructor.",
		"%l_labstepexplanation4": "",

		"%l_labstep5": "5. In the ui/common folder, add a new module file for your map window. In that module, create a Window that contains a Map view. The map should have one annotation marking the fugitive's latitude and longitude. Use the Standard map type, show a region bounded by one-tenth of a degree centered on the fugitive's location. For iOS, you'll need a navigation bar button to close the window.",
		"%l_labstepexplanation5": "",

		"%l_labstep6": "6. Make sure to update the internationalization strings.xml file.",
		"%l_labstepexplanation6": "",

		"%l_labstep5": "7. Build your app for the iOS simulator or Android emulator. Capture a fugitive; on iOS you should permit location services. Test the Show on Map functionality with a captured fugitive. Correct any problems that exist. ",
		"%l_labstepexplanation7": "Don't forget to uninstall the old version of the app before running the new version.",

		"%l_summary": "Summary",
		"%l_summarypara": "In this lab, you added geolocation support and a plotted a map showing where fugitives were captured. You handled platform differences and geolocation errors.",

		"%l_resources": "Resources",
		"%l_resources1": "API docs: Geolocation: <a href='http://docs.appcelerator.com/titanium/2.0/index.html#!/api/Titanium.Geolocation'>http://docs.appcelerator.com/titanium/2.0/index.html#!/api/Titanium.Geolocation</a>",
		"%l_resources2": "Guides: Tracking Postion and Heading: <a href='http://docs.appcelerator.com/titanium/2.0/index.html#!/guide/Tracking_Position_and_Heading'>http://docs.appcelerator.com/titanium/2.0/index.html#!/guide/Tracking_Position_and_Heading</a>",
		"%l_resources3": "Finished code: See the next lab or <a href='https://github.com/appcelerator-training/tcad-code/tree/master/Finished_code/TiBH270'>GitHub</a>",

	}
});
