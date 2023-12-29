import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { useEffect } from 'react';
import { store } from './store';
import { setLatAndLong } from './store/user/slice';

function App() {
    useEffect(() => {
        // Only to demonstrate pushing data to redux store
        store.dispatch(setLatAndLong({ lat: '35.754', long: '51.328' }));
    }, []);

    return <RouterProvider router={router} />;
}

export default App;
