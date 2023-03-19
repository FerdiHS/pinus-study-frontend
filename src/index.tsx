import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ModulePage from "./pages/ModulePage";
import SubscribersPage from "./pages/SubscribersPage";
import ProfilePage from "./pages/ProfilePage";

const container = document.getElementById("root")!;
const root = createRoot(container);

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path:"/search/:keyword",
        element: <App />
    },
    {
        path: "*",
        element: <App />,
    },
    {
        path: "/module/:mod",
        element: <ModulePage />,
    },
    {
        path: "/subscribers/:mod",
        element: <SubscribersPage />
    },
    {
        path: "/profile/:userId",
        element: <ProfilePage />
    }
]);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
