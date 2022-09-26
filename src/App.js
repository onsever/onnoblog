import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import NavigationBar from "./components/navigationbar/NavigationBar";
import Home from "./pages/home/Home";
import PostDetails from "./pages/postdetails/PostDetails";
import NewPost from "./pages/newpost/NewPost";
import EditProfile from "./pages/editprofile/EditProfile";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";

function App() {
    const isUserLoggedIn = false;

    return (
        <BrowserRouter>
            <NavigationBar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/signup">
                    {isUserLoggedIn ? <Home /> : <SignUp />}
                </Route>
                <Route path="/login">
                    {isUserLoggedIn ? <Home /> : <Login />}
                </Route>
                <Route path="/newpost">
                    {isUserLoggedIn ? <NewPost /> : <SignUp />}
                </Route>
                <Route path="/settings">
                    {isUserLoggedIn ? <EditProfile /> : <SignUp />}
                </Route>
                <Route path="/post/:postId">
                    <PostDetails />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
