import React from "react";
import {Header} from "../shared/header/header";
import Container from "reactstrap/lib/Container";
import {HeaderBlock} from "../shared/header-block/header-block";
import QRCode from "qrcode.react";

import "./verification.css";
import Alert from "reactstrap/lib/Alert";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";

export function Verification({ user }) {
  return (
    <div className="verification-page position-relative">
      <Header>
        <Container className="text-center">
          <HeaderBlock title="Proof of identity" />
        </Container>
      </Header>
      <Container className="position-absolute alert-container">
        <Alert color="success" className="w-100 d-flex py-3 alert">
          <div>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z" fill="white"/>
              <path d="M20.2692 7.8108C20.1685 7.70927 20.0487 7.62867 19.9167 7.57367C19.7846 7.51867 19.643 7.49036 19.5 7.49036C19.357 7.49036 19.2154 7.51867 19.0834 7.57367C18.9514 7.62867 18.8316 7.70927 18.7309 7.8108L10.66 15.8925L7.26919 12.4908C7.16463 12.3898 7.04119 12.3104 6.90593 12.2571C6.77067 12.2038 6.62624 12.1776 6.48088 12.1801C6.33551 12.1827 6.19207 12.2138 6.05874 12.2717C5.9254 12.3297 5.80479 12.4133 5.70378 12.5179C5.60277 12.6225 5.52334 12.7459 5.47004 12.8811C5.41674 13.0164 5.3906 13.1608 5.39311 13.3062C5.39562 13.4516 5.42675 13.595 5.4847 13.7283C5.54265 13.8617 5.6263 13.9823 5.73086 14.0833L9.89086 18.2433C9.99157 18.3448 10.1114 18.4254 10.2434 18.4804C10.3754 18.5354 10.517 18.5638 10.66 18.5638C10.803 18.5638 10.9446 18.5354 11.0767 18.4804C11.2087 18.4254 11.3285 18.3448 11.4292 18.2433L20.2692 9.4033C20.3792 9.30186 20.4669 9.17874 20.5269 9.04169C20.587 8.90465 20.618 8.75666 20.618 8.60705C20.618 8.45744 20.587 8.30946 20.5269 8.17241C20.4669 8.03537 20.3792 7.91225 20.2692 7.8108Z" fill="white"/>
            </svg>
          </div>
          <div className="ml-3">
            Identity successfully verified
          </div>
        </Alert>
      </Container>
      <Container className="d-flex justify-content-between">
        <p className="small w-50">Verify your new immunity by showing this code to medical professional</p>
        <div className="p-3 align-self-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="11.5" stroke="#7A7C7B"/>
            <path opacity="0.5" d="M3.80452 11.704C3.80452 14.2 5.71252 16.144 8.16052 16.144C10.6085 16.144 12.5045 14.2 12.5045 11.704C12.5045 9.268 10.6085 7.384 8.16052 7.384C5.71252 7.384 3.80452 9.268 3.80452 11.704ZM5.02852 11.704C5.02852 9.856 6.43252 8.464 8.16052 8.464C9.88852 8.464 11.2805 9.856 11.2805 11.704C11.2805 13.612 9.88852 15.052 8.16052 15.052C6.43252 15.052 5.02852 13.612 5.02852 11.704ZM14.236 16H15.424V12.628H17.236L19.024 16H20.368L18.568 12.712C18.412 12.436 18.316 12.328 18.316 12.328V12.304C19.24 12.004 19.84 11.092 19.84 10.012C19.84 8.896 19.276 8.044 18.412 7.72C18.088 7.6 17.716 7.528 16.828 7.528H14.236V16ZM15.424 11.596V8.56H16.792C17.452 8.56 17.728 8.632 17.956 8.752C18.388 8.992 18.628 9.436 18.628 10.06C18.628 11.008 18.052 11.596 17.128 11.596H15.424Z" fill="black"/>
          </svg>
        </div>
        <p className="small w-50">Verify the authenticity of your immunisation status by showing this code to border security</p>
      </Container>
      <Container className="d-flex justify-content-center">
        <div className="d-flex justify-content-center align-items-center qr-code">
          <QRCode value={user.uuid} size={185}/>
        </div>
      </Container>
      <Container className="d-flex justify-content-between pt-4">
        <div className="link">
          <p className="d-inline-block pr-1 font-weight-bold">How this works</p>
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 24C18.8513 24 24 18.8513 24 12.5C24 6.14873 18.8513 1 12.5 1C6.14873 1 1 6.14873 1 12.5C1 18.8513 6.14873 24 12.5 24Z" fill="white" fill-opacity="0.4" stroke="#238180" stroke-width="2" stroke-linejoin="round"/>
            <path d="M10.968 14.464H13.624V13.888C13.624 12.464 16.36 12.08 16.36 9.456C16.36 7.392 14.424 6.32 12.632 6.32C10.488 6.32 9.288 7.648 9.288 7.648L10.824 9.52C10.824 9.52 11.576 8.832 12.344 8.832C12.952 8.832 13.48 9.232 13.48 9.776C13.48 11.12 10.968 11.504 10.968 13.664V14.464ZM11.032 18H13.56V15.6H11.032V18Z" fill="#238180"/>
          </svg>
        </div>
        <div>
          Valid for: <span className="link font-weight-bold">71h 59min</span>
        </div>
      </Container>
      <div className="verification-footer py-5">
        <Container>
          <p className="h5">Your unique verification ID</p>
          <Row>
            <Col xs={9}>
              <p className="h5 font-weight-bold link d-inline-block">{user.uuid}</p>
            </Col>
            <Col xs={3}>
              <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                  <path d="M28.5079 12.6103L8.70893 19.21C7.92876 19.4716 7.24826 19.9675 6.76023 20.63C6.27219 21.2926 6.00036 22.0895 5.98181 22.9122C5.96325 23.7348 6.19887 24.5432 6.65653 25.2271C7.1142 25.9109 7.77164 26.437 8.53923 26.7336L15.8649 29.5337C16.0386 29.6048 16.1965 29.7097 16.3292 29.8425C16.4619 29.9752 16.5669 30.1331 16.638 30.3068L19.4381 37.6324C19.677 38.2547 20.0677 38.8074 20.5745 39.2403C21.0814 39.6732 21.6884 39.9726 22.3403 40.1112C22.9923 40.2498 23.6686 40.2234 24.3077 40.0341C24.9469 39.8449 25.5286 39.499 26.0001 39.0278C26.4371 38.5819 26.7689 38.044 26.9711 37.4533L33.5708 17.6543C33.8035 16.9506 33.836 16.1961 33.6649 15.4749C33.4937 14.7538 33.1255 14.0943 32.6014 13.5702C32.0773 13.0461 31.4179 12.678 30.6968 12.5068C29.9756 12.3356 29.2211 12.3682 28.5174 12.6009L28.5079 12.6103ZM31.0347 16.8152L24.435 36.6142C24.3449 36.8708 24.1785 37.0936 23.9581 37.2529C23.7378 37.4122 23.474 37.5004 23.2021 37.5055C22.9303 37.5106 22.6633 37.4325 22.4371 37.2816C22.2109 37.1307 22.0363 36.9143 21.9365 36.6613L19.127 29.3452C19.0885 29.2484 19.0445 29.1539 18.995 29.0623L25.4909 22.5664C25.741 22.3163 25.8815 21.9772 25.8815 21.6235C25.8815 21.2699 25.741 20.9308 25.4909 20.6807C25.2409 20.4307 24.9017 20.2902 24.5481 20.2902C24.1945 20.2902 23.8554 20.4307 23.6053 20.6807L17.1094 27.1767C17.0177 27.1272 16.9233 27.0831 16.8265 27.0447L9.51032 24.2351C9.25736 24.1354 9.04092 23.9607 8.89005 23.7345C8.73917 23.5083 8.66106 23.2414 8.66619 22.9695C8.67132 22.6977 8.75944 22.4339 8.91874 22.2135C9.07805 21.9932 9.30091 21.8268 9.55746 21.7367L29.3565 15.137C29.59 15.0617 29.8398 15.0523 30.0784 15.1099C30.3169 15.1674 30.535 15.2897 30.7085 15.4632C30.882 15.6367 31.0043 15.8548 31.0618 16.0933C31.1194 16.3319 31.11 16.5817 31.0347 16.8152Z" fill="#238180"/>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <path d="M0.544189 23L23.1716 0.372584L45.799 23L23.1716 45.6274L0.544189 23Z" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
