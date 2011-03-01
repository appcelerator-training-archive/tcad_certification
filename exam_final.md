# Final Exam Question Pool

This file contains the final question pool for the initial TCAD exam by section.

*A single asterisk (\*) denotes a correct answer*

## 205: Zero To App Recap

#### You can write PHP, Python, and Ruby code in Titanium Mobile applications.

1. True
2. False *

#### All Titanium Mobile applications contain HTML and CSS.

1. True
2. False *

#### Titanium is free to use for open source applications, but commercial applications require a Pro subscription.

1. True
2. False *

#### Titanium Mobile is implemented as a wrapper around a native Web View component.

1. True
2. False *

#### Titanium Mobile JavaScript source files are not cross-compiled to native Objective-C or Java code.

1. True *
2. False

#### In your mobile project folder, what is contained in the Resources directory? (check all that apply)

1. JavaScript source files *
2. Xcode project files
3. Global configuration files used by Titanium's build scripts
4. JavaScript Stylesheets *
5. Android project files
6. Platform-specific image files *
7. Internationalization files used by Titanium

#### In your mobile project folder, what is contained in the build directory? (check all that apply)

1. JavaScript source files
2. Xcode project files *
3. Global configuration files used by Titanium's build scripts
4. JavaScript Stylesheets
5. Android project files *
6. Platform-specific image files
7. Internationalization files used by Titanium

#### The Titanium Developer tool...

1. Provides an IDE with an interactive debugger
2. Provides a GUI over the top of Python build scripts included in the mobile SDK *
3. Provides a sandbox to quickly run small snippets of JavaScript for iOS and Android
4. Provides access to live chat with Titanium developers on Internet Relay Chat (IRC)

#### You can run Titanium Mobile projects directly from Xcode (for iOS) without Titanium Developer.

1. True *
2. False

#### Internationalization files used by Titanium are in the same XML format used by native Android applications.

1. True *
2. False

<hr/>

## 210: You're a Native Application Developer Now

#### The Titanium Developer tool requires the native SDKs for Android and iOS to run mobile applications in the emulator.

1. True *
2. False

#### Which applications and tools are installed with the Android SDK? (check all that apply)

1. The adb command *
2. The Xcode IDE
3. The ddms command * 
4. The gcc compiler
5. Interface Builder
6. The AVD manager *

#### Which applications and tools are installed with the iOS SDK? (check all that apply)

1. The adb command
2. The Xcode IDE *
3. The ddms command
4. The gcc compiler *
5. Interface Builder *
6. The AVD manager

#### You can develop iOS applications using an Apple-provided Eclipse plug-in.

1. True
2. False *

#### After a brand new install (downloading and unzipping the SDK and tools), the Android SDK contains...

1. A default Android OS version you can test against out of the box
2. No Android OS versions - you must download OS versions to test against separately *

#### iOS user interfaces can be composed in Interface Builder and saved to a _____________.

1. .ui.xml file
2. .plist file
3. .xib file *
4. .xui file 

#### To debug an application running on an Android device via the command line, you would probably use...

1. The adb command *
2. The xcodebuild command
3. The android command
4. The zipalign command

#### You can install and use the iOS SDK on the Windows 7 operating system.

1. True
2. False *

<hr/>

## 215: Cross-Platform Development in Titanium

#### Titanium Mobile applications are intended to be "write once, run everywhere" - platform-specific code should not be necessary.

1. True
2. False *

#### All components in the Titanium.UI.* namespaces are available across all platforms.

1. True
2. False *

