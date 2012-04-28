/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_filetitle": "Integrating Web Content",
		"%l_lessontitle": "Integrating Web Content",
		"%l_subtitle": "Building Native Mobile Apps With Appcelerator Titanium",
		"%l_slidenote_titleslide": "<b>Module time: 60 mins</b><br/>(Teaching: 15 mins, lab: 45 mins)",
		"%l_agenda_title": "Agenda",
		
		"%l_agenda1": "Integrating the WebView component",
		"%l_agenda2": "WebView gotchas",
		"%l_agenda3": "Novel uses of the WebView",
		"%l_agenda4": "Lab Exercise",
		"%l_slidenote_agenda": "",

		"%l_integrating_web": "Integrating Web Content",
		"%l_html_embed": "HTML/CSS are embedded in much data on the web",
		"%l_html_often": "HTML/CSS are often the only/best way to accomplish certain tasks:",
		"%l_rendering": "Rendering HTML/CSS (duh)",
		"%l_canvas": "Canvas (animations)",
		"%l_integrating": "Integrating existing web-based tools",
		"%l_walking": "Walking HTML documents",
		"%l_slidenote_integrating_web": "Many business-use cases for using HTML/CSS in your app<br>Might be easiest way to go<br>Canvas for animations<br>Existing libraries (graphing, jquery)<br>DOM manipulations and access",

		"%l_remote_web": "Remote Web Content",
		"%l_uses_might": "Uses might include pulling in blog content from an RSS feed (hint) or re-purposing (semi) static content from an existing site",
		"%l_slidenote_remote_web": "Static / existing web pages<br>Dynamic data from a CMS or web service<br>Embed a web view anywhere in your app (views, windows)",

		"%l_local_web": "Local Web Content",
		"%l_webkit_can": "Webkit can sometimes do something we can't, or we need to re-use existing code (ours or someone else's) - in those cases, we can ship HTML/CSS/JS with our app",
		"%l_slidenote_local_web": "Integrated webkit has lots of power and capabilities<br>Easy way to embed custom UI, pre-existing content, formatted text<br>Point URL to local web content file<br>Loaded relative to Resources directory",

		"%l_local_web_inline": "Local Web Content - Inline",
		"%l_sometimes": "Sometimes HTML markup is the best way to display small chunks of text or links (Android handles both natively)",
		"%l_slidenote_local_web_inline": "Use HTML property for inline content<br>Native Android support for HTML in labels and some other components<br>E.g. linkify() method will turn links and phone numbers into clickable links<br>See the API docs for more information",

		"%l_communicating_wrapper": "Communicating With The Wrapper",
		"%l_remote_web_access": "Remote web content has no access to Titanium APIs",
		"%l_limited": "Limited Titanium API access within local web pages:",
		"%l_logging": "Logging APIs (Ti.API.info and friends)",
		"%l_app_level": "Application Level Events<br> (Ti.App.fireEvent/addEventListener)",
		"%l_native_api": "Native APIs must be accessed indirectly via application level events",
		"%l_slidenote_communicating_wrapper": "Embedded webview is its own execution context<br>Use custom events to communicate with rest of the app<br>For example, geolocation: grab data in native app, fire event passing results to webview<br>Remote content doesn't have access to Ti APIs<br>But you can inject some JS into a remote page to give limited access",

		"%l_webview_gotchas": "WebView Gotchas",
		"%l_among_the": "Among the most expensive components to create",
		"%l_should_not": "Should not be embedded in other scrollable views",
		"%l_common_misuse": "Common misuse - inside TableViewRows (bad performance)",
		"%l_its_possible": "It is possible to implement your whole UI in HTML/CSS, but native UI is what your users expect",
		"%l_cant_download": "Can't download/run unapproved code from a server",
		"%l_slidenote_webview_gotchas": "Scrollable views, table views &mdash; Touch events can get messed up, bad performance",

		"%l_novel_webview": "Novel Uses of the WebView",
		"%l_display_text": "Display text with embedded links (think Twitter client)",
		"%l_display_pdf": "Display PDF documents and more (iOS, see next slide)",
		"%l_retrieve_parse": "Retrieve and parse HTML using the DOM (easier than in native Ti code, where you'd need to do string gymnastics)",
		"%l_longer_forms": "Longer forms on iOS (next/previous buttons, auto resizing)",
		"%l_slidenote_novel_webview": "iOS &mdash; view PDF (built into Safari) on Android, has to be done through 3rd party app<br>Parsing HTML &mdash; use jquery or other libraries to walk the DOM<br>Forms - auto resizing, auto-scrolling, auto 'Next' button on iOS to ease data entry.",

		"%l_embedded_docs": "Embedded Documents on iOS",
		"%l_webview_ios": "WebView on iOS can display embedded:",
		"%l_excel": "Excel",
		"%l_powerpoint": "Excel",
		"%l_keynote": "Keynote",
		"%l_word": "Word",
		"%l_numbers": "Numbers",
		"%l_rtf": "RTF",
		"%l_pages": "Pages",
		"%l_rtf_dir": "RTF Directory",
		"%l_pdf": "PDF",
		"%l_slidenote_embedded_docs": "Source: http://developer.apple.com/library/ios/#qa/qa1630/_index.html",

		"%l_qa": "Q&A",
		"%l_slidenote_qa": "",

		"%l_lab_goals": "Lab Goals",
		"%l_requirement": "Requirements:",
		"%l_pull_in": "Pull in an RSS feed and place the results in a TableView",
		"%l_create_an": "Create an 'about' page using local HTML",
		"%l_demo_wiki": "Demo and Wiki URL",
		"%l_slidenote_lab_goals": "Demo &mdash; Lab285:</b><ol><li>Show scrolling list of news items</li><li>Click one to show web view</li><li>Click About tab to show local HTML data</li></ol><br/>The UI, network, and RSS feed parsing is done already.",

		"%l_lab_exercise": "Lab Exercise",
		"%l_slidenote_lab_exercise": "<b>Code Walk through &mdash; TiBH285</b><br><ul><li>RSSWindow &mdash; table event listener, e.rowData argument, opening modal window, also App-level event listener to load articles once data is retrieved from the network</li><li>ArticleWindow &mdash; 'article' parameter, webview url property</li><li>AboutWindow &mdash; webview url property</li></ul>"
	},
	"ja": {
		"%l_filetitle": "Webコンテンツとの統合",
		"%l_lessontitle": "Webコンテンツとの統合",
		"%l_subtitle": "Appcelerator Titaniumによるネイティブアプリ開発",
		"%l_slidenote_titleslide": "<b>モジュールタイム: 60分</b><br/>(講習: 15分, 実習: 45分)",
		"%l_agenda_title": "アジェンダ",
		
		"%l_agenda1": "WebViewコンポーネントとの統合",
		"%l_agenda2": "WebViewの落とし穴",
		"%l_agenda3": "WebViewの面白い使い方",
		"%l_agenda4": "実習",
		"%l_slidenote_agenda": "",

		"%l_integrating_web": "Webコンテンツとの統合",
		"%l_html_embed": "HTML/CSSは、Web上の多くのデータの中で利用されている",
		"%l_html_often": "HTML/CSSは、以下のタスクを実行するのに唯一もしくは最適な方法である",
		"%l_rendering": "HTML/CSSの表示",
		"%l_canvas": "Canvas（アニメーション）",
		"%l_integrating": "既存Webベースのツールとの統合",
		"%l_walking": "HTMLドキュメントの解析",
		"%l_slidenote_integrating_web": "アプリ内でHTMLを利用する多くのビジネスユースの場合<br>アニメーションにはCanvasを使うのが最も簡単な方法。<br>既存のライブラリ（graphing, jquery）<br>DOM操作や取得",

		"%l_remote_web": "リモートWebコンテンツ",
		"%l_uses_might": "RSSフィードからブログコンテンツを取得したり、既存サイトの静的コンテンツを表示",
		"%l_slidenote_remote_web": "静的／既存のWebページ<br>CMSやWebサービスからの動的データ<br>アプリ内（views、Windows）のどこでもWeb viewを埋め込むことが可能",

		"%l_local_web": "ローカルWebコンテンツ",
		"%l_webkit_can": "Webkitは、Titanium Mobileでは出来ないことを実行できたり、既存のコードを再利用する必要があり、HTML/CSS/JSをアプリ内に組み込む事が可能",
		"%l_slidenote_local_web": "統合されたWebkitには多くの機能が備わっている<br>カスタムUIや既存のコンテンツ、フォーマットされたテキストをアプリ内に組み込むのが簡単<br>ローカルWebコンテンツファイルのURLを設定<br>Resourcesディレクトリの読み込み",

		"%l_local_web_inline": "ローカルWebコンテンツ - インライン",
		"%l_sometimes": "HTMLマークアップは、ちょっとしたテキストやリンクを表示するのに最適（Androidではネイティブでサポート）",
		"%l_slidenote_local_web_inline": "インラインコンテンツにはHTMLプロパティーを使用<br>AndroidのラベルなどのコンポーネントにおけるHTMLはネイティブサポート<br>例)  linkify()メソッドは、リンクや電話番号をクリッカブルリンクにする<br>詳細についてAPIドキュメントを参照",

		"%l_communicating_wrapper": "ラッパーとの通信",
		"%l_remote_web_access": "リモートWebコンテンツからTitanium APIを呼びさせない",
		"%l_limited": "ローカルWebページ内では限定的にTitanium APIを呼び出せる",
		"%l_logging": "ロギングAPI (Ti.API.info等)",
		"%l_app_level": "アプリケーションレベルのイベント<br> (Ti.App.fireEvent/addEventListener)",
		"%l_native_api": "Titanium APIへは、アプリケーションレベルのイベント経由で間接的にアクセスしなければならない",
		"%l_slidenote_communicating_wrapper": "組み込んだwebviewには、独自の実行コンテキストがある<br>他のアプリとの通信にはカスタムイベントを使用する<br>例えば、ジオロケーション：ネイティブアプリでデータを取得し、イベントを発動させて結果をwebviewへ渡す<br>リモートコンテンツはTitanium APIを呼び出せない<br>しかし、限定的な呼び出しのため、リモートページにJSを差し込むことが可能",

		"%l_webview_gotchas": "WebViewの落とし穴",
		"%l_among_the": "最もリソースが消費されるコンポーネント",
		"%l_should_not": "スクロール可能なviewに組み込むべきではない",
		"%l_common_misuse": "よくある間違った使い方 -TableViewRows内での利用 (パフォーマンス問題)",
		"%l_its_possible": "HTML/CSSでアプリ全体のUIを作成することは可能ですが、ユーザはネイティブUIを期待する",
		"%l_cant_download": "サーバーからの未承認コードをダウンロードし、実行することができない",
		"%l_slidenote_webview_gotchas": "スクロール可能なview、テーブルview &mdash; タッチイベントが正しく動作しない、パフォーマンス問題",

		"%l_novel_webview": "WebViewの面白い使い方",
		"%l_display_text": "リンクの付いたテキストの表示（Twitterクライアント）",
		"%l_display_pdf": "PDFドキュメント等の表示（iOS、次のスライド参照）",
		"%l_retrieve_parse": "DOMを使用したHTMLの取得とパース（Titanium APIより簡単）",
		"%l_longer_forms": "iOSのフォーム（前後ボタン、自動リサイズ）",
		"%l_slidenote_novel_webview": "iOS &mdash; AndroidでのPDF表示（Safariは対応）は、サードパーティーを利用する必要がある<br>HTMLのパース &mdash; DOMを解析にはjquery等のライブラリを使用<br>フォーム - iOSでは、データエントリーを楽にするための、自動リサイズ、自動スクロール、自動「次」ボタンがある",

		"%l_embedded_docs": "iOSのドキュメント表示",
		"%l_webview_ios": "iOSのWebViewでは以下のフォーマットが表示可能：",
		"%l_excel": "Excel",
		"%l_powerpoint": "Excel",
		"%l_keynote": "Keynote",
		"%l_word": "Word",
		"%l_numbers": "Numbers",
		"%l_rtf": "RTF",
		"%l_pages": "Pages",
		"%l_rtf_dir": "RTF Directory",
		"%l_pdf": "PDF",
		"%l_slidenote_embedded_docs": "ソース: http://developer.apple.com/library/ios/#qa/qa1630/_index.html",

		"%l_qa": "Q&A",
		"%l_slidenote_qa": "",

		"%l_lab_goals": "実習内容",
		"%l_create_rss": "XMLフィードを取得し、Webviewでブログ記事を表示するRSSリーダーアプリを構築",
		"%l_requirement": "必要条件:",
		"%l_pull_in": "RSSフィードを取得し、結果をTableViewに表示",
		"%l_create_an": "ローカルHTMLを利用して'about'ページを作成",
		"%l_demo_wiki": "デモと実習URL",
		"%l_slidenote_lab_goals": "デモ &mdash; Lab285:</b><ol><li>新しいアイテムのリストをスクロール表示</li><li>クリックしてWebviewを表示</li><li>AboutタブをクリックしてローカルHTMLデータを表示</li></ol><br/>UI、ネットワーク、そしてRSSフィードの解析が完了",

		"%l_solution": "実習",
		"%l_slidenote_solution": "<b>コードウォークスルー &mdash; TiBH285</b><br><ul><li>RSSウィンドウ &mdash; テーブルイベントリスナー, e.rowDataに引数, モーダルウィンドウを開く, また、データがネットワークから取得できたらアプリレベルのイベントリスナーで記事を読み込む</li><li>ArticleWindow &mdash; '記事' パラメーター, webview urlプロパティー</li><li>AboutWindow &mdash; webview url プロパティー</li></ul>"
	}
});
