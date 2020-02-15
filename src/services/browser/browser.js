var BrowserImpl = {
    isEventSupported: function (name, element) {
        return "on" + name in element;
    },
};
export var Browser = Object.freeze(BrowserImpl);
