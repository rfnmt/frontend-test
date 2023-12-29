import { useSelector } from 'react-redux';
import { useAPI } from '@/hooks/useAPI';
import { getVendorsListAPI } from './API';
import Loading from './components/Loading';
import { ResultItem } from './types';
import VendorCard from './components/VendorCard';
import { RootState } from '@/store';

export default function Vendors() {
    const { lat, long } = useSelector((state: RootState) => ({
        lat: state.user.lat,
        long: state.user.long,
    }));

    const { result, loading } = useAPI({
        isReady: !!lat && !!long,
        requestFunction: getVendorsListAPI,
        requestData: {
            lat,
            long,
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
