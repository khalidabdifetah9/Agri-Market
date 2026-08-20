"use client";

import React, { useState, useEffect } from "react";

interface MessageProps {
  status: string | number;
  message?: string;
}

const Message = ({ status, message }: MessageProps) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Automatically hide the message after 3 seconds
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [status, message]);

  if (!show) return null;

  const isSuccess = status === 200 || status === "200" || status === "success";

  return (
    <div
      className={`w-full max-w-xs rounded-lg px-5 py-3 text-center transition-all ${
        isSuccess
          ? "bg-green-100 text-green-700 border border-green-300"
          : "bg-red-100 text-red-700 border border-red-300"
      }`}
    >
      <h1 className="text-sm font-medium">
        {message || (isSuccess ? "Action Completed Successfully" : "Something Went Wrong")}
      </h1>
    </div>
  );
};

export default Message;