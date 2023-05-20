import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children: chilren }: Props) => {
  const [Expanded, setExpanded] = useState(false);
  const limit = 500;

  if (!chilren) return null;

  if (chilren.length <= limit) return <Text>{chilren}</Text>;

  const summary = Expanded ? chilren : chilren.substring(0, limit) + "...";

  return (
    <>
      <Text>{summary}</Text>
      <Button
        colorScheme={"yellow"}
        onClick={() => setExpanded(!Expanded)}
        mt={1}
        size={"sm"}
      >
        {Expanded ? "Show Less" : "Show More"}
      </Button>
    </>
  );
};

export default ExpandableText;
