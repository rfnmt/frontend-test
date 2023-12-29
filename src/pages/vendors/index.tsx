import { useAPI } from '@/hooks/useAPI';
import { getVendorsListAPI } from './API';
import Loading from './components/Loading';
import { ResultItem } from './types';
import VendorCard from './components/VendorCard';

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

    if (loading) return <Loading />;

    return (
        <div>
            {result?.vendors?.map((item: ResultItem) =>
                item.type === 'VENDOR' ? (
                    <VendorCard
                        key={item.data.id}
                        {...item.data}
                        className='my-5'
                    />
                ) : null,
            )}
        </div>
    );
}
