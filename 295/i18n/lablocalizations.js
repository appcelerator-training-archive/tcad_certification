/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_labname": "Lab: Deploy and Distribute",
		
		"%l_mission": "<strong>Mission: </strong>In this lab, you will deploy an app for testing on physical devices and follow the critical steps for publishing that app to the Android Market and iTunes App Store.",
		"%l_specification": "<strong>Specification: </strong>You will need the following resources to complete all aspects of this lab: ",

		"%l_spec1": "An Android device and USB cable",
		"%l_spec2": "An iOS device and USB cable",
		"%l_spec3": "A Google Play (Android Market) account",
		"%l_spec4": "An iOS Developer’s account",


		"%l_step1": "1. Download the starting file set from <a href='assets.appcelerator.com.s3.amazonaws.com/app_u/code/TiBountyHunter.zip'>assets.appcelerator.com.s3.amazonaws.com/app_u/code/TiBountyHunter.zip</a> and import the resulting files as a new Titanium Mobile project.",
		"%l_stepexplanation1": "",

		"%l_step2": "2: Connect your Android device and deploy the app to it. Test the app. It should offer the same functionality, considering Android platform specifics, as you see in the iOS simulator. <br/><br/>With your Android device still connected, open ddms and select your device in the top-left pane. Choose Device, Screen Capture. Save two representative screenshots to your desktop or home directory. Close ddms. Disconnect your device following your operating system’s procedure for safely removing USB devices.",
		"%l_stepexplanation2": "",

		"%l_step3": "3: Log onto your Apple Developer account and access the iOS Provisioning Portal. Create a developer’s certificate and install it to your keychain. Determine your iOS device’s UDID and register that device in the Provisioning Portal. Create an AppID for the TiBountyHunter using a wildcard CF Bundle ID. Create a Development Provisioning profile associating your certificate, device, and AppID. Download it to your computer. <br/><br/>Connect your iOS device. Using Titanium Studio, install the provisioning profile to XCode. Then install the app to your device. Test the app. It should offer the same functionality as you see in the iOS simulator. Disconnect your device following your operating system’s procedure for safely removing USB devices.",
		"%l_stepexplanation3": "",

		"%l_step4": "4: Using the Android SDK keytool utility, generate a key pair, storing the keystore file in your home directory or other location of your choice. Use tibh as the alias and titanium as the password (or use your existing password if you have a keystore already). When prompted, enter your name, company name, and location information. Use keytool to verify your keystore. <br/><br/>Using Titanium Studio, package the app for Android distribution. Use the keystore you created, entering the alias and password into the fields in Studio. When done, use jarsigner to verify the APK file.",
		"%l_stepexplanation4": "",

		"%l_step5": "5: Visit http://market.android.com/publish and log onto your Android Market account. Click Upload Application and then upload your APK. If prompted to, use zipalign to align your APK file then re-upload. Upload your two screenshots. Upload the 512x512 icon that you downloaded at the start of this lab. Name the app TiBountyHunter and enter a description of your choice. Select an application type and category, such as Games, Casual. Select Everyone (or Low Maturity) for the Content Rating. Check the two consent checkboxes to acknowledge Google’s terms and agreements. <br/><br/>Observe, but do not click the Save and Publish buttons. You won’t actually publish the app (the Market doesn’t need a thousand TiBountyHunter apps published by all our students). Click Delete or simply navigate away from the page to cancel.",
		"%l_stepexplanation5": "",

		"%l_step6": "6: Log onto the iOS Dev Center and access the iOS Provisioning Portal. Create a Distribution certificate and install it to your keychain. Create a Distribution Provisioning profile associating your distribution certificate and AppID. Download it to your computer. <br/><br/>Using Titanium Studio, install the distribution provisioning profile to XCode. Select your distribution certificate and then package the app for distribution.",
		"%l_stepexplanation6": "",

		"%l_step7": "7: Build and run the app in the iOS simulator and then use ⌘↑4 to capture a representative screenshot of the app. Using Preview, crop the screen to 320x480. Alternatively, you can use a tool like the iOS-Simulator Cropper listed in the Resources section below to automate the screen capture process.",
		"%l_stepexlpanation7": "",

		"%l_step8": "8: In the iOS Dev Center, access the iTunes Connect portal. Using the Manage Your Applications page, create an app entry for TiBountyHunter, noting the correct Bundle Seed ID and Suffix. Enter a description and select Games as the Primary Category and Educational as the Subcategory. Select None for each of the audience rating options. Upload the required screenshot and large icon (from the lab’s graphic assets). Save your changes. <br/><br/>Open Xcode and display the Organizer window. Click the Archives button. Your packaged app should be listed. Click Validate and enter your iOS Dev Center credentials when prompted. It can take considerable time for your app to be available for validation after entering it on iTunes Connect. If that process hasn't finished, the validation will fail with an “app not found” message.  <br/><br/>Do not upload the app. Apple will likely reject the app and the App Store doesn’t need lots of copies of TiBountyHunter anyway.",
		"%l_stepexplanation8": "",


		"%l_summary": "Summary",
		"%l_summarypara": "In this lab, you worked through the steps to publish an app to the iTunes App Store and the Google Market, now called Google Play. ",

		"%l_resources": "Resources",
		"%l_resources1": "iOS Simulator/Cropper, an optional but helpful tool for capturing iOS simulator screenshots in the correct sizes: <a href='http://www.curioustimes.de/iphonesimulatorcropper/'>http://www.curioustimes.de/iphonesimulatorcropper/</a>",
		"%l_resources2": "Guides: Preparing for Distribution: <a href='http://docs.appcelerator.com/titanium/2.0/index.html#!/guide/Preparing_for_Distribution'>http://docs.appcelerator.com/titanium/2.0/index.html#!/guide/Preparing_for_Distribution</a>"

	},
	"ja": {
		"%l_labname": "実習: デプロイと配布",
		
		"%l_mission": "<strong>ミッション: </strong>この実習では、テストのため実機にアプリをデプロイします。そして重要な手順に従ってGoogle PlayやApp Storeへアプリを公開します。",
		"%l_specification": "<strong>仕様: </strong>この実習の全ての課題を完了するためには以下のリソースが必要です：",

		"%l_spec1": "AndroidデバイスとUSBケーブル",
		"%l_spec2": "iOSデバイスとUSBケーブル",
		"%l_spec3": "Google Play (旧Android Market) アカウント",
		"%l_spec4": "iOSデベロッパアカウント",


		"%l_step1": "1. <a href='assets.appcelerator.com.s3.amazonaws.com/app_u/code/TiBountyHunter.zip'>assets.appcelerator.com.s3.amazonaws.com/app_u/code/TiBountyHunter.zip</a>から開始ファイルをダウンロードし、Titanium Mobileプロジェクトとしてインポートします。",
		"%l_stepexplanation1": "",

		"%l_step2": "2: Androidデバイスを接続してアプリをデプロイしたらテストします。Androidプラットフォームの仕様に合わせていますが、iOSシミュレーター上で見るのと機能は同じです。<br/><br/>Androidデバイスがまだ接続されている状態で、ddmsを開き、ウィンドウ上部左側のデバイス名を選択します。 デバイスの選択をしたらスクリーンキャプチャーを撮ります。2種類のスクリーンショットをデスクトップまたはホームディレクトリに保存します。ddmsを閉じ、コンピュータシステムの指示に従って、安全にデバイスを取り外します。",
		"%l_stepexplanation2": "",

		"%l_step3": "3: Appleデベロッパーアカウントでログインし、iOS Provisioning Portalを開きます。デベロッパーの証明書を作成し、キーチェーンにインストールします。iOSデバイスのUDIDを確認し、Provisioning Portalでデバイスを登録します。ワイルドカードのCF Bundle IDを使用してTiBountyHunterAppIDを作成します。証明書、デバイス、AppIDに紐付いた開発用プロビジョニングファイルを作成し、コンピュータにダウンロードします。<br/><br/>iOSデバイスを接続します。Titanium Studioを使用して、XCodeにプロビジョニングファイルをインストールします。そしてアプリをデバイスにインストールし、テストします。iOSシミュレーター上で見るのと機能は同じです。コンピュータシステムの指示に従って、安全にデバイスを取り外します。",
		"%l_stepexplanation3": "",

		"%l_step4": "4: Android SDK keytoolユーティリティーを使用して鍵ペアを生成し、ホームディレクトリまたは任意の場所にkeystoreファイルを保存します。エイリアスにtibh、パスワードとしてtitanium（既にkeystoreを持っている場合は既存のパスワード）を使用します。 プロンプトが出たら、名前、会社名、住所を入力します。keytoolを使用してkeystoreを検証します。<br/><br/>Titanium Studioを使用してAndroidアプリの配布のためアプリをパッケージングします。作成したkeystoreを使用して、Titanium Studio内のフィールドに先ほどのエイリアスとパスワードを入力します。完了したらjarsignerでAPKファイルを検証します。",
		"%l_stepexplanation4": "",

		"%l_step5": "5: http://market.android.com/publishへアクセスし、Google Playにログインします。Upload Applicationをクリックし、APKファイルをアップロードします。プロンプトが出たら、zipalignを使用してAPKファイルを調整し、再度アップロードします。2枚スクリーンショットをアップロードします。この実習の最初にダウンロードした512x512サイズのアイコンをアップロードします。アプリ名をTiBountyHunterに設定し、アプリの説明を入力します。ゲーム、カジュアルなどのように、アプリのタイプやカテゴリを選択します。コンテンツレーティングでEveryone（または低年齢）を選択します。Googleの規約及び契約に同意するため2つのチェックボックスにチェックを入れます。<br/><br/>注意すること。保存や公開ボタンはクリックしないこと。実際にはアプリの公開はしません。Google Playでは、生徒達が作成した同じTiBountyHunterは必要ありません。Deleteをクリックするか、そのページからキャンセルまで移動します。",
		"%l_stepexplanation5": "",

		"%l_step6": "6: iOS Dev Centerへログインし、iOS Provisioning Portalへアクセスします。配布用証明書を作成し、キーチチェーンにインストールします。配布用の証明書とAppIDに紐付いた配布用プロビジョニングファイルを作成し、ダウンロードします。<br/><br/>Titanium Studioを使用して配布用プロビジョニングファイルをXCodeにインストールします。そして、配布用証明書を選択し、パッケージングします。",
		"%l_stepexplanation6": "",

		"%l_step7": "7: アプリをビルドし、iOSシミュレーターで実行します。そして⌘↑4でアプリのスクリーンショットをキャプチャーします。プレビュー.appを使用して、スクリーンショット画像を320ｘ480サイズにクロップします。あるいは、下のリソースセクションでリストアップしているiOSシミュレーターのようなツールのCropperを使って、スクリーンキャプチャー処理を自動化することができます。",
		"%l_stepexlpanation7": "",

		"%l_step8": "8: iOS Dev CenterでiTunes Connectへアクセスします。Manage Your Applicationsを選択し、Bundle Seed IDやSuffixを間違えないように注意して、TiBountyHunterアプリを登録します。アプリの説明を入力し、主要なカテゴリにゲーム、サブカテゴリにEducationalを選択します。各々のaudience ratingオプションにはNoneを選択します。必要なスクリーンショットと大きなアイコン（実習のグラフィック素材から）をアップロードします。そして変更を保存します。<br/><br/>XCodeを開き、Organizerウィンドウを表示します。Archivesボタンをクリックします。先ほどパッケージングしたアプリが表示されます。Validateをクリックし、プロンプトが出たらiOS Dev Centerのログイン情報を入力します。iTunes Connect上でアプリの登録を行った後、Validationが利用可能になるまでに時間がかかる場合があります。この処理が完了するまでは、Validationを行っても<em>app not found</em>と言うメッセージが出て失敗します。<br/><br/>リジェクトされるので、アプリはアップロードしないでください。App StoreはTiBountyHunterのコピーを幾つも必要としません。",
		"%l_stepexplanation8": "",


		"%l_summary": "まとめ",
		"%l_summarypara": "この実習では、App StoreやGoogle Play(旧Android Market)にアプリを公開するための手順を行ってきました。 ",

		"%l_resources": "リソース",
		"%l_resources1": "iOSシミュレーター/Cropperは、便利なサードパーティーツールで、iOSシミュレーターのスクリーンショットを撮ることが可能です。: <a href='http://www.curioustimes.de/iphonesimulatorcropper/'>http://www.curioustimes.de/iphonesimulatorcropper/</a>",
		"%l_resources2": "ガイド: 配布の準備: <a href='http://docs.appcelerator.com/titanium/2.0/index.html#!/guide/Preparing_for_Distribution'>http://docs.appcelerator.com/titanium/2.0/index.html#!/guide/Preparing_for_Distribution</a>"

	}

});
