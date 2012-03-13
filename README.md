jquery.savefile
====

A simple jQuery interface to [SaveFile](http://saveile.joshmcarthur.com), making it easier to download files from Javascript.

Requirements
---

#### Using

jquery.savefile requires [jQuery](http://jquery.com) to be loaded into the page before jquery.savefile (Just make sure jQuery's \<script> tag comes before jquery.savefile's).

#### Improving

* Clone the source code: `git clone git@github.com:joshmcarthur/jquery.savefile.git`
* Install build dependencies: `npm install -g coffee-script && npm install uglify-js`
* Make changes to `src/jquery.savefile.coffee` ** Note: do NOT change jquery.savefile.js - it is automatically generated from the Coffeescript**
* Run `cake build` in the root of the project to generate jquery.savefile.js and the minified version, jquery.savefile.min.js


Use
---

Before you get started, have a read of the [page at SaveFile](http://savefile.joshmcarthur.com) to understand how this all works.

This jQuery plugin can be used just like any other - just pass an element to it, and it will try and use the value or innerText of the element, like so:

``` js
$('textarea#example').savefile();
```

…this will download a file called 'file.txt' though - not ideal. You can customize this by passing in some options to savefile, like so:

``` js
$('textarea#example').savefile({
  'filename': 'example',
  'extension': 'txt'
});
```

If you don't have an element, that's fine as well - you can pass in your own content to go inside the file, as the final option:

``` js
$.savefile({
  'filename': 'custom_content',
  'extension': 'html',
  'content': '<h1>Custom Content!</h1>'
})
```

…and downloads are as simple as that!

Credits:
---

The savefile service and jQuery plugin were developed in spare time by [Josh McArthur](http://twitter.com/sudojosh).

Copyright (c) 2012 Josh McArthur

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
