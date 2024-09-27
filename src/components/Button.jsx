import React from "react";
import { Transition } from "@headlessui/react";

function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <Transition
      appear={true}
      show={true}
      enter="transition ease-out duration-300"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-200"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <button
        type={type}
        className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
        {...props}
      >
        {children}
      </button>
    </Transition>
  );
}

export default Button;
