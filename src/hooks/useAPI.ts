import { useEffect, useState } from 'react';

interface useAPIArgs<T, K> {
    requestFunction: (data: T) => Promise<K>;
    requestData: T;
    fireOnLoad?: boolean;
}

export const useAPI = <T, K>({
    requestData,
    requestFunction,
    fireOnLoad,
}: useAPIArgs<T, K>) => {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<K>();

    function request(data: T): Promise<K> {
        setLoading(true);
        return new Promise(function (resolve, reject) {
            requestFunction(data)
                ?.then((response: K) => {
                    resolve(response);
                })
                ?.catch((error: K) => {
                    reject(error);
                })
                .finally(() => {
                    setLoading(false);
                });
        });
    }

    useEffect(() => {
        if (fireOnLoad) {
            request(requestData).then((res) => setResult(res));
        }
    }, [fireOnLoad]);

    return { request, loading, result };
};
