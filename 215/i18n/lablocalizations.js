/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_labname": "Lab - Cross-Platform Mobile Development",
		"%l_mission": "<img src='labimages/finished_iphone.png' style='height:300px;float:right;margin-top:-40px;margin-bottom: 10px;'><strong>Mission: </strong>In this lab assignment, you will begin to create a cross-platform mobile application for Android and iPhone devices called TiBountyHunter.  TiBountyHunter is derived from an example application developed in the iOS development primer Head First iPhone Development.  The TiBountyHunter application enables bounty hunters to track a list of fugitives on their mobile device.  In this lab, you will be asked to create and begin implementing this example application.",
		
		"%l_step1": "1. In Studio, create a new Titanium Mobile project. Name the app <strong>TiBountyHunter</strong> and give it an app ID of <strong>com.appcelerator.tibh</strong>. Uncheck the 'Automatically cloud-enable this application' option.",
		"%l_stepexplanation1": "",

		"%l_step2": "2. Once the project has been created, close the tiapp.xml file. Delete the contents of app.js.",
		"%l_stepexplanation2": "You will write your own code that implements a CommonJS module pattern.",

		"%l_step3": "3. Write a self-calling function with an empty function body.",
		"%l_stepexplanation3": "You will enclose your code in a self-calling function so that you don't pollute the global scope.",

		"%l_step4": "4. Add an Ti.API.info logging message that outputs a message that includes the platform's name.",
		"%l_stepexplanation4": "",

		"%l_step5": "5. In the Resources directory, create a <strong>ui</strong>folder, which contains two folders: <strong>common</strong> and <strong>handheld</strong>.",
		"%l_stepexplanation5": "You will organize the files of your project in these folders. The 'handheld' folder will hold files for phone-size devices. While we won't create them in this course, presumably you'd have a 'tablet' folder within the ui folder and it would contain the tablet form-factor files.",

		"%l_step6": "6. In app.js, declare a variable named ApplicationTabGroup which will store the results of requiring the 'ui/common/ApplicationTabGroup' module. This module will create and return the tab group for your app. Create a new instance of ApplicationTabGroup and open it. Save and close the file.",
		"%l_stepexplanation6": "This is all you'll add to the app.js file. It simply bootstraps your application.",

		"%l_step7": "7. Create the ApplicationTabGroup.js file and in it define a function to define a tab group, add two windows, and return the tab group. Tab 1 should be titled 'Fugitives' and tab 2 should be 'Captured' (make sure to use the internationalization file for these strings). Assign your function to the modules.export variable so that it can be used as a constructor.",
		"%l_stepexplanation7": "",

		"%l_step8": "8. You will need a new module, named Window, which will be form-factor specific. (So put it in the handheld directory.) In this file, write a module to create Ti.UI.Window objects for your app. Its constructor should accept a Boolean value, which will be used to specify whether the window is showing at-large vs. captured bounties. Set an appropriate internationalized title based on that Boolean value.",
		"%l_stepexplanation8": "",

		"%l_step9": "9. Bonus: If you have time, download graphic assets for this app from <a href='http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/Lab215source.zip'>http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/Lab215source.zip</a> and set the app icon and splash screen, as well as icons for the tab buttons and the window background. For iOS, set the title bar color to #6d0a0c (a dark red).",
		"%l_stepexplanation9": "This step is optional.",

		"%l_step10": "10. Build your app for the iOS simulator or Android emulator. Correct any problems that exist. Build the app for Mobile Web (either in the browser or Android emulator).",
		"%l_stepexplanation10": "Consider the differences you see between the platforms. Be prepared to discuss these with your instructor and the class.",


		"%l_summary": "Summary",
		"%l_summarypara": "In this lab, you laid the foundation for the example app you'll build throughout the rest of this course. You implemented a basic CommonJS module structure. And, you compared the final result of this app across platforms.",

		"%l_resources": "Resources",
		"%l_resources1": "Localizing Strings: <a href='http://wiki.appcelerator.org/display/guides/Internationalizing+your+Application'>wiki.appcelerator.org/display/guides/Internationalizing+your+Application</a>",
		"%l_resources2": "Titanium Window Reference: <a href='http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Window-object'>developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Window-object</a>",
		"%l_resources3": "CommonJS modules in Titanium: <a href='http://docs.appcelerator.com/titanium/2.0/index.html#!/guide/CommonJS_Modules_in_Titanium'>docs.appcelerator.com/titanium/2.0/index.html#!/guide/<br/>CommonJS_Modules_in_Titanium</a>",

	}
});
