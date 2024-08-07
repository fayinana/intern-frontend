/* eslint-disable react/prop-types */
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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import UsersPageLayout from "./ui/UsersPageLayout";
import BookedPropertyList from "./pages/BookedPropertyList";
import AllProperties from "./components/AllProperties";
import AddProperty from "./pages/AddProperty";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
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
        element: <AllProperties></AllProperties>,
      },
    ],
  },
  {
    path: "/users",
    element: <UsersPageLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <AllProperties></AllProperties>,
      },
      {
        path: "message",
        element: <p>messages</p>,
      },
      {
        path: "notification",
        element: <BookedPropertyList />,
      },
      {
        path: "addProperty",
        element: <AddProperty />,
      },
      {
        path: "favorite",
        element: <p>favorite</p>,
      },
    ],
  },

  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/signIn",
    element: <Login />,
  },
]);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <DarkModeContextProvider>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <AuthContextProvider>
          <RouterProvider router={router} />
        </AuthContextProvider>
      </QueryClientProvider>

      {/* toasts */}
      <Toaster
        position="bottom-right"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },

          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </DarkModeContextProvider>
  );
}

export default App;
