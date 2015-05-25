# Inject Demo

This demo shows how to gain access to a page's 
[isolated world](https://developer.chrome.com/extensions/content_scripts#execution-environment) 
and alter its variables and functions. 

Chrome doesn't allow you to directly access page's Javascript from an extension. There's several discussions on how to 
bypass that security measure. Techniques like [script injection](http://stackoverflow.com/a/4751049/778272) no longer work; answers 
like [this one](http://stackoverflow.com/a/10945153/778272) point you to use TamperMonkey. But remember that TM itself 
is a Chrome Extension! So there must be some way of bypassing that security without the help of TM.
 
Chrome Extensions' docs may mislead you into thinking that it is not possible. 
[Here](https://developer.chrome.com/extensions/contentSecurityPolicy#JSExecution)
the docs say that *Inline JavaScript will not be executed*. At first I thought that it even included `script` tags 
with a `src` attribute, but I was wrong! In fact, that it the only way I found that really works as of now. Well, I 
really don't understand why is it safe if the script in a separate file rather than directly embedded; I've seen a lot
of people in forums questioning the validity of this security measure. Anyway, it took me a while to figure out that 
putting the script in a separate file works.

This demo provides a `index.html` with a simple script that creates a function and calls it periodically using 
`setTimerInterval()`. The `extension` folder contains the demo extension which, when loaded by Chrome, will access 
the isolate world created for the page and override the function aforementioned.

# How to Run

Clone this repo locally. Open Chrome, go to `chrome://extensions/` and drag the `extension` folder over the 
extensions page to install the extension. 

You must serve `index.html` using some simple web server (e.g., using Node.js or Python). Alternatively, you can 
access it live [here](http://luciopaiva.github.io/chrome-inject-demo). It won't work if you load it via `file://`.

Open the console and you should see something like the following output:

    Script running...
    Gained access to page's isolated world.
    hackMe() has been hacked.
    hackMe() returned 1
    hackMe() has been hacked.
    hackMe() returned 2
    ...

# Reference

* [How can I mimic Greasemonkey/Firefox's unsafeWindow functionality in Chrome?](http://stackoverflow.com/q/1622145/778272)
* [Building a Chrome Extension - Inject code in a page using a Content script](http://stackoverflow.com/q/9515704)
* [Chrome extension code vs Content scripts vs Injected scripts](http://stackoverflow.com/q/9915311/778272)
* [Why is window (and unsafeWindow) not the same from a userscript as from a \<script\> tag?](http://stackoverflow.com/q/10824697/778272)
* [onClick within Chrome Extension not working](http://stackoverflow.com/q/13591983/778272)
* [gist: jump_out_of_chrome_sandbox.js](https://gist.github.com/tavisrudd/1174381)
* [An Introduction to Content Security Policy](http://www.html5rocks.com/en/tutorials/security/content-security-policy/)