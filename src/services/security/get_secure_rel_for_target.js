/**
 * Secures outbound links. For more info:
 * https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/
 */
import filter from 'lodash/filter';
import { isDomainSecure } from '../url';
export var getSecureRelForTarget = function (_a) {
    var href = _a.href, target = _a.target, rel = _a.rel;
    if (!target || !target.includes('_blank')) {
        return rel;
    }
    var isElasticHref = !!href && isDomainSecure(href);
    var relParts = !!rel
        ? filter(rel.split(' '), function (part) { return !!part.length && part !== 'noreferrer'; })
        : [];
    if (relParts.indexOf('noopener') === -1) {
        relParts.push('noopener');
    }
    if (!isElasticHref) {
        relParts.push('noreferrer');
    }
    return relParts
        .sort()
        .join(' ')
        .trim();
};
