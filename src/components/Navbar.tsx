import { Hide, Show } from "@chakra-ui/react";
import TabDeskNavbar from "./TabDeskNavbar";
import MobileNavbar from "./MobileNavbar";

// Main component
const Navbar = () => {
  return (
    <>
      <Hide breakpoint="(max-width: 500px)">
        <TabDeskNavbar />
      </Hide>
      <Show breakpoint="(max-width: 500px)">
        <MobileNavbar />
      </Show>
    </>
  );
};

export default Navbar;
