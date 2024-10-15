import React, { Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "@/pages/layout";
import ErrorPage from "@/pages/error";

const Notfound = React.lazy(() => import("@/pages/not-found"));
const Home = React.lazy(() => import("@/pages"));
const About = React.lazy(() => import("@/pages/about"));
const Documents = React.lazy(() => import("@/pages/documents"));
const Contact = React.lazy(() => import("@/pages/contact"));
const ProductList = React.lazy(() => import("@/pages/products"));
const UserList = React.lazy(() => import("@/pages/users"));
const UserAdd = React.lazy(() => import("@/pages/users/add"));
const UserDetails = React.lazy(() => import("@/pages/users/details"));
const UserEdit = React.lazy(() => import("@/pages/users/edit"));
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute isAuthorized={true} />,
    children: [
      {
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "",
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <Home />
              </Suspense>
            ),
          },
          {
            path: "/about",
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <About />
              </Suspense>
            ),
          },
          {
            path: "/contact",
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <Contact />
              </Suspense>
            ),
          },
          {
            path: "/users",
            children: [
              {
                index: true,
                element: (
                  <Suspense fallback={<p>Loading...</p>}>
                    <UserList />
                  </Suspense>
                ),
              },
              {
                path: "add",
                element: (
                  <Suspense fallback={<p>Loading...</p>}>
                    <UserAdd />
                  </Suspense>
                ),
              },
              {
                path: ":userId",
                children: [
                  {
                    index: true,
                    element: (
                      <Suspense fallback={<p>Loading...</p>}>
                        <UserDetails />
                      </Suspense>
                    ),
                  },
                  {
                    path: "edit",
                    element: (
                      <Suspense fallback={<p>Loading...</p>}>
                        <UserEdit />
                      </Suspense>
                    ),
                  },
                ],
              },
            ],
          },
          {
            path: "/documents/*",
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <Documents />
              </Suspense>
            ),
          },

          {
            path: "/products",
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <ProductList />
              </Suspense>
            ),
          },
          {
            path: "/home",
            element: <Navigate to="/" replace />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <Notfound />
      </Suspense>
    ),
  },
]);


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },

//       {
//         element: <PrivateRoute isAuthorized={false} />,
//         children: [
//           {
//             path: "/about",
//             element: <About />,
//           },
//         ],
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//       {
//         path: "/home",
//         element: <Navigate to="/" replace />,
//       },
//       {
//         path: "/users",
//         children: [
//           {
//             index: true,
//             element: <UserList />,
//           },
//           {
//             path: "add",
//             element: <UserAdd />,
//           },
//           {
//             path: ":userId",
//             children: [
//               {
//                 index: true,
//                 element: <UserDetails />,
//               },
//               {
//                 path: "edit",
//                 element: <UserEdit />,
//               },
//             ],
//           },
//         ],
//       },
//       {
//         path: "/documents/*",
//         element: <Documents />,
//       },
//     ],
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "*",
//     element: <NotFound />,
//   },
// ]);

// export default router;

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <PrivateRoute isAuthorized={true} />,
//     children: [
//       {
//         element: <App />,
//         errorElement: <ErrorPage />,
//         children: [
//           {
//             index: true,
//             element: <Home />,
//           },
//           {
//             path: "/contact",
//             element: <Contact />,
//           },
//           {
//             path: "/about",
//             // element: <PrivateRoute isAuthorized={false} />,
//             children: [
//               {
//                 index: true,
//                 element: <About />,
//               },
//             ],
//           },
//           {
//             path: "/home",
//             element: <Navigate to="/" replace />,
//           },
//           {
//             path: "/users",
//             children: [
//               {
//                 index: true,
//                 element: <UserList />,
//               },
//               {
//                 path: "add",
//                 element: <UserAdd />,
//               },
//               {
//                 path: ":userId",
//                 children: [
//                   {
//                     index: true,
//                     element: <UserDetails />,
//                   },
//                   {
//                     path: "edit",
//                     element: <UserEdit />,
//                   },
//                 ],
//               },
//             ],
//           },
//           {
//             path: "/documents/*",
//             element: <Documents />,
//           },
//           {
//             path: "*",
//             element: <NotFound />,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
// ]);

// export default router;
