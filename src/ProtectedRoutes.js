import React from 'react'
import { Navigate } from 'react-router-dom'
import Cookies from "universal-cookie";
const cookies = new Cookies();

const ProtectedRoute = ({children}) => {

    const token = cookies.get("TOKEN");

    if(!token) {
        return <Navigate to='/blog/' />
    }
    return children;

}

export default ProtectedRoute
//
// import React from "react";
// import {Route, Redirect, Navigate} from "react-router-dom";
// import Cookies from "universal-cookie";
// const cookies = new Cookies();
//
// // receives component and any other props represented by ...rest
// export default function ProtectedRoutes({ component: Component, ...rest }) {
//     return (
//
//         // this route takes other routes assigned to it from the App.js and return the same route if condition is met
//         <Route
//             {...rest}
//             render={(props) => {
//                 // get cookie from browser if logged in
//                 const token = cookies.get("TOKEN");
//
//                 // returns route if there is a valid token set in the cookie
//                 if (token) {
//                     return <Component {...props} />;
//                 } else {
//                     // returns the user to the landing page if there is no valid token set
//                     return (
//                         <Navigate
//                             to={{
//                                 pathname: "/blog/auth",
//                                 state: {
//                                     // sets the location a user was about to access before being redirected to login
//                                     from: props.location,
//                                 },
//                             }}
//                             // replace={true}
//                         />
//                     );
//                 }
//             }}
//         />
//     );
// }
