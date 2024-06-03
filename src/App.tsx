import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "./pages/home-page";
import ContactPage from "./pages/contact-page";
import AboutPage from "./pages/about-page";
import ProjectPage from "./pages/project-page";

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path="/home-page/" />
          <Route element={<AboutPage />} path="/home-page/about/" />
          <Route element={<ProjectPage />} path="home-page/project/" />
          <Route element={<ContactPage />} path="/home-page/contact/" />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
