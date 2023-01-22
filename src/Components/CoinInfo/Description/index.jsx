import { Box } from "../../Box";
import { Title } from "../index.styled";
import { Text } from "./index.styled";
export default function Description({ text }) {
  return (
    <Box maxWidth="600px" m="0 auto">
      <Title>Description</Title>
      {text.length ? (
        <Text dangerouslySetInnerHTML={{ __html: text }} />
      ) : (
        <Text>Oops, there is no description for this coin</Text>
      )}
    </Box>
  );
}
