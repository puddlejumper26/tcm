import { Button, Wrap, WrapItem, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";

type StatusType = "success" | "error" | "warning" | "info";

function ToastStatus(toastStatus: any) {
  console.log("ToastStatus - message.message - ", toastStatus.message);
  const [toastValue, setToastValue] = useState("");
  const toast = useToast();
  const statuses = ["success", "error", "warning", "info"];

  useEffect(() => {
    setToastValue(toastStatus.message);
    if (toastValue === "error") {
      callToast(toastValue);
    }
  });

  function callToast(toastValue: StatusType) {
    return toast({
      title: `toast`,
      status: `${toastValue}` as StatusType,
      isClosable: true,
    });
  }

  //   switch (message.message) {
  //     case "success":
  //       return toast({
  //         title: `toast`,
  //         status: `success`,
  //         isClosable: true,
  //       });
  //     case "warning":
  //       return toast({
  //         title: `toast`,
  //         status: `warning`,
  //         isClosable: true,
  //       });
  //     case "error":
  //       return toast({
  //         title: `toast`,
  //         status: `error`,
  //         isClosable: true,
  //       });
  //   }

  return (
    <></>
    // <Wrap>

    //   {statuses.map((status, i) => (
    //     <WrapItem key={i}>
    //       <Button
    //         onClick={() =>
    //           toast({
    //             title: `${status} toast`,
    //             status: status as StatusType,
    //             isClosable: true,
    //           })
    //         }
    //       >
    //         Show {status} toast
    //       </Button>
    //     </WrapItem>
    //   ))}
    // </Wrap>
  );
}

export default ToastStatus;
