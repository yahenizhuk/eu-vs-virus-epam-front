import UncontrolledDropdown from "reactstrap/lib/UncontrolledDropdown";
import DropdownToggle from "reactstrap/lib/DropdownToggle";
import DropdownMenu from "reactstrap/lib/DropdownMenu";
import DropdownItem from "reactstrap/lib/DropdownItem";
import React from "react";

import "./sorting.css";

export function Sorting() {
  return (
    <div className="d-flex justify-content-start align-items-start sorting-panel">
      <p>Sort by:</p>
      <UncontrolledDropdown setActiveFromChild>
        <DropdownToggle tag="a" className="link pl-1 sorting-link font-weight-bolder" caret>
          Expiring first
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem tag="a" href="/blah" active>Expiring last</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  )
}
