/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_filetitle": "Media and the Filesystem",
		"%l_lessontitle": "Media and the Filesystem",
		"%l_subtitle": "Building Native Mobile Apps With Appcelerator Titanium",
		"%l_slidenote_titleslide": "<b>Module time: 60 mins</b><br/>(30 teaching, 30 lab)",

		"%l_agenda1": "Explore Titanium Media APIs",
		"%l_agenda2": "Leveraging media in your application",
		"%l_agenda3": "Explore Titanium Filesystem APIs",
		"%l_agenda4": "Understand how and where to store data on the filesystem",
		"%l_slidenote_agenda": "Media &mdash; will be exploring KitchenSink examples",

		"%l_audio_api": "Audio APIs",
		"%l_play_sounds": "Play sounds from local or remote files (Sound)",
		"%l_streaming_audio": "Streaming audio support (AudioPlayer)",
		"%l_audio_recording": "Audio recording support",
		"%l_demos_audio": "Demos and Code Walkthrough",

		"%l_slidenote_audio_api": "Demos in the Kitchen Sink<br><ul><li>Phone tab / Sounds / Local  (demo each button)</li><li>Sounds / Record (record with lo/hi fidelity & playback)</li></ul>Show code: examples/sound_local.js<ul><li>Show: createSound()</li><li>play(), pause(), stop() in button event handlers</li><li> looping</li></ul>",
		"%l_video_api": "Video APIs",
		"%l_play_video": "Play video from local files",
		"%l_streaming_video": "Streaming video support - HTTP Live Streaming (iOS), RTSP (Android), pseudo-streaming",
		"%l_video_capture": "Video capture support",
		"%l_demos_video": "Demos and Code Walkthrough for Local Video",
		"%l_slidenote_video_api": "Demos in the Kitchen Sink<br><ul><li>Phone tab / Play Movie / Local -- point out overlays</li><li>Phone tab / Play Movie / Remote streaming</li></ul>Show code: examples/movie_local.js<ul><li>Show: contentURL property, label overlay</li></ul>",

		"%l_still_api": "Still Image APIs",
		"%l_display_using": "Display using ImageView or backgroundImage",
		"%l_can_either": "Can either be local or remote",
		"%l_can_be": "Can be density specific in either case",
		"%l_demo_local": "Demo: Image from Local URL",
		"%l_demo_remote": "Demo: Image from Remote URL",
		"%l_demo_blob": "Demo: Image from file blob",
		"%l_slidenote_still_api": "Demos in the Kitchen Sink<br><ul><li>Base UI tab / Views / Image Views / Basic &mdash; responds to events</li><li>Remote image</li><li>Animated &mdash; array of images / flipbook effect</li></ul>Show code:<ul><li>examples/imageview_basic.js -- Show: createImageView</li><li>Examples/imageview_file.js &mdash; show image property pointing to local file</li><li>explain the flexible nature of property (accepts file path, url, file system object)</li></ul>",

		"%l_capturing_images": "Capturing Images",
		"%l_can_get": "Can get images from the device via camera or gallery",
		"%l_function_names": "Function names are different, signature the same",
		"%l_success": "<b>success:</b>called on photo retrieval",
		"%l_error": "<b>error:</b>called on a device error",
		"%l_cancel": "<b>cancel:</b>called when a user cancels photo retrieval",
		"%l_slidenote_capturing_images": "Same signature means you can use nearly identical code whether working with the camera or gallery<br>Demo notes on next slide",

		"%l_demo_photo_gallery": "Demo: Photo Gallery",
		"%l_photodemo": "From KitchenSink:<br/>Phone > Photo Gallery<br/>examples/photo_gallery.js and examples/camera_basic.js",
		"%l_slidenote_demo_photo_gallery": "** Make sure to have images pre-installed in your simulator/emulator<br>Demos in the Kitchen Sink<ul><li>Phone tab / Photo Gallery</li></ul>Show code: examples/photo_gallery.js<ul><li>createImageView (holds image), openPhotoGallery and its 3 callbacks</li><li>allowEditing and mediaTypes</li><li>imageView.image</li></ul>Show code: examples/camera_basic.js<ul><li>showCamera</li><li>image = event.media</li><li>saveToPhotoGallery and mediaTypes properties</li></ul>",

		"%l_files": "Files and the Filesystem",
		"%l_many_titanium": "Many Titanium APIs return Blob objects which point to binary data",
		"%l_these_blobs": "These blobs and other data (strings, commonly) can be written to Files",
		"%l_the_filesystem": "The filesystem is the appropriate place to store binary data",
		"%l_slidenote_files": "",

		"%l_filesystem": "Filesystem Persistence and Security",
		"%l_your_app": "Your application has limited Read/Write access to the filesystem",
		"%l_filesystem_data": "Filesystem data persists until uninstall, except temp directory",
		"%l_filesystem_locations": "Locations:",
		"%l_filesystem_resourcesDir":"<b>Ti.Filesystem.resourcesDirectory  - read-only</b>",
		"%l_filesystem_appsDir":"<b>Ti.Filesystem.applicationDataDirectory - read/write</b>",
		"%l_filesystem_cacheDir": "<b>Ti.Filesystem.applicationCacheDirectory - read/write</b>",
		"%l_filesystem_tempDir": "<b>Ti.Filesystem.tempDirectory - read/write</b>",
		"%l_filesystem_extDir":"<b>Ti.Filesystem.externalStorageDirectory - read/write</b>",
		"%l_plus": "plus Ti.Filesystem.isExternalStoragePresent()",
		"%l_slidenote_filesystem": "Temp directory is wiped on reboot<br>externalStorageDirectory is Android only<br>SDK 1.8 adds iOS do not backup flag support for files that don't need to be synced to iCloud<br>That's a concern for iOS 5.x+ devices only (older iOS versions don't support iCloud)",

		"%l_demo_file_io": "Demo: File I/O",
		"%l_filedemo": "From KitchenSink:<br/>Persistence app",
		"%l_slidenote_demo_file_io": "Using the Persistence demo app<br>Run app in simulator, Filesystem tab<br>Reading in JSON file, parsing it to populate text fields<br>Changes to fields are saved to a file on the file system<br>Code walkthrough:	<ol><li>Open Persistence project</li><li>Open Resources/test.json and explain contents</li><li>Open Resources/filesystem.js, show:</li></ol><ol><li>Simulator special &mdash; writing to Resources directory</li><li>getFile()</li><li>JSON.parse()</li><li>Setting values of fields</li><li>Event listeners on the fields</li><li>Save button and event handler that saves the values</li></ol>",
		
		"%l_qa": "Q&A",
		"%l_slidenote_qa": "",

		"%l_images_in": "Images in Simulator Galleries",
		"%l_no_images": "No images included by default",
		"%l_open_gallery": "Open gallery in simulator, then close it",
		"%l_find_images": "Find images using simulator's web browser (e.g. Google Images search)",
		"%l_press": "Press and hold on image",
		"%l_choose": "Choose Save image",
		"%l_slidenote_images_in": "Need images in the gallery for this lab.<br>Gotcha: You might need to open the gallery first before you can save to it.",

		"%l_lab_goals": "Lab Goals",
		"%l_make": "Make TiBountyHunter capture an image (camera or gallery), and store the photo on the filesystem",
		"%l_requirements": "Requirements:",
		"%l_capture_image": "Capture an image (camera or gallery)",
		"%l_store_image": "Store image on the filesystem",
		"%l_associate_image": "Associate the image with a row in the database",
		"%l_labURL": "<a href='https://wiki.appcelerator.org/display/td/260+Working+With+Media+and+the+File+System'>wiki.appcelerator.org/display/td/260+Working+With+Media+and+the+File+System</a>",
		"%l_slidenote_lab_goals": "Will need to uninstall app from simulator because of database changes<br>Store the path to the image in the database, not a blob<br>Get the placeholder image from the Wiki<br>Demo - <b>TiBH260</b><ul><li>Make sure to have an image in your sim's gallery</li><li>Show app in both simulator/emulator</li><li>Select a photo for a bounty and show it sticks</li></ul>",

		"%l_solution": "Solution Walkthrough",
		"%l_slidenote_solution": "Walk through &mdash; TiBH260<br><ul><li><strong>lib/db.js</strong> &mdash; new DB creation statement and new addPhoto() function</li><li><strong>ui/common/DetailWindow.js</strong> &mdash; imgView, photoButton, and its event listener</li></ul>"
	},

	"ja": {
		"%l_filetitle": "メディアとファイルシステム",
		"%l_lessontitle": "メディアとファイルシステム",
		"%l_subtitle": "Appcelerator Titaniumでネイティブアプリ開発",
		"%l_slidenote_titleslide": "<b>所要時間: 60分</b>(解説 30分、実習 30分)",

		"%l_agenda1": "TitaniumのMedia APIを調べる",
		"%l_agenda2": "アプリ内でメディアを利用する",
		"%l_agenda3": "TitaniumのFilesystem APIを調べる",
		"%l_agenda4": "ファイルシステムのどこにどうやってデータが保存されるのか理解する",
		"%l_slidenote_agenda": "Media &mdash; KitchenSink の例を参照",

		"%l_audio_api": "Audio API",
		"%l_play_sounds": "ローカルまたはリモートの（音声）ファイルを再生する",
		"%l_streaming_audio": "オーディオストリーミングのサポート (AudioPlayer)",
		"%l_audio_recording": "音データの録音サポート",
		"%l_demos_audio": "デモとコードウォークスルー",

		"%l_slidenote_audio_api": "Kitchen Sinkのデモ<br><ul><li>Phoneタブ / Sounds / Local  (それぞれのボタンでデモ)</li><li>Sounds / Record (record with lo/hi fidelity & playback)</li></ul>参照するコード: examples/sound_local.js<ul><li>Show: createSound()</li><li>ボタンのイベントハンドラのplay()、 pause()、 stop()</li><li> 繰り返し処理</li></ul>",
		"%l_video_api": "Video API",
		"%l_play_video": "ローカルファイルから動画を再生",
		"%l_streaming_video": "ストリーミング動画サポート - HTTP Live Streaming (iOS)、 RTSP (Android)、疑似ストリーミング",
		"%l_video_capture": "ビデオ撮影サポート",
		"%l_demos_video": "ローカルビデオのデモとコードウォークスルー",
		"%l_slidenote_video_api": "Kitchen Sinkのデモ<br><ul><li>Phone タブ / Play Movie / Local -- オーバーレイについて説明</li><li>Phone タブ / Play Movie / Remote streaming</li></ul>参照するコード: examples/movie_local.js<ul><li>参照: contentURLプロパティ、ラベルオーバーレイ</li></ul>",

		"%l_still_api": "静止画 API",
		"%l_display_using": "ImageViewまたはbackgroundImageを利用して描画",
		"%l_can_either": "ローカルでもリモートでも可",
		"%l_can_be": "どちらもdensity別に振り分け可",
		"%l_demo_local": "デモ: ローカルURLの画像",
		"%l_demo_remote": "デモ: リモートURLの画像",
		"%l_demo_blob": "デモ: ファイルのバイナリデータ",
		"%l_slidenote_still_api": "Kitchen Sinkのデモ<br><ul><li>Base UI タブから/ Views / Image Views / Basic &mdash; イベントとその反応</li><li>Remote image</li><li>Animated &mdash; 画像の配列データ／flipbookエフェクト</li></ul>参照するコード:<ul><li>examples/imageview_basic.js -- 参照: createImageView</li><li>Examples/imageview_file.js &mdash; ローカルファイルを指すimageプロパティを参照</li><li>imageプロパティの柔軟さを説明すること（ファイルのパスもファイルシステムのオブジェクトも指定できる)</li></ul>",

		"%l_capturing_images": "画像のキャプチャー",
		"%l_can_get": "カメラやギャラリーを利用してデバイスから画像データを受け取ることが可能",
		"%l_function_names": "関数名は違えどシングニチャーは同じ",
		"%l_success": "<b>success:</b>画像の取得時に呼ばれる",
		"%l_error": "<b>error:</b>デバイスエラー時に呼ばれる",
		"%l_cancel": "<b>cancel:</b>ユーザーが画像の取得をキャンセルした際に呼ばれる",
		"%l_slidenote_capturing_images": "シグネチャーが同じなのでカメラでもギャラリーでもほぼ同じコードを利用可能<br>次スライドにデモの注意事項あり",

		"%l_demo_photo_gallery": "デモ: フォトギャラリー",
		"%l_photodemo": "KitchenSinkより:<br/>Phone > Photo Gallery<br/>examples/photo_gallery.js と examples/camera_basic.js",
		"%l_slidenote_demo_photo_gallery": "** 事前にシミュレータ／エミュレータに画像を用意しておくこと<br>Kitchen Sinkのデモ<ul><li>Phone タブから / Photo Gallery</li></ul>参照するコード: examples/photo_gallery.js<ul><li>createImageView (画像を保持)、openPhotoGalleryと3つのコールバック関数</li><li>allowEditingとmediaTypes</li><li>imageView.image</li></ul>参照するコード: examples/camera_basic.js<ul><li>showCamera</li><li>image = event.media</li><li>saveToPhotoGalleryとmediaTypesプロパティ</li></ul>",

		"%l_files": "ファイルとファイルシステム",
		"%l_many_titanium": "TitaniumのAPIの多数はバイナリデータを指すBlobオブジェクトを返す",
		"%l_these_blobs": "これらのBlobやその他のデータ（文字列など）はファイルに書き込みが可能",
		"%l_the_filesystem": "ファイルシステムはバイナリデータを保存するのに最適",
		"%l_slidenote_files": "",

		"%l_filesystem": "ファイルシステムのデータ永続性とセキュリティ",
		"%l_your_app": "アプリのファイルシステムへの読み書きは制限付き",
		"%l_filesystem_data": "ファイルシステムのデータはtempディレクトリ以外はアプリがアンインストールされるまで消えることはない",
		"%l_filesystem_locations": "保存場所:",
		"%l_filesystem_resourcesDir":"<b>Ti.Filesystem.resourcesDirectory  - 読み込みのみ</b>",
		"%l_filesystem_appsDir":"<b>Ti.Filesystem.applicationDataDirectory - 読み書き</b>",
		"%l_filesystem_tempDir": "<b>Ti.Filesystem.tempDirectory - 読み書き</b>",
		"%l_filesystem_extDir":"<b>Ti.Filesystem.externalStorageDirectory - 読み書き</b>",
		"%l_plus": "プラス Ti.Filesystem.isExternalStoragePresent()",
		"%l_slidenote_filesystem": "Tempディレクトリは再起動で消去<br>externalStorageDirectoryはAndroidのみ<br>SDK 1.8からiOSにiCloudと同期する必要のないファイルのためのdo not backupフラグをサポート<br>iOS 5.x+のデバイスのみ(それ以前のiOSではiCloudは未サポート)",

		"%l_demo_file_io": "デモ: File I/O",
		"%l_filedemo": "KitchenSink:<br/>データ永続性確認アプリ",
		"%l_slidenote_demo_file_io": "データの永続性確認アプリを利用する<br>シミュレータでアプリを起動し、Filesystemタブを表示<br>JSONファイルを読み込んでテキストフィールドにデータを表示<br>フィールドの内容を変更したらファイルシステム上のファイルに内容を反映させる<br>コードウォークスルー:	<ol><li>Persistenceプロジェクトを開く</li><li>Resources/test.jsonを開いて中身を説明</li><li>Resources/filesystem.jsを開いて解説:</li></ol><ol><li>シミュレータのみ&mdash; Resourcesディレクトリに書き込み</li><li>getFile()</li><li>JSON.parse()</li><li>各フィールドに値をセット</li><li>フィールドのイベントリスナ</li><li>保存ボタンと値を保存するイベントハンドラ</li></ol>",
		
		"%l_qa": "Q&A",
		"%l_slidenote_qa": "",

		"%l_images_in": "シミュレータのギャラリー画像",
		"%l_no_images": "デフォルトでは画像は登録されていない",
		"%l_open_gallery": "シミュレータでギャラリーを開き、いったん閉じる",
		"%l_find_images": "シミュレータのウェブブラウザで画像を探す(Google画像検索など)",
		"%l_press": "画像を長押し",
		"%l_choose": "画像を保存",
		"%l_slidenote_images_in": "この実習では画像ファイルが必要<br>お分かり？: 画像を保存できるようにするにはいちどギャラリーを開くこと",

		"%l_lab_goals": "実習の目標",
		"%l_make": "TiBountyHunterで画像を（カメラまたはギャラリーから）取得してファイルシステムに保存可能にする",
		"%l_requirements": "要件:",
		"%l_capture_image": "画像を取得（カメラまたはギャラリーから）",
		"%l_store_image": "ファイルシステムに画像を保存",
		"%l_associate_image": "データベースに画像に関する情報を保存",
		"%l_labURL": "<a href='https://wiki.appcelerator.org/display/td/260+Working+With+Media+and+the+File+System'>wiki.appcelerator.org/display/td/260+Working+With+Media+and+the+File+System</a>",
		"%l_slidenote_lab_goals": "データベース変更のためアプリをシミュレータからアンインストールする必要あり<br>データベースにはblobではなくファイルへのパスを保存<br>Wikiからデフォルト画像を取得<br>デモ - <b>TiBH260</b><ul><li>シミュレータのギャラリーに事前に画像を用意すること</li><li>シミュレータ／エミュレータ両方でアプリを表示</li><li>逃亡者用の画像を選択して貼付けるところを表示</li></ul>",

		"%l_solution": "ソリューションウォークスルー",
		"%l_slidenote_solution": "ウォークスルー &mdash; TiBH260<br><ul><li><strong>lib/db.js</strong> &mdash; 新規DB接続とaddPhoto()関数</li><li><strong>ui/common/DetailWindow.js</strong> &mdash; imgView、photoButtonとそのイベントリスナー</li></ul>"
	}
});
