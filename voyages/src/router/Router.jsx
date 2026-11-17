// Avec react router, il est possible de déplacer la logique de navigation dans un fichier dédié.
import { createBrowserRouter } from "react-router-dom"
// createBrowserRouter permet de créer un router selon les url du navigateur

import MainLayout from "../layouts/MainLayout"
import AboutPage from "../pages/AboutPage"
import DestinationDetailsPage from "../pages/DestinationDetailsPage"
import DestinationsPage from "../pages/DestinationsPage"
import HomePage from "../pages/HomePage"
import NotFoundPage from "../pages/NotFoundPage"
import SearchPage from "../pages/SearchPage"
import ContactPage from "../pages/ContactPage"

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        // Toutes les pages passent par MainLayout
        errorElement: <NotFoundPage />,
        children: [
            {
                index: true,
                // c'est la page par défaut
                element: <HomePage />
            }, 
            {
                path: "destinations",
                element: <DestinationsPage />
            },
            {
                path: "destinations/:slug",
                element: <DestinationDetailsPage />
            },
            {
                path: "search",
                element: <SearchPage />
            },
            {
                path: "contact",
                element: <ContactPage />
            },
            {
                path: "about",
                element: <AboutPage />
            },
            {
                path: "*",
                element: <NotFoundPage />
            }, 
        ]
    }
])

export default router