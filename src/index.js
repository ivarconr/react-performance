var ReactDOMServer = require('react-dom/server');
var React = require('react');
var ReactComponent = require('./ReactComponent');
var VanillaComponent = require('./VanillaComponent');
var timeIt = require('./timeIt');

timeIt(100, "react", () => {
    return ReactDOMServer.renderToString(React.createFactory(ReactComponent)({
        a: "hello"
    }));
});

timeIt(100, "react-static", () => {
    return ReactDOMServer.renderToStaticMarkup(React.createFactory(ReactComponent)({
        a: "hello"
    }));
});

timeIt(100, "vanilla", () => {
    return VanillaComponent.render({
        a: "hello"
    });
});


