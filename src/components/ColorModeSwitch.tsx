import { HStack, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack paddingX={2}>
      {colorMode === "dark" ? (
        <SunIcon className="sunicon" boxSize={5} onClick={toggleColorMode} />
      ) : (
        <MoonIcon className="moonicon" onClick={toggleColorMode} />
      )}
    </HStack>
  );
};

export default ColorModeSwitch;
