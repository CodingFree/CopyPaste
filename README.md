### Developed by CodingFree
Linkedin: http://es.linkedin.com/in/madridcrespo/en

Twitter: @CodingFree

License: Mozilla Public License Version 2.0 ( http://www.mozilla.org/MPL/2.0/ )

### Copy Paste for Firefox OS.
This is a first approach to implement the copy/paste in Firefox OS. It will be available to install from the Marketplace, but you could also push this as an app using the App Manager.

For example:
![Using the app manager to install the Copy Paste Keyboard.](http://i.imgur.com/VPo913M.png)

1. You will need to enable the keyboard in the Keyboards list. 
2. And switch to the Copy Paste keyboard using the following key:
![Switching to the Copy/Paste keyboard.](http://imgur.com/ofk5gD6,png)

And this is how it looks like:
![Cool, uh?](http://imgur.com/paTwuEB.png)


***


**Currently, it only copies a whole input**. If the input has 200 characters, it will copy the whole text. In **future releases**, it will be able to copy substrings, indeed. _This release can't copy strings from webpages or html, it only copies input fields_.

It uses localStorage as a clipboard and it would make you able to copy strings from one app to another. I have tried it between a the mail client and a notes app.

In future releases, **it will be able even to copy non-string objects**.