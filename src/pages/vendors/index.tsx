import { useAPI } from '@/hooks/useAPI';
import { getVendorsListAPI } from './API';

export default function Vendors() {
    const { result, loading } = useAPI({
        fireOnLoad: true,
        requestFunction: getVendorsListAPI,
        requestData: {
            lat: '35.754',
            long: '51.328',
            page_size: '10',
            page: '0',
        },
    });

    console.log({ result, loading });

    return <div>Vendors</div>;
}
