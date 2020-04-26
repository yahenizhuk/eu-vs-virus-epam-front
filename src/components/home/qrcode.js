import React from "react";
import PropTypes from 'prop-types';
import QRCode from 'qrcode.react'

export function Qrcode({ value, size }) {
  return (
    <div className="pt-3">
      <QRCode value={value} size={size} includeMargin/>
    </div>
  )
}

Qrcode.propeTypes = {
  value: PropTypes.string.isRequired,
  size: PropTypes.number,
}

Qrcode.defaultProps = {
  size: 180,
}
