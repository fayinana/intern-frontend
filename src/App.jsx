import GlobalStyles from "./styles/GlobalStyles";
import { DarkModeContextProvider } from "./context/DarkModeContext";

import AdminPageLayout from "./ui/AdminPageLayout";
import TenancyApplications from "./pages/TenancyApplications";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";
import DashboardLayout from "./components/DashboardLayout";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Navigate to="users" replace />,
      },
      {
        path: "/admin",
        element: <AdminPageLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="dashboard" replace />,
          },
          {
            path: "dashboard",
            element: <DashboardLayout />,
          },
          {
            path: "applications",
            element: <TenancyApplications />,
          },
          {
            path: "users",
            element: <p>user</p>,
          },
          {
            path: "properties",
            element: <p>property</p>,
          },
        ],
      },
      {
        path: "/users",
        element: <HomePage />,
        children: [
          {
            path: "profile",
            element: <DashboardLayout />,
          },
          {
            path: "addProperty",
            element: <TenancyApplications />,
          },
          {
            path: "favorite",
            element: <p>user</p>,
          },
        ],
      },
    ],
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);

function App() {
  return (
    <DarkModeContextProvider>
      <GlobalStyles />
      <RouterProvider router={router} />
    </DarkModeContextProvider>
  );
}

export default App;
