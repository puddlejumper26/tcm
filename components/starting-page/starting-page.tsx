import { useEffect, useRef, useState } from "react";
import MainPage from "./main-page";
import { Box, Button, Container, Input } from "@chakra-ui/react";
import { DBDataType } from "@/utils/common.type";

function StartingPageContent({ props }: any) {
  // Show Link to Login page if NOT auth
  const searchResult = props.data;
  console.log("Starting page content - searchResult - ", searchResult);

  const inputRef = useRef() as any;
  const translate = () => {};

  return (
    <section>
      <div className="relative inset-0 flex justify-center items-center">
        {/* Input and Search Component  */}
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
                Translate
              </Button>
            </div>
          </div>
          {/* Search Result */}

          <Container className="mt-8" maxW="2xl" bg="gray.100" centerContent>
            <span>From DB</span>
            <Box padding="4" margin="4" bg="gray.300" color="black" maxW="md">
              <span>{searchResult.translation}</span>
            </Box>
            <Box padding="4" margin="4" bg="gray.300" color="black" maxW="md">
              <span>Source</span>
            </Box>
            <span>From Google</span>
            <Box padding="4" margin="4" bg="blue.400" color="black" maxW="md">
              There are many benefits to a joint design and development system.
              Not only does it bring benefits to the design team, but it also
              brings benefits to engineering teams. It makes sure that our
              experiences have a consistent look and feel, not just in our
              design specs, but in production.
            </Box>
            <span>From Baidu</span>
            <Box padding="4" margin="4" bg="blue.400" color="black" maxW="md">
              There are many benefits to a joint design and development system.
              Not only does it bring benefits to the design team, but it also
              brings benefits to engineering teams. It makes sure that our
              experiences have a consistent look and feel, not just in our
              design specs, but in production.
            </Box>
          </Container>
        </div>
      </div>
    </section>
  );
}

export function getStaticProps() {
  console.log(22222, process.env.GOOGLE_ID);
}

export default StartingPageContent;
