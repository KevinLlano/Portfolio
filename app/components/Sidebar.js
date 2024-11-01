import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-5 p-5 bg-gray-900 fixed min-h-screen w-2/12 text-white">
      {/* Profile Section */}
      <div className="flex flex-col items-center">
        <img
          src="/ProfilePic-Smiling.png"
          alt="Profile"
          className="w-32  h-32 rounded-full border-4 border-white object-cover " // Creates a circular image with a border
        />
        <h1 className="mt-3 text-lg font-bold">Kevin Llanos</h1>

        {/* Social Links */}
        <div className="flex gap-2 mt-3 hover:text-purple-800 transition-colors duration-500 ease-in-out">
          {/* Github Icon */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="34"
              height="34"
              viewBox="0 0 48 48"
              className="cursor-pointer"
            >
              <path
                fill="#2100c4"
                d="M24,4C12.954,4,4,12.954,4,24c0,8.887,5.801,16.411,13.82,19.016h12.36 C38.199,40.411,44,32.887,44,24C44,12.954,35.046,4,24,4z"
              ></path>
              <path
                fill="#ddbaff"
                d="M37,23.5c0-2.897-0.875-4.966-2.355-6.424C35.591,15.394,34.339,12,34.339,12 c-2.5,0.5-4.367,1.5-5.609,2.376C27.262,14.115,25.671,14,24,14c-1.71,0-3.339,0.118-4.834,0.393 c-1.242-0.879-3.115-1.889-5.632-2.393c0,0-1.284,3.492-0.255,5.146C11.843,18.6,11,20.651,11,23.5 c0,6.122,3.879,8.578,9.209,9.274C19.466,33.647,19,34.764,19,36l0,0.305c-0.163,0.045-0.332,0.084-0.514,0.108 c-1.107,0.143-2.271,0-2.833-0.333c-0.562-0.333-1.229-1.083-1.729-1.813c-0.422-0.616-1.263-2.032-3.416-1.979 c-0.376-0.01-0.548,0.343-0.5,0.563c0.043,0.194,0.213,0.5,0.896,0.75c0.685,0.251,1.063,0.854,1.438,1.458 c0.418,0.674,0.417,2.468,2.562,3.416c1.53,0.677,2.988,0.594,4.097,0.327l0.001,3.199c0,0.639-0.585,1.125-1.191,1.013 C19.755,43.668,21.833,44,24,44c2.166,0,4.243-0.332,6.19-0.984C29.584,43.127,29,42.641,29,42.002L29,36 c0-1.236-0.466-2.353-1.209-3.226C33.121,32.078,37,29.622,37,23.5z"
              ></path>
            </svg>
            <p>Github</p>
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="34"
              height="34"
              viewBox="0 0 48 48"
              className="cursor-pointer"
            >
              <path
                fill="#0078d4"
                d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
              ></path>
              <path
                fill="#fff"
                d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
              ></path>
            </svg>
            <p>LinkedIn</p>
          </a>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="mt-10">
        <ul className="flex flex-col gap-4">
          <Link href="/">
            <div className="flex items-center gap-3 w-full hover:text-blue-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 128 128"
              >
                <path
                  fill="#fff"
                  d="M15 124c0-5.5 4.5-10 10-10 0-5.5 4.5-10 10-10v20H15zM115.3 83.2L70 38 24.7 83.2 16.3 74.8 70 21 123.7 74.8z"
                ></path>
                <path
                  fill="#f46e67"
                  d="M105,117V72.4L70,38L35,73v51h76v-1C111,119.7,108.3,117,105,117z"
                ></path>
                <path fill="#444b54" d="M59 80H81V124H59z"></path>
                <path
                  fill="#444b54"
                  d="M81,127H59c-1.7,0-3-1.3-3-3V80c0-1.7,1.3-3,3-3h22c1.7,0,3,1.3,3,3v44C84,125.7,82.7,127,81,127z M62,121h16 V83H62V121z"
                ></path>
                <path
                  fill="#fff"
                  d="M65 101A3 3 0 1 0 65 107A3 3 0 1 0 65 101Z"
                ></path>
                <path
                  fill="#444b54"
                  d="M125.9 72.6L72.1 18.9c-1.1-1.1-3.1-1.1-4.2 0L14.1 72.6c-1.2 1.2-1.2 3.1 0 4.2l8.5 8.5c.6.6 1.3.9 2.1.9s1.6-.3 2.1-.9L70 42.2l32 32v40.3c-2.9 1-5.1 3.5-5.8 6.5H38V94c0-1.7-1.3-3-3-3s-3 1.3-3 3v7.4c-4.9 1.2-8.7 5-9.7 9.9-4.9 1-8.8 4.9-9.9 9.7H4c-1.7 0-3 1.3-3 3s1.3 3 3 3h95c1.7 0 3-1.3 3-3v-1c0-1.7 1.3-3 3-3s3 1.3 3 3v1c0 1.7 1.3 3 3 3h3c1.7 0 3-1.3 3-3s-1.3-3-3-3h-.2c-.7-3-2.9-5.5-5.8-6.5V80.2l5.1 5.1c.6.6 1.3.9 2.1.9s1.6-.3 2.1-.9l8.5-8.5C127 75.7 127 73.8 125.9 72.6zM25 117c1.7 0 3-1.3 3-3 0-2.8 1.6-5.2 4-6.3V121H18.7C19.8 118.6 22.2 117 25 117zM115.3 79L72.1 35.9C71.5 35.3 70.8 35 70 35s-1.5.3-2.1.9L24.7 79l-4.2-4.2L70 25.3l49.5 49.5L115.3 79zM124 121A3 3 0 1 0 124 127 3 3 0 1 0 124 121z"
                ></path>
              </svg>
              <li className="hover:text-green-500 hover:text-shadow-md transition-colors duration-300 ease-in-out cursor-pointer">
                Home
              </li>
            </div>
          </Link>

          {/* About Section with New SVG Icon */}
          <div className="flex items-center gap-3 w-full hover:text-blue-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="36"
              height="36"
              viewBox="0 0 32 32"
              className="cursor-pointer"
            >
              <path
                fill="#ed0049"
                d="M16,12c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S19.309,12,16,12z"
              ></path>
              <path
                fill="#0f518c"
                d="M28,26h-4c0-4.411-3.589-8-8-8s-8,3.589-8,8H4c0-6.617,5.383-12,12-12S28,19.383,28,26z"
              ></path>
              <rect width="24" height="4" x="4" y="28" fill="#0f518c"></rect>
            </svg>
            <span className="hover:text-green-500 cursor-pointer">About</span>
          </div>

          {/* Work Highlight Section */}
          <div className="flex items-center gap-3 w-full hover:text-blue-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <path
                fill="#0f518c"
                d="M16,0c3.309,0,6,2.691,6,6h-4c0-1.103-0.897-2-2-2s-2,0.897-2,2h-4C10,2.691,12.691,0,16,0z"
              ></path>
              <rect width="26" height="4" x="3" y="8" fill="#ed0049"></rect>
              <polygon
                fill="#0f518c"
                points="29,14 18,14 18,18 23,18 23,26 9,26 9,18 14,18 14,14 3,14 3,18 5,18 5,30 27,30 27,18 29,18"
              ></polygon>
            </svg>
            <span className="hover:text-green-500 cursor-pointer">
              Work Highlights
            </span>
          </div>

          {/* Projects Section */}
          <div className="flex items-center gap-3 w-full hover:text-blue-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <polygon
                fill="#ed0049"
                points="4,4 7.093,4 8.843,6 14.158,6 8.907,0 0,0 0,23.061 3.791,6"
              ></polygon>
              <polygon
                fill="#0f518c"
                points="8.604,12 27.002,12 24.335,24 28.433,24 31.988,8 5.396,8 1.84,24 5.938,24"
              ></polygon>
              <polygon
                fill="#0f518c"
                points="1.396,26 0.507,30 27.1,30 27.988,26"
              ></polygon>
            </svg>
            <span className="hover:text-green-500 cursor-pointer">
              Projects
            </span>
          </div>

          {/* Education Section */}
          <div className="flex items-center gap-3 w-full hover:text-blue-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="38"
              height="38"
              viewBox="0 0 64 64"
            >
              <linearGradient
                id="XwHnNngDv7MI2o4BpQr4oa_44781_gr1"
                x1="27"
                x2="27"
                y1="21.75"
                y2="28.354"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
              >
                <stop offset="0" stop-color="#6dc7ff"></stop>
                <stop offset="1" stop-color="#e6abff"></stop>
              </linearGradient>
              <path
                fill="url(#XwHnNngDv7MI2o4BpQr4oa_44781_gr1)"
                d="M32,28H22c-0.552,0-1-0.448-1-1v-4c0-0.552,0.448-1,1-1h10c0.552,0,1,0.448,1,1v4 C33,27.552,32.552,28,32,28z"
              ></path>
              <linearGradient
                id="XwHnNngDv7MI2o4BpQr4ob_44781_gr2"
                x1="32"
                x2="32"
                y1="5.375"
                y2="58.524"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
              >
                <stop offset="0" stop-color="#1a6dff"></stop>
                <stop offset="1" stop-color="#c822ff"></stop>
              </linearGradient>
              <path
                fill="url(#XwHnNngDv7MI2o4BpQr4ob_44781_gr2)"
                d="M49,6H35.052c-0.019,0-0.036,0-0.054,0c-1.03,0-2.001,0.386-2.752,1.099 C31.454,7.851,31,8.908,31,10H16c-2.757,0-5,2.243-5,5v38c0,2.757,2.243,5,5,5h28c2.757,0,5-2.243,5-5V27.998 c0.618,0.219,1.305,0.236,1.973,0.006C52.204,27.581,53,26.467,53,25.165V10C53,7.794,51.206,6,49,6z M39.027,28.004 c0.33,0.113,0.665,0.168,0.994,0.168c0.902,0,1.764-0.411,2.349-1.163l0.63-0.81V42H17V16h20v9.165 C37,26.467,37.796,27.581,39.027,28.004z M33.623,8.549C33.999,8.192,34.484,8,35,8h0.034c0.025,0,0.05,0.001,0.074,0.003 c0.99,0.052,1.796,0.933,1.876,1.997H33C33,9.446,33.222,8.931,33.623,8.549z M47,53c0,1.654-1.346,3-3,3H16c-1.654,0-3-1.346-3-3 s1.346-3,3-3h28c1.125,0,2.164-0.373,3-1.002V53z M44,48H16c-1.13,0-2.162,0.391-3,1.025V15c0-1.654,1.346-3,3-3h21v2H17 c-1.103,0-2,0.897-2,2v26c0,1.103,0.897,2,2,2h26c1.103,0,2-0.897,2-2V24.276c0.299,0,0.599,0.123,0.79,0.369L47,26.199V45 C47,46.654,45.654,48,44,48z M51,25.165c0,0.664-0.518,0.893-0.677,0.947c-0.159,0.057-0.707,0.192-1.115-0.332l-1.839-2.363 c-0.573-0.737-1.437-1.159-2.369-1.159s-1.796,0.422-2.368,1.158l-1.84,2.364c-0.407,0.522-0.956,0.387-1.115,0.332 S39,25.829,39,25.165V10.17c0-0.794-0.212-1.537-0.581-2.17H49c1.103,0,2,0.897,2,2V25.165z"
              ></path>
              <linearGradient
                id="XwHnNngDv7MI2o4BpQr4oc_44781_gr3"
                x1="27"
                x2="27"
                y1="5.375"
                y2="58.524"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
              >
                <stop offset="0" stop-color="#1a6dff"></stop>
                <stop offset="1" stop-color="#c822ff"></stop>
              </linearGradient>
              <path
                fill="url(#XwHnNngDv7MI2o4BpQr4oc_44781_gr3)"
                d="M21 30H33V32H21z"
              ></path>
              <linearGradient
                id="XwHnNngDv7MI2o4BpQr4od_44781_gr4"
                x1="30"
                x2="30"
                y1="5.375"
                y2="58.524"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
              >
                <stop offset="0" stop-color="#1a6dff"></stop>
                <stop offset="1" stop-color="#c822ff"></stop>
              </linearGradient>
              <path
                fill="url(#XwHnNngDv7MI2o4BpQr4od_44781_gr4)"
                d="M21 34H39V36H21z"
              ></path>
            </svg>
            <span className="hover:text-green-500 cursor-pointer">
              Education
            </span>
          </div>

          {/* Certification Section */}
          <div className="flex items-center gap-3 w-full hover:text-blue-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <polygon
                fill="#0f518c"
                points="31,31 31,17 27,17 27,27 5,27 5,17 1,17 1,31"
              ></polygon>
              <polygon
                fill="#0f518c"
                points="5,5 27,5 27,15 31,15 31,1 1,1 1,15 5,15"
              ></polygon>
              <g>
                <polygon
                  fill="#ed0049"
                  points="14.963,23.03 7.481,14.302 10.519,11.698 15.037,16.97 22.514,8.662 25.486,11.338"
                ></polygon>
              </g>
            </svg>
            <span className="hover:text-green-500 cursor-pointer">
              Certifications
            </span>
          </div>

          {/* Contact Section */}
          <div className="flex items-center gap-3 w-full hover:text-blue-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="36"
              height="36"
              viewBox="0 0 64 64"
            >
              <linearGradient
                id="QAzoyWpXxOdtGYT2BhOtLa_43993_gr1"
                x1="19"
                x2="19"
                y1="34.417"
                y2="40.584"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
              >
                <stop offset="0" stop-color="#6dc7ff"></stop>
                <stop offset="1" stop-color="#e6abff"></stop>
              </linearGradient>
              <path
                fill="url(#QAzoyWpXxOdtGYT2BhOtLa_43993_gr1)"
                d="M24.81,37.5C23.35,39.04,21.29,40,19,40c-2.29,0-4.35-0.96-5.81-2.5 C14.65,35.96,16.71,35,19,35C21.29,35,23.35,35.96,24.81,37.5z"
              ></path>
              <linearGradient
                id="QAzoyWpXxOdtGYT2BhOtLb_43993_gr2"
                x1="19"
                x2="19"
                y1="26.583"
                y2="33.425"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
              >
                <stop offset="0" stop-color="#6dc7ff"></stop>
                <stop offset="1" stop-color="#e6abff"></stop>
              </linearGradient>
              <path
                fill="url(#QAzoyWpXxOdtGYT2BhOtLb_43993_gr2)"
                d="M19 27A3 3 0 1 0 19 33A3 3 0 1 0 19 27Z"
              ></path>
              <linearGradient
                id="QAzoyWpXxOdtGYT2BhOtLc_43993_gr3"
                x1="32"
                x2="32"
                y1="7.75"
                y2="57.004"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
              >
                <stop offset="0" stop-color="#1a6dff"></stop>
                <stop offset="1" stop-color="#c822ff"></stop>
              </linearGradient>
              <path
                fill="url(#QAzoyWpXxOdtGYT2BhOtLc_43993_gr3)"
                d="M57,29c0-1.654-1.346-3-3-3v-2c1.654,0,3-1.346,3-3s-1.346-3-3-3v-5c0-2.757-2.243-5-5-5h-1 c0-1.103-0.897-2-2-2h-4c-1.103,0-2,0.897-2,2H23c-2.757,0-5,2.243-5,5v7.051C11.85,20.562,7,25.72,7,32s4.85,11.438,11,11.949V51 c0,2.757,2.243,5,5,5h17c0,1.103,0.897,2,2,2h4c1.103,0,2-0.897,2-2h1c2.757,0,5-2.243,5-5v-3c1.654,0,3-1.346,3-3s-1.346-3-3-3v-2 c1.654,0,3-1.346,3-3s-1.346-3-3-3v-2C55.654,32,57,30.654,57,29z M23,10h17v9H28c-1.103,0-2,0.897-2,2v1.273 c-1.718-1.24-3.771-2.037-6-2.222V13C20,11.346,21.346,10,23,10z M28,24.089V21h12v6H29.895C29.405,25.936,28.765,24.958,28,24.089z M9,32c0-5.514,4.486-10,10-10s10,4.486,10,10s-4.486,10-10,10S9,37.514,9,32z M23,54c-1.654,0-3-1.346-3-3v-7.051 C26.15,43.438,31,38.28,31,32c0-1.038-0.146-2.039-0.395-3H40v2h-7v2h7v2h-7v2h7v2h-7v2h7v2H30v2h10v9H23z M55,29 c0,0.552-0.448,1-1,1v-2C54.552,28,55,28.448,55,29z M55,21c0,0.552-0.448,1-1,1v-2C54.552,20,55,20.448,55,21z M42,56V8h4l0.002,48 H42z M55,45c0,0.552-0.448,1-1,1v-2C54.552,44,55,44.448,55,45z M55,37c0,0.552-0.448,1-1,1v-2C54.552,36,55,36.448,55,37z M52,36v6 h-2v2h2v7c0,1.654-1.346,3-3,3h-1V10h1c1.654,0,3,1.346,3,3v5h-2v2h2v6h-2v2h2v6h-2v2H52z"
              ></path>
            </svg>
            <span className="hover:text-green-500 cursor-pointer">
              Contact Me!
            </span>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
