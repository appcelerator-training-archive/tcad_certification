README / INSTRUCTIONS

COURSE LEVEL SLIDESHOW:
	- Stored in coursename/index.html
	- Set the <title> tag to this course's US English title
	- Set the <meta description tag to the US English course title
	- Update the pre-defined slides to include the name, and links to each lesson's
		corresponding file
	- Each text tag (<p> or <li> or <h1> etc.) must have a class name that begins with
		"l_" and is unique. Each of those class names must be added to the coursename/i18n/localizations.js
		file and their values must be set equal to the US English version of the strings. That 
		file is used for translation and its contents OVERRIDES the text in this file.
	- Images for the course agenda should be stored in the coursename/images folder

PRESENTER NOTES FILE
	- Do not modify. Presenter notes are loaded dynamically into this file.
	
LESSON FILES
	- Stored in the ###/index.html file (for example, lesson 205 is in the 205/index.html file)
	- Set the <title> tag to this lesson's US English title
	- Set the <meta description tag to the US English course & lesson title
	- Add one <section></section> for each slide. Slides can contain most any valid HTML
	- Each text tag (<p> or <li> or <h1> etc.) must have a class name that begins with
		"l_" and is unique. Each of those class names must be added to the ###/i18n/localizations.js
		file and their values must be set equal to the US English version of the strings. That 
		file is used for translation and its contents OVERRIDES the text in this file.
	- Each slide must have a <div class="slidenote"></div> container, which can be empty. These
		are used for presenter notes. They also must be given unique "l_" classnames and strings
		provided in the localizations.js file.
	- Please use inline CSS on the slides to size & arrange contents.
	- Graphics should be placed in the coursename/###/images folder and cropped/sized appropriately.
	- Assume a 1024 x 768 display resolution when sizing images or setting CSS layout params
	- A link to the index.html for each lesson must be added in order to the coursename/index.html
		title slide.
