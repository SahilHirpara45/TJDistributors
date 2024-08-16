import React, { Component, Suspense } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import routesList from "./routes";
import "./scss/style.scss";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
import DefaultLayout from "./layout/DefaultLayout";

// Pages
import Login from "./views/pages/login/Login";

const App = () => {
  const { isLogin, userData, token } = useSelector((s) => s.user);

  console.log('userdata>>>>>', userData);
  console.log('isLogin', isLogin);
  const PublicRoutes = ({ Component }) => {
    return isLogin ? <Navigate to={"/dashboard"} /> : <Component />;
    // return token ? <Navigate to={"/"} /> : <Component />;
  };
  const ProtectedRoute = (Props) => {
    return userData ? (
      <Props.Component>{Props.children}</Props.Component>
    ) : (
      <Navigate to={"/login"} />
    );
  };

  return (
    <Suspense fallback={loading}>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route
          path="login"
          name="Login Page"
          element={<PublicRoutes Component={Login} />}
        />
        {routesList.map((route, idx) => {
          return (
            route.element && (
              <Route
                key={idx}
                path={route.path}
                exact={true}
                name={route.name}
                element={
                  <ProtectedRoute Component={DefaultLayout}>
                    <route.element />
                  </ProtectedRoute>
                }
              />
            )
          );
        })}
        <Route path="/" element={<Navigate to="login" replace />} />
        <Route path="users" element={userData?.role == "Admin" ? <Navigate to="/users"  /> : <Navigate to="dashboard"  />} />
      </Routes>
    </Suspense>
  );
};

export default App;
