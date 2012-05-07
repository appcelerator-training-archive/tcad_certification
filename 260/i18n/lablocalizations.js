/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_labname": "Lab - Working with Media and the File System",
		"%l_mission": "<img src='labimages/finished_iphone.png' style='height:300px;float:right;margin-top:-40px;margin-bottom: 10px;'><strong>Mission: </strong>In this lab assignment, you will use the camera to add an image to your fugitive. You will save the image to the file system, and provide a url to the database for easy retrieval. You will also learn how to repopulate your database with remote data.",
		"%l_specification": "<strong>Specification: </strong>Start with the TiBountyHunter project you created for the last assignment. You will now add the camera function and mechanisms to support taking a picture, saving it, and retrieving it for viewing in a detail window. To successfully complete this lab, you must develop an application that meets the following description:",
		"%l_spec1": "Add a button in the detail view to snap a picture with the camera.",
		"%l_spec2": "Save the image to the file system and in the database as a url.",
		"%l_spec3": "Extend the database model with the addPhoto function",
		"%l_spec4": "Extend the UI with the needed buttons and images",
		
		"%l_labstep1": "1. Open the TiBountyHunter project you created for the last assignment, or download the starting point code and import it as a new project in Studio: <a href='http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/TiBH260.zip'>http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/TiBH260.zip</a>",
		"%l_labstepexplanation1": "",

		"%l_labstep2": "2. Edit the lib/db.js file. <ul style='list-style:none;'><li>Update the 'bootstrap' code so that your database will include a TEXT field named 'url' to store the path to the fugitive's photo.</li><li>update list() to return the value of the 'url' field</li><li>Add a new addPhoto() function that will accept the fugitive's ID and the photo URL. It should fire the 'database updated' event.</li></ul>",
		"%l_labstepexplanation2": "Because you're changing the database and we're not writing any alter-table statements, you will need to uninstall the app from the simulator/emulator. If you're starting a new project rather than editing your earlier work, this won't be a problem for you.",

		"%l_labstep3": "3. Edit the ui/common/DetailWindow.js file. <ul style='list-style:none;'><li>Add an ImageView at the top of the window that will show either the fugitive's photo or '/images/burglar.png' image if a photo isn't available.</li><li>Below the image, add an 'Add Photo' button that when clicked will show either the camera or photo gallery picker (if the camera isn't supported). Save the resulting image to the applicationDataDirectory with the name 'photo'+bountyID+'.png'. Save the path to that file to the database. Enable editing and save the result back to the gallery.</li></ul>",
		"%l_labstepexplanation3": "",

		"%l_labstep4": "4. Make sure to update the internationalization strings.xml file.",
		"%l_labstepexplanation4": "",

		"%l_labstep5": "5. Build your app for the iOS simulator or Android emulator. Add images to the photo gallery. Test the Add Photo functionality. Correct any problems that exist.",
		"%l_labstepexplanation5": "Don't forget to uninstall the old version of the app before running the new version.",

		"%l_summary": "Summary",
		"%l_summarypara": "In this lab, you added images and support for the camera or photo gallery to TiBountyHunter. You saved those images to the local file system, and saved the path to those images in the database to limit the chances of over-consuming memory when you later read that database.",

		"%l_resources": "Resources",
		"%l_resources1": "API docs: Media: <a href='http://docs.appcelerator.com/titanium/2.0/index.html#!/api/Titanium.Media'>http://docs.appcelerator.com/titanium/2.0/index.html#!/api/Titanium.Media</a>",
		"%l_resources2": "API docs: Filesystem <a href='http://docs.appcelerator.com/titanium/2.0/index.html#!/api/Titanium.Filesystem'>http://docs.appcelerator.com/titanium/2.0/index.html#!/api/Titanium.Filesystem</a>",
		"%l_resources3": "Guides: Filesystem Access and Storage: <a href='http://docs.appcelerator.com/titanium/2.0/index.html#!/guide/Filesystem_Access_and_Storage'>http://docs.appcelerator.com/titanium/2.0/index.html#!/guide/Filesystem_Access_and_Storage</a>",
		"%l_resources4": "Finished code: See the next lab or <a href='https://github.com/appcelerator-training/tcad-code/tree/master/Finished_code/TiBH260'>GitHub</a>",

	},
	"ja": {
		"%l_labname": "実習 - メディアとファイルシステム",
		"%l_mission": "<img src='labimages/finished_iphone.png' style='height:300px;float:right;margin-top:-40px;margin-bottom: 10px;'><strong>目標: </strong>この実習では逃亡者データにカメラで画像を追加します。ファイルシステムに画像を保存して、簡単にアクセスできるようにデータベースにファイルのURLを渡します。またリモートデータを再投入するかを学んでいきます。",
		"%l_specification": "<strong>仕様: </strong>前回の実習で作成したTiBountyHunterプロジェクトから始めます。ではカメラ機能と、写真を撮影して保存し、詳細画面で閲覧時に取得できるようにします。本実習を成功させるには次に説明する通りの機能を作らなければいけません:",
		"%l_spec1": "詳細画面にカメラで撮影するボタンを追加",
		"%l_spec2": "ファイルシステムに画像を保存してデータベースにそのURLを保存",
		"%l_spec3": "addPhoto関数を追加してデータベースモデルを拡張",
		"%l_spec4": "必要なボタンと画像でUIを拡張",
		
		"%l_labstep1": "1. 前回の実習で作成したTiBountyHunterプロジェクトを開きます。または今回の実習用ソースコードをダウンロードしてTitanium Studioに新規プロジェクトとしてimportします: <a href='http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/TiBH260.zip'>http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/TiBH260.zip</a>",
		"%l_labstepexplanation1": "",

		"%l_labstep2": "2. lib/db.jsを編集します。<ul style='list-style:none;'><li>「bootstrap」コードを修正してデータベースに「url」フィールドをテキスト型で追加し、逃亡者データの画像ファイルへのパスを登録できるようにします。</li><li>list()関数を修正して「url」フィールドの値を返すようにします。</li><li>新たに逃亡者のIDと画像のURLを引数とするaddPhoto()関数を追加します。この中で「database updated」イベントを発生させる必要があります。</li></ul>",
		"%l_labstepexplanation2": "データベースを変更しましたがALTER TABLEを書いてはいませんのでアプリをシミュレータ／エミュレータからいったんアンインストールする必要があります。これまでのデータを更新しているのではなく新規にプロジェクトを作成している場合はその必要はありません。",

		"%l_labstep3": "3. ui/common/DetailWindow.jsファイルを編集します。<ul style='list-style:none;'><li>ウィンドウのトップに逃亡者の写真または写真が登録されていない場合には「/images/burglar.png」を表示するImageViewを追加します。</li><li>画像の下には「Add Photo」ボタンを追加して、クリックされたらカメラ（またはカメラがサポートされていない場合は）フォトギャラリーを表示します。画像はapplicationDataDirectoryに「photo」+「bountyID」+「.png」というファイル名で保存します。ファイルへのパスはデータベースに保存します。画像は編集可として、ギャラリーに保存するようにします。</li></ul>",
		"%l_labstepexplanation3": "",

		"%l_labstep4": "4. 国際化対応のためのstrings.xmlを更新します。",
		"%l_labstepexplanation4": "",

		"%l_labstep5": "5. iOSシミュレータまたはAndroidエミュレータでアプリをビルドします。画像をフォトギャラリーに追加しておきましょう。「Add Photo」機能をテストします。問題があれば修正します。",
		"%l_labstepexplanation5": "新バージョンを起動する前に古いバージョンを忘れずにアンインストールしておきましょう。",

		"%l_summary": "まとめ",
		"%l_summarypara": "この実習ではTiBountyHunterに画像とカメラまたはフォトギャラリーのサポートを追加しました。画像をローカルのファイルシステムに保存し、ファイルへのパスをデータベースに保存しましたが、これにより後でデータベースを読み込む際にメモリ不足になる可能性を下げることになります。",

		"%l_resources": "資料",
		"%l_resources1": "API ドキュメント: Media: <a href='http://docs.appcelerator.com/titanium/2.0/index.html#!/api/Titanium.Media'>http://docs.appcelerator.com/titanium/2.0/index.html#!/api/Titanium.Media</a>",
		"%l_resources2": "API ドキュメント: Filesystem <a href='http://docs.appcelerator.com/titanium/2.0/index.html#!/api/Titanium.Filesystem'>http://docs.appcelerator.com/titanium/2.0/index.html#!/api/Titanium.Filesystem</a>",
		"%l_resources3": "ガイド: Filesystem Access and Storage: <a href='http://docs.appcelerator.com/titanium/2.0/index.html#!/guide/Filesystem_Access_and_Storage'>http://docs.appcelerator.com/titanium/2.0/index.html#!/guide/Filesystem_Access_and_Storage</a>",
		"%l_resources4": "完成版ソースコード: 次の実習を参照するか<a href='https://github.com/appcelerator-training/tcad-code/tree/master/Finished_code/TiBH260'>GitHub</a>を参照",

	}
});
