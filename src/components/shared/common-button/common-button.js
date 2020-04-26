import React from "react";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/es/Col";
import Button from "reactstrap/lib/Button";

import "./common-button.css";

export function CommonButton({ children }) {
  return (
    <Button className="px-4 w-100 common-button d-flex justify-content-between align-items-center">
      <div className="text-left w-75">
        {children}
      </div>
      <div className="d-flex align-items-center">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22Z" fill="white"/>
          <path d="M9 7L13 11L9 15" stroke="#212121" stroke-width="2.1" stroke-linejoin="round"/>
        </svg>
      </div>
    </Button>
  )
}
