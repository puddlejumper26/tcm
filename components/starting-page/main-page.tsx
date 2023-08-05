import { fetchDBData } from "@/pages/api/db/connectDb";
import { Box, Button, Container, Input } from "@chakra-ui/react";
import { LegacyRef, useEffect, useRef, useState } from "react";

type DBDataType = {
  translation: {
    translation: string;
    source: string;
  };
  description?: string;
  video?: string;
  picture?: string;
};

function MainPage(props: DBDataType) {
  const [currentValue, setCurrentValue] = useState("");
  let isClicked = false;
  const inputRef = useRef() as any;

  useEffect(() => {
    console.log(11111, props);
  }, [currentValue]);

  const translate = () => {
    console.log("translate! - ", inputRef.current.value);
    if (!!inputRef.current?.value) {
      setCurrentValue(inputRef.current?.value);
    }
    isClicked = !isClicked;
    // find the result in DB
    // fetchData(inputRef.current.value);
    // find the result from online
  };

  return (
    <>
      {/* Search Input */}
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="flex  mx-8">
            <Input
              placeholder="Input name"
              size="lg"
              type="text"
              id="name"
              ref={inputRef}
            />
            <input />
          </div>
          {/* Search Button*/}
          <div className="flex  mx-8">
            <Button colorScheme="teal" size="lg" onClick={translate}>
              Click/translate
            </Button>
          </div>
        </div>
        {/* Search Result */}

        <Container className="mt-8" maxW="2xl" bg="gray.100" centerContent>
          <span>From DB</span>
          <Box padding="4" margin="4" bg="gray.300" color="black" maxW="md">
            <span>Translation</span>
            <span>Source</span>
          </Box>
          <span>From Google</span>
          <Box padding="4" margin="4" bg="blue.400" color="black" maxW="md">
            There are many benefits to a joint design and development system.
            Not only does it bring benefits to the design team, but it also
            brings benefits to engineering teams. It makes sure that our
            experiences have a consistent look and feel, not just in our design
            specs, but in production.
          </Box>
        </Container>
        <div className="flex gap-2">Result Area -- {currentValue}</div>
        {/* Search from Internet */}
      </div>
    </>
  );
}

export function getServerSideProps() {
  return {
    props: {
      translation: {
        translation: "a",
        source: "sources",
      },
      description: "aa",
    },
  };
}

export default MainPage;
