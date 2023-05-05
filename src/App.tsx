import React from "react";
import { Box, Center } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import AllRoutes from "./routing/AllRoutes";
import Footer from "./components/Footer";

function App() {
  return (
    <Box>
      <Box w="100%" position="sticky" top="0px" zIndex="10000">
        <Center>
          <Navbar />
        </Center>
      </Box>
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
