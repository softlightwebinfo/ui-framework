export declare class Pager {
    currentPageIndex: number;
    firstItemIndex: number;
    itemsPerPage: number;
    lastItemIndex: number;
    totalItems: number;
    totalPages: number;
    constructor(totalItems: number, itemsPerPage: number, initialPageIndex?: number);
    setTotalItems: (totalItems: number) => void;
    setItemsPerPage: (itemsPerPage: number) => void;
    isPageable: () => boolean;
    getTotalPages: () => number;
    getCurrentPageIndex: () => number;
    getFirstItemIndex: () => number;
    getLastItemIndex: () => number;
    hasNextPage: () => boolean;
    hasPreviousPage: () => boolean;
    goToNextPage: () => void;
    goToPreviousPage: () => void;
    goToPageIndex: (pageIndex: number) => void;
    update: () => void;
}
