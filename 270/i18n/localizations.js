/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_filetitle": "Using Location Services",
		"%l_lessontitle": "Using Location Services",
		"%l_subtitle": "Building Native Mobile Apps With Appcelerator Titanium",
		"%l_slidenote_titleslide": "<b>Module time: 1:30</b><br/>(30 mins teach, 60 mins lab)",
		"%l_agenda_title": "Objectives",
		"%l_agenda1": "Learn to use GPS positioning in your applications",
		"%l_agenda2": "Use forward and reverse geocoding",
		"%l_agenda3": "Integrate native maps",
		"%l_agenda4": "Use custom map annotations",
		"%l_slidenote_agenda": "GPS positioning in your apps<br>Forward &amp; reverse geocoding to convert addresses to lat/long coords<br> or convert lat/long coords to addresses<br>Include native maps in your apps<br>Customize map annotations",

		"%l_overview": "Overview",
		"%l_location_apis": "Location APIs can be used for everything from device positioning to augmented reality applications. Taking location into account is mobile's killer feature.",
		"%l_slidenote_overview": "Location is one of mobile's killer features<br>Data delivery, augmented reality, mapping are all great features you can enable via location services",

		"%l_geolocation_support": "Geolocation Support in Titanium",
		"%l_detect_if": "Detect if geolocation support is available",
		"%l_obtain_once": "Obtain once or continually monitor the user's location",
		"%l_device_compass": "Device Compass (if available)",
		"%l_forward_and": "Forward and reverse geo-coding",
		"%l_slidenote_geolocation_support": "Forward: Address -> lat/long<br>Reverse: lat/long -> address<br/><br/>We'll look at platform specifics on the upcoming slides",

		"%l_geoios": "iOS Geolocation",
		"%l_iosgeoimage": "<img src='images/geopurpose.png' width='240'/>",
		"%l_geoios1": "iOS: Must set Ti.Geolocation.purpose",
		"%l_geoios2": "Check for authorization before using",
		"%l_geoios3": "Primary configuration: Ti.Geolocation.accuracy property (e.g. ACCURACY_BEST)",
		"%l_geoios4": "Also Ti.Geolocation.distanceFilter",
		"%l_geoios5": "Based on those, iOS chooses provider and tunings",
		"%l_slidenote_geoios": "Accuracy constants are qualifiers like BEST, NEAREST_TEN_METERS, etc.<br/>distanceFilter is in meters",


		"%l_geoandroid": "Android Geolocation",
		"%l_geoandroid1": "Pre Ti2.0, Android followed the iOS model &amp; methods",
		"%l_geoandroid2": "Ti2.0 adds specific Android features",
		"%l_geoandroid3": "Legacy, Simple, and Manual modes",
		"%l_geoandroid4": "Simple: enable with accuracy = ACCURACY_HIGH or ACCURACY_LOW",
		"%l_geoandroid5": "Manual: More control, more precision, more provider options",
		"%l_slidenote_geoandroid": "Implementing iOS model led to inefficiencies and inaccuracies<br/>Simple mode is a compromise: easy to set up but not hugely accurate<br/>Manual involves more work but can be very precise.<br/>One-time geo fixes normally return a cached location on Android",

		"%l_geomw": "Mobile Web Geolocation",
		"%l_geomw1": "Browser must support W3C Geolocation spec",
		"%l_geomw2": "Implementation &amp; accuracy varies",
		"%l_geomw3": "User must grant permission",
		"%l_geomw4": "But, you can't change the message",
		"%l_slidenote_geomw": "Generally limited by the browser environment<br/>That environment varies by device, operating system, and browser version.",

		"%l_geolocation_gotchas": "Geolocation Gotchas",
		"%l_continually_monitoring": "Continually monitoring GPS drains battery faster",
		"%l_android_emulator": "Android emulator: GPS might not be enabled<br>    Edit the AVD to add GPS support",
		"%l_android_emulator_no_default": "Android emulator: no default location<br>    Use DDMS to send location",
		"%l_android_need": "Android: need API key from Google for maps",
		"%l_maps_demo": "Maps demo",
		"%l_slidenote_geolocation_gotchas": "If you set a listener, especially on Android make sure to remove it when the app is backgrounded or closed to stop geolocation services.<br><br/><b>Demo &mdash; do on Android</b><ol><li>Start Android emulator</li><li>Open Maps &mdash; no user location available</li><li>Open DDMS, send location</li><li>In emulator, open Maps, location now available</li></ul>** stop here &mdash; you can demo more about maps on the upcoming slides",

		"%l_geodemo": "Geolocation Demo",
		"%l_demo_kitchen_sink": "Demo: Kitchen Sink Geolocation<br/>Kitchen Sink > Phone > Geolocation",
		"%l_slidenote_geodemo": "Demo: Kitchen Sink > Phone > Geolocation<br>Code: examples/geolocation.js<ul><li>purpose</li><li>if(locationServicesEnabled==false)</li><li>authorization</li><li>getCurrentPosition() &mdash; single shot</li><ul><li>coords object</li></ul><li>addEventListener and locationCallback function</li><li>forward and reverse geo</li><li>point out Android lifecycle events for managing GPS</li></ul>",


		"%l_native_map_kits": "Native Map Kits",
		"%l_native_maps": "Native maps provide zooming, scrolling, and different display types",
		"%l_points_of": "Points of interest are added with Annotations (pins)",
		"%l_support_for": "Support for drawing routes (iOS)",
		"%l_can_choose": "Can choose center point and initial display range",
		"%l_slidenote_native_map_kits": "Embed or full screen maps<br>Routes on iOS, check the Q&amp;A for an Android solution",

		"%l_more_on": "More on Annotations",
		"%l_annotations_can": "Annotations can be added on or after creation",
		"%l_can_customize": "Can customize:",
		"%l_pin_image": "Pin image/color",
		"%l_title_sub": "Title/Subtitle",
		"%l_right_left": "Right/Left Button",
		"%l_can_individually": "Can individually update pins, all are set at the same time",
		"%l_slidenote_more_on": "Adding Points of Interest (POI)<br>Create annotations prior to rendering the map or add dynamically after<br>Pins/annotations customizable<br>Gotchas:<ul><li>Need Google API extensions for Android</li><li>Android: need a map key (free) see KitchenSink</li></ul>",

		"%l_demo": "Demo",
		"%l_slidenote_demo": "KitchenSink: Base UI > Views > Map View<ul><li>embedded map</li><li>discuss annotation components</li><li>map types</li><li>zooming</li><li>user location (no default on Android)</li></ul>examples/map_view.js<ul><li>~line 22 createAnnotation()</li><li>~line 60 createMapView()</li><ul><li>mapType reference API docs</li><li>region: lat/long &amp; delta</li><li>userLocation</li><li>annotations</li></ul><li>tiapp.xml</li><ul><li>Google map keys &amp; link to get your own</li></ul></ul>",

		"%l_qa": "Q&amp;A",
		"%l_slidenote_qa": "",
		
		"%l_labgoals": "Lab Goals",
		"%l_add_captured": "Add captured-at coordinates to a fugitive's record in the database",
		"%l_lab_spec": "Lab Spec:",
		"%l_uninstall_app": "Uninstall app",
		"%l_modify_db": "Modify database to include capturedLat and capturedLong properties for GPS",
		"%l_when_a": "When a fugitive is captured, persist their location",
		"%l_from_the": "From the detail page, provide a native map which shows their position when they were captured.",
		"%l_labURL": "<a href='https://wiki.appcelerator.org/display/td/270+Using+Location+Services'>wiki.appcelerator.org/display/td/270+Using+Location+Services</a>",
		"%l_slidenote_TiBountyHunter": "Uninstalling because database is changing<br>Demo app: TiBH270<ol><li>Capture a fugitive</li><li>Explain location prompt (if it shows)</li><li>On captured tab, view details</li><li>Click Show on Map</li><li>Click pin to show custom annotation</li></ul>",

		"%l_lab": "Lab Exercise",
		"%l_slidenote_lab": "",

		"%l_solution": "Solution Walkthrough",
		"%l_slidenote_solution": "<b>Code Walk through &mdash; TiBH270</b><br><u>db.js</u><ul><li>new database fields</li><li>list() &mdash; new properties for lat/long</li><li>bust() &mdash; new lat/long properties saved</li></ul><u>ui.js</u><ul><li>createMapWindow() function</li><ul><li>accepts _bounty which has lat/long data</li><li>annotation</li><li>createMapView()</li></ul><li>Geolocation.purpose</li><li>createDetailWindow()</li><ul><li>changes to capture button event handler(one-time geolocation, call to bust() )</li><li>New map button</li></ul>"
	},

	"ja": {
		"%l_filetitle": "位置情報サービスの利用",
		"%l_lessontitle": "位置情報サービスの利用",
		"%l_subtitle": "Appcelerator Titaniumによるネイティブアプリ開発",
		"%l_slidenote_titleslide": "<b>所要時間: 60分</b>(解説 30分、実習 30分)",
		"%l_agenda_title": "目標",
		"%l_agenda1": "アプリ内でGPS位置情報の使い方を学ぶ",
		"%l_agenda2": "ジオコーディングと逆ジオコーディングの利用",
		"%l_agenda3": "ネイティブのマップビューとの統合",
		"%l_agenda4": "アノテーションのカスタマイズ",
		"%l_slidenote_agenda": "GPS位置情報アプリ<br>Forward &amp; reverse geocoding to convert addresses to lat/long coords<br> or convert lat/long coords to addresses<br>Include native maps in your apps<br>Customize map annotations",

		"%l_overview": "概要",
		"%l_location_apis": "位置情報APIはデバイスの位置情報からARアプリまであらゆるアプリに利用可能。位置情報を取り入れることはモバイルのキラー（最も魅力的な）機能",
		"%l_slidenote_overview": "Location is one of mobile's killer features<br>Data delivery, augmented reality, mapping are all great features you can enable via location services",

		"%l_geolocation_support": "Titaniumの位置情報サポート",
		"%l_detect_if": "位置情報機能が利用可能か検知",
		"%l_obtain_once": "ユーザの位置情報を一度きりまたは継続的にモニターする",
		"%l_device_compass": "デバイスの電子コンパス（利用可能な場合のみ）",
		"%l_forward_and": "ジオコーディングと逆ジオコーディング",
		"%l_slidenote_geolocation_support": "Forward: Address -> lat/long<br>Reverse: lat/long -> address<br/><br/>We'll look at platform specifics on the upcoming slides",

		"%l_geoios": "iOSの位置情報",
		"%l_iosgeoimage": "<img src='images/geopurpose.png' width='240'/>",
		"%l_geoios1": "iOS: Ti.Geolocation.purposeを必ず指定すること",
		"%l_geoios2": "利用前に許諾を得る",
		"%l_geoios3": "最初の設定: Ti.Geolocation.accuracyプロパティ(ACCURACY_BEST等)",
		"%l_geoios4": "Ti.Geolocation.distanceFilterも",
		"%l_geoios5": "これらの設定を元にiOSはプロバイダと精度を設定",
		"%l_slidenote_geoios": "Accuracy constants are qualifiers like BEST, NEAREST_TEN_METERS, etc.<br/>distanceFilter is in meters",


		"%l_geoandroid": "Androidの位置情報",
		"%l_geoandroid1": "Ti2.0以前はiOSのモデルとメソッドと同じ",
		"%l_geoandroid2": "Ti2.0からはAndroid固有の機能を追加",
		"%l_geoandroid3": "レガシー、シンプル、マニュアルモード",
		"%l_geoandroid4": "シンプル: accuracy = ACCURACY_HIGH または ACCURACY_LOW",
		"%l_geoandroid5": "マニュアル: さらに多くのコントロール、精度、プロバイダのオプション",
		"%l_slidenote_geoandroid": "Implementing iOS model led to inefficiencies and inaccuracies<br/>Simple mode is a compromise: easy to set up but not hugely accurate<br/>Manual involves more work but can be very precise.<br/>One-time geo fixes normally return a cached location on Android",

		"%l_geomw": "Mobile Webの位置情報",
		"%l_geomw1": "ブラウザのW3Cの位置情報仕様サポートが必須",
		"%l_geomw2": "実装や精度は様々",
		"%l_geomw3": "ユーザが権限を許諾する必要がある",
		"%l_geomw4": "でも、メッセージを変更することはできない",
		"%l_slidenote_geomw": "Generally limited by the browser environment<br/>That environment varies by device, operating system, and browser version.",

		"%l_geolocation_gotchas": "位置情報についてあれこれ",
		"%l_continually_monitoring": "GPSを継続的にモニタしているとバッテリの消費が速くなってしまう",
		"%l_android_emulator": "Androidエミュレータ: GPSがオフになっているかもしれない<br>    AVDを編集してGPSサポートを追加",
		"%l_android_emulator_no_default": "Androidエミュレータ: デフォルトの位置情報がない<br>    DDMSから位置情報を送信",
		"%l_android_need": "Android: GoogleからGoogleマップのAPIキーを取得",
		"%l_maps_demo": "マップのデモ",
		"%l_slidenote_geolocation_gotchas": "If you set a listener, especially on Android make sure to remove it when the app is backgrounded or closed to stop geolocation services.<br><br/><b>Demo &mdash; do on Android</b><ol><li>Start Android emulator</li><li>Open Maps &mdash; no user location available</li><li>Open DDMS, send location</li><li>In emulator, open Maps, location now available</li></ul>** stop here &mdash; you can demo more about maps on the upcoming slides",

		"%l_geodemo": "位置情報のデモ",
		"%l_demo_kitchen_sink": "デモ: Kitchen Sink Geolocation<br/>Kitchen Sink > Phone > Geolocation",
		"%l_slidenote_geodemo": "Demo: Kitchen Sink > Phone > Geolocation<br>Code: examples/geolocation.js<ul><li>purpose</li><li>if(locationServicesEnabled==false)</li><li>authorization</li><li>getCurrentPosition() &mdash; single shot</li><ul><li>coords object</li></ul><li>addEventListener and locationCallback function</li><li>forward and reverse geo</li><li>point out Android lifecycle events for managing GPS</li></ul>",


		"%l_native_map_kits": "ネイティブマップキット",
		"%l_native_maps": "ネイティブ機能のマップはズーム、スクロールや複数のディスプレイタイプ機能を提供",
		"%l_points_of": "アノテーション（ピン）で大事なポイントを追加",
		"%l_support_for": "道のり情報の描画をサポート(iOS)",
		"%l_can_choose": "中心点と表示範囲の初期値を選択可能",
		"%l_slidenote_native_map_kits": "Embed or full screen maps<br>Routes on iOS, check the Q&amp;A for an Android solution",

		"%l_more_on": "アノテーションについて詳しく",
		"%l_annotations_can": "アノテーションはマップの作成時も後からでも追加可能",
		"%l_can_customize": "カスタマイズ可能な機能:",
		"%l_pin_image": "ピンの画像と色",
		"%l_title_sub": "タイトルとサブタイトル",
		"%l_right_left": "右と左のボタン",
		"%l_can_individually": "ピンを個別に更新することも可能、全て同時に設定される",
		"%l_slidenote_more_on": "Adding Points of Interest (POI)<br>Create annotations prior to rendering the map or add dynamically after<br>Pins/annotations customizable<br>Gotchas:<ul><li>Need Google API extensions for Android</li><li>Android: need a map key (free) see KitchenSink</li></ul>",

		"%l_demo": "デモ",
		"%l_slidenote_demo": "KitchenSink: Base UI > Views > Map View<ul><li>embedded map</li><li>discuss annotation components</li><li>map types</li><li>zooming</li><li>user location (no default on Android)</li></ul>examples/map_view.js<ul><li>~line 22 createAnnotation()</li><li>~line 60 createMapView()</li><ul><li>mapType reference API docs</li><li>region: lat/long &amp; delta</li><li>userLocation</li><li>annotations</li></ul><li>tiapp.xml</li><ul><li>Google map keys &amp; link to get your own</li></ul></ul>",

		"%l_qa": "Q&amp;A",
		"%l_slidenote_qa": "",
		
		"%l_labgoals": "実習の目標",
		"%l_add_captured": "データベースの逃亡者のレコードに捕まえた位置の情報を追加",
		"%l_lab_spec": "実習の仕様:",
		"%l_uninstall_app": "アプリをアンインストール",
		"%l_modify_db": "データベースを更新してGPS用にcapturedLatとcapturedLongプロパティを追加",
		"%l_when_a": "逃亡者を捕まえたらその位置情報を残す",
		"%l_from_the": "詳細ページで捕まった位置を示すネイティブマップを提供",
		"%l_labURL": "<a href='https://wiki.appcelerator.org/display/td/270+Using+Location+Services'>wiki.appcelerator.org/display/td/270+Using+Location+Services</a>",
		"%l_slidenote_TiBountyHunter": "Uninstalling because database is changing<br>Demo app: TiBH270<ol><li>Capture a fugitive</li><li>Explain location prompt (if it shows)</li><li>On captured tab, view details</li><li>Click Show on Map</li><li>Click pin to show custom annotation</li></ul>",

		"%l_lab": "Lab Exercise",
		"%l_slidenote_lab": "",

		"%l_solution": "ソリューション・ウォークスルー",
		"%l_slidenote_solution": "<b>Code Walk through &mdash; TiBH270</b><br><u>db.js</u><ul><li>new database fields</li><li>list() &mdash; new properties for lat/long</li><li>bust() &mdash; new lat/long properties saved</li></ul><u>ui.js</u><ul><li>createMapWindow() function</li><ul><li>accepts _bounty which has lat/long data</li><li>annotation</li><li>createMapView()</li></ul><li>Geolocation.purpose</li><li>createDetailWindow()</li><ul><li>changes to capture button event handler(one-time geolocation, call to bust() )</li><li>New map button</li></ul>"
	}
});
