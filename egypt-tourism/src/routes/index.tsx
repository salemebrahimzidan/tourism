import { createBrowserRouter, Navigate } from 'react-router-dom'
import Layout from '../components/Layout'
import HomePage from '../pages/HomePage'
import ServicesPage from '../pages/ServicesPage'
import ToursPage from '../pages/ToursPage'
import ContactPage from '../pages/ContactPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'tours', element: <ToursPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'booking', element: <Navigate to="/contact" replace /> },
      { path: 'about', element: <Navigate to="/" replace /> },
    ],
  },
])
