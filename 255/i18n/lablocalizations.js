/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_labname": "Lab - Working with Remote Data",
		"%l_mission": "<img src='labimages/finished_iphone.png' style='height:300px;float:right;margin-top:-40px;margin-bottom: 10px;'><strong>Mission: </strong>In this lab assignment, you will enhance the TiBountyHunter application by retrieving a list of fugitives from a remote web service and adding them to the local database. Once a fugitive is captured, you'll notify the remote web service, which keeps count of busted fugitives.",
		"%l_specification": "<strong>Specification: </strong>Start with the TiBountyHunter project you created for the last assignment. We need to implement the logic to get the list of fugitives from the remote URL. This Web service will return that list as an array of objects in JSON format, where each object represents a fugitive. Each object has one property, 'name', which is a string with the full name of the fugitive. Once this list is retrieved, we  store each fugitive in the local DB, using the functions created in the previous lab. This operation should be executed at the start of the app, and only one time. Each time the user clicks on the 'Capture' button, a request will be sent to the remote web service. It will pass the device's MAC address as a parameter. The web service tracks the number of fugitives busted by the hunter-owner of that device, and returns the value.",
		"%l_spec1": "Retrieve bounties from http://bountyhunterapp.appspot.com/bounties (via GET call).",
		"%l_spec2": "Post captured bounties to the same address (via POST).",
		
		"%l_labstep1": "1. Open the TiBountyHunter project you created for the last assignment, or download the starting point code and import it as a new project in Studio: <a href='http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/TiBH255.zip'>http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/TiBH255.zip</a>",
		"%l_labstepexplanation1": "",

		"%l_labstep2": "2. In the 'lib' folder, create a network module. It should contain two exported methods:<ul style='list-style:none;'><li>getFugitives(FUNCTION) &mdash; Accepts a callback function, which will be called and passed the XHR payload in the HTTP client's onload handler. </li><li>bustFugitive(STRING, FUNCTION) &mdash; Accepts the MAC address as a string and a callback function. Pass the XHR payload to the callback in the HTTP client's onload handler. Post the MAC address in field named 'udid'.</li></ul>",
		"%l_labstepexplanation2": "",

		"%l_labstep3": "3. Edit lib/db.js. At the end of the file, add a conditional block. If an app property named 'seeded' has <em>not</em> been set, require in your network library. Call the getFugitives() method. Pass to it a function that loops through the resulting data array and for each member calls the db.add() function. Within that callback, set the 'seeded' application property to any value so that this block won't be executed the next time the app is run.",
		"%l_labstepexplanation3": "",

		"%l_labstep4": "4. Update the /ui/common/DetailWindow.js file. In the Capture button's click handler, require your network library. Pass to it the device's MAC address and a callback function. That function should alert() the data returned from the network service. It should also close the window after a two-second delay on Android or immediately on iOS and Mobile Web.",
		"%l_labstepexplanation4": "",

		"%l_labstep5": "5. Build your app for the iOS simulator or Android emulator. Correct any problems that exist. ",
		"%l_labstepexplanation5": "",

		"%l_summary": "Summary",
		"%l_summarypara": "In this lab, you connected TiBountyHunter to a remote web service. On the app's first run, it seeds its database from a remote data store. As the user captures fugitives, the web service counts their actions and returns a simple message. These tasks illustrate the types of network interactions your real-world apps might implement.",

		"%l_resources": "Resources",
		"%l_resources1": "API docs: Network: <a href='http://docs.appcelerator.com/titanium/2.0/index.html#!/api/Titanium.Network'>http://docs.appcelerator.com/titanium/2.0/index.html#!/api/Titanium.Network</a>",
		"%l_resources2": "API docs: Properties <a href='http://docs.appcelerator.com/titanium/2.0/index.html#!/api/Titanium.App.Properties'>http://docs.appcelerator.com/titanium/2.0/index.html#!/api/Titanium.App.Properties</a>",
		"%l_resources3": "Guides: Remote Data: <a href='http://docs.appcelerator.com/titanium/2.0/index.html#!/guide/Working_with_Remote_Data_Sources'>http://docs.appcelerator.com/titanium/2.0/index.html#!/guide/Working_with_Remote_Data_Sources</a>",
		"%l_resources4": "Finished code: See the next lab or <a href='https://github.com/appcelerator-training/tcad-code/tree/master/Finished_code/TiBH255'>GitHub</a>",

	},
	"ja": {
		"%l_labname": "実習 - リモートデータ",
		"%l_mission": "<img src='labimages/finished_iphone.png' style='height:300px;float:right;margin-top:-40px;margin-bottom: 10px;'><strong>目標: </strong>この実習ではTiBountyHunterアプリを拡張してリモートのWebサービスから逃亡者のリストを取得してローカルのデータベースに保存します。逃亡者を捕まえたらリモートのWebサービスに通知し、そちらで捕まえた逃亡者の数を保存しておくようにします。",
		"%l_specification": "<strong>仕様: </strong>前回の実習で作成したTiBountyHunterプロジェクトから始めます。逃亡者のリストをリモートのURLから取得するロジックを実装する必要があります。このWebサービスはJSON形式でこのリストを配列として返し、それぞれのオブジェクトがひとりの逃亡者のデータになっています。各オブジェクトには「name」プロパティがあり、逃亡者のフルネームを文字列型となっています。このリストを取得したら、逃亡者のデータをローカルのDBに前回の実習で作成した関数を利用して保存します。この動作はアプリの起動時に動作するものなので、一度しか実行されません。ユーザが「Capture」ボタンをクリックするたびにリモートのWebサービスにリクエストが送信されます。このリクエストはデバイスのMACアドレスをパラメータとして送信します。Webサービス側はハンター、つまりデバイスの所有者が捕まえた逃亡者を記録して、その値を返します。",
		"%l_spec1": "逃亡者のデータはこちら http://bountyhunterapp.appspot.com/bounties (GETで呼び出し)",
		"%l_spec2": "逃亡者を捕まえたら同じアドレスにポストする(POSTで呼び出し).",
		
		"%l_labstep1": "1. 前回の実習で作成したTiBountyHunterプロジェクトを開きます。または今回の実習用ソースコードをダウンロードしてTitanium Studioに新規プロジェクトとしてimportします: <a href='http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/TiBH255.zip'>http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/TiBH255.zip</a>",
		"%l_labstepexplanation1": "",

		"%l_labstep2": "2. 「lib」フォルダにネットワークモジュールを作成します。これには2つのメソッドをexportします:<ul style='list-style:none;'><li>getFugitives(FUNCTION) &mdash; HTTPクライアントのonloadハンドラで呼び出される、XHRのレスポンスボディを引数とする関数を引数として受け取ります。</li><li>bustFugitive(STRING, FUNCTION) &mdash; MACアドレスの文字列とコールバック関数を引数とします。コールバックはHTTPクライアントのonloadハンドラで実行され、XHRのレスポンスボディを引数として渡されます。MACアドレスは「udid」というキーで送信します。</li></ul>",
		"%l_labstepexplanation2": "",

		"%l_labstep3": "3. lib/db.jsを編集します。ファイルの末尾に条件分岐を追加します。アプリのプロパティに「seeded」がセットされて<em>いない</em>場合は、ネットワークライブラリからrequireします。getFugitives()メソッドを呼び出します。このメソッドに配列データをループで回してそれぞれのメンバにdb.add()を適用する関数を渡します。このコールバックの中でアプリケーションのプロパティに「seeded」というキーで任意の値をセットし、このブロックが次回からのアプリ起動時には実行されないようにします。",
		"%l_labstepexplanation3": "",

		"%l_labstep4": "4. /ui/common/DetailWindow.jsファイルを更新します。「Capture」ボタンのクリックハンドラ内でネットワークライブラリをrequireしてください。デバイスのMACアドレスとコールバック関数を引数として渡します。この関数ではネットワークサービスからの戻り値をalert()で表示する必要があります。またAndroidでは2秒後、iOSとMobile Webではすぐにウィンドウを閉じます。",
		"%l_labstepexplanation4": "",

		"%l_labstep5": "5. iOSシミュレータまたはAndroidエミュレータでアプリをビルドします。問題があれば修正します。",
		"%l_labstepexplanation5": "",

		"%l_summary": "サマリー",
		"%l_summarypara": "この実習ではTiBountyHunterをリモートのWebサービスと接続させます。アプリの初回起動時にリモートのデータストアから取得したデータでデータベースを初期化します。ユーザーが逃亡者を捕まえたら、Webサービスはその数をかぞえて簡単なメッセージを返します。この一連のタスクで実際のアプリケーションで実装するであろうネットワークとの連携の詳細を説明していきます。",

		"%l_resources": "リソース",
		"%l_resources1": "API 資料: Network: <a href='http://docs.appcelerator.com/titanium/2.0/index.html#!/api/Titanium.Network'>http://docs.appcelerator.com/titanium/2.0/index.html#!/api/Titanium.Network</a>",
		"%l_resources2": "API 資料: Properties <a href='http://docs.appcelerator.com/titanium/2.0/index.html#!/api/Titanium.App.Properties'>http://docs.appcelerator.com/titanium/2.0/index.html#!/api/Titanium.App.Properties</a>",
		"%l_resources3": "ガイド: Remote Data: <a href='http://docs.appcelerator.com/titanium/2.0/index.html#!/guide/Working_with_Remote_Data_Sources'>http://docs.appcelerator.com/titanium/2.0/index.html#!/guide/Working_with_Remote_Data_Sources</a>",
		"%l_resources4": "完成版ソースコード: 次の実習を参照、またはこちら <a href='https://github.com/appcelerator-training/tcad-code/tree/master/Finished_code/TiBH255'>GitHub</a>",

	}
});
