var isElasticDomain = /(https?:\/\/(.+?\.)?elastic\.co((\/|\?)[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*)?)/g;
// In order for the domain to be secure the regex
// has to match _and_ the lengths of the match must
// be _exact_ since URL's can have other URL's as
// path or query params!
export var isDomainSecure = function (url) {
    if (url === void 0) { url = ''; }
    var matches = url.match(isElasticDomain);
    if (!matches) {
        return false;
    }
    var match = matches[0];
    return match.length === url.length;
};
