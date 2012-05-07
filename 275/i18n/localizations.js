/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_filetitle": "This is the lesson title",
		"%l_lessontitle": "Appcelerator Cloud Services",
		"%l_subtitle": "Building Native Mobile Apps With Appcelerator Titanium",
		"%l_slidenote_titleslide": "Teaching time: 30 mins<br/>Lab time: 30 mins",

		"%l_agenda_title": "AGENDA",
		"%l_agenda1": "What is ACS?",
		"%l_agenda2": "ACS vs. D.I.Y.",
		"%l_agenda3": "Requirements and setup",
		"%l_agenda4": "Using ACS in your app",
		"%l_agenda5": "Lab",
		"%l_slidenote_agenda": "We'll discuss ACS and what you might use it for. We'll also compare using ACS to creating your own web service. Then, we'll move on to covering how to implement ACS, including the setup and configuration work needed as well as implementing ACS in your app. We'll finish with a lab.",

		"%l_whatis": "What is ACS?",
		"%l_whatis1": "Pre-built Web Backend",
		"%l_whatis2": "25+ APIs",
		"%l_whatis3": "Reliable &amp; Scalable",
		"%l_whatis4": "Managed for You",
		"%l_whatis5": "Cross-platform SDKs for Titanium, Native, &amp; REST",
		"%l_slidenote_whatis": "ACS is a pre-built cloud hosted backend for your apps. It provides 25 pre-built APIs, including:<ul><li>User management</li><li>Push notifications</li><li>Social integration</li><li>File/photo storage</li><li>and more</li></ul><br/>It is a hosted and managed service.<br/>SDKs for Objective C, Java, REST (= web), and Titanium",

		"%l_apis": "APIs",
		"%l_slidenote_apis": "ACS offers many pre-built APIs and object types. You can create custom obects too.",

		"%l_apis_users": "Users",
		"%l_apis_users_explanation": "Create, delete, and search for users.<br/>Plus, enable users to link to their accounts on popular social networks.",
		"%l_slidenote_users": "Many of the APIs require users to be logged on.<br/>For that, you can use the Users API.<br/>Alternately, you could use the Social API to let users log in via a Facebook or Twitter account.",

		"%l_apis_places": "Places",
		"%l_apis_places_explanation": "Create and manage places, and enable users to check into locations to help them connect with you and their peers.",
		"%l_slidenote_places": "By creating places, you can associate activities with those places. For example, users can check in, post a status message related to a place, etc.",

		"%l_apis_social": "Social Integration",
		"%l_apis_social_explanation": "Connect users to major social networks, such as Facebook, Twitter, and LinkedIn",
		"%l_slidenote_social": "User can login to your app using an external account without creating an ACS account. Logging on via a social network account will create an ACS account, if one doesn't exist. Otherwise, it will login using the user who has the matching external account info.",

		"%l_apis_photos": "Photo Collections",
		"%l_apis_photos_explanation": "Enable users to upload photos and share single photos or collections.",
		"%l_slidenote_photos": "Collections contain one or more photos and/or subcollections. These can be used as photo albums for a user.<br/><br/>Photo files are stored on Amazon S3 and automatically provided in a range of sizes. So you don't have to create thumbnails, etc.",

		"%l_apis_keyvalues": "Key Values",
		"%l_apis_keyvalues_explanation": "Store any type of data with key/value pairs.",
		"%l_slidenote_keyvalues": "For generic data storage, you can use the Key Values API. <br/>Keys can be up to 256 characters; values are storedas String or Binary up to 2 MB.",

		"%l_acsdiy": "ACS vs. DIY",
		"%l_acsdiy1": "Pre-built Web Backend",
		"%l_acsdiy2": "No IT Team Required",
		"%l_acsdiy3": "Scalable",
		"%l_acsdiy4": "Cost Scales as Use Scales",
		"%l_slidenote_acsdiy": "<ul><li>ACS is easier and less expensive than creating your own Web backend.</li><li>Appcelerator maintains the system and provides 24/7 monitoring and management.</li><li>Scaleable and cloud based so your server grows as you need.</li><li>Pricing not settled yet, but is likely to be far less than staffing your own cloud data center.</li></ul>",

		"%l_requirements": "Requirements & Setup",
		"%l_require1": "Register your App",
		"%l_require2": "Configure App to Use ACS",
		"%l_require3": "Implement the ACS APIs",
		"%l_slidenote_requirements": "This is an overview slide, details on next slides.",

		"%l_register": "Register",
		"%l_register1": "Option 1: Via tiapp.xml",
		"%l_register2": "Option 2: Manually:<ul style='margin-left:30px;'><li style='font-size:smaller;'>Visit cloud.appcelerator.com</li><li style='font-size:smaller;'>Log in</li><li style='font-size:smaller;'>Click <strong>Register a new app</strong></li></ul>",
		"%l_slidenote_register": "Registering an app creates OAuth keys, and also creates app objects in our cloud servers.<br/><br/>You can do this in two ways:<br/><br/>Option 1 is simple and works great for Titanium apps. Simply check the box when you create your app.<br/>Option 2 is what you'd use for native or REST apps. You'll have to manually copy the keys into your app, which we'll cover on the next slide.",

		"%l_configure": "Configure",
		"%l_configure1": "Option 1: In tiapp.xml<br/><pre style='width:900px;'><code contenteditable>&lt;property name='acs-api-key-production' type='string'>API_KEY_HERE&lt;/property>\n&lt;property name='acs-oauth-key-production' type='string'>OAUTH_KEY_HERE&lt;/property>\n&lt;property name='acs-oauth-secret-production' type='string'>OAUTH_SECRET_HERE&lt;/property>		</code></pre><p style='font-size:0.65em;'>Then, add <code>var Cloud = require('ti.cloud');</code> in JavaScript</p>",
		"%l_configure2": "Option 2: In code<br/><pre style='width:675px;'><code contenteditable>var Cloud = require('ti.cloud');\nCloud.apiKey = 'YOUR_API_KEY_HERE';\nCloud.consumerKey = 'YOUR_OAUTH_KEY_HERE';\nCloud.consumerSecret = 'YOUR_OAUTH_SECRET_HERE';		</code></pre>",
		"%l_slidenote_configure": "You can add your API keys to either the tiapp.xml or in your code.<br/><br/>Both production and development keys will be generated<br/><br/>Because of server-side restrictions, admin functions via ACS APIs are prohibited and most actions require the user to be authenticated. These measures provide security for ACS and lessen the risks associated with losing or publicizing your keys.",

		"%l_implement": "Implement",
		"%l_implementcode": "var loggedIn = false;\nexports.login = function(username, password, callback) {\n  Cloud.Users.login({\n    login: username,\n    password: password\n  }, function (e) {\n    if (e.success) n      currentUser = e.users[0]n      loggedIn = true;\n      callback(loggedIn);\n    } else {\n      Ti.API.info('Error:\\n' + ((e.error &amp;&amp; e.message) || JSON.stringify(e)));\n      loggedIn = false;\n      currentUser = null;\n      callback(loggedIn);\n    }\n  });\n};\n ",

		"%l_slidenote_implement": "Once you've registered and configured your app with your keys, you're ready to implement the ACS functions.<br/><br/>Key points - Point out the call to <code>Cloud.Users.login()</code> and the <code>e.success</code> test within the callback.<br/><br/>Important: the Cloud APIs are asynchronous, which means you can't rely on a <code>return</code> statement. You have to implement a callback as shown.",

		"%l_manage": "Management",
		"%l_manage_explanation": "Visit my.appcelerator.com to manage your apps.<br/><img src='images/acs_manage.png' style='height:400px'/>" ,
		"%l_slidenote_manage": "You can view stats, see the objects that have been created, data that's been uploaded, and so forth via your my.appcelerator page.<br/><br/><em>During the pre-release phase, you have to visit cloud.appcelerator.com instead of my.appcelerator.com</em>",

		"%l_analytics": "Analytics",
		"%l_analytics1": "Log onto your <strong>my.appcelerator.com</strong> page",
		"%l_analytics2": "Right-click Resources, choose <strong>Open Analytics Page</strong>",
		"%l_analytics3": "Visit <strong style='font-size:0.75em;'>http://analytics.appcelerator.net/#app=YOUR_APP_GUID</strong>",
		"%l_slidenote_analytics": "You have three options for viewing your app's statistics.<br/>Pre-launch, the my.appcelerator.com page isn't working.",

		"%l_qa": "Q&amp;A",
		"%l_slidenote_qa": "Questions?",

		"%l_lab": "Lab Objectives",
		"%l_labobjective1": "Implement ACS in the TiBountyHunter app",
		"%l_labobjective2": "Brag about our captures (via Status messages)",
		"%l_labobjective3": "Support logging in and creating accounts",
		"%l_labobjective4": "UI code pre-written for you",	
		"%l_slidenote_lab": "You will download the starting point code. The UI-specific code is written so you can concentrate on the ACS-specific code.",
		"%l_labURL": "Lab: <a href='https://wiki.appcelerator.org/display/td/275+Appcelerator+Cloud+Services'>wiki.appcelerator.org/display/td/275+Appcelerator+Cloud+Services</a>",

		"%l_solution": "Solution Walkthrough",
		"%l_slidenote_solution": "<b>Code Walk through &mdash; TiBH275</b><br><ul><li>tiapp.xml &mdash; show API keys</li><li>lib/acs.js &mdash; require(ti.cloud)</li><li>lib/acs.js &mdash; explain each of the functions</li><li>ui/common/DetailWindow.js &mdash; show how the ACS functions are called in the brag button event listener (don't have to cover all of them, just point out the overall pattern)</li></ul>",


	},
    	"ja": {
		"%l_filetitle": "This is the lesson title",
		"%l_lessontitle": "Appcelerator<br />クラウドサービス（ACS）",
		"%l_subtitle": "Appcelerator Titaniumによるネイティブアプリ開発",
		"%l_slidenote_titleslide": "所要時間：30分<br/>実習時間: 30分",

		"%l_agenda_title": "アジェンダ",
		"%l_agenda1": "ACSとは?",
		"%l_agenda2": "ACS vs. D.I.Y.",
		"%l_agenda3": "必要システムとセットアップ",
		"%l_agenda4": "ACSの利用",
		"%l_agenda5": "実習",
		"%l_slidenote_agenda": "ACSやその使い方について話す。また、ACSを使用した場合と自前のWebサービスを作成した場合とを比較する。そして、実装だけでなく、セットアップや設定を含む、ACS実装方法まで進める。実習まで終わらせる。",

		"%l_whatis": "ACSとは?",
		"%l_whatis1": "構築済みWebバックエンド",
		"%l_whatis2": "25以上のAPI",
		"%l_whatis3": "信頼性とスケーラブル",
		"%l_whatis4": "お任せ管理",
		"%l_whatis5": "クロスプラットフォーム対応Titanium用SDK、ネイティブ、そしてREST API",
		"%l_slidenote_whatis": "ACSはアプリ用の構築済みクラウドバックエンド。ホスティング管理されたサービスで、<ul><li>ユーザー管理</li><li>プッシュ通知</li><li>ソーシャル連携</li><li>ファイルや写真のストレージ</li><li>その他</li></ul><br/>を含む、25のAPIを提供する。<br/>Objective C, Java, REST (= web), and TitaniumのSDKが用意されている。",

		"%l_apis": "APIs",
		"%l_slidenote_apis": "ACSでは、多くの構築済みAPIやオブジェクトタイプを提供するだけでなく、カスタムオブジェクトも作成することが可能。",

		"%l_apis_users": "ユーザー",
		"%l_apis_users_explanation": "作成、削除、及びユーザー検索<br/>更にポピュラーなソーシャルネットワーク<br>アカウント連携",
		"%l_slidenote_users": "APIの多くは、ユーザーログインが必要。<br/>それにはユーザーAPIを使用することができる。<br/>別の方法では、FacebookまたはTwitterアカウント経由でユーザーログインさせるソーシャルAPIもある。",

		"%l_apis_places": "プレイス",
		"%l_apis_places_explanation": "プレイスの作成及び管理、そしてプレイスへのチェックイン機能",
		"%l_slidenote_places": "プレイスを作成することで、そのプレイスのアクティビティーと結び付けることができる。例えば、ユーザーはそのプレイスにチェックインし、関連するメッセージを投稿することができる。",

		"%l_apis_social": "ソーシャル連携",
		"%l_apis_social_explanation": "Facebook,Twitter,LinkedIn等のメジャー<br>ソーシャルネットワークとの連携",
		"%l_slidenote_social": "ユーザーは、ACSアカウントを作成せずに外部サービスのアカウントを使用してアプリにログインすることが可能。ソーシャルネットワークアカウントでログインすると、ACSアカウントが存在していなければ作成される。 もしくは、外部サービスのアカウント情報にマッチするユーザーを使用してログインする。",

		"%l_apis_photos": "フォトコレクション",
		"%l_apis_photos_explanation": "写真のアップロードと写真<br>またはコレクションの共有",
		"%l_slidenote_photos": "コレクションには1枚またはそれ以上の写真やコレクションが含まれる。これらはユーザーのフォトアルバムとして使用される。.<br/><br/>フォトファイルはAmazon S3に保存され、様々なサイズが自動的に提供される。そのためサムネイルを作成する必要は無い。",

		"%l_apis_keyvalues": "キーバリュー",
		"%l_apis_keyvalues_explanation": "あらゆるタイプのキーバリュー型データを保存",
		"%l_slidenote_keyvalues": "一般的なデータストレージについては、キーバリューAPIを使用することができる。<br/>キーは最大256文字で、バリューはストリングまたはバイナリーで最大2MBまで保存することが可能",

		"%l_acsdiy": "ACS vs. DIY",
		"%l_acsdiy1": "構築済みWebバックエンド",
		"%l_acsdiy2": "ITチーム不要",
		"%l_acsdiy3": "スケーラブル",
		"%l_acsdiy4": "使用規模に応じたコストスケール",
		"%l_slidenote_acsdiy": "<ul><li>ACSはより簡単で、そして一からWebバックエンドを作成するよりも安い。</li><li>Appceleratorがシステムをメンテナンスし、24時間モニタリング及び管理。</li><li>スケーラブルかつクラウドベースなので、必要に応じてサーバーを拡張することが可能す。</li><li>価格は現在未定。恐らく独自でクラウドデータセンターを利用するよりもずっと安く抑えることができるだろう。</li></ul>",

		"%l_requirements": "必要条件とセットアップ",
		"%l_require1": "アプリの登録",
		"%l_require2": "アプリでACSを利用する設定",
		"%l_require3": "ACS APIの実装",
		"%l_slidenote_requirements": "こちらは概要のスライド。しょうは次のスライドから。",

		"%l_register": "登録",
		"%l_register1": "オプション1: tiapp.xml",
		"%l_register2": "オプション2: 手動:<ul style='margin-left:30px;'><li style='font-size:smaller;'>cloud.appcelerator.comへ<br>アクセス</li><li style='font-size:smaller;'>ログイン</li><li style='font-size:smaller;'>クリック<strong>Register a new app</strong></li></ul>",
		"%l_slidenote_register": "アプリを登録すると、OAuthキーが作成され、またクラウドサーバー内にもアプリオブジェクトが作成される。<br/><br/>これを行うには2つの方法がある:<br/><br/>オプション1はシンプルかつ簡単な方法で、アプリを作成する時にチェックボックスにチェックを入れておくだけ。<br/>オプション2はネイティブまたはRESTアプリを使用する場合で、アプリに対して手動でキーをコピーする必要がある。次のスライドで解説。",

		"%l_configure": "設定",
		"%l_configure1": "オプション1: tiapp.xml内<br/><pre style='width:900px;'><code contenteditable>&lt;property name='acs-api-key-production' type='string'>API_KEY_HERE&lt;/property>\n&lt;property name='acs-oauth-key-production' type='string'>OAUTH_KEY_HERE&lt;/property>\n&lt;property name='acs-oauth-secret-production' type='string'>OAUTH_SECRET_HERE&lt;/property>		</code></pre><p style='font-size:0.65em;'>そしてJavaScriptコード内で <code>var Cloud = require('ti.cloud');</code> を追加</p>",
		"%l_configure2": "オプション2: JavaScriptコード内<br/><pre style='width:675px;'><code contenteditable>var Cloud = require('ti.cloud');\nCloud.apiKey = 'YOUR_API_KEY_HERE';\nCloud.consumerKey = 'YOUR_OAUTH_KEY_HERE';\nCloud.consumerSecret = 'YOUR_OAUTH_SECRET_HERE';		</code></pre>",
		"%l_slidenote_configure": "tiapp.xmlまたはコード内どちらでもAPIキーを設定することができる。<br/><br/>productionキー、developmentキーの両方が生成される。<br/><br/>サーバーサイドの制約のため、ACS経由の管理権限のAPIは禁止されており、ほとんどのアクションにはユーザー認証が必要とされる。これらの措置によりACSのセキュリティーを確保し、キーの紛失や流出に結びつくリスクを減らす。",

		"%l_implement": "実装",
		"%l_implementcode": "var loggedIn = false;\nexports.login = function(username, password, callback) {\n  Cloud.Users.login({\n    login: username,\n    password: password\n  }, function (e) {\n    if (e.success) n      currentUser = e.users[0]n      loggedIn = true;\n      callback(loggedIn);\n    } else {\n      Ti.API.info('Error:\\n' + ((e.error &amp;&amp; e.message) || JSON.stringify(e)));\n      loggedIn = false;\n      currentUser = null;\n      callback(loggedIn);\n    }\n  });\n};\n ",

		"%l_slidenote_implement": "一旦APIキーで登録しアプリを設定したら、ACS機能を実装する準備は完了。<br/><br/>キーポイント  - <code>Cloud.Users.login()</code>を呼び出し、<code>e.success</code>コールバック内でテストします。<br/><br/>重要: クラウドAPIは非同期。つまり<code>return</code>ではなく、コールバックで実装する必要がある。",

		"%l_manage": "管理",
		"%l_manage_explanation": "my.appcelerator.comでアプリを管理<br/><img src='images/acs_manage.png' style='height:400px'/>" ,
		"%l_slidenote_manage": "ステータスや、my.appcelerator.com内のページで作成されたオブジェクトやアップロードされたデータ等を確認することができる。<br/><br/><em>正式リリース前のため、現時点ではmy.appcelerator.comではなく、cloud.appcelerator.comへアクセスする必要がある。</em>",

		"%l_analytics": "アナリティクス",
		"%l_analytics1": "<strong>my.appcelerator.com</strong>ページにログイン",
		"%l_analytics2": "Resourcesで右クリックして<strong>Open Analytics Page</strong>を選択",
		"%l_analytics3": "<strong style='font-size:0.75em;'>http://analytics.appcelerator.net/#app=YOUR_APP_GUID</strong>にアクセス",
		"%l_slidenote_analytics": "アプリの状況を確認するには3つの方法がある。<br/>正式リリース前のため、my.appcelerator.comのページが未対応。",

		"%l_qa": "Q&amp;A",
		"%l_slidenote_qa": "Questions?",

		"%l_lab": "実習内容",
		"%l_labobjective1": "TiBountyHunterアプリにACSを実装する",
		"%l_labobjective2": "逃亡者捕獲を自慢する（ステータスメッセージ経由）",
		"%l_labobjective3": "ログイン、及びアカウントの作成をサポート",
		"%l_labobjective4": "作成済みUIコードはこちら",	
		"%l_slidenote_lab": "開始ポイントのコードをダウンロード。UI関係のコードは既に作成済みなので、ACS関連に集中することができる。",
		"%l_labURL": "実習: <a href='https://wiki.appcelerator.org/display/td/275+Appcelerator+Cloud+Services'>wiki.appcelerator.org/display/td/275+Appcelerator+Cloud+Services</a>",

		"%l_solution": "ソリューションウォークスルー",
		"%l_slidenote_solution": "<b>コードウォークスルー  TiBH275</b><br><ul><li>tiapp.xml &mdash; APIキー表示 </li><li>lib/acs.js &mdash; require(ti.cloud)</li><li>lib/acs.js &mdash; 関数の説明</li><li>ui/common/DetailWindow.js &mdash; 捕獲を自慢するボタンのイベントリスナー内でACS関数がどのように呼ばれるかを表示（全てをカバーする必要は無く、単に全般のパターンについて指摘する）</li></ul>​",


	}
});