![https://img.skitch.com/20110222-x2khrs234ydyghwcbfcbj927fn.jpg](https://img.skitch.com/20110222-x2khrs234ydyghwcbfcbj927fn.jpg)
#### Consider the code above.  What would be the result of running this code in app.js?

1. 'hello world!' would be printed twice in the console.
2. The program would fail compilation because the above is not valid JavaScript.
3. The program would throw an exception on execution immediately.
4. The program would throw an exception on execution after writing 'hello world!' to the console once. *

#### It is considered a JavaScript best practice to include all functions in the global scope for easy accessibility throughout the application.

1. True
2. False *

#### You can include platform-specific JavaScript, images, and other resources in the...

1. "Resources/iphone" or "Resources/android" directories *
2. "build/iphone" or "build/android" directories
3. project root directory, in either the "iphone" or "android" directories
4. "platform/iphone" or "platform/android" directories

#### You can execute platfrom-specific JavaScript code at runtime in your application by...

1. branching based on the global TITANIUM_PLATFORM variable
2. passing platform-specific functions to the built-in Ti.Platform.os function
3. branching based on the osname property in the Titanium.Platform namespace *
4. branching based on the Titanium user agent string for the current platform

#### You can use platform-specific JSS files to automatically change your component styles based on the platform.

1. True *
2. False

#### Android Nine Patch images may be used in Titanium Mobile applications.

1. True *
2. False

<hr/>

## 220: UI Fundamentals

![https://img.skitch.com/20110222-bhm57yck52ws8dytdqq18gh1at.jpg](https://img.skitch.com/20110222-bhm57yck52ws8dytdqq18gh1at.jpg)
#### Consider the image above (Android on the left, iOS on the right).  Assuming it was added to a window with a white background and no JSS has been applied, which line of code generated the label shown? 

1. Ti.UI.createLabel({ text:'Hello World!', height:'auto', backgroundColor:'red'}); *
2. Ti.UI.createLabel({ text:'Hello World!', backgroundColor:'red'});
3. Ti.UI.createLabel({ text:'Hello World!', textAlign:'left', backgroundColor:'red'});
4. Ti.UI.createLabel({ text:'Hello World!', top:200, backgroundColor:'red'});

#### It is possible to compose a user interface using buttons, views, and other controls without also using a window.

1. True
2. False *

#### A window is to a web page as a view is to a...

1. h1 tag
2. input tag
3. div tag *
4. script tag

#### A Titanium view or component is positioned relative to...

1. its parent view or window *
2. the top-most parent window in the application
3. the available screen resolution
4. a 320x480 point system

#### Views respond to a finite number of events built in to Titanium, such as touchstart, click, and swipe.

1. True
2. False *

#### What is an execution context?

1. A proxy for the iOS  UI thread or an Android activity
2. The set of variables automatically included in an application, like Titanium or setTimeout()
3. A unique variable space, similar to the single JavaScript thread provided to browser-based applications *
4. A global message bus accessible to all active windows in an application

#### What is the difference between screen density and screen resolution?

1. Screen density is the number of pixels on a display, and screen resolution is how close together those pixels are on a physical screen
2. Screen resolution is the number of pixels on a display, and screen density is how close together those pixels are on a physical screen *
3. Screen density is is the number of pixels on a display, and screen resolution is the actual physical size of the display
4. Screen resolution is is the number of pixels on a display, and screen density is the actual physical size of the display

#### Density specific images on iOS must be placed in the Resources/iphone subdirectory.

1. True
2. False *

![https://img.skitch.com/20110222-1e4gpr42j43xcdcf48wcx47mef.jpg](https://img.skitch.com/20110222-1e4gpr42j43xcdcf48wcx47mef.jpg)
#### Consider the simple app.js file above.  How many pixels/points from the top of the window is the red view?

*Note: Please preserve answer order for this question if possible*

1. 10
2. 20
3. 30
4. 40
5. 50
6. 60 *
7. 70

#### In Titanium on iPhone, UI positioning and sizes (top, right, left, bottom, height, width properties) are based on actual pixel values, which vary depending on the screen resolution. On Android, values are based on a 320x480 point system.

1. True
2. False *

#### In general, your user interface should be composed of small, self-contained components. Why might this be helpful? (select all that apply)

1. It is easier to adapt small components to render properly across platforms *
2. You can avoid code duplication by having a library of shared components *
3. It allows you to avoid using application-level events
4. It de-couples components from one another, allowing them to focus on their own UI state and associated data *

#### You can use Interface Builder to create Titanium user interfaces using a built-in translation tool in the mobile SDK.

1. True
2. False *

#### Windows that are not yet opened are guaranteed to receive all previously sent application-level messages when they open.

1. True
2. False *

#### The Kitchen Sink is implemented using many execution contexts because it is considered a Titanium Mobile best practice.

1. True
2. False *

<hr/>

## 250: Working with Local Data

#### SQLite is the database engine used on both iOS and Android.

1. True *
2. False

#### Say you wanted to store a large amount of structured data locally in your application.  What would be the preferred method for storage?

1. A SQL database *
2. The Properties API
3. The device filesystem

#### Say you wanted to store a half dozen configuration options (primitive values like integers or strings) for your application.  What would be the preferred method for storage?

1. A SQL database
2. The Properties API *
3. The device filesystem

#### Say you wanted to store a large number of images locally in your application.  What would be the preferred method for storage?

1. A SQL database
2. The Properties API 
3. The device filesystem *

![https://img.skitch.com/20110222-eb6h213uu51xa2pyrjeu8s6i8a.jpg](https://img.skitch.com/20110222-eb6h213uu51xa2pyrjeu8s6i8a.jpg)
#### Consider the database code above, intended to get all rows from a contacts database and push the names of those contacts into a JavaScript array. Assuming the database exists and has a contacts table, what critical element is missing from this data access logic?

1. A SQL statement to use the "contacts" database
2. An API call to close the database row after it has been accessed
3. Configuration of the memory allocation required for the array (how many elements it can hold)
4. An API call to move to the next row in the result set *

#### The Properties API uses an encrypted data store, so it is suitable for storing sensitive information like usernames and passwords.

1. True
2. False *

#### It is possible to ship a pre-populated database to use with your application.

1. True *
2. False 

#### You can interact with a SQL database through the Titanium.Database namespace using... (select all that apply)

1. A built-in object-oriented query API
2. A built-in object-relational mapping layer
3. Standard SQL statements *
4. XML over a local network HTTP connection

<hr/>

## 255: Media and the Filesystem

#### Your application has read/write access to all directories on the device filesystem.

1. True
2. False *

#### Files stored in the applicationDataDirectory are persistent until the app is uninstalled.

1. True *
2. False

#### Files stored in the resourcesDirectory are persistent until the app is uninstalled.

1. True
2. False *

![https://img.skitch.com/20110223-x3xrrpg5u2d7swai5nmc2sic9p.jpg](https://img.skitch.com/20110223-x3xrrpg5u2d7swai5nmc2sic9p.jpg)
#### Consider the code above, intended to copy a config file from the resources directory to the application data directory.  Why will this code fail?

1. The application data directory is read-only
2. The resources directory is not visible to the application
3. We did not call ".open()" first on the destination file
4. We did not call ".read()" on the source file

#### ImageView components can be used to display local images as well as images on a remote server (accessible via HTTP).

1. True *
2. False

#### ImageView components are the only way Titanium exposes to display images in your application.

1. True
2. False *

#### The camera and photo gallery APIs share a common set of callback functions, which are... (select all that apply)

1. success *
2. failure
3. error *
4. cancel *
5. appear
6. selected

#### The camera and photo gallery APIs return a pointer to an actual binary file that can be stored on the filesystem or uploaded to a server.

1. True *
2. False

<hr/>

## 260: Working With Remote Data

![https://img.skitch.com/20110223-8dw5ew1g7bhjjbn9ba1s1rppi4.jpg](https://img.skitch.com/20110223-8dw5ew1g7bhjjbn9ba1s1rppi4.jpg)
#### Consider the code above. Assuming the URL is valid, why might the anonymous function never be executed?

1. We forgot to call "send()" on the HTTPClient object *
2. There is no "onload" handler function on the HTTPClient object
3. We need to use Ti.Network.createXMLHttpRequest() instead of .createHTTPClient()
4. We need to use "POST" for requests that return XML

#### Only GET and POST requests are supported by the Titanium network APIs.

1. True
2. False *

#### Titanium automatically uses form encoding for POST requests, and will automatically serialize parameters passed in a JavaScript object when the request is sent.

1. True *
2. False

#### The JSON module must be included into the current execution context before it can be used.

1. True
2. False *

#### The HTTPClient API...

1. is based on the iOS networking API
2. is based on the Android networking API
3. is based on the XMLHTTPRequest API *
4. is based on the Bayeux protocol

#### Titanium will not automatically use the appropriate content type header when POSTing binary data - you must set it yourself.

1. True
2. False *

#### JSON is preferred as a data transport format in Titanium Mobile because... (check all that apply)

1. It is easier to serialize into JavaScript objects than XML *
2. JSON usually requires less data to be transmitted over networks than XML *
3. Titanium does not natively support XML
4. the JSON module has better support for SOAP

#### The unmodified content of an HTTP response can be accessed in an HTTPClient callback function via...

1. this.responseFile
2. this.responseText *
3. this.responseXML
4. this.response

![https://img.skitch.com/20110223-qxh3k9yqs8ft6nyua1tp7pnjr6.jpg](https://img.skitch.com/20110223-qxh3k9yqs8ft6nyua1tp7pnjr6.jpg)
#### Consider the code above.  What line of code will return the string "Rachel Barry"?

1. doc.selector('students student').item(1).text
2. doc.getElementsByTagName('student').item(1).text
3. doc.firstChild.firstChild.nextSibling.item(1).text
4. doc.documentElement.getElementsByTagName('student').item(1).text *

<hr/>

## 270: Using Location Services

#### What is reverse geocoding?

1. Converting a latitude/longitude coordinate pair to an address *
2. Converting an address to a latitude/longitude coordinate pair
3. Finding a heading based on the current direction of the compass
4. Plotting a course back to a saved location on a device

#### You can track changes in the device location...  (Check all that apply)

1. by distance in meters from a previous point *
2. by changes in heading *
3. only when your application is in the foreground 
4. by distance in meters from a set location

#### Devices and emulators running the Android operating system always have geolocation-enabled hardware.

1. True
2. False *

#### In order to use native map components on Android in a production application, you must...

1. Obtain an API key from Appcelerator to place in tiapp.xml
2. Obtain an API key from Google to place in tiapp.xml *
3. Obtain a Professional subscription for Titanium Mobile
4. Release your application as open source, pursuant to the GNU Public License (GPL)

#### The native map view displays maps inside an embedded web view component.

1. True
2. False *

#### A MapView control...

1. can be embedded and resized within any parent view or window *
2. must be embedded alone within its own window
3. can be added to a web view displaying remote content
4. can be customized to display a relief type map

#### Map annotations can contain custom attributes that are available in the click event for the MapView control.

1. True *
2. False

#### When continually tracking the device's position, you should be careful because...

1. tracking the device location increases device memory usage over time
2. tracking the device position can drain the device battery more quickly *
3. the callback associated with the geolocation events is only fired once
4. iOS will cut your tracking off after a few minutes to protect bandwidth on the cellular network

![https://img.skitch.com/20110223-jb2qq35puep4cyqq31g2ysss6k.jpg](https://img.skitch.com/20110223-jb2qq35puep4cyqq31g2ysss6k.jpg)
#### Consider the map annotation above.  Which annotation properties have been set to create the annotation shown? (check all that apply)

1. title *
2. text
3. image
4. subtitle *
5. rightButton *
6. pincolor *
7. longitudeDelta

</hr>

## 280: Contacts and Social APIs

#### Access to the device contact list is read/write on iOS.

1. True *
2. False

#### You can access a contact from the device contact list by... (select all that apply)

1. getting an array of all contacts through a JavaScript API *
2. selecting a single contact by name through a JavaScript API
3. allowing a user to select a contact from a native contact picker dialog *
4. using a SQL-style query interface to get one or more contacts from the list

#### You can access the current device's phone number through the Titanium.Contacts namespace.

1. True
2. False *

#### Contacts can only be edited or deleted on a real device - the emulator does not support this.

1. True
2. False *

#### In order to use Facebook Connect in your application...

1. You must submit an application to Appcelerator for review
2. You must register an application on Facebook's website *
3. You must send an e-mail to Facebook support asking for access for your application
4. You must not read friend data without additional consent from Facebook

#### Facebook Connect secures web service requests via...

1. HTTP Basic Authentication
2. oAuth *
3. SOAP
4. HTTP Digest Authentication

#### Access to the Twitter API is built in to the Titanium platform.

1. True
2. False *

#### Access to YQL queries is built in to the Titanium platform.

1. True *
2. False

<hr/>

## 285: Integrating Web Content

#### The WebView component... (check all that apply)

1. is used to interpret JavaScript in every Titanium Mobile application
2. is used to display remote or local web content *
3. is used to render controls in the Titanium.UI namespace
4. is used to back HTTPClient in the Titanium.Network namespace

#### WebViews containing content loaded from a remote server have full access to native device APIs in the Titanium namespace, like camera and GPS.

1. True
2. False *

#### WebViews containing local web content have full access to native device APIs in the Titanium namespace, like camera and GPS.

1. True
2. False *

#### WebViews containing local web content can run JavaScript libraries (ignoring load time) like jQuery Mobile...

1. at reduced performance than the mobile browser
2. at greater performance than the mobile browser
3. the same performance as any mobile browser-based application *

#### JavaScript running in WebViews loaded with local web content can communicate with the native wrapper application by...

1. publishing and subscribing to application-level events *
2. sending and receiving JSON messages through a local HTTP tunnel
3. sending and receiving binary messages passed via WebSockets
4. sending and receiving JMS messages (Android) or outlets (iOS)

#### WebViews are the most efficient means of providing touchable links within strings of text on Android (in terms of Lines of Code).

1. True
2. False *

#### WebViews are the most efficient means of providing touchable links within strings of text on iOS (in terms of Lines of Code).

1. True *
2. False

<hr/>

## 290: Pro Titanium Tips and Tricks

![https://img.skitch.com/20110223-gtd95u3gy499j7t6g4utquhr6a.jpg](https://img.skitch.com/20110223-gtd95u3gy499j7t6g4utquhr6a.jpg)
#### Consider the code above.  What line of code must be inserted at line 11 to make "object" equivalent to "person"?

1. Ti.App.Properties.setObject('person', person);
2. Ti.App.Properties.setString('person', JSON.serialize(person));
3. Ti.App.Properties.setString('person', JSON.stringify(person)); *
4. JSON.stringify(Ti.App.Properties.setString('person', person));

#### It is fastest to quit and restart the Android emulator after each code change.

1. True
2. False

#### The Android emulator...

1. is the most accurate runtime platform for testing Android applications
2. is the only way to test applications on Android OS version 2.2 (Froyo)
3. is slower than a real device for testing application code *
4. is the only way to test Android applications on Linux

#### Titanium Developer is the only way to interact with the build functions of the Titanium Mobile SDK.

1. True
2. False *

#### It is possible to insert your own custom code into the Titanium build process by...

1. developing compiler plug-ins using Python *
2. modifying the Titanium build scripts with custom Ruby code
3. specifying a node.js program to run at compile time in tiapp.xml
4. specifying bash shell scripts or Windows batch files to run at compile time in tiapp.xml

#### When developing JavaScript for Titanium Mobile, it is best to... (check all that apply)

1. confine your application code to a single namespace *
2. use external JavaScript files for windows whenever possible
3. extend the prototypes of built-in Titanium objects (Ti.UI.*) to add custom behavior
4. compress and minify your JavaScript for faster loading *
5. Encrypt your files, since JavaScript is usually deployed as source in the application binary

#### When testing your Titanium Mobile application, it is best to... (check all that apply)

1. get one platform working perfectly before testing on another platform
2. test simultaneously on both an Android device and the iOS emulator for the fastest cross-platform cycles *
3. test simultaneously on both the Android emulator and an iOS device for the fastest cross-platform cycles
4. distribute .apk and .app files to beta testers for verification as your app matures *

