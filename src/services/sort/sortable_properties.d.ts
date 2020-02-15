import { Primitive } from './comparators';
export interface SortableProperty<T> {
    name: string;
    getValue: (obj: T) => Primitive;
    isAscending: boolean;
}
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
export declare class SortableProperties<T> {
    sortableProperties: Array<SortableProperty<T>>;
    currentSortedProperty: SortableProperty<T>;
    /**
     * @param {Array<SortableProperty>} sortableProperties - a set of sortable properties.
     * @param {string} initialSortablePropertyName - Which sort property should be sorted on by default.
     */
    constructor(sortableProperties: Array<SortableProperty<T>>, initialSortablePropertyName: string);
    /**
     * @returns {SortableProperty} The current property that is being sorted on. Undefined if no sort order is applied.
     */
    getSortedProperty(): SortableProperty<T>;
    /**
     * Sorts the items passed in and returns a newly sorted array.
     * @param items {Array.<Object>}
     * @returns {Array.<Object>} sorted array of items, based off the sort properties.
     */
    sortItems(items: T[]): T[];
    /**
     * Returns the SortProperty with the given name, if found.
     * @param {String} propertyName
     * @returns {SortableProperty|undefined}
     */
    getSortablePropertyByName(propertyName: string): SortableProperty<T>;
    /**
     * Updates the sort property, potentially flipping the sort order based on whether the same
     * property was already being sorted.
     * @param propertyName {String}
     */
    sortOn(propertyName: string): void;
    /**
     * @returns {boolean} True if the current sortable property is sorted in ascending order.
     */
    isCurrentSortAscending(): boolean;
    /**
     * @param {string} propertyName
     * @returns {boolean} True if the given sort property is sorted in ascending order.
     */
    isAscendingByName(propertyName: string): boolean;
    /**
     * Flips the current sorted property sort order.
     */
    flipCurrentSortOrder(): void;
}
