import React from "react";
import { Box, Center } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import AllRoutes from "./routing/AllRoutes";
import Footer from "./components/Footer";

function App() {
  return (
    <Box>
      <Center>
        <Navbar />
      </Center>
      <Center>
        <AllRoutes />
      </Center>
      <Center>
        <Footer />
      </Center>
    </Box>
  );
}

export default App;
