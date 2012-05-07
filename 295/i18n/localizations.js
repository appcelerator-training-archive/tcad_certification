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
	},
	"ja": {
		"%l_filetitle": "デプロイと配布",
		"%l_lessontitle": "デプロイと配布",
		"%l_subtitle": "Appcelerator Titaniumによるネイティブアプリ開発",
		"%l_slidenote_titleslide": "<b>所要時間：60分</b><br/>(講習：30分, 実習：30分)",
		"%l_agenda_title": "アジェンダ",
		
		"%l_agenda1": "テスト用デバイスへのデプロイ",
		"%l_agenda2": "Google Playへの公開",
		"%l_agenda3": "AppStoreへの公開",
		"%l_agenda4": "AdHoc、Enterprise、そしてプライベートでの配布",
		"%l_agenda5": "実習",
		"%l_slidenote_agenda": "アジェンダの提示...",

		"%l_deployment": "デプロイ",
		"%l_getting_your": "テスト用デバイスでアプリを実行",
		"%l_locally_connected": "接続したデバイス",
		"%l_remote_devices": "リモートデバイス",
		"%l_ios_android": "iOSとAndroidでは、大きく異なる",
		"%l_slidenote_deployment": "USB接続経由でデプロイ可能<br>リモートデバイスにデプロイするにはテクニックが必要<br>iOSとAndroidでは大きく異なる",

		"%l_android_deployment": "Androidデプロイ",
		"%l_slidenote_android_deployment": "Androidデバイスでテストアプリをデプロイする話をしましょう。",
		"%l_android_deployment_testing": "Androidへテストデプロイ",
		"%l_android_deployment_image": "<img src='images/android-deployment-testing_ja.png' style='margin-top:60px;height:250px;align:center'>",
		"%l_slidenote_android_deployment_testing": "簡単です。Androidは2ステップです",

		"%l_configure_device": "テスト用デバイスの設定",
		"%l_configure_device_image": "<img src='images/configure-device.png' style='margin-top:60px;height:450px;align:center'>",
		"%l_slidenote_configure_device": "まず、テスト用デバイスの設定<br>Windowsユーザー: デバイス用ドライバのインストールが必要<br>Linuxユーザー: USB設定の作成が必要<br>wiki参照",

		"%l_local_android": "接続したAndroidへデプロイ",
		"%l_connect_device": "USBポートにデバイスを接続",
		"%l_run_menu": "Runメニューから「Android Device」を選択",
		"%l_local_android_image": "<img src='images/local-android.png' style='margin-top:60px;height:350px;align:center'>",
		"%l_slidenote_local_android": "Androidへテストデプロイは、とてもシンプルです。<br>ADB経由でAPKを手動でインストールするこも可能です<br>または、ファイルマネージャーをデバイスにAPKを転送したり<br>Ti Studioはデバッグ互換の証明書でAPKに紐付けることができます。証明書設定をすることは可能ですが、必ずしも必要ではありません。",

		"%l_remote_android": "リモートのAndroidデバイスへデプロイ",
		"%l_get_apk": "デバイスへAPKを送る",
		"%l_email": "Email",
		"%l_post": "Webサイトへ送る",
		"%l_distribution": "配布フレームワーク",
		"%l_slidenote_remote_android": "単にデバイスにAPIを送る<br>apk-debugバージョンを利用することで証明書手順を割愛する<br>Email、Webへ送信、Dropboxでシェア<br>HockyKitのようなOTAシステムならデプロイやアップデートを自動化することが可能",

		"%l_ios_deployment": "iOSデプロイ",
		"%l_slidenote_ios_deployment": "",

		"%l_ios_deployment_testing": "iOSテストデプロイ",
		"%l_ios_deployment_image": "<img src='images/ios-deployment-testing_ja.png' style='margin-top:60px;height:350px;align:center'>",
		"%l_slidenote_ios_deployment_testing": "Appleの場合は6ステップ &mdash; ここでは詳細まで進めない",

		"%l_apple_dev": "Appleデベロッパープログラム",
		"%l_free_to": "登録とSDKのダウンロードは無料",
		"%l_annual": "iOSデベロッパープログラムの年会費",
		"%l_individual": "個人、法人、エンタープライズ、そしてユニバーシティープログラム",
		"%l_slidenote_apple_dev": "無料で登録が可能<br>アプリの実機転送と配布は有料<br>様々なドキュメント",

		"%l_ios_dev_certificate": "デベロッパーの証明書",
		"%l_dev_certificate_image": "<img src='images/dev-certificate.png' style='margin-top:60px;width:800px;align:center'>",
		"%l_slidenote_ios_dev_certificate": "証明書はデベロッパーとしての確認<br>キーチェーンアクセスで作成<br> プロビジョニングポータルへCSRファイルのアップロード<br>ログインキーチェーンに証明書をインストール<br>またAppleのWWDR証明書も必要",

		"%l_register_devices": "デバイス登録",
		"%l_register_devices_image": "<img src='images/register-devices.png' style='margin-top:60px;width:800px;align:center'>",
		"%l_slidenote_register_devices": "テスト用デバイスの登録<br>UDIDが必要<br>XcodeまたはiTunesから取得可能<br>プロビジョニングポータルサイトで入力",

		"%l_create_appid": "AppIDの作成",
		"%l_unique": "アプリのユニークID",
		"%l_bundle": "Bundle Seed ID - 10文字のユニークなID",
		"%l_cf": "CF Bundle Identifier - アプリ名、あるいはワイルドカード",
		"%l_bundle_id": "プッシュ、アプリ内課金、ゲームセンターを使う場合には、Bundle Identifierは、ユニークである必要がある",
		"%l_slidenote_create_appid": "Bundle Seed IDはプロビジョニングポータルで作成<br>CF Bundle Identifierは、<br>固有のアプリを示す名前を付けたり<br>アスタリスク(ワイルドカード)にしたり<br>プッシュ通知、アプリ内課金、ゲームセンターを使用する場合は、ワイルドカードではなく、固有の名前が必要",

		"%l_prov_profile": "プロビジョニングファイル",
		"%l_prov_profile_image": "<img src='images/prov-profile.png' style='margin-top:60px;width:800px;align:center'>",
		"%l_slidenote_prov_profile": "プロビジョニングファイル ＝ 証明書、App ID、デバイスIDをまとめたもの<br>実機テストを可能にするためインストール<br>最終の配布には別途似たプロビジョニングファイルを作成します",

		"%l_install_prov_profile": "プロビジョニングファイルのインストール",
		"%l_install_profile_image": "<img src='images/drag-and-drop.png' style='margin-top:40px;height:275px;align:center'>",
		"%l_option_1": "オプション1: Xcodeにドラッグ＆ドロップ",

		"%l_slidenote_install_prov_profile": "最後に、Xcodeへインストールする必要がある<br>ドラッグ＆ドロップ可能<br>またはTitanium Studio経由でインストール (次のスライド)",
		"%l_install_ti_studio": "オプション2:Titanium Studio経由でインストール",
		"%l_install_profile2_image": "<img src='images/ti-studio.png' style='margin-top:20px;height:450px;align:center'>",
		"%l_slidenote_install_prov_profile_ti": "Xcode経由でインストールしていない場合は「Upload」をクリック。するとTitanium Studioがインストールしてくれる<br>Titanium Studioは、キーチェーン内の証明書を認識してくれる。",

		"%l_install_local": "接続したテストデバイスにインストール",
		"%l_connect_usb": "USB経由で接続",
		"%l_choose_ios": "Runメニューから「iOS Device」を選択",
		"%l_install_ipa": "XcodeまたはiTunes同期を使用してIPAファイルをインストール",
		"%l_slidenote_install_local": "最後に、接続したデバイスにインストール",

		"%l_distr_remote": "リモートテストユーザーへの配布",
		"%l_email_prov": "プロビジョニングファイルとIPAファイルをEmailで送信",
		"%l_ota": "OTA(Over-the-air)配布支援システムを利用:",
		"%l_testflight": "TestFlightApp",
		"%l_diawi": "Diawi",
		"%l_appsendr": "AppSendr",
		"%l_hockey": "HockeyKit",
		"%l_slidenote_distr_remote": "配布支援システム: 基本的にはWebサーバーへアップロード<br>ユーザーのデバイスにインストールまたはアップグレードの通知が届く<br>有料、無料のサービスがある<br>HockeyKitはオープンソース, 自前でシステムを用意しWebサーバーにインストール。iOS／Android量対応。",

		"%l_android_market": "Google Play",
		"%l_android_play": "(旧Android Market)",
		"%l_slidenote_android_market": "",

		"%l_android_dep_release": "Androidアプリのリリース",
		"%l_android_release_image": "<img src='images/android-dep-release_ja.png' style='margin-top:50px;height:400px;'/>",
		"%l_slidenote_android_dep_release": "Androidリリースプロセスの手順 &mdash; ここでは触りのみ",

		"%l_android_market_reqs": "Google Play 要求事項",
		"%l_google_acc": "Googleアカウント",
		"%l_android_dev_acc": "Androidデベロッパーアカウント",
		"%l_one_time_fee": "登録料",
		"%l_sdk_tools": "SDKツール: keytool, jarsigner, zipalign",
		"%l_slidenote_android_market_reqs": "Googleアカウントが必要 (Gmail, Google Docs)<br>https://play.google.com/apps/publish/signupでサインアップ<br>登録料 25ドル<br>有料アプリを販売する場合は、Google Checkout Accountが必要<br>Titanium Studioはグラフィカルインターフェースからコマンドラインツールまで提供していますが、APKファイルの確認などでSDKツールを使う必要があるかもしれません。",

		"%l_gen_key_pair": "鍵ペアと証明書の生成",
		"%l_gen_keypair_image": "<img src='images/gen-key-pair.png' style='margin-top:50px;height:480px;'/>",
		"%l_slidenote_gen_key_pair": "Androidマーケットへの配布を選択すると、証明書pairとkeystoreを作成するためのダイアログが表示されます。<br/>以前はkeytoolコマンドでこの作業を行わなければなりませんでした。<br>エイリアスは変わり、アプリに特定されています。<br>同じkeystoreに複数の証明書を保存可能<br>keystoreファイルをコピーして安全な場所にバックアップしておきます。",

		"%l_verify_keystore": "keystoreの確認",
		"%l_verify_keystore_image": "<img src='images/verify-keystore.png' style='margin-top:50px;height:450px;'/>",
		"%l_slidenote_verify_keystore": "keytoolコマンドに注目<br>任意の手順ですが、やった方が良いでしょう。<br>keystoreが失われたり、無効になった場合、Google Playでアップデートを行うことができなくなります。<br/>再びkeytoolコマンドに注目<br>「Valid From」で25年後またはそれ以降であれば良いでしょう。",

		"%l_sign_app": "アプリの署名",
		"%l_sign_app_image": "<img src='images/sign-app.png' style='margin-top:50px;height:450px;'/>",
		"%l_slidenote_sign_app": "デプロイメニューから「Distribute - Android」を選択します。<br>keystoreの場所、パスワード、エイリアスを設定します。",

		"%l_verify_signed": "署名済みアプリの確認",
		"%l_verify_signed_image": "<img src='images/verify-signed.png' style='margin-top:50px;height:450px;'/>",
		"%l_slidenote_verify_signed": "もう一度。これは任意であり、おすすめではありません。<br/>APKファイルの検証にはjarsignerを使用します。<br>'jar verified'を探します。<br>zipalignツールを使う必要があるかもしれません。Android.comサイトで確認してください。<br>しかし、Titanium 1.4以降では必要無いはずです。",

		"%l_upload_publish": "アップロードと公開",
		"%l_upload_publish_image": "<img src='images/upload-publish.png' style='margin-top:50px;height:550px;'/>",
		"%l_slidenote_upload_publish": "market.android.com/pubishへアップロードします。<br>いくつか情報が必要です。<br>その他<br>無料、Google Checkoutアカウントを持っているならば、価格を設定することも可能。",

		"%l_itunes_store": "iTunes AppStore",
		"%l_slidenote_itunes_store": "",

		"%l_ios_dep_release": "iOSアプリのリリース",
		"%l_ios_dep_release_image": "<img src='images/ios-dep-release_ja.png' style='margin-top:50px;height:350px;'/>",
		"%l_slidenote_ios_dep_release": "リリース用もテスト時と同じような手順<br>既に2つの手順が完了。",

		"%l_ios_distr_certificate": "配布用証明書",
		"%l_l_ios_distr_certificate_image": "<img src='images/ios-distr-certificate.png' style='margin-top:50px;height:550px;'/>",
		"%l_slidenote_ios_distr_certificate": "アプリをApp Storeに送信するには配布用証明書で署名する必要がある。<br>企業／チーム環境：<br>  - それぞれのデベロッパーはCSRと証明書を作成<br>  - チームマネージャーは別個のCSRと配布用証明書を作成<br>  - デベロッパー証明書は、他のデベロッパーや配布に影響無く無効にすることが可能。<br><br>個人デベロッパは<br>  - 配布証明書を作成するため開発CSRを再利用することが可能。<br>  - 希望があれば新しく作成することも可能。<br>アプリ開発者のアカウントでログインすること<br>最終ビルドで使われたマシンのキーチェーンにインストール",

		"%l_ios_distr_profile": "配布用プロビジョニングファイル",
		"%l_l_ios_distr_profile_image": "<img src='images/ios-distr-profile.png' style='margin-top:50px;height:550px;'/>",
		"%l_slidenote_ios_distr_profile": "特定のデバイスへの紐付けは無い。<br>App Storeへの申請が必要<br>配布用プロビジョニングファイルをダウンロード。",

		"%l_ios_install_profile": "配布用のビルド",
		"%l_l_ios_install_profile_image": "<img src='images/ios-install-prov-profile.png' style='margin-top:50px;height:550px;'/>",
		"%l_slidenote_ios_install_profile": "Ti Developerにインストール<br>- UploadボタンでXcodeへインストール。または別途行う。<br>キーチェーンに証明書が認識される。<br>Publishボタンでアプリをビルド、証明書の組み込みを行い、App StoreへアップロードするIPAファイルを作成。",

		"%l_itunes_connect": "iTunes Connect",
		"%l_portal": "アプリの管理ポータルサイト",
		"%l_sales_stats": "売上げ統計",
		"%l_contracts": "規約、税金、支払い、銀行情報",
		"%l_need_to": "iTunes Connectにアプリを登録",

		"%l_ios_app_itunes_connect": "iTunes Connectにアプリを登録",
		"%l_itunesconnect_image": "<img src='images/itunes-connect.png' style='margin-top:50px;height:550px;'/>",
		"%l_slidenote_ios_app_itunes_connect": "Bundle ID and suffixは、Titanium Studioで入力したものと同じにすること。<br>price, content rating等を順を追って設定する<br>512x512サイズのアイコンと少なくとも1枚のスクリーンショットが必要。",

		"%l_validate_upload": "確認とアップロード",
		"%l_validateupload_image": "<img src='images/validate-upload.png' style='margin-top:50px;height:550px;'/>",
		"%l_slidenote_validate_upload": "Xcode organizerのArchivesウィンドウ<br>アプリの確認 &mdash; iTunes Connect内のアプリを確認。必要な画像データ、証明書等<br>ValidateをクリックしてアプリやApp Store設定を確認する。<br/>Submitをクリックしてアプリを送信。または、Application Loader (Developer/Applications/Utilities folder)を使用してアップロードすることが可能。",

		"%l_app_store_reqs": "App Storeの要求事項",
		"%l_many_reqs": "要求事項 &mdash; iOS Dev Centerを確認",
		"%l_must_be": "有用で、デザインされたもの、エラーを起こさず動作すること",
		"%l_no_download": "コードをダウンロードしないこと",
		"%l_you_must": "許可を得た商標以外を使わないこと",
		"%l_no_hidden": "隠し機能の実装、プライベートAPIの使用は禁止",
		"%l_slidenote_app_store_reqs": "関連した経験を自由に記載",

		"%l_adhoc_distr": "Ad Hocによる配布",
		"%l_distr_outside": "App Storeを通さない配布",
		"%l_limited_to": "登録されたデバイスのみで動作",
		"%l_adhoc": "Ad Hocで配布されたアプリの有効期限は90日",
		"%l_deploy_by": "メール、配布フレームワーク、USBでのインストール",
		"%l_slidenote_adhoc_distr": "登録デバイスの上限は年間100台まで。",

		"%l_enterprise_distr": "Enterprise向けの配布",
		"%l_inhouse": "社内向け配布プログラム",
		"%l_distr_to": "社員やメンバーのみにアプリを配布",
		"%l_register_as": "会社や団体で登録。DUNS番号が必須",
		"%l_slidenote_enterprise_distr": "DUNSDUNS（Data Universal Numbering System）は、アメリカのダンアンドブラッドストリート（D&B）が管理している、企業コードの付与管理システム ",

		"%l_qa": "Q&A",
		"%l_slidenote_qa": "実習へ移る前に、質問があるか確認",

		"%l_lab": "実習内容",
		"%l_labobjective1": "オプション: 時間があれば",
		"%l_labobjective2": "TiBountyHunterをGoogle Play向けにビルド及びパッケージ",
		"%l_labobjective3": "全ての手順を進め、実際に送信する前に停止",
		"%l_labobjective4": "Google Play や iTunes App Storeアカウントが必要",
		"%l_labURL": "実習: <a href='https://wiki.appcelerator.org/display/td/295+Deploy+and+Distribute'>wiki.appcelerator.org/display/td/295+Deploy+and+Distribute</a>",

		"%l_slidenote_lab_exercise": ""
	}
});
