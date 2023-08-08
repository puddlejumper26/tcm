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

function DictionaryPage(props: any) {
  const data = props.props.data;
  console.log("DictionaryPage - data -", data);

  // TODO search function
  // TODO Pagination

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
            {data.map((item: DBDataType) => {
              return (
                <>
                  <Tr>
                    <Td>{item.name}</Td>
                    <Td>{item.translation}</Td>
                    <Td>{item.description}</Td>
                    <Td>
                      <Button colorScheme="teal">Details</Button>
                    </Td>
                  </Tr>
                </>
              );
            })}
          </Tbody>
          <Tfoot></Tfoot>
        </Table>
      </TableContainer>
    </>
  );
}
export default DictionaryPage;
