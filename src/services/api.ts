import axios from 'axios';
import { GetAPIArgs } from './types';

// Generally, this should be in an ENV file
const API_BASE_URL = 'https://snappfood.ir/mobile/v3';

const TIMEOUT = 60000;

const $axios = axios.create({
    baseURL: API_BASE_URL,
    timeout: TIMEOUT,
});

$axios.interceptors.response.use((response) => {
    return {
        ...response,
        data: response?.data?.data,
    };
});

export const serviceGet = ({
    url,
    queryParamsObj,
    config,
}: GetAPIArgs): Promise<unknown> => {
    const finalUrl = `${url}?${new URLSearchParams(queryParamsObj || '')}`;

    return new Promise((resolve, reject) => {
        $axios
            .get(finalUrl, config)
            .then((response) => {
                if (response?.status === 200) {
                    resolve(response.data);
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
};
