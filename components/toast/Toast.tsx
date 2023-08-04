import { useToast } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";

type toastAlertType = "success" | "error" | "warning" | "info";

type TotastStatusType = {
  toastAlert: string;
  toastMessage: string;
  time: number;
};

function ToastStatus(toastStatus: TotastStatusType) {
  const { toastAlert, toastMessage, time } = toastStatus;
  const toast = useToast();

  console.log("ToastStatus - toastStatus - ", toastStatus);

  useEffect(() => {
    callToast(toastAlert, toastMessage);
  }, [time]);

  function callToast(toastAlert: string, toastMessage: string): any {
    // console.log("ToastStatus - callToast - toastAlert - ", toastAlert);
    toast({
      title: `${toastMessage}`,
      status: `${toastAlert}` as toastAlertType,
      isClosable: true,
    });
  }

  return <></>;
}

export default ToastStatus;
