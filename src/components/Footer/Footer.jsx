import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-orange-200 border-t-2 border-black">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-2 inline-flex items-center">
                <Logo width="350px" />
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  &copy; Copyright 2024. All Rights Reserved by Devansh Patil.
                </p>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-4 text-xs font-semibold uppercase text-gray-500">
                Company
              </h3>
              <ul>
                {["Features", "Pricing", "Affiliate Program", "Press Kit"].map((item) => (
                  <li className="mb-2" key={item}>
                    <Link
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                      to="/"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Support Links */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-4 text-xs font-semibold uppercase text-gray-500">
                Support
              </h3>
              <ul>
                {["Account", "Help", "Contact Us", "Customer Support"].map((item) => (
                  <li className="mb-2" key={item}>
                    <Link
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                      to="/"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Legal Links */}
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-4 text-xs font-semibold uppercase text-gray-500">
                Legals
              </h3>
              <ul>
                {["Terms & Conditions", "Privacy Policy", "Licensing"].map((item) => (
                  <li className="mb-2" key={item}>
                    <Link
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                      to="/"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
