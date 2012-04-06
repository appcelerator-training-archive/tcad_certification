/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_labname": "Lab: Native iOS Development",
		"%l_mission": "<strong>Mission: </strong>In this lab, you will build and run a simple 'Hello World' app using iOS native tools. Your goal is to become familiar with the Xcode toolset and the steps that native developers must endure to create even simple iOS projects.",

		"%l_step1": "1. Open Xcode and create a new project named <strong>HelloWorldIOS</strong>. Use the Tabbed Application template. Select Universal Application and leave Use Storyboard checked. Save the project to your home directory.<br/><img src="labimages/xcodemainscreen.png" width='600'>",
		"%l_stepexplanation1": "This creates the files and folder structure for your application and opens the project the XCode. Using the first Xcode screen, you can edit project-wide details, such as the splash screen or app icon.",

		"%l_step2": "2. In older versions of Xcode, files with the .nib or .xib extensions would represent the user interface elements of your app. In Xcode 4.2, Apple introduced the Storyboard Editor which works with such "nib" files behind the scenes. Either way, you can use the built in Interface Builder tools to create your app's UI. You drag and drop elements from the Object library onto your app's screens. Then, you'd edit the associated controller .h and .m files.<br/><br/>For now, drag a control or two to the First View container so that you can see some customization when you build and run your app. As shown in the graphic, select the storyboard file for either iPhone or iPad on the left. In the second pane, expand First View Controller and then expand View (assuming you choose a two-tabbed app template), then select one of the existing controls. Finally, from the Object library (bottom-right pane), drag &amp; drop a control onto the view. You might need to select Object from the list and click the Icon View button to easily see those controls.<br/><img src='labimages/xcodestoryboard.png' width='600'>",
		"%l_stepexplanation2": "",

		"%l_step3": "3. In the top-left corner, click the <strong>Run</strong> button.",
		"%l_stepexplanation3": "This will build your application and launch the iPhone or iPad simulator.",


		"%l_summary": "Summary",
		"%l_summarypara": "This lab was a brief and simple introduction to the Xcode development tools.",

		"%l_resources": "Resources",
		"%l_resources1": "<a href='http://developer.apple.com/'>http://developer.apple.com/</a>",
		"%l_resources2": "<a href='http://developer.apple.com/library/ios/#documentation/Xcode/Conceptual/iphone_development/000-Introduction/introduction.html'>Apple: iPhone development introduction</a>",
		"%l_resources3": "<a href='http://developer.apple.com/library/ios/#documentation/ToolsLanguages/Conceptual/Xcode4UserGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010215-CH1-SW1'>Apple: Xcode introduction</a>",

	}
});
