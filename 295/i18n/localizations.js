/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_filetitle": "Deployment &amp; Distribution",
		"%l_lessontitle": "Deployment &amp; Distribution",
		"%l_subtitle": "Building Native Mobile Apps With Appcelerator Titanium",
		"%l_slidenote_titleslide": "<b>Module time: 60 mins</b><br/>(30 mins teaching, 30 mins for lab)",
		"%l_agenda_title": "Agenda",
		
		"%l_agenda1": "Deploying to a device for testing",
		"%l_agenda2": "Publishing to the Android Market",
		"%l_agenda3": "Publishing to the AppStore",
		"%l_agenda4": "AdHoc, Enterprise, and private distribution",
		"%l_agenda5": "Lab Exercise",
		"%l_slidenote_agenda": "Present the agenda...",

		"%l_deployment": "Deployment",
		"%l_getting_your": "Getting your app onto a device for testing",
		"%l_locally_connected": "Locally connected devices",
		"%l_remote_devices": "Remote devices",
		"%l_ios_android": "iOS and Android processes very different",
		"%l_slidenote_deployment": "You can deploy over a USB connection<br>There are techniques for deploying to remote devices<br>iOS/Android processes different",

		"%l_android_deployment": "Android Deployment",
		"%l_slidenote_android_deployment": "Let's talk first about deploying your app for testing on Android devices",
		"%l_android_deployment_testing": "Android deployment for testing",
		"%l_android_deployment_image": "<img src='images/android-deployment-testing.png' style='margin-top:60px;height:250px;align:center'>",
		"%l_slidenote_android_deployment_testing": "Simple, two-step process for Android",

		"%l_configure_device": "Configure device for testing",
		"%l_configure_device_image": "<img src='images/configure-device.png' style='margin-top:60px;height:450px;align:center'>",
		"%l_slidenote_configure_device": "First, configure device for testing<br>Windows users: need to install drivers specific to your device<br>Linux users: need to create USB config<br>See the wiki",

		"%l_local_android": "Local Android deployment",
		"%l_connect_device": "Connect device to USB port",
		"%l_run_menu": "From Run menu, choose Android Device",
		"%l_local_android_image": "<img src='images/local-android.png' style='margin-top:60px;height:350px;align:center'>",
		"%l_slidenote_local_android": "Android deployment for testing is pretty simple<br>Can also manually install the APK via ADB<br>Or by transferring apk to device and opening with a file manager<br>Ti Studio signs APK with a debug compatible certificate. You could go through the signing steps but that's unnecessary)",

		"%l_remote_android": "Remote Android deployment",
		"%l_get_apk": "Get the APK to the user's device",
		"%l_email": "Email",
		"%l_post": "Post on a web site",
		"%l_distribution": "Distribution framework",
		"%l_slidenote_remote_android": "Just get the APK onto the user's device<br>Use the apk-debug version to skip code signing steps<br>Email, post on a web site, share through Dropbox<br>Over-the-air system like HockeyKit can automate deployment and updates",

		"%l_ios_deployment": "iOS Deployment",
		"%l_slidenote_ios_deployment": "",

		"%l_ios_deployment_testing": "iOS deployment for testing",
		"%l_ios_deployment_image": "<img src='images/ios-deployment-testing.png' style='margin-top:60px;height:350px;align:center'>",
		"%l_slidenote_ios_deployment_testing": "Six step of Apple's process &mdash; don't go in-depth here",

		"%l_apple_dev": "Apple Developer Program",
		"%l_free_to": "Free to register, download SDK",
		"%l_annual": "Annual fee for iOS Developer program",
		"%l_individual": "Individual, Company, Enterprise, & University programs",
		"%l_slidenote_apple_dev": "You can register for free<br>Need to pay to publish and distribute apps<br>Various levels with varying documentation",

		"%l_ios_dev_certificate": "Developer's certificate",
		"%l_dev_certificate_image": "<img src='images/dev-certificate.png' style='margin-top:60px;width:800px;align:center'>",
		"%l_slidenote_ios_dev_certificate": "Certificate identifies you as the developer<br>Create with Keychain Access<br>Upload CSR file to provisioning portal<br>Download and install the resulting certificate into login keychain<br>Also need Apple's WWDR certificate",

		"%l_register_devices": "Register devices",
		"%l_register_devices_image": "<img src='images/register-devices.png' style='margin-top:60px;width:800px;align:center'>",
		"%l_slidenote_register_devices": "Register devices used for testing<br>Need the UDID<br>Get that from Xcode or iTunes<br>Enter at Provisioning Portal",

		"%l_create_appid": "Create an AppID",
		"%l_unique": "Unique identifier for your app",
		"%l_bundle": "Bundle Seed ID - 10 character universally unique",
		"%l_cf": "CF Bundle Identifier - app name or wildcard",
		"%l_bundle_id": "Bundle Identifier must be unique for Push, In-App purchases, Game Center",
		"%l_slidenote_create_appid": "Bundle Seed ID generated by the Provisioning Portal<br>CF Bundle Identifier you specify<br>Could name a specific app<br>Could be asterisk (wildcard)<br>Need specific name, not wildcard for Push Notification, In-App purchases, and Game center",

		"%l_prov_profile": "Provisioning profile",
		"%l_prov_profile_image": "<img src='images/prov-profile.png' style='margin-top:60px;width:800px;align:center'>",
		"%l_slidenote_prov_profile": "Provisioning profile = collection of your certificate, app ID, and device IDs<br>Install to device to enable testing<br>You'll create a similar provisioning profile for final distribution",

		"%l_install_prov_profile": "Install the provisioning profile",
		"%l_install_profile_image": "<img src='images/drag-and-drop.png' style='margin-top:40px;height:275px;align:center'>",
		"%l_option_1": "Option 1: Drag & Drop to Xcode",

		"%l_slidenote_install_prov_profile": "Ultimately, you need to install to Xcode<br>You can drag & drop<br>or install via Ti Studio (next slide)",
		"%l_install_ti_studio": "Option 2: Install via Titanium Studio",
		"%l_install_profile2_image": "<img src='images/ti-studio.png' style='margin-top:20px;height:450px;align:center'>",
		"%l_slidenote_install_prov_profile_ti": "If not installed via Xcode, click Upload and Ti Studio will install for you<br>Ti Studio should recognize certificates in your keychain",

		"%l_install_local": "Installing to local test device",
		"%l_connect_usb": "Connect via USB",
		"%l_choose_ios": "Choose iOS Device from Run menu",
		"%l_install_ipa": "Install IPA using Xcode or iTunes sync",
		"%l_slidenote_install_local": "Finally, install to your locally connected device",

		"%l_distr_remote": "Distributing to remote testers",
		"%l_email_prov": "Email mobileprovision file and IPA",
		"%l_ota": "Over-the-air distribution systems:",
		"%l_testflight": "TestFlightApp",
		"%l_diawi": "Diawi",
		"%l_appsendr": "AppSendr",
		"%l_hockey": "HockeyKit",
		"%l_slidenote_distr_remote": "Distribution systems: basically you upload to a web server<br>Users are notified on their devices to install or upgrade<br>Fee or free services<br>HockeyKit is an open source, DIY system you install on your web server, supports both iOS and Android distribution",

		"%l_android_market": "Google Play",
		"%l_android_play": "(formerly the Android Market)",
		"%l_slidenote_android_market": "",

		"%l_android_dep_release": "Android deployment for release",
		"%l_android_release_image": "<img src='images/android-dep-release.png' style='margin-top:50px;height:400px;'/>",
		"%l_slidenote_android_dep_release": "Steps of Android release process &mdash; don't go into depth here",

		"%l_android_market_reqs": "Android Market requirements",
		"%l_google_acc": "Google account",
		"%l_android_dev_acc": "Android Developer account",
		"%l_one_time_fee": "One-time fee",
		"%l_sdk_tools": "SDK tools: keytool, jarsigner, zipalign",
		"%l_slidenote_android_market_reqs": "Need a Google account (Gmail, Google Docs)<br>Sign up at market.android.com/publish<br>One-time $25 fee<br>Need an Google Checkout Account if you'll be selling your app for a fee<br>Studio provides graphical interface to command-line tools. But you still might need to use the SDK tools, such as to verify APK file",

		"%l_gen_key_pair": "Generate key pair and certificate",
		"%l_gen_keypair_image": "<img src='images/gen-key-pair.png' style='margin-top:50px;height:480px;'/>",
		"%l_slidenote_gen_key_pair": "When you choose to Distribute to the Android Market, Studio provides this dialog for creating a certificate pair and keystore.<br/>Used to have to do this with the <code>keytool</code> command<br>Alias varies and is specific to your app<br>Can store multiple certificates in the same keystore<br>Make backup copies of your keystore file and save in safe location",

		"%l_verify_keystore": "Verify keystore",
		"%l_verify_keystore_image": "<img src='images/verify-keystore.png' style='margin-top:50px;height:450px;'/>",
		"%l_slidenote_verify_keystore": "Point out keytool command<br>>Optional step, but you should do it anyway<br>If you lose the keystore or it's invalid, you won't be able to issue updates in the market<br/>Point out keytool command<br>Want to see 'Valid From' and date 25 years from now or longer",

		"%l_sign_app": "Sign your application",
		"%l_sign_app_image": "<img src='images/sign-app.png' style='margin-top:50px;height:450px;'/>",
		"%l_slidenote_sign_app": "From Deploy menu, choose Distribute &mdash; Android<br>You'll specify your keystore location, password, and alias",

		"%l_verify_signed": "Verify signed app",
		"%l_verify_signed_image": "<img src='images/verify-signed.png' style='margin-top:50px;height:450px;'/>",
		"%l_slidenote_verify_signed": "Again, this is optional but recommended<br/>Use <code>jarsigner</code> to verify apk file<br>Looking for 'jar verified'<br>Might need to use zipalign tool. Android.com site will inform you if you do.<br>Shouldn't be needed after Titanium 1.4",

		"%l_upload_publish": "Uploading and publishing",
		"%l_upload_publish_image": "<img src='images/upload-publish.png' style='margin-top:50px;height:550px;'/>",
		"%l_slidenote_upload_publish": "Upload at market.android.com/pubish<br>Some required info<br>Rest optional<br>Free or set price if you have Google Checkout account",

		"%l_itunes_store": "iTunes AppStore",
		"%l_slidenote_itunes_store": "",

		"%l_ios_dep_release": "iOS deployment for release",
		"%l_ios_dep_release_image": "<img src='images/ios-dep-release.png' style='margin-top:50px;height:350px;'/>",
		"%l_slidenote_ios_dep_release": "Similar steps for release as testing<br>Done two steps already",

		"%l_ios_distr_certificate": "Distribution certificate",
		"%l_l_ios_distr_certificate_image": "<img src='images/ios-distr-certificate.png' style='margin-top:50px;height:550px;'/>",
		"%l_slidenote_ios_distr_certificate": "App needs to be signed with distribution certificate to be submitted to App Store<br>Corporate / team environment:<br>  - each developer creates their own CSR/Developer certificate<br>  - team manager creates distinct CSR/Distribution certificate<br>  - developer certs can be revoked without affecting other developers or distribution<br><br>Individual developers <br>  - can re-use development CSR to create distribution certificate<br>  - could create new if you'd like<br>Must be logged in as Agent role (one per developer account) to create<br>Install to keychain on machine that will be used for final build",

		"%l_ios_distr_profile": "Distribution Provisioning Profile",
		"%l_l_ios_distr_profile_image": "<img src='images/ios-distr-profile.png' style='margin-top:50px;height:550px;'/>",
		"%l_slidenote_ios_distr_profile": "Not tied to specific devices<br>Required for App Store submission<br>Download the resulting mobileprovision file",

		"%l_ios_install_profile": "Build for Distribution",
		"%l_l_ios_install_profile_image": "<img src='images/ios-install-prov-profile.png' style='margin-top:50px;height:550px;'/>",
		"%l_slidenote_ios_install_profile": "Install into Ti Developer<br>- Upload button installs to Xcode or do separately<br>Should recognize certificates in your keychain<br>Package button builds your app, embeds the certificates, and creates IPA that you'll upload to the App Store",

		"%l_itunes_connect": "iTunes Connect",
		"%l_portal": "Portal for application management",
		"%l_sales_stats": "Sales statistics",
		"%l_contracts": "Contracts, taxes, payments, banking connections",
		"%l_need_to": "Need to create application within iTunes Connect",
		"%l_slidenote_itunes_connect": "",

		"%l_ios_app_itunes_connect": "Creating an app in iTunes Connect",
		"%l_itunesconnect_image": "<img src='images/itunes-connect.png' style='margin-top:50px;height:550px;'/>",
		"%l_slidenote_ios_app_itunes_connect": "Bundle ID and suffix must match what you enter in Ti Studio<br>Step through series of pages to define price, content rating, etc.<br>You'll need a 512x512 icon and at least one screenshot",

		"%l_validate_upload": "Validating and uploading",
		"%l_validateupload_image": "<img src='images/validate-upload.png' style='margin-top:50px;height:550px;'/>",
		"%l_slidenote_validate_upload": "Xcode organizer, Archives window<br>Validate app &mdash; checks for app in iTunes Connect, required graphic assets, signing, etc.<br>Click Validate to validate the app and its configuration on the AppStore<br/>Click Submit - to submit. You can also upload using the Application Loader (in Developer/Applications/Utilities folder)",

		"%l_app_store_reqs": "App Store Requirements",
		"%l_many_reqs": "Many requirements &mdash; see iOS Dev Center for full details",
		"%l_must_be": "Must be useful, well-designed, run without errors",
		"%l_no_download": "No downloading code",
		"%l_you_must": "You must own trademarks",
		"%l_no_hidden": "No hidden features, use of non-public APIs",
		"%l_slidenote_app_store_reqs": "Feel free to describe relevant experiences",

		"%l_adhoc_distr": "Ad Hoc distribution",
		"%l_distr_outside": "Distribute outside of App Store",
		"%l_limited_to": "Limited to running on your registered devices",
		"%l_adhoc": "Ad Hoc builds expire after 90 days",
		"%l_deploy_by": "Deploy by email, over-the-air framework, USB install",
		"%l_slidenote_adhoc_distr": "imited to 100 devices per year",

		"%l_enterprise_distr": "Enterprise distribution",
		"%l_inhouse": "In-house distribution program",
		"%l_distr_to": "Distribute to employees or members",
		"%l_register_as": "Register as company or organization, DUNS number required",
		"%l_slidenote_enterprise_distr": "",

		"%l_qa": "Q&A",
		"%l_slidenote_qa": "Before we jump into the lab, what questions do you have?",

		"%l_lab": "Lab Objectives",
		"%l_labobjective1": "Optional: If time permits",
		"%l_labobjective1": "Build and package TiBountyHunter for the markets",
		"%l_labobjective1": "Go through all steps, but stop before actually submitting",
		"%l_labobjective1": "Need Google Play and/or iTunes App Store accounts",
		"%l_labURL": "Lab: <a href='https://wiki.appcelerator.org/display/td/295+Deploy+and+Distribute'>wiki.appcelerator.org/display/td/295+Deploy+and+Distribute</a>",

		"%l_slidenote_lab_exercise": ""
	}
});
