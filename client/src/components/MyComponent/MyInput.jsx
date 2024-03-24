import React from "react";
import { Form } from "react-bootstrap";

const MyInput = ({ type, placeholder, value, onChange,label }) => {
  return (
    <>
      <Form.Label style={{ fontFamily: '"DM Sans", sans-serif' ,fontSize: "15px",
          fontWeight: "600"}}>
        {label}
      </Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder} 
        value={value}
        onChange={onChange}
        style={{
          fontFamily: '"DM Sans", sans-serif',fontSize: "15px",
        }}
      />
    </>
  );
};

export default MyInput;
