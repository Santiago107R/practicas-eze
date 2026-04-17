import { createHashRouter } from "react-router";
import HomePage from "./user/pages/home/HomePage";
import ThemePage from "./user/pages/theme/ThemePage";
import UserLayout from "./user/layouts/UserLayout";
import ContactPage from "./user/contact/ContactPage";
import { lazy } from "react";
import RandomPage from "./gifs/pages/random/RandomPage";

const AdminPage = lazy(() => import('./admin/pages/admin/AdminPage'))

export const AppRouter = createHashRouter([
    {
        path: '/',
        element: <UserLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'theme',
                element: <ThemePage />
            },
            {
                path: 'contact',
                element: <ContactPage />
            }
        ]
    },
    {
        path: 'admin',
        element: <AdminPage />
    },
    {
        path: 'gifs',
        element: <RandomPage />
    },
    // {
    //     path: 'theme',
    //     element: <ThemePage />
    // }
])