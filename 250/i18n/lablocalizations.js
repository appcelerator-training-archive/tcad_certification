/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_labname": "Lab - Working with Local Data",
		"%l_mission": "<img src='labimages/finished_iphone.png' style='height:300px;float:right;margin-top:-40px;margin-bottom: 10px;'><strong>Mission: </strong>In this lab assignment, you will back our fugitive list with actual data from a local SQL database (SQLite).  You will display the data-driven fugitive list, and update with every database change.",
		"%l_specification": "<strong>Specification: </strong>Start with the TiBountyHunter project you created for the last assignment. You will now add event handlers to update a local database. To successfully complete this lab, you must develop an application that meets the following description:",
		"%l_spec1": "Populate a table view with results from a SQL database",
		"%l_spec2": "Keep the fugitive lists up to date with every database change",
		"%l_spec3": "Implement the “Add” screen for the fugitive list, allowing the bounty hunter to add a new fugitive to the database",
		"%l_spec4": "Allow the user to delete fugitives",
		"%l_spec5": "Implement the “Capture” button, which will update a fugitive’s status in the database to “captured” and display him or her in the proper tab",

		
		"%l_labstep1": "1. Open the TiBountyHunter project you created for the last assignment, or download the starting point code and import it as a new project in Studio: <a href='http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/TiBH250.zip'>http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/TiBH250.zip</a>",
		"%l_labstepexplanation1": "",

		"%l_labstep2": "2. Create a new folder named 'lib' and in it a database module file. In that file, add the statements needed to create a database named 'TiBountyHunter' containing a table named 'fugitives'. That table should have these fields:<ul style='list-style:none;'><li>id &mdash; INTEGER PRIMARY KEY</li><li>name &mdash; TEXT</li><li>captured &mdash; INTEGER</li></ul>",
		"%l_labstepexplanation2": "Make sure to open, then close the database connection when your code finishes.",

		"%l_labstep3": "3. Write the following functions, each of which should be added to the exports list (so they can be called by the other modules):<ul style='list-style:none;'><li>list(BOOLEAN) &mdash; Returns a set of table rows representing either captured or at-large fugitives. Each row should have title, id, hasChild=true, color='#fff', name (duplicate of title), and captured=boolean properties</li><li>add(STRING) &mdash; Adds the named fugitive to the database. Fire an App-level event noting that the database has been updated.</li><li>del(PRIMARY_KEY) &mdash; Deletes the fugitive with the given ID. Fire the 'database updated' App-level event.</li><li>bust(PRIMARY_KEY) &mdash; Marks the fugitive with the given ID as captured.  Fire the 'database updated' App-level event.</li></ul>",
		"%l_labstepexplanation3": "",

		"%l_labstep4": "4. Update the ui/common/BountyTable.js file. Replace the statically-defined table with a call to your db.list() function. You will need to require in the module. Add an App-level event listener that will call populateData() when the 'database updated' event is received.",
		"%l_labstepexplanation4": "",

		"%l_labstep5": "5. Update the /ui/common/DetailWindow.js file. Add a click event listener to the Capture button. It should call your db.bust() function then close the detail window. Add a click event listener for the Delete button that calls your db.del() function and closes the window. Don't forget to require() in the database library file within the event listeners.",
		"%l_labstepexplanation5": "",

		"%l_labstep6": "6. Update the /ui/common/AddWindow.js file. Add a text field with hintText that directs the user to enter a new fugitive's name. Add a Save button that when clicked calls your db.add() function. Close the Add window after saving the new fugitive. Don't forget to require() in the database library within the event listener.",
		"%l_labstepexplanation6": "",

		"%l_labstep7": "7. Build your app for the iOS simulator or Android emulator. Correct any problems that exist. ",
		"%l_labstepexplanation7": "",

		"%l_summary": "Summary",
		"%l_summarypara": "In this lab, you improved upon TiBountyHunter by backing it with a SQLite database. Fugitives are now stored in a database for easy retrieval and updating. You enabled add, capture, and delete functionality with just a few lines of code.",

		"%l_resources": "Resources",
		"%l_resources1": "Guide: Working with a SQLite Database: <a href='http://docs.appcelerator.com/titanium/2.0/index.html#!/guide/Working_with_a_SQLite_Database'>http://docs.appcelerator.com/titanium/2.0/index.html#!/guide/Working_with_a_SQLite_Database</a>",
		"%l_resources2": "API docs: Databases <a href='http://docs.appcelerator.com/titanium/2.0/index.html#!/api/Titanium.Database'>http://docs.appcelerator.com/titanium/2.0/index.html#!/api/Titanium.Database</a>",
		"%l_resources3": "KitchenSink database example: <a href='https://github.com/appcelerator/KitchenSink/blob/master/Resources/examples/database.js'>https://github.com/appcelerator/KitchenSink/blob/master/Resources/examples/database.js</a>",
		"%l_resources4": "Finished code: See the next lab or <a href='https://github.com/appcelerator-training/tcad-code/tree/master/Finished_code/TiBH250'>GitHub</a>",

	}
});
