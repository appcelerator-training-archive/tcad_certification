/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_labname": "Lab: Integrating Web Content",
		
		"%l_mission": "<strong>Mission: </strong>In this lab, you will integrate web content into a partially-completed RSS reader. Individual articles will be displayed in a web view within a modal window. A local HTML file will be shown in an 'About' tab.",
		"%l_specification": "<strong>Specification: </strong>You will download a partially-completed file and add the missing functionality. The finished app will look like this:<br/><img src='labimages/webview1.png' height='300' align='left'><img src='labimages/webview2.png' height='300' align='left'><img src='labimages/webview3.png' height='300' align='left'>",

		"%l_step1": "1. Download the starting file set from <a href='http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/Lab285.zip'>http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/Lab285.zip</a> and import the resulting files as a new Titanium Mobile project.",
		"%l_stepexplanation1": "",

		"%l_step2": "2. Examine the contents of the app.js, ui/TabGroup.js, and lib/network.js files. These files have been completed for you.",
		"%l_stepexplanation2": "We've written most of the UI features and network functions so that you can concentrate on adding the web view functionality. Of course, at this point, the app doesn't do anything.",

		"%l_step3": "3. Open the <strong>ui/RSSWindow.js</strong> file. In the table event listener, follow the code comments to require in the appropriate module, instantiate the window, and open it.",
		"%l_stepexplanation3": "When users tap on a row, this window will open and display the contents of the blog article.",

		"%l_step4": "4. Open <strong>ui/ArticleWindow.js</strong> and following the comments in that file, write the code to define the window that will contain the web view for showing the blog articles.",
		"%l_stepexplanation4": "",

		"%l_step5": "5. Open <strong>ui/AboutWindow.js</strong> and following the comments in that file, write the code to define the window that will display the index.html file on the 'About' tab.",
		"%l_stepexplanation5": "",

		"%l_step6": "6. 6. Save your changes in all files and build your project for the simulator/emulator.",
		"%l_stepexplanation6": "",

		"%l_step7": "7. Test your work by viewing an article or two and by displaying the About tab.",
		"%l_stepexlpanation7": "",

		"%l_step8": "8. Close the simulator/emulator and all open files in Studio.",
		"%l_stepexplanation8": "",


		"%l_summary": "Summary",
		"%l_summarypara": "In this lab, you implemented web views in two different ways. In one, the contents of a blog post are displayed in a web view. In the other, the contents of a local HTML file are displayed within a web view to illustrate how you can display formatted text in that manner.",

		"%l_resources": "Resources",
		"%l_resources1": "API docs: WebView: <a href='http://docs.appcelerator.com/titanium/2.0/index.html#!/api/Titanium.UI.WebView'>http://docs.appcelerator.com/titanium/2.0/index.html#!/api/Titanium.UI.WebView</a>",
		"%l_resources2": "Guides: Integrating Web Content: <a href='http://docs.appcelerator.com/titanium/2.0/index.html#!/guide/Integrating_Web_Content'>http://docs.appcelerator.com/titanium/2.0/index.html#!/guide/Integrating_Web_Content</a>",
		"%l_resources3": "Finished code: <a href='https://github.com/appcelerator-training/tcad-code/tree/master/Finished_code/TiBH285'>GitHub</a>",

	},
	"ja": {
		"%l_labname": "実習: Webコンテンツとの統合",
		
		"%l_mission": "<strong>ミッション: </strong>この実習では、開発途中のRSSリーダーにWebコンテンツを統合します。個々の記事はモーダルウィンドウ内のWebviewに表示されます。AboutタブにはローカルHTMLファイルが表示されます。",
		"%l_specification": "<strong>仕様: </strong>開発途中のファイルをダウンロードし、不足している機能を追加します。最終的にアプリは以下のようになります。<br/><img src='labimages/webview1.png' height='300' align='left'><img src='labimages/webview2.png' height='300' align='left'><img src='labimages/webview3.png' height='300' align='left'>",

		"%l_step1": "1. <a href='http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/Lab285.zip'>http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/Lab285.zip</a>から開始ファイルをダウンロードし、新規プロジェクトとしてファイルをインポートします。",
		"%l_stepexplanation1": "",

		"%l_step2": "2. app.js, ui/TabGroup.js, and lib/network.jsの中身を確認します。これらのファイルは完成済みです。",
		"%l_stepexplanation2": "UIやネットワーク機能のほとんどは完成しているので、Webview機能の追加に集中できるでしょう。もちろんこの時点でアプリは何も処理をしません。",

		"%l_step3": "3. <strong>ui/RSSWindow.js</strong>を開き、テーブルイベントリスナー内に、コメントに従って、ウィンドウのインスタンスを作成し、開きます。",
		"%l_stepexplanation3": "rowをタップするとこのウィンドウが開き、ブログ記事のコンテンツが表示されます。",

		"%l_step4": "4. <strong>ui/ArticleWindow.js</strong>を開き、コメントに従って、ブログ記事を表示するwebviewをウィンドウに組み込むコードを書きます。",
		"%l_stepexplanation4": "",

		"%l_step5": "5. <strong>ui/AboutWindow.js</strong>を開き、コメントに従って、Aboutタブで表示するindex.htmlをウィンドウに組み込むコードを書きます。",
		"%l_stepexplanation5": "",

		"%l_step6": "6. 変更した全てのファイルを保存し、シミュレーター／エミュレーターで確認するためプロジェクトをビルドします。",
		"%l_stepexplanation6": "",

		"%l_step7": "7. ブログ記事を閲覧したり、Aboutタブを表示してみてください。",
		"%l_stepexlpanation7": "必要があれば、修正し再度ビルドしてください。",

		"%l_step8": "8. シミュレーター／エミュレーターとTitanium Studioで開いていた全てのファイルを閉じます。",
		"%l_stepexplanation8": "",


		"%l_summary": "まとめ",
		"%l_summarypara": "この実習では、2つの異なる方法でwebviewを実装しました。１つはブログ記事コンテンツがwebview内に表示する方法。もう１つは、どのようにフォーマットされたテキストが表示されるかが分かる、ローカルHTMLのコンテンツをwebview内に表示する方法。",

		"%l_resources": "リソース",
		"%l_resources1": "APIドキュメント: WebView: <a href='http://docs.appcelerator.com/titanium/2.0/index.html#!/api/Titanium.UI.WebView'>http://docs.appcelerator.com/titanium/2.0/index.html#!/api/Titanium.UI.WebView</a>",
		"%l_resources2": "ガイド: Webコンテンツとの統合: <a href='http://docs.appcelerator.com/titanium/2.0/index.html#!/guide/Integrating_Web_Content'>http://docs.appcelerator.com/titanium/2.0/index.html#!/guide/Integrating_Web_Content</a>",
		"%l_resources3": "完成コード: <a href='http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/Lab285.zip'>GitHub</a>",

	}
});
