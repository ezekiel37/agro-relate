import React from "react";

const FieldError: React.FC<{ id?: string; message?: string }> = ({ id, message }) =>
  message ? (
    <p id={id} role="alert" className="text-xs text-red-600">
      {message}
    </p>
  ) : null;

export default FieldError;
