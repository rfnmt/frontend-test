import { useEffect, useState } from 'react';

interface useAPIArgs<T> {
    requestFunction: (data: T) => Promise<unknown>;
    requestData: T;
    fireOnLoad?: boolean;
}

export const useAPI = <T>({
    requestData,
    requestFunction,
    fireOnLoad,
}: useAPIArgs<T>) => {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<unknown>();

    function request(data: T): Promise<unknown> {
        setLoading(true);
        return new Promise(function (resolve, reject) {
            requestFunction(data)
                ?.then((response: unknown) => {
                    resolve(response);
                })
                ?.catch((error: unknown) => {
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
