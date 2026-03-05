import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';

import Layout from '../layout';

import Home from '../pages/Home';

//------------------------------------------------------------------------------

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ index: true, element: <Navigate to="qrcode" replace /> },
			{
				path: '/qrcode',
				element: <Home />,
			},
		],
	},
]);

export default function Router() {
	return <RouterProvider router={router} />;
}
