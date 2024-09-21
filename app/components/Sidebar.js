import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-5 p-5 bg-black fixed min-h-screen w-2/12 text-gray-500">
      {/* Profile Section */}
      <div className="flex flex-col items-center">
        <p>Profile Image</p>
        <h1>Kevin</h1>

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
              width="30"
              height="30"
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
              width="30"
              height="30"
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
                width="30"
                height="30"
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
              <li className="hover:text-white hover:text-shadow-md transition-colors duration-300 ease-in-out cursor-pointer">
                Home
              </li>
            </div>
          </Link>

          <li className="hover:text-white hover:text-shadow-md transition-colors duration-300 ease-in-out cursor-pointer">
            About
          </li>
          <li className="hover:text-white hover:text-shadow-md transition-colors duration-300 ease-in-out cursor-pointer">
            Work Highlights
          </li>
          <li className="hover:text-white hover:text-shadow-md transition-colors duration-300 ease-in-out cursor-pointer">
            Projects
          </li>
          <li className="hover:text-white hover:text-shadow-md transition-colors duration-300 ease-in-out cursor-pointer">
            Education
          </li>
          <li className="hover:text-white hover:text-shadow-md transition-colors duration-300 ease-in-out cursor-pointer">
            Certifications
          </li>
          <li className="hover:text-white hover:text-shadow-md transition-colors duration-300 ease-in-out cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
