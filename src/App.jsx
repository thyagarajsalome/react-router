import React from "react";
import Navigation from "./Components/Navigation";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
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
          {/* Make sure the paths are unique */}
          <Route path="info" element={<Contactinfo />} />
          <Route path="form" element={<ContactForm />} />
        </Route>
        {/* Route for NotFound page */}
        <Route path="*" element={<NotFound />} />

        {/* Jobs section */}
        <Route path="jobs" element={<JobsLayout />}>
          <Route index element={<Jobs />} loader={jobsLoader} />
          <Route
            path=":id"
            element={<JobDetails />}
            loader={jobDetailsLoader}
          />{" "}
          {/* Fixed JobDetails route */}
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
