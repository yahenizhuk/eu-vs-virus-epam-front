import React from "react";
import { withRouter }  from "react-router";

function BackNavigationUI({ history }) {
  const goBack = () => {
    history.goBack();
  }

  return (
    <div onClick={goBack}>
      <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 2L2 11L11 20" stroke="#212121" stroke-width="3" stroke-linejoin="round"/>
        <path d="M4 11.5H19" stroke="#212121" stroke-width="3" stroke-linejoin="round"/>
      </svg>
    </div>
  )
}

export const BackNavigation = withRouter(BackNavigationUI);
