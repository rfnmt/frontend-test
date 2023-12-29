import { useSelector } from 'react-redux';
import { useAPI } from '@/hooks/useAPI';
import { getVendorsListAPI } from './API';
import Loading from './components/Loading';
import VendorCard from './components/VendorCard';
import { RootState } from '@/store';
import InfiniteLoader from 'react-window-infinite-loader';
import { VariableSizeList } from 'react-window';
import { CSSProperties, useState } from 'react';
import { isEmpty } from '@/utils';

export default function Vendors() {
    const [pageData, setPageData] = useState<
        Partial<Awaited<ReturnType<typeof getVendorsListAPI>>>
    >({});
    const [pageNumber, setPageNumber] = useState(0);

    const { lat, long } = useSelector((state: RootState) => ({
        lat: state.user.lat,
        long: state.user.long,
    }));

    const { result, loading } = useAPI({
        isReady: !!lat && !!long,
        requestFunction: getVendorsListAPI,
        dependencies: [pageNumber],
        requestData: {
            lat,
            long,
            page_size: '10',
            page: `${pageNumber}`,
        },
        successCallBack(res) {
            setPageData((prev) => ({
                ...prev,
                ...res,
                vendors: [...(prev.vendors || []), ...(res.vendors || [])],
            }));
        },
    });

    const loadMoreItems = () => {
        setPageNumber((prev) => prev + 1);
    };

    if (loading && isEmpty(pageData)) return <Loading />;

    const Item = ({
        index,
        style,
    }: {
        index: number;
        style: CSSProperties;
    }) => {
        const item = pageData?.vendors[index];

        return item?.type === 'VENDOR' ? (
            <VendorCard
                {...(item?.data || {})}
                style={style}
                className='my-5'
            />
        ) : null;
    };

    return (
        <div>
            {!isEmpty(pageData) && (
                <InfiniteLoader
                    isItemLoaded={(index) => !!pageData?.vendors[index]}
                    itemCount={result?.count}
                    loadMoreItems={loadMoreItems}
                    threshold={7}
                >
                    {({ onItemsRendered, ref }) => (
                        <VariableSizeList
                            itemCount={pageData?.vendors?.length - 2}
                            onItemsRendered={onItemsRendered}
                            ref={ref}
                            height={window.innerHeight}
                            itemSize={(index) =>
                                pageData?.vendors[index]?.type === 'VENDOR'
                                    ? 235
                                    : 0
                            }
                            width={400}
                            style={{ direction: 'rtl' }}
                        >
                            {Item}
                        </VariableSizeList>
                    )}
                </InfiniteLoader>
            )}
        </div>
    );
}
