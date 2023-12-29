import { RouterProvider } from 'react-router-dom';
import { router } from '@/routes';
import { Suspense, useEffect } from 'react';
import { store } from '@/store';
import { setLatAndLong } from '@/store/user/slice';
import Layout from '@/shared/Layout';

function App() {
    useEffect(() => {
        // Only to demonstrate pushing data to redux store
        store.dispatch(setLatAndLong({ lat: '35.754', long: '51.328' }));
    }, []);

    return (
        <Layout>
            <Suspense fallback={<div>Loading...</div>}>
                <RouterProvider router={router} />
            </Suspense>
        </Layout>
    );
}

export default App;
