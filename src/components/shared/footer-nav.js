import React from "react";
import "./footer-nav.css"
import {FooterNavItem} from "./footer-nav-item";

export function FooterNav() {
  return (
    <footer className="footer-nav py-3 w-100">
      <nav className="d-flex justify-content-around">
        <FooterNavItem to="/" active>
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="23" height="21.6" rx="1.8" stroke="#238180" stroke-width="1.8"/>
            <path d="M19.2 18.6911C19.2 15.8794 16.3794 13.6 12.9 13.6C9.42058 13.6 6.59998 15.8794 6.59998 18.6911" stroke="#238180" stroke-width="1.8"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9 10.9C14.3911 10.9 15.6 9.69117 15.6 8.2C15.6 6.70883 14.3911 5.5 12.9 5.5C11.4088 5.5 10.2 6.70883 10.2 8.2C10.2 9.69117 11.4088 10.9 12.9 10.9Z" stroke="#238180" stroke-width="1.8"/>
          </svg>
        </FooterNavItem>
        <FooterNavItem to="/">
          <svg width="21" height="28" viewBox="0 0 21 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.45 5.5C11.6926 5.5 12.7 4.49264 12.7 3.25C12.7 2.00736 11.6926 1 10.45 1C9.20731 1 8.19995 2.00736 8.19995 3.25C8.19995 4.49264 9.20731 5.5 10.45 5.5Z" fill="#F2F6F8" stroke="#9EA8C6" stroke-width="1.35"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.45 27.1C12.1897 27.1 13.6 25.6897 13.6 23.95C13.6 22.2104 12.1897 20.8 10.45 20.8C8.71035 20.8 7.30005 22.2104 7.30005 23.95C7.30005 25.6897 8.71035 27.1 10.45 27.1Z" fill="#F2F6F8" stroke="#9EA8C6" stroke-width="1.35"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.69995 18.55H17.2C17.2 18.55 17.2 13.4919 17.2 11.7523C17.2 8.05074 14.1779 5.05005 10.45 5.05005C6.72203 5.05005 3.69995 8.05074 3.69995 11.7523C3.69995 15.4538 3.69995 18.55 3.69995 18.55Z" fill="#F2F6F8" stroke="#9EA8C6" stroke-width="1.35"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1 22.7421H19.9V19.7579C19.9 18.2667 18.6912 17.0579 17.2 17.0579H3.7C2.20883 17.0579 1 18.2667 1 19.7579V22.7421Z" fill="#F2F6F8" stroke="#9EA8C6" stroke-width="1.35"/>
          </svg>
        </FooterNavItem>
        <FooterNavItem to="/">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 24C18.8513 24 24 18.8513 24 12.5C24 6.14873 18.8513 1 12.5 1C6.14873 1 1 6.14873 1 12.5C1 18.8513 6.14873 24 12.5 24Z" fill="#F2F6F8" stroke="#9EA8C6" stroke-width="1.35"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 24C12.5 24 17 18.8513 17 12.5C17 6.14873 12.5 1 12.5 1C12.5 1 8 6.14873 8 12.5C8 18.8513 12.5 24 12.5 24Z" fill="#F2F6F8" stroke="#9EA8C6" stroke-width="1.35" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1 13.0352H24H1Z" fill="#F2F6F8"/>
            <path d="M1 13.0352H24" stroke="#9EA8C6" stroke-width="1.35"/>
            <path d="M4.30029 4.3761C4.30029 4.3761 8 7.42724 12.5 7.42724C17 7.42724 20.7344 4.3761 20.7344 4.3761" stroke="#9EA8C6" stroke-width="1.35"/>
            <path d="M4.30029 20.4272C4.30029 20.4272 8 17.3761 12.5 17.3761C17 17.3761 20.7344 20.4272 20.7344 20.4272" stroke="#9EA8C6" stroke-width="1.35"/>
          </svg>
        </FooterNavItem>
      </nav>
    </footer>
  )
}
