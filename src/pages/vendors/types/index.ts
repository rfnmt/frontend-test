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
    coverPath: string;
    deliveryFee: number;
    countReview: number;
}
