import { VendorDetails } from '../types';

const transformVendor = (vendor: any): VendorDetails => ({
    id: vendor.id,
    title: vendor.title,
    description: vendor.description,
    rate: vendor.rate,
    logo: vendor.logo,
    deliveryFee: vendor.deliveryFee,
    countReview: vendor.countReview,
    backgroundImage: vendor.backgroundImage,
    deliveryTime: vendor.deliveryTime,
});

export const getVendorsListTransformer = (data: any) => ({
    count: data?.count,
    openCount: data?.open_count,
    vendors: data?.finalResult?.map((item: any) => ({
        type: item.type,
        data: item.type === 'VENDOR' ? transformVendor(item.data) : item.data,
    })),
});
