import { serviceGet } from '@/services/api';
import { getVendorsListAPIArgs } from '../types';
import { getVendorsListTransformer } from './transformers';

const ENDPOINTS = {
    VENDORS_LIST: '/restaurant/vendors-list',
};

export const getVendorsListAPI = ({
    lat,
    long,
    page,
    page_size,
}: getVendorsListAPIArgs) => {
    return serviceGet({
        url: ENDPOINTS.VENDORS_LIST,
        queryParamsObj: { lat, long, page, page_size },
    }).then(getVendorsListTransformer);
};
