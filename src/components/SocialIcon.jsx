import React from "react";

export default function SocialIcon({ type }) {
  const commonProps = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };

  switch (type) {
    case "linkedin":
      return (
        <svg {...commonProps}>
          <rect x="3" y="3" width="18" height="18" rx="3" fill="#0A66C2" />
          <path
            d="M8 17H6V10H8V17ZM7 9C6.3 9 5.75 8.45 5.75 7.75C5.75 7.04 6.3 6.5 7 6.5C7.7 6.5 8.25 7.04 8.25 7.75C8.25 8.45 7.7 9 7 9ZM18 17H16V13.4C16 12.45 15.55 11.9 14.8 11.9C13.98 11.9 13.5 12.46 13.5 13.4V17H11.5V10H13.5V10.9C13.92 10.25 14.7 9.7 15.85 9.7C17.47 9.7 18 10.76 18 12.26V17Z"
            fill="white"
          />
        </svg>
      );
    case "github":
      return (
        <svg {...commonProps}>
          <path
            d="M12 2C6.48 2 2 6.58 2 12.18C2 16.56 4.87 20.26 8.84 21.54C9.34 21.64 9.53 21.34 9.53 21.08C9.53 20.86 9.52 20.26 9.52 19.5C7 20.02 6.35 18.55 6.35 18.55C5.9 17.42 5.23 17.12 5.23 17.12C4.31 16.5 5.3 16.52 5.3 16.52C6.31 16.6 6.84 17.66 6.84 17.66C7.74 19.31 9.29 18.84 9.9 18.58C9.99 17.9 10.26 17.43 10.55 17.19C8.53 16.95 6.4 16.12 6.4 12.73C6.4 11.75 6.74 10.95 7.31 10.33C7.22 10.09 6.92 9.15 7.39 7.86C7.39 7.86 8.15 7.61 9.52 8.63C10.24 8.42 11.01 8.32 11.78 8.32C12.55 8.32 13.32 8.42 14.04 8.63C15.41 7.61 16.17 7.86 16.17 7.86C16.64 9.15 16.34 10.09 16.25 10.33C16.83 10.95 17.16 11.75 17.16 12.73C17.16 16.13 15.02 16.94 12.99 17.18C13.36 17.49 13.69 18.11 13.69 19.06C13.69 20.36 13.68 21.46 13.68 21.74C13.68 22 13.87 22.31 14.38 22.2C18.34 20.93 21.21 17.23 21.21 12.18C21.21 6.58 16.73 2 12 2Z"
            fill="#000000"
          />
        </svg>
      );
    case "facebook":
      return (
        <svg {...commonProps}>
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#1877F2" />
          <path
            d="M14 8H15.5V6H14C11.79 6 11 7.34 11 8.9V10H9.5V12H11V18H13V12H14.7L15.5 10H13V8.9C13 8.4 13.24 8 14 8Z"
            fill="white"
          />
        </svg>
      );
    case "portfolio":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="8" stroke="#4A90E2" strokeWidth="1.6" />
          <path
            d="M4 12H20M12 4C9.5 6.5 8.25 9.25 8.25 12C8.25 14.75 9.5 17.5 12 20C14.5 17.5 15.75 14.75 15.75 12C15.75 9.25 14.5 6.5 12 4Z"
            stroke="#4A90E2"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "cv":
      return (
        <svg {...commonProps}>
          <rect x="7" y="3" width="10" height="18" rx="2" fill="#111827" stroke="#4A90E2" strokeWidth="1.5" />
          <path
            d="M9.5 8.5H14.5M9.5 11H14.5M9.5 13.5H12.5"
            stroke="#4A90E2"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return null;
  }
}
