
# vdux

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Stateless virtual dom &lt;-&gt; Redux

## Installation

    $ npm install @ashaffer/vdux

## Setup

vdux takes a stateless [virtual-dom](https://github.com/Matt-Esch/virtual-dom), and wires it to a [redux](https://github.com/rackt/redux) store.  You call it like this:

```javascript
vdux(store, app, rootNode)
```

From then on, when your store emits a state update, your new state atom will be passed to `app`, which will render into rootNode.

## DOM Events

Your DOM event handlers get setup in the standard way that [virtual-dom](https://github.com/Matt-Esch/virtual-dom) does it via delegation.  That is, you set `ev-&lt;eventName&gt;` as an attribute on your element (e.g. `ev-click`).  The way your event handlers trigger actions however is by returning a value.  The return value of your DOM event handlers will be dispatched into your redux store.  This forms a [cycle](https://github.com/cyclejs/cycle-core) that will define your entire application in a side-effect free way.

## Side-effects

Almost side-effect free, anyway.  You still need to do things like issue requests.  I recommend you contain these effects in your redux middleware stack.  Here are some libraries / strategies for doing this:

  * [redux-effects](https://github.com/redux-effects/redux-effects)
  * [redux-thunk](https://github.com/gaearon/redux-thunk)
  * [redux-promise](https://github.com/acdlite/redux-promise)


## License

The MIT License

Copyright &copy; 2015, Weo.io &lt;info@weo.io&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
