import {
  Navigate,
  RouterProvider,
  createBrowserRouter as newBrowserRouter,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { DarkModeProvider } from "./context/DarkModeContext";
import Error from "./ui/Error";
import Loader from "./ui/Loader";
import InformationHeader from "./ui/InformationHeader";
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
import FAQPage from "./pages/FAQPage";
import ConnectPage from "./pages/ConnectPage";
import WhatIsTurboPage from "./pages/WhatIsTurboPage";

const router = newBrowserRouter([
  {
    errorElement: <Error />,
    children: [
      {
        element: <InformationHeader />,
        children: [
          {
            path: "/",
            element: <Navigate replace to="faq" />,
          },
          {
            path: "/faq",
            element: <FAQPage />,
          },
          {
            path: "/connect",
            element: <ConnectPage />,
          },
          {
            path: "/whatis",
            element: <WhatIsTurboPage />,
          },
        ],
      },
      {
        element: (
          <Suspense fallback={<Loader />}>
            <PageNotFound />
          </Suspense>
        ),
        path: "/*",
      },
    ],
  },
]);

export default function App() {
  return (
      <DarkModeProvider>
          <RouterProvider router={router} />
          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 4000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: "#fff",
                color: "#374151",
              },
            }}
          />
      </DarkModeProvider>
  );
}
