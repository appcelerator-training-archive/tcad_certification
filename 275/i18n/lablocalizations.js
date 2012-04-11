/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_labname": "Lab: Integrating ACS",
		
		"%l_mission": "<strong>Mission: </strong>In this lab, you will integrate Appcelerator Cloud Services into the TiBountyHunter application to enable users to boast about their captured bounties. You will use the ACS Status API to enable users to post messages that are saved in the ACS cloud. While we won't be building it in this lab, presumably there would be a Web page where user would see those boasts or perhaps the app would feature a way to see other users' boasts. Creating those features is an 'exercise left to the reader.'",

		"%l_step1": "1. Download the starting file set from <a href='https://github.com/appcelerator-training/tcad-code/tree/master/Starting_code/TiBH275'>GitHub</a> or <a href='http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/TiBH275.zip'>AWS/S3<a> and import the resulting files as a new Titanium Mobile project.",
		"%l_stepexplanation1": "",

		"%l_step2": "2. Build the project for either the iPhone simulator or Android emulator. Capture a bounty and then click the Captured tab. Tap the captured fugitive's name. Tap Log in to Brag.<div><img src='labimages/acs1.png' height='300' align='left'><img src='labimages/acs2.png' height='300' align='left'>",
		"%l_stepexplanation2": "We've written most of the UI features and changes so that you can concentrate on adding the ACS functionality. Of course, at this point, those fields and buttons don't do anything.",

		"%l_step3": "3. Open the <strong>ui/common/DetailWindow.js</strong> and examine the ACS-related code that starts around line 176.",
		"%l_stepexplanation3": "This code creates the buttons and windows of the UI, and responds to events. The ACS functions are in a separate file.",

		"%l_step4": "4. Open <strong>lib/acs.js</strong> and examine its contents.",
		"%l_stepexplanation4": "This file contains function skeletons that you will write to enable ACS.",

		"%l_step5": "5. Following the comments included in the acs.js file, write each of the functions required to enable the ACS functions of the app.",
		"%l_stepexplanation5": "",

		"%l_step6": "6. Open the tiapp.xml file and click <strong>Enable Cloud Services</strong>. Switch to the XML view and examine the tags added to the file.",
		"%l_stepexplanation6": "Clicking this button registered the app with the cloud.appcelerator.com site, generates the necessary keys, and added the required tags to your tiapp.xml file.",

		"%l_step7": "7. Save your changes in all files and build your project for the simulator/emulator.",
		"%l_stepexlpanation7": "",

		"%l_step8": "8. Test your app by capturing a fugitive and on his or her details page, click <strong>Log in to Brag</strong>. Click <strong>Create Account</strong> and complete the username, password, and confirm boxes. Tap Return or a blank area of the window to hide the keyboard. Click <strong>Create Account</strong>.",
		"%l_stepexplanation8": "Correct any errors and repeat the test until you can successfully post a message and retrieve the list of boasts.",

		"%l_step9": "9. Close the simulator/emulator and all open files in Studio.",
		"%l_stepexplanation9": "",


		"%l_summary": "Summary",
		"%l_summarypara": "In this lab, you implemented a couple of the ACS APIs. There are many more for you to explore. Obviously, we didn't complete a feature-complete app. There's no way to share messages or see those posted by others. But this lab's steps give you a taste of what can be done with ACS. And most notably, it highlights how you can add server-side functionality to your app without doing any server-side coding.",

		"%l_resources": "Resources",
		"%l_resources1": "Finished code: <a href='https://github.com/appcelerator-training/tcad-code/tree/master/Starting_code/TiBountyHunter'>GitHub</a> or <a href='http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/TiBountyHunter.zip'>AWS/S3</a>",
		"%l_resources2": "<a href='http://docs.appcelerator.com/titanium/2.0/index.html#!/api/Titanium.Cloud'>API Docs: Cloud</a>",
		"%l_resources3": "<a href='http://cloud.appcelerator.com/docs/quickstart'>Cloud QuickStart Guide</a>",

	}
});
