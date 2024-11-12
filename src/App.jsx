import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import ContactLayout from "./layout/ContactLayout";
import Contactinfo from "./Components/Contactinfo";
import ContactForm from "./Components/ContactForm";
import NotFound from "./Components/NotFound";
import JobsLayout from "./layout/JobsLayout";
import Jobs, { jobsLoader } from "./pages/Jobs";
import JobDetails, { jobDetailsLoader } from "./Components/JobDetails";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactLayout />}>
          <Route path="info" element={<Contactinfo />} />
          <Route path="form" element={<ContactForm />} />
        </Route>
        <Route path="jobs" element={<JobsLayout />}>
          <Route index element={<Jobs />} loader={jobsLoader} />
          <Route
            path=":id"
            element={<JobDetails />}
            loader={jobDetailsLoader}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
