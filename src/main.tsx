import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Cart } from './pages/Cart/Cart.tsx';
import { Menu } from './pages/Menu/Menu.tsx';
import { Error } from './pages/Error/Error.tsx';
import { Layout } from './layout/Layout/Layout.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Menu />
            },
            
            {
                path: '/cart',
                element: <Cart /> 
            }
            
        ]
    },
    {
        path: '*',
        element: <Error />
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        {/* <App /> */}
        <RouterProvider router={router} />
    </React.StrictMode>
);
