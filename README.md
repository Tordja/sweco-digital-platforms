<img src="https://sweco.github.io/sweco-digital-platforms/img/logotype-black.svg" width="180px" height="90px" style="margin-left: -30px;" alt="">

# Sweco visual identity manual - digital platforms

The brand's visual identity is an important tool for creating differentiation and consistency. The visual identity manual regulates how we use Sweco's logotype, typography and other visual building blocks. Sweco's visual identity manual for digital platforms must be followed in all digital platforms connected to the Sweco brand. Not all platforms allow a design change in line with all the guidelines. If there are limitations prioritize according to the following order:

1. The Sweco logotype
1. Sweco colors
1. Sweco typography

The final design of digital platforms for Sweco group has to be approved by the group Communication department. Digital platforms for local markets must be approved by the country Communication department.

### The guidelines

The guidelines contain layout options for structuring a Sweco application with [Bootstrap 4](https://getbootstrap.com/), including global styles, required scaffolding and grid system. It also covers styles for displaying content and HTML 5 elements, including normalization, typography, tables and more. Over a dozen components are provided to build buttons, dropdowns, input groups, navigation and much more.

Sweco's visual guidelines for digital platforms are provided in two forms, as precompiled code and as source code. Download precompiled code to quickly add Sweco's visual identity to your project. Download source code, clone or fork for more advanced usage. To be sure to have your pages set up with the latest design and development standards use the starter template.

### Sweco's digital platforms without Bootstrap 4
You can use Sweco's digital platforms without Bootstrap 4 HTML, classes and scripts. We use a collection of CSS to provide an elegant, consistent, and simple baseline to build upon. [Read more about Reboot](https://getbootstrap.com/docs/4.0/content/reboot/).

### Example page

[Sweco visual identity manual - digital platforms](http://sweco.github.io/sweco-digital-platforms/)

### What's included

Within the precompiled download you'll find the following directories and files, logically grouping common assets precompiled and minified. You'll see something like this:

```
  dist/
  ├── css/
  │   └── sweco-bootstrap.min.css
  ├── scripts/
  │   └── sweco-bootstrap.min.js (All javascript frameworks and dependencies minified)
  ├── fonts/
  │   ├── SwecoSans-Regular.*
  │   ├── SwecoSans-Medium.*
  │   ├── SwecoSans-Bold.*
  │   ├── fontawesome-webfont.*
  ├── img/
  │   ├── apple-touch-icon.png
  │   ├── favicon-*.png
  │   ├── mstile-*.png
  │   ├── logotype.svg
  │   └── logotype-black.svg
  └── starter-template.html
```
### Frameworks and dependencies

The sweco-bootstrap.js includes a handful of JavaScript to help bring some of our components to life.

* [Bootstrap 4](https://getbootstrap.com/)
* [jQuery](https://jquery.com/)
* [Popper.js](https://popper.js.org/)
* [Font-awesome](http://fontawesome.io/icons/)
* [Modernizr](https://modernizr.com/)
* [jQuery-browser-detection](https://github.com/schickling/jquery-browser-detection)
* [Progress.js](http://usablica.github.io/progress.js/)
* [Moment with locales](https://github.com/moment/moment)
* [Bootstrap datetimepicker](http://eonasdan.github.io/bootstrap-datetimepicker/)
* [Typeahead.js](https://twitter.github.io/typeahead.js/)

Dependency versions see: [bower.json](https://github.com/sweco/sweco-digital-platforms/blob/master/bower.json)

## Bugs and feature requests

Have a bug or a feature request? Please first read the [existing issues](https://github.com/sweco/sweco-digital-platforms/issues) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/sweco/sweco-digital-platforms/new).

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

1. `git clone https://github.com/sweco/sweco-digital-platforms.git` this repository
1. Change into the new directory
1. `npm install`
1. `bower install`
1. `grunt`

## Running / Development

* `ember s`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `grunt build`

### Building Ember
* `ember build` (development)
* `ember build --environment production` (production)

## Editing
If using Sublime Text, exclude node_modules, add e.g. the following to Settings / User:
```
"folder_exclude_patterns":
[
	".svn",
	".git",
	".hg",
	".DS_Store",
	"CVS",
	"tmp/*",
	"node_modules"
],
```
Also add syntax highlighting and tab/code completion for Less, Sass and SCSS files with package control.


## Rebuild ember-cli

For a moment, nothing happened. Then, after a second or so, nothing continued to happen.

Remove old global ember-cli, Clear NPM and Bower cache. Then install new global ember-cli and choose version.

    npm uninstall -g ember-cli
    npm cache clean
    bower cache clean
    npm install -g ember-cli
    npm install
    npm install minimatch@3.0.4 --save-dev
    bower install
    ember s

## Rebuild thirdparty dependencies

This is for resetting NPM- and Bower-dependencies. If major changes in dependencies versioning or layoutstructure/webfonts. Don´t forget to do it in the working branch.

Linux/Mac/Windows Bash-shell (For ex. Git prompt)

    rm -rf node_modules
    rm -rf bower_components
    npm install
    bower install
    npm install minimatch@3.0.4 --save-dev
    ember s

REM Windows CMD (Grunt dependencies needs the command patch, if it´s not done by Cygwin, then use bash-prompt)

    rd /q /s node_modules
    rd /q /s bower_components
    npm install
    bower install
    ember s

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

