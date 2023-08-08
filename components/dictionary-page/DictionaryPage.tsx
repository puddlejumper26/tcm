import { DBDataType } from "@/utils/common.type";
import {
  Button,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect } from "react";

function DictionaryPage(props: any) {
  useEffect(() => {
    console.log(222, props);
  });

  return (
    <>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <TableCaption>Dictionary</TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Translation</Th>
              <Th>Description</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td>25.4</Td>
              <Td>
                <Button colorScheme="teal">Details</Button>
              </Td>
            </Tr>
          </Tbody>
          <Tfoot></Tfoot>
        </Table>
      </TableContainer>
    </>
  );
}
export default DictionaryPage;
