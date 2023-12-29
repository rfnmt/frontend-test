export interface getVendorsListAPIArgs {
    lat: string;
    long: string;
    page: string;
    page_size: string;
}

export interface VendorDetails {
    id: number;
    title: string;
    description: string;
    rate: number;
    logo: string;
    deliveryFee: number;
    countReview: number;
    backgroundImage: string;
}

export interface ResultItem {
    type: 'VENDOR' | 'TEXT';
    data: ResultItem['type'] extends 'TEXT' ? string : VendorDetails;
}
