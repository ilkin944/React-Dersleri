import Profile from "../pages/Profile";
import Home from "../pages/Home";
import HomeLayout from "../pages/HomeLayout";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import BlogPage from "../pages/BlogPage";
import BlogDetails from "../pages/BlogDetails";
import BlogPageNotFound from "../pages/BlogPageNotFound";
import Xidmetler from "../pages/Xidmetler";
import XidmetlerPage from "../pages/XidmetlerPage";
import Proqramlasdirma from "../pages/Proqramlasdirma";
import Marketinq from "../pages/Marketinq";
import Dizayn from "../pages/Dizayn";
import XidmetlerNotFound from "../pages/XidmetlerNotFound";
import PrivateRoute from "../components/PrivateRoute";
import PageNotFound from "../pages/PageNotFound";
import AuthLayout from "../pages/auth/AuthLayout";
import Login from "../pages/auth/Login";


const routes = [
    {
        name: "Home",
        path: '/',
        element: <HomeLayout />,
        children:[
            {
                index: true,
                element: <Home/>
            },
            {
                name: "Contact",
                path: '/contact',
                element: <Contact />
            },
            {
                name: "Xidmetler",
                path: '/xidmetler',
                element: <XidmetlerPage />,
                children: [
                    {
                        name: "Xidmetler",
                        index: true,
                        element: <Xidmetler/>
                    },
                    {
                        name: "Proqramlasdirma",
                        path: 'proqramlasdirma',
                        element: <Proqramlasdirma />
                    }, {
                        name: "Marketinq",
                        path: 'marketinq',
                        element:  <Marketinq />
                    }, {
                        name:"Dizayn",
                        path: 'dizayn',
                        element:  <Dizayn />
                    }, {
                        name: "NotFound",
                        path: '*',
                        element: <XidmetlerNotFound /> 
                    }
                ]
            },
            {
                name: "Blog",
                path: 'blog',
                element: <BlogPage />,
                auth:true,
                children: [
                    {
                        name: "Blog",
                        index: true,
                        element: <Blog/>
                    },
                    {
                        name: "BlogDetails",
                        path: 'movzu/:url',
                        element: <BlogDetails /> 
                    },
                    {
                        name: "NotFound",
                        path: '*',
                        element: <BlogPageNotFound /> 
                    }
                ]
            },
        ]   
    },
    {
        name: "Profil",
        path: '/profil',
        element: <Profile/>,
        auth:true,
    },
    {
        name: "NotFound",
        path: '*',
        element: <PageNotFound/>
    },
    {
        name: "Auth",
        path: '/auth',
        element: <AuthLayout/>,
        children:[
            {
                path: 'login',
                element: <Login/>
            }
        ]
    }
]


const authMap = routes => routes.map(route => {
    if(route?.auth){
        route.element = <PrivateRoute>{route.element}</PrivateRoute>
    }
    if(route?.children){
        route.children = authMap(route.children)
    }
    return route
})



export default authMap(routes)