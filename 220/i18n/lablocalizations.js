/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object,
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_labname": "Lab - Cross-Platform Mobile Development",
		"%l_mission": "<img src='labimages/finished_iphone.png' style='height:300px;float:right;margin-top:-40px;margin-bottom: 10px;'><strong>Mission: </strong>In this lab assignment, you will create the basic user interface for TiBountyHunter, including table views and windows, and populate it with dummy data.  You will add a window for viewing fugitive details, a window for adding new fugitives, and basic event handling.",
		"%l_specification": "<strong>Specification: </strong>Start with the TiBountyHunter project you created for the last assignment. You will now create the main components of the application with new custom component constructors.  Additionally, you will learn the basics of event handling by opening a new window when a table view row or button is clicked.<br/><br/>To successfully complete this lab, you must develop an application that meets the following description:",
		"%l_spec1": "Creates a table view in each window that shows a list of fugitives and a list of captured suspects.  Use dummy data in the tables for now",
		"%l_spec2": "Provides a blank window that will (eventually) be used to add a new fugitive.  This window will be opened by either clicking a button in the nav bar (customary on iOS) or by pressing a button in the menu (customary on Android)",
		"%l_spec3": "When a table view row is clicked, open a detail window for a fugitive which will contain text and buttons",


		"%l_step1": "1. Open the TiBountyHunter project you created for the last assignment, or download the starting point code and import it as a new project in Studio: <a href='http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/TiBH220.zip'>http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/TiBH220.zip</a>",
		"%l_stepexplanation1": "",

		"%l_step2": "2. In the ui/common folder, add a new module named BountyTable. In it, define a constructor for a the bounty table view; it should accept a Boolean value to determine whether the table will hold captured or at-large fugitives. Set the background color to 'transparent' (so the window background shows through). Add a function to populate your table's data and add a few rows. Each row should specify a title (bounty's name), a white text color, hasChild=true, and a custom property named captured which will hold the Boolean value passed to the constructor.",
		"%l_stepexplanation2": "",

		"%l_step3": "3. In the ui/common folder, add a new module named DetailWindow. In it, define a constructor for the details window. The background colors and so forth should match those you set for the application's main window. This constructor should accept an object represent the fugitive (and his/her details). Set the title to the bounty's name. Add a label that displays a busted or still at large string. If the bounty isn't captured, display a capture button (you don't have to add an event listener). Add a delete button, again without an event listener.",
		"%l_stepexplanation3": "",

		"%l_step4": "4. In the ui/common folder, add a new module named AddWindow. In it, define a constructor for the add-a-fugitive window. The background colors and so forth should match those you set for the application's main window. Set the title to something like New Fugitive. The rest of this window can be empty.",
		"%l_stepexplanation4": "",

		"%l_step5": "5. In the ui/handheld/ApplicationWindow.js file, add the code necessary to display the bounties table. Remember, this window will be instantiated twice: once for at-large and once for captured bounties. On the table instance, add an event listener. When a row is tapped, instantiate and then open the detail window. You'll need to pass the row's data to the DetailWindow to represent the fugitive.",
		"%l_stepexplanation5": "(Hint: you added a self.containingTab property so that you can open with window within the parent tab.)",

		"%l_step6": "6. To the createWindow() call, add the code necessary to display the menu on Android. That menu should display a single button titled 'Add' that when clicked opens the AddWindow within the current tab.",
		"%l_stepexplanation6": "(Hint: See the Resources below for a link to the guide on creating an Android menu.)",

		"%l_step7": "7. Create a button titled 'Add' and display it as the rightNavButton. When that button is clicked, open the AddWindow within the containing tab. Make sure to wrap this whole block of code in an 'is-iphone' conditional statement so that it won't run on Android or Mobile Web.",
		"%l_stepexplanation7": "",

		"%l_step8": "8. Build your app for the iOS simulator or Android emulator. Correct any problems that exist. Build the app for Mobile Web (either in the browser or Android emulator).",
		"%l_stepexplanation10": "What functionality is missing from Mobile Web and how would you account for it? Be prepared to discuss these with your instructor and the class.",


		"%l_summary": "Summary",
		"%l_summarypara": "In this lab, you built upon the foundation you laid in the previous lab. You added a table, windows, buttons, and other UI elements as a way to practice UI composition and layout.",

		"%l_resources": "Resources",
		"%l_resources1": "Creating a table view: <a href='http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableView-object'>http://developer.appcelerator.com/apidoc/mobile/latest/<br/>Titanium.UI.TableView-object</a>",
		"%l_resources2": "Android UI guide (contains section on menus) <a href='http://docs.appcelerator.com/titanium/2.0/index.html#!/guide/Android_UI_Components_and_Conventions'>http://docs.appcelerator.com/titanium/2.0/index.html#!/guide/<br/>Android_UI_Components_and_Conventions</a>",
		"%l_resources3": "Windows in Titanium: <a href='http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Window-object'>http://developer.appcelerator.com/apidoc/mobile/latest/<br/>Titanium.UI.Window-object</a>",
		"%l_resources4": "Finished code: See the next lab or <a href='https://github.com/appcelerator-training/tcad-code/tree/master/Finished_code/TiBH220'>GitHub</a>",

	},
	"ja": {
		"%l_labname": "実習 - クロスプラットフォームでのモバイル開発",
		"%l_mission": "<img src='labimages/finished_iphone.png' style='height:300px;float:right;margin-top:-40px;margin-bottom: 10px;'><strong>目標: </strong>この実習では、あなたはTiBountyHunterのtableビューやウィンドウ、事前に準備したダミーデータを含む基本的なユーザーインターフェースを作成します。あなたは逃亡者の詳細を表示するウィンドウや新たな逃亡者を追加するウィンドウ、基本的なイベント処理を追加します。",
		"%l_specification": "<strong>仕様: </strong>先程の課題で作成したTiBountyHunterプロジェクトから始めます。あなたはこれから新たなカスタムコンポーネントのコンストラクターを持つアプリケーションの主たるコンポーネントを作成します。その上、あなたはtableビューの行やbuttonをクリックした時に新しいウィンドウを開くことでイベントハンドリングの基礎も学びます。<br/><br/>ここの実習を成功裏に終わらせるには、あなたは以下の記述を満たすアプリケーションを作らなければなりません:",
		"%l_spec1": "それぞれのウインドウに逃亡者や逮捕された容疑者のリストを表示するtableビューを作成する。いまはテーブルにはダミーのデータを使用してください",
		"%l_spec2": "(最終的に)新しい逃亡者を追加する空のウィンドウを提供する。このウィンドウはnav bar上のbuttonをクリックする(iOSでの慣例)、あるいはmenuのbuttonを押す(Androidでの慣例)ことで開かれます",
		"%l_spec3": "tableビューの行をクリックすると、textやbuttonを有する逃亡者の詳細ウィンドウが開かれます",


		"%l_step1": "1. 最後の課題で作成したTiBountyHunterプロジェクトを開く、もしくは開始地点のコードをダウンロードしてStudioに新たなプロジェクトとしてインポートしてください: <a href='http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/TiBH220.zip'>http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/TiBH220.zip</a>",
		"%l_stepexplanation1": "",

		"%l_step2": "2. ui/commonフォルダー内で、BountyTableという名の新しいモジュールを追加してください。その中に、賞金首table viewのコンストラクターを定義してください。コンストラクターはtableが逃亡中あるいは逮捕された逃亡者かを保持する為にブール値を受け取れなくてはいけません。背景色を'透明'に設定してください(なのでウインドウの背景は透けて見えます)。tableにデータを追加する為の関数を用意して、何行か追加してください。各行には、タイトル(逃亡者の名前)、白色のテキスト、hasChild=true そしてコンストラクターに引き渡すブール値を保持するcapturedという名称のカスタムなプロパティを指定します。",
		"%l_stepexplanation2": "",

	        "%l_labstep3": "3. DetailWindowという名称のモジュールをui/commonフォルダーに追加してください。その中に、詳細ウィンドウのコンストラクターを定義します。背景色やその他はアプリケーションのメインウィンドウと調和しなければなりません。このコンストラクターは逃亡者(彼/彼女の詳細)を表すオブジェクトを受け取れなくてはいけません。タイトルを賞金首の名前にします。逮捕されたか、まだ逃走中かの文字を表示するlabelを追加します。もし賞金首がまだ捕まっていなければ、逮捕buttonを表示します(イベントリスナーを追加する必要はありません)。削除buttonを追加します、ここでもイベントリスナーは未設定です。",
		"%l_stepexplanation3": "",

		"%l_step4": "4. AddWindowという名称のモジュールをui/commonフォルダーに追加してください。その中に、逃亡者を追加ウィンドウの為のコンストラクターを定義します。背景色やその他はアプリケーションのメインウィンドウと調和しなければなりません。タイトルを新しい逃亡者のような何かに設定します。ウィンドウの他の部分は空っぽで構いません。",
		"%l_stepexplanation4": "",

		"%l_labstep5": "5. ui/handheld/ApplicationWindow.jsファイル内に、賞金首tableを表示する為に必要なコードを追加します。このウィンドウは２回インスタンス化されることを覚えておいてください。１回目は逃亡中の、２回目は逮捕された賞金首のウィンドウです。tableのインスタンス時にイベントリスナーを付与してください。行がタップされたら、詳細ウィンドウをインスタンス化して、開いてください。あなたはDetailWindowに逃亡者を表すための行のデータを引き渡す必要があります。",
		"%l_labstepexplanation5": "(ヒント: あなたは、親のタブの中にウィンドウがある状態で開くことができるようにself.containingTabプロパティーを追加しました)",

		"%l_labstep6": "6. createWindow()の関数コールに際して、Androidのメニューを表示するに必要なコードを追加してください。そのメニューは、クリックされた際に現在のタブの中にAddWindowを開く'Add'とつけられたbuttonを表示しなければなりません。",
		"%l_labstepexplanation6": "(ヒント: 以下のリソースにある、Androidのメニュー作成に関するガイドへのリンクをご参照ください)",

		"%l_labstep7": "7. 'Add'とつけられたbuttonを作成し、rightNavButtonとして表示する。このボタンがクリックされたら、含まれるタブにAddWindowを開きます。AndroidやMobile Webで実行されないように、これらのコードの塊を'iPhoneかどうか'を判定する構文の中に含めることを確認してください。",
		"%l_stepexplanation7": "",

		"%l_labstep8": "8. iOSシミュレータもしくはAndroidエミュレータ向けにアプリをビルドしてください。存在する問題を修正してください。Mobile Web向けにアプリをビルドしてください(ブラウザーとAndroidエミュレータの両方に).",
		"%l_labstepexplanation8": "Mobile Web向けにどんな機能が不足していて、どのようにあなたは対処しますか？クラスのメンバーやインストラクターと議論する準備をしてください。",


		"%l_summary": "まとめ",
		"%l_summarypara": "この実習では、直前の自習の基礎に則ってビルドしました。あなたはtableやwindows、buttonsそしてその他のUI要素をUIを組み立てたりレイアウトする演習として追加しました。",

		"%l_resources": "リソース",
		"%l_resources1": "table viewの作成: <a href='http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableView-object'>http://developer.appcelerator.com/apidoc/mobile/latest/<br/>Titanium.UI.TableView-object</a>",
		"%l_resources2": "Android UI ガイド (メニューの項を含む) <a href='http://docs.appcelerator.com/titanium/2.0/index.html#!/guide/Android_UI_Components_and_Conventions'>http://docs.appcelerator.com/titanium/2.0/index.html#!/guide/<br/>Android_UI_Components_and_Conventions</a>",
		"%l_resources3": "Titaniumのウィンドウ: <a href='http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Window-object'>http://developer.appcelerator.com/apidoc/mobile/latest/<br/>Titanium.UI.Window-object</a>",
		"%l_resources4": "完成コード: 次の実習かここを参照 <a href='https://github.com/appcelerator-training/tcad-code/tree/master/Finished_code/TiBH220'>GitHub</a>",

	}
});
