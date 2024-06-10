export interface ImageType {
    url: string;
}

export interface Image {
    height: number;
    url: string;
    width: number;
}

export interface Item {
    id: string;
    href: string;
    genres: string[];
    images: Image[];
    name: string;
    uri: string;
    external_urls: {
        spotify: string;
    };
    followers: {
        href: null;
        total: number;
    };
    popularity: number;
    type: string;
}

export interface UpdateState {
    pageNumber: number;
    rangeStart: number;
    rangeEnd: number;
    itemsToDisplay: Item[];
}

export interface APIResponse {
    currentPage: number;
    data: Item[];
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
    rangeStart: number;
    rangeEnd: number;
}

export interface PaginationBarProps {
    itemsDisplayed: {
        pageNumber: number;
        rangeStart: number;
        rangeEnd: number;
        itemsToDisplay: Item[];
        
    };
    setLoading: Function;
    setItemsDisplayed: (newState: UpdateState) => void; 
}