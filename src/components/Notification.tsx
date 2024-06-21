import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

type Props = {
  type: "success" | "error";
};

const Notification = ({ type }: Props) => {
  if (type === "success") {
    return (
      <div
        className="flex items-center p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg fixed right-4 bottom-4"
        role="alert"
      >
        <FaCheckCircle className="mr-2" />
        <span className="font-medium">Operação realizada com sucesso!</span>
      </div>
    );
  }

  if (type === "error") {
    return (
      <div
        className="flex items-center p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg fixed right-4 bottom-4"
        role="alert"
      >
        <FaTimesCircle className="mr-2" />
        <span className="font-medium">Ocorreu um erro na operação.</span>
      </div>
    );
  }

  return null;
};

export default Notification;
