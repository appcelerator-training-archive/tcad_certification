/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_labname": "Lab: Native Android Development",

		"%l_summary": "Summary",
		"%l_summarypara": "This lab was a brief and simple introduction to the Xcode development tools.",

		"%l_resources": "Resources",
		"%l_resources1": "<a href='http://developer.apple.com/'>http://developer.apple.com/</a>",
		"%l_resources2": "<a href='http://developer.apple.com/library/ios/#documentation/Xcode/Conceptual/iphone_development/000-Introduction/introduction.html'>Apple: iPhone development introduction</a>",
		"%l_resources3": "<a href='http://developer.apple.com/library/ios/#documentation/ToolsLanguages/Conceptual/Xcode4UserGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010215-CH1-SW1'>Apple: Xcode introduction</a>",

	},
	"ja": {
		"%l_labname": "実習: ネイティブAndroidアプリ開発",
		"%l_mission" : "<strong>ミッション: </strong>この実習ではAndroidのネイティブツールを使って簡単な'Hello World'アプリを作ります。この実習の目標はAndroidのツールセットに慣れる事と、ネイティブな開発者がAndroidアプリ開発において特に苦労する点について知る事です。",
		"%l_step1" : "1. コマンドプロンプトでホームディレクトリに<strong>HelloWorldAndroid</strong>というフォルダを作って下さい。",
		"%l_stepexplanation1" : "このフォルダにAndroidプロジェクトのファイルを格納します。",
		"%l_step2" : "2. コマンドプロンプトで以下の様なコマンドを入力して下さい。<pre><code>android list targets</code></pre>",
		"%l_stepexplanation2" : "これはお使いのシステムでターゲットにするための有効なAndroid APIを知るためです。 ターゲットの番号は次のステップで使います。",
		"%l_step3" : "3. ※PREタグ問題→Enter: <br/><pre><code>android create project --target TARGET_NUMBER--name MyAndroidApp --path ./HelloWorldAndroid--activity MyAppActivity --package com.app.myandroid</code></pre>",
		"%l_stepexplanation3" : "新しいプロジェクトを作成する際、ステップ1で調べた有効なターゲット番号を指定します。",
		"%l_step4" : "4. Switch into the HelloWorldAndroid directory and explore the files that were created.",
		"%l_stepexplanation4" : "The various files and folders contain the ",
		"%l_step5" : "5. テキストエディターで<strong>HelloWorldAndroid/src/com/app/myandroid/MyAppActivity.java</strong>を開きます。<br/><img src='labimages/myappactivity.jpg'>",
		"%l_stepexplanation5" : "このJavaファイルはあなたのAnroidアプリの'Activity'を定義するファイルです。ネイティブな開発者の場合は、アプリの機能を有効にする為にこのファイルをJavaコードで書く必要があります。",
		"%l_step6" : "6. ファイルを閉じて下さい。次にテキストエディターで<strong>HelloWorldAndroid/res/layout/main.xml</strong>を開いて下さい。 'Hello World'の文言を適当なメッセージに変更して下さい。保存したらファイルを閉じて下さい。<br/><img src='labimages/mainxml.jpg'>",
		"%l_stepexplanation6" : "これがあなたのアプリのXMLレイアウトです。ネイティブな開発者の場合、アプリのUIを作る為にこうしたファイルを編集剃る必要があります。",
		"%l_step7" : "7. HelloWorldAndroidディレクトリで以下のコマンドを入力して下さい。 <pre><code>ant debug</code></pre>",
		"%l_stepexplanation7" : "このantビルドスクリプトはビルドを行いapkファイルに署名をします。完成すると“BUILD SUCCESSFUL”というメッセージが表示されます。もしDebug Certificate関係のエラーが出る場合は./androidディレクトリから'debug.keystore'ファイルを削除して下さい。再度'ant debug'コマンドを実行すると新たに作成されます。",
		"%l_step8" : "8. 以下のコマンドを入力して下さい。 <pre><code>android</code></pre>",
		"%l_stepexplanation8" : "Android SDKマネージャーが開きます。Androidエミュレーターを実行する際にこのアプリを利用します。",
		"%l_step9" : "9. 下図のウィンドウを開く為に、ツールメニューより<strong>AVD Manager</strong>を選択して下さい。<br/><img src='labimages/avdmanager.png' width='400'/>",
		"%l_stepexplanation9" : "",
		"%l_step10" : "10. <strong>New</strong>をクリックし、AVDをあなたのアプリのターゲット以上に設定し、生成します。SDカードサイズ、解像度、エミュレートするハードウェアの機能などのオプションを確認して下さい。",
		"%l_stepexplanation10" : "",
		"%l_step11" : "11. AVDを起動するには<strong>Start</strong>をクリックし、<strong>Launch</strong>をクリックして下さい。",
		"%l_stepexplanation11" : "開発環境の性能によりますが、起動に数分かかります。",
		"%l_step12" : "12. コマンドプロンプトで'HelloWorldAndroid'フォルダーから以下のコマンドを入力して下さい。<br/><pre><code>adb install bin/MyAndroidApp-debug.apk</code></pre>",
		"%l_stepexplanation12" : "これによりエミュレーターにアプリがインストールされます。もし後ほど再インストールが必要になった場合は<code>-r</code> スイッチを上記のコマンドに付け足すか、以下のコマンドによってアプリをアンインストールする事が出来ます。<code>adb uninstall com.app.myandroid</code> (注意:アンインストールの際はパッケージ名を指定しますが、インストールの際はファイル名を指定します。).",
		"%l_step13" : "13. エミュレーターでトレーボタンをクリックして下さい。次に<strong>MyAppActivity</strong>をクリックします。",
		"%l_stepexplanation13" : "あなたの変更した文言がスクリーンに表示されるはずです。",
		"%l_step14" : "14. コマンドプロンプトで以下のコマンドを入力して下さい。<pre><code>ddms</code></pre>",
		"%l_stepexplanation14" : "Dalvikデバッグモニターが開きます。Dalvikデバッグモニターを通してAVDにアクセスすることが出来ます。これによりあなたのアプリに対して、ログの確認、スレッドを監視, ハードウェア設定に応じてGPSをシミュレートといった事が可能になります。プロセス一覧から'com.app.myandroid'というアプリを確認することが出来るはずです。これをクリックしてスレッドやデバッグ情報を確認して下さい。必要に応じて、ここでプロセスを停止する事も出来ます。",
		"%l_step15" : "15. DDMS、エミュレーター、AVD managerなど開いている全てのウィンドウを閉じて下さい。",
		"%l_stepexplanation15" : "",

		"%l_summary": "まとめ",
		"%l_summarypara": "This lab was a brief and simple introduction to the Xcode development tools.",

		"%l_resources": "リソース",
		"%l_resources1": "<a href='http://developer.apple.com/'>http://developer.apple.com/</a>",
		"%l_resources2": "<a href='http://developer.apple.com/library/ios/#documentation/Xcode/Conceptual/iphone_development/000-Introduction/introduction.html'>Apple: iPhone development introduction</a>",
		"%l_resources3": "<a href='http://developer.apple.com/library/ios/#documentation/ToolsLanguages/Conceptual/Xcode4UserGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010215-CH1-SW1'>Apple: Xcode introduction</a>",

	}	
});
