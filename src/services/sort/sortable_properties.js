import { Comparators } from './comparators';
/**
 * @typedef {Object} SortableProperty
 * @property {string} sortableProperty.name - Name of the property.
 * @property {function} sortableProperty.getValue - A function that takes in an object and returns a value to sort
 * by.
 * @property {boolean} sortableProperty.isAscending - The direction of the last sort by this property. Used to preserve
 * past sort orders.
 */
/**
 * Stores sort information for a set of SortableProperties, including which property is currently being sorted on, as
 * well as the last sort order for each property.
 */
var SortableProperties = /** @class */ (function () {
    /**
     * @param {Array<SortableProperty>} sortableProperties - a set of sortable properties.
     * @param {string} initialSortablePropertyName - Which sort property should be sorted on by default.
     */
    function SortableProperties(sortableProperties, initialSortablePropertyName) {
        this.sortableProperties = sortableProperties;
        /**
         * The current property that is being sorted on.
         * @type {SortableProperty}
         */
        var currentSortedProperty = this.getSortablePropertyByName(initialSortablePropertyName);
        if (!currentSortedProperty) {
            throw new Error("No property with the name " + initialSortablePropertyName);
        }
        this.currentSortedProperty = currentSortedProperty;
    }
    /**
     * @returns {SortableProperty} The current property that is being sorted on. Undefined if no sort order is applied.
     */
    SortableProperties.prototype.getSortedProperty = function () {
        return this.currentSortedProperty;
    };
    /**
     * Sorts the items passed in and returns a newly sorted array.
     * @param items {Array.<Object>}
     * @returns {Array.<Object>} sorted array of items, based off the sort properties.
     */
    SortableProperties.prototype.sortItems = function (items) {
        var copy = items.slice();
        var comparator = Comparators.value(this.getSortedProperty().getValue);
        if (!this.isCurrentSortAscending()) {
            comparator = Comparators.reverse(comparator);
        }
        copy.sort(comparator);
        return copy;
    };
    /**
     * Returns the SortProperty with the given name, if found.
     * @param {String} propertyName
     * @returns {SortableProperty|undefined}
     */
    SortableProperties.prototype.getSortablePropertyByName = function (propertyName) {
        return this.sortableProperties.find(function (property) { return property.name === propertyName; });
    };
    /**
     * Updates the sort property, potentially flipping the sort order based on whether the same
     * property was already being sorted.
     * @param propertyName {String}
     */
    SortableProperties.prototype.sortOn = function (propertyName) {
        var newSortedProperty = this.getSortablePropertyByName(propertyName);
        if (!newSortedProperty) {
            throw new Error("No property with the name " + propertyName);
        }
        var sortedProperty = this.getSortedProperty();
        if (sortedProperty.name === newSortedProperty.name) {
            this.flipCurrentSortOrder();
        }
        else {
            this.currentSortedProperty = newSortedProperty;
        }
    };
    /**
     * @returns {boolean} True if the current sortable property is sorted in ascending order.
     */
    SortableProperties.prototype.isCurrentSortAscending = function () {
        var sortedProperty = this.getSortedProperty();
        return sortedProperty ? this.isAscendingByName(sortedProperty.name) : false;
    };
    /**
     * @param {string} propertyName
     * @returns {boolean} True if the given sort property is sorted in ascending order.
     */
    SortableProperties.prototype.isAscendingByName = function (propertyName) {
        var sortedProperty = this.getSortablePropertyByName(propertyName);
        return sortedProperty ? sortedProperty.isAscending : false;
    };
    /**
     * Flips the current sorted property sort order.
     */
    SortableProperties.prototype.flipCurrentSortOrder = function () {
        this.currentSortedProperty.isAscending = !this.currentSortedProperty
            .isAscending;
    };
    return SortableProperties;
}());
export { SortableProperties };
