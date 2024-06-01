export interface ImageItem {
    link: string;
    text: string;
}

export interface PortfolioEntry {
    title: string;
    mainImg: string;
    mainImg_alt: string;
    description: string;
    imageSet: ImageItem[];
}

export interface PortfolioData {
    [key: string]: PortfolioEntry;
}
