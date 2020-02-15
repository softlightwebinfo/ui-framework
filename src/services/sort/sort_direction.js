import PropTypes from 'prop-types';
var ASC = 'asc';
var DESC = 'desc';
export var SortDirection = Object.freeze({
    ASC: ASC,
    DESC: DESC,
    isAsc: function (direction) {
        return direction === ASC;
    },
    reverse: function (direction) {
        return this.isAsc(direction) ? DESC : ASC;
    },
});
export var SortDirectionType = PropTypes.oneOf([ASC, DESC]);
