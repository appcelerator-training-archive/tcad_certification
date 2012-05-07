/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object,
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_labname": "Lab - Working with Local Data",
		"%l_mission": "<img src='labimages/finished_iphone.png' style='height:300px;float:right;margin-top:-40px;margin-bottom: 10px;'><strong>Mission: </strong>In this lab assignment, you will back our fugitive list with actual data from a local SQL database (SQLite).  You will display the data-driven fugitive list, and update with every database change.",
		"%l_specification": "<strong>Specification: </strong>Start with the TiBountyHunter project you created for the last assignment. You will now add event handlers to update a local database. To successfully complete this lab, you must develop an application that meets the following description:",
		"%l_spec1": "Populate a table view with results from a SQL database",
		"%l_spec2": "Keep the fugitive lists up to date with every database change",
		"%l_spec3": "Implement the “Add” screen for the fugitive list, allowing the bounty hunter to add a new fugitive to the database",
		"%l_spec4": "Allow the user to delete fugitives",
		"%l_spec5": "Implement the “Capture” button, which will update a fugitive’s status in the database to “captured” and display him or her in the proper tab",


		"%l_labstep1": "1. Open the TiBountyHunter project you created for the last assignment, or download the starting point code and import it as a new project in Studio: <a href='http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/TiBH250.zip'>http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/TiBH250.zip</a>",
		"%l_labstepexplanation1": "",

		"%l_labstep2": "2. Create a new folder named 'lib' and in it a database module file. In that file, add the statements needed to create a database named 'TiBountyHunter' containing a table named 'fugitives'. That table should have these fields:<ul style='list-style:none;'><li>id &mdash; INTEGER PRIMARY KEY</li><li>name &mdash; TEXT</li><li>captured &mdash; INTEGER</li></ul>",
		"%l_labstepexplanation2": "Make sure to open, then close the database connection when your code finishes.",

		"%l_labstep3": "3. Write the following functions, each of which should be added to the exports list (so they can be called by the other modules):<ul style='list-style:none;'><li>list(BOOLEAN) &mdash; Returns a set of table rows representing either captured or at-large fugitives. Each row should have title, id, hasChild=true, color='#fff', name (duplicate of title), and captured=boolean properties</li><li>add(STRING) &mdash; Adds the named fugitive to the database. Fire an App-level event noting that the database has been updated.</li><li>del(PRIMARY_KEY) &mdash; Deletes the fugitive with the given ID. Fire the 'database updated' App-level event.</li><li>bust(PRIMARY_KEY) &mdash; Marks the fugitive with the given ID as captured.  Fire the 'database updated' App-level event.</li></ul>",
		"%l_labstepexplanation3": "",

		"%l_labstep4": "4. Update the ui/common/BountyTable.js file. Replace the statically-defined table with a call to your db.list() function. You will need to require in the module. Add an App-level event listener that will call populateData() when the 'database updated' event is received.",
		"%l_labstepexplanation4": "",

		"%l_labstep5": "5. Update the /ui/common/DetailWindow.js file. Add a click event listener to the Capture button. It should call your db.bust() function then close the detail window. Add a click event listener for the Delete button that calls your db.del() function and closes the window. Don't forget to require() in the database library file within the event listeners.",
		"%l_labstepexplanation5": "",

		"%l_labstep6": "6. Update the /ui/common/AddWindow.js file. Add a text field with hintText that directs the user to enter a new fugitive's name. Add a Save button that when clicked calls your db.add() function. Close the Add window after saving the new fugitive. Don't forget to require() in the database library within the event listener.",
		"%l_labstepexplanation6": "",

		"%l_labstep7": "7. Build your app for the iOS simulator or Android emulator. Correct any problems that exist. ",
		"%l_labstepexplanation7": "",

		"%l_summary": "Summary",
		"%l_summarypara": "In this lab, you improved upon TiBountyHunter by backing it with a SQLite database. Fugitives are now stored in a database for easy retrieval and updating. You enabled add, capture, and delete functionality with just a few lines of code.",

		"%l_resources": "Resources",
		"%l_resources1": "Guide: Working with a SQLite Database: <a href='http://docs.appcelerator.com/titanium/2.0/index.html#!/guide/Working_with_a_SQLite_Database'>http://docs.appcelerator.com/titanium/2.0/index.html#!/guide/Working_with_a_SQLite_Database</a>",
		"%l_resources2": "API docs: Databases <a href='http://docs.appcelerator.com/titanium/2.0/index.html#!/api/Titanium.Database'>http://docs.appcelerator.com/titanium/2.0/index.html#!/api/Titanium.Database</a>",
		"%l_resources3": "KitchenSink database example: <a href='https://github.com/appcelerator/KitchenSink/blob/master/Resources/examples/database.js'>https://github.com/appcelerator/KitchenSink/blob/master/Resources/examples/database.js</a>",
		"%l_resources4": "Finished code: See the next lab or <a href='https://github.com/appcelerator-training/tcad-code/tree/master/Finished_code/TiBH250'>GitHub</a>",

	},
	"ja": {
		"%l_labname": "実習 - ローカルデータの扱い",
		"%l_mission": "<img src='labimages/finished_iphone.png' style='height:300px;float:right;margin-top:-40px;margin-bottom: 10px;'><strong>目標: </strong>この実習では、ローカルのSQLデータベース(SQLite)にある実際のデータから逃亡者のリストを復元します。あなたはデータ駆動の逃亡者リストを表示し、データベースの変更に対して逐次更新します。",
		"%l_specification": "<strong>仕様: </strong>前回の課題で作成したTiBountyHunterプロジェクトから始めます。あなたはローカルのデータベースを更新する為に、いよいよイベントハンドラーを追加します。この実習を成功裏に終わらせるには、以下の記述を満たすアプリケーションを作らなければなりません。",
		"%l_spec1": "SQLデータベースからtableビューに追加します",
		"%l_spec2": "データベースのどの変更に関しても逃亡者リストを最新に保つ",
		"%l_spec3": "賞金稼ぎが新たな逃亡者をデータベースに追加できるよう、逃亡者リスト用の“Add”スクリーンを実装します",
		"%l_spec4": "ユーザに逃亡者を削除できるようにします",
		"%l_spec5": "逃亡者のデータベース内のステータスを“捕まった”に更新し、彼または彼女を適切なタブに表示する“Capture”ボタンを実装します",


		"%l_step1": "1. 最後の課題で作成したTiBountyHunterプロジェクトを開くか、以下から開始地点となるコードをダウンロードし、Studioに新しいプロジェクトとしてインポートします: <a href='http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/TiBH250.zip'>http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/TiBH250.zip</a>",
		"%l_labstepexplanation1": "",

		"%l_labstep2": "2. 'lib' という名の新しいフォルダーを作成し、中にデータベースのモジュールファイルを入れます。そのファイルの中で'TiBountyHunter'という名前のデータベースを作成し、'fugitives'というテーブルを含めるステートメントを追加してください。.そのテーブルは以下のフィールド持たなければなりません:<ul style='list-style:none;'><li>id &mdash; INTEGER PRIMARY KEY</li><li>name &mdash; TEXT</li><li>captured &mdash; INTEGER</li></ul>",
		"%l_stepexplanation2": "データベースとの接続をオープンし、コードが終わる時にクローズしていることを確認してください",

		"%l_labstep3": "3. (他のモジュールから呼べるように)exportsリストに追加される以下の関数を記述してください:<ul style='list-style:none;'><li>list(BOOLEAN) &mdash; 逮捕された、あるいは逃亡中の逃亡者を表すテーブルの行を返す。各行は、title、id、hasChild=true、color='#fff'、name (titleの複製)そしてcaptured=booleanプロパティを持たなければいけません。</li><li>add(STRING) &mdash; 名付けられた逃亡者をデータベースに登録する。データベースが更新されたことを通知するためにアプリ-レベルのイベントを発行する。</li><li>del(PRIMARY_KEY) &mdash; 指定されたIDの逃亡者を削除する。'database updated'アプリ-レベルのイベントを発行する。</li><li>bust(PRIMARY_KEY) &mdash; 指定したIDの逃亡者を捕まったとマークする。'database updated'アプリ-レベルのイベントを発行する。</li></ul>",
		"%l_labstepexplanation3": "",

		"%l_step4": "4. ui/common/BountyTable.jsファイルを更新します。静的に定義されてたtableをdb.list()関数を呼ぶように入れ替える。あなたはモジュール内でrequireを使う必要があります。'database updated'イベントを受け取ったらpopulateData()関数をコールするようにアプリ-レベルのイベントリスナーを追加してください。",
		"%l_labstepexplanation4": "",

		"%l_labstep5": "5. /ui/common/DetailWindow.jsファイルを更新します。Captureボタンにクリックイベントリスナーを追加します。db.bust()関数を呼んだ後に詳細ウィンドウをクローズします。Deleteボタンに、db.del()関数を呼んでウィンドウをクローズするクリックイベントリスナーを追加します。イベントリスナーの中のデータベースライブラリー内でrequire()するのを忘れないでください。",
		"%l_labstepexplanation5": "",

		"%l_labstep6": "6. /ui/common/AddWindow.jsファイルを更新します。新しい逃亡者の名前を入力するように促すhintTextを含んだtext fieldを追加してください。クリックした時にdb.add()関数を呼ぶSaveボタンを追加してください。新しい逃亡者を保存した後にAddウィンドウをクローズしてください。イベントリスナーの中のデータベースライブラリー内でrequire()するのを忘れないでください。",
		"%l_labstepexplanation6": "",

		"%l_labstep7": "7. iOSシミュレータもしくはAndroidエミュレータ向けにアプリをビルドしてください。存在するどんな問題も修正してください。",
		"%l_labstepexplanation7": "",

		"%l_summary": "まとめ",
		"%l_summarypara": "この実習では、TiBountyHunterをSQLiteデータベースを用いて状態を戻せるように改善しました。これで逃亡者はデータベースに保存され、容易に検索やアップデートができます。あなたは、追加、逮捕、そして削除の機能をほんの数行追加するだけで有効にしました。",

		"%l_resources": "リソース",
		"%l_resources1": "ガイド: Working with a SQLite Database: <a href='http://docs.appcelerator.com/titanium/2.0/index.html#!/guide/Working_with_a_SQLite_Database'>http://docs.appcelerator.com/titanium/2.0/index.html#!/guide/Working_with_a_SQLite_Database</a>",
		"%l_resources2": "API docs: Databases <a href='http://docs.appcelerator.com/titanium/2.0/index.html#!/api/Titanium.Database'>http://docs.appcelerator.com/titanium/2.0/index.html#!/api/Titanium.Database</a>",
		"%l_resources3": "KitchenSink database example: <a href='https://github.com/appcelerator/KitchenSink/blob/master/Resources/examples/database.js'>https://github.com/appcelerator/KitchenSink/blob/master/Resources/examples/database.js</a>",
		"%l_resources4": "完成版のコード: 次の実習を見るか、ここ<a href='https://github.com/appcelerator-training/tcad-code/tree/master/Finished_code/TiBH250'>GitHub</a>",

	}
});
