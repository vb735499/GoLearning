import { FC, lazy, LazyExoticComponent, Suspense } from 'react';
import { createBrowserRouter } from "react-router-dom";

import LoadingScreen from "./components/LoadingScreen";

const loadable = (Component: LazyExoticComponent<FC>) => (props: any) => (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
);

const Blog = loadable(lazy(() => import("./pages/Blog")));
const UploadPage = loadable(lazy(() => import("./pages/UploadPage")));
  
const BrowserRouter = createBrowserRouter([
    {
      path: "/",
      element: <Blog />,
    },{
      path: "/upload",
      element: <UploadPage />,
    }
]);

export default BrowserRouter;
