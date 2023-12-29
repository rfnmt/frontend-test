import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';

const MainPage = lazy(() => import('@/pages/main'));
const VendorsPage = lazy(() => import('@/pages/vendors'));

const ROUTES = {
    MAIN: '/',
    VENDORS: '/vendors',
};

export const router = createBrowserRouter([
    {
        path: ROUTES.MAIN,
        element: <MainPage />,
    },
    {
        path: ROUTES.VENDORS,
        element: <VendorsPage />,
    },
]);
