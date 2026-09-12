import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AuthProvider } from './context/AuthContext.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LayoutMenu } from './LayoutMenu/LayoutMenu.tsx'
import { Favourites } from './pages/Favourites/Favourites.tsx'
import { Login } from './pages/Login/Login.tsx'
import { Movie } from './pages/Movie/Movie.tsx'
import { Menu } from './pages/Menu/Menu.tsx'
import { Error } from './pages/Error/Error.tsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <LayoutMenu />,
		children: [
			{
				path: '/',
				element: <Menu />,
			},
			{
				path: '/favourites',
				element: <Favourites />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/movie/:id',
				element: <Movie />
			}
		]
	},
	{
		path: '*',
		element: <Error />
	},
])

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</StrictMode>,
)
