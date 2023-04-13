import React from "react";
import { Box, Center } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import AllRoutes from "./routing/AllRoutes";

function App() {
  return (
    <Box>
      <Center>
        <Navbar />
      </Center>
      <Center>
        <AllRoutes />
      </Center>
    </Box>
  );
}

export default App;
