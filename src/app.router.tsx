import { createHashRouter } from "react-router";
import HomePage from "./user/pages/home/HomePage";
import ThemePage from "./user/pages/theme/ThemePage";
import UserLayout from "./user/layouts/UserLayout";
import ContactPage from "./user/contact/ContactPage";

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
    // {
    //     path: 'theme',
    //     element: <ThemePage />
    // }
])