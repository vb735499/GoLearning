import { FC, lazy, LazyExoticComponent, Suspense } from 'react';
import { createBrowserRouter } from "react-router-dom";

import LoadingScreen from "./components/LoadingScreen";

const loadable = (Component: LazyExoticComponent<FC>) => (props: any) => (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
);

const Blog = loadable(lazy(() => import("./pages/Blog")));
  
const BrowserRouter = createBrowserRouter([
    {
      path: "/",
      element: <Blog />,
    },
]);

export default BrowserRouter;
