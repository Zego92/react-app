import React from "react"
import { Redirect } from "react-router-dom"

//dashboard
import Dashboard from "../pages/Dashboard/index"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Registration/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"
import UserProfile from "../pages/Authentication/UserProfile"

import { BrowseData, ImportData } from "../pages/DataLibrary"
import { CreateTest } from "../pages/BackTester"
import { MLTool, MLModels } from "../pages/MachineLearning"
import Blog from "pages/Blog/Blog"
import BlogDetailed from "pages/Blog/BlogDetailed"
// import Newsletters from "pages/Newsletters/Newsletters"
import Tutorials from "pages/Tutorials/Tutorials"
import ContactUs from "pages/ContactUs/ContactUs"
import SubscriptionPlan from "pages/SubscriptionPlan/SubscriptionPlan"
import BillingMethod from "pages/BillingMethod/BillingMethod"
import Test from "pages/Test/Test"

const authProtectedRoutes = [
  // { path: "/dashboard", component: Dashboard },

  { path: "/profile", component: UserProfile },
  { path: "/browse-data", component: BrowseData },
  { path: "/import-data", component: ImportData },
  { path: "/create-backtest", component: CreateTest },
  { path: "/ml-tool", component: MLTool },
  { path: "/ml-models", component: MLModels },
  { path: "/blog/:id", component: BlogDetailed },
  { path: "/blog", component: Blog },
  // { path: "/newsletters", component: Newsletters },
  { path: "/tutorials", component: Tutorials },
  { path: "/contact-us", component: ContactUs },
  { path: "/my-subscription", component: SubscriptionPlan },
  { path: "/billing", component: BillingMethod },
  { path: "/test", component: Test },

  { path: "/*", component: () => <Redirect to="/browse-data" /> },
  // { path: "/", exact: true, component: () => <Redirect to="/billing" /> },
]

const publicRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },
]

export { authProtectedRoutes, publicRoutes }
