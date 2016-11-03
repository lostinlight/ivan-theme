![open source for the win](http://kodeguild.com/shared/OpenSource4theWin.svg)

## Ivan
_minimalistic and somewhat old-school HTML5 resume template_

~~~

Created a while ago for a friend. Never used.
May be you're in need of an online resume, yet too lazy to code it yourself?

~~~

I'll be glad if someone finds it useful!


### Preview

![screen one](preview.png?raw=true)

![screen two](preview-800x600.png?raw=true)

### Features
- SCSS, Gulp, jQuery
- Video/Image background
- Filterable portfolio page
- QR Code widget

### File Structure
- site folder — all files that you want to upload on the server are here;
- src folder — contains modularized scss/js files for easy styles customization and maintenance

### Steps
You need Node.js, npm and Gulp installed on your computer.

1. Run `npm install` in your resume folder with gulpfile.js
2. Run `gulp` in your resume folder with gulpfile.js
3. You will find your template at localhost:8080
4. To change theme colours, change variable values in "src/scss/colors.scss" and "src/scss/gradients.scss"
5. Run `gulp styles` to compile styles
6. Run `gulp scripts` to compile scripts
