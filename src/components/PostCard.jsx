import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";

function PostCard({ $id, title, featuredImage, contentSnippet }) {
  return (
    <Link to={`/post/${$id}`} className="block">
      <Transition
        appear={true}
        show={true}
        enter="transition-transform duration-300"
        enterFrom="scale-95 opacity-0"
        enterTo="scale-100 opacity-100"
        leave="transition-transform duration-200"
        leaveFrom="scale-100 opacity-100"
        leaveTo="scale-95 opacity-0"
      >
        <div className="w-full bg-gray-100 rounded-xl p-4 transition-transform transform hover:scale-105 h-full flex flex-col">
          <div className="w-full h-40 mb-4 overflow-hidden">
            <img
              src={appwriteService.getFilePreview(featuredImage)}
              alt={title}
              className="rounded-xl object-cover w-full h-full"
            />
          </div>
          <h2 className="text-xl font-bold mb-2 line-clamp-2">{title}</h2>
          <p className="text-gray-700 flex-1 line-clamp-3">{contentSnippet}</p>
          <div className="flex items-center text-blue-600 mt-2">
            <span className="mr-2">Read More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14m0 0l-6-6m6 6l-6 6"
              />
            </svg>
          </div>
        </div>
      </Transition>
    </Link>
  );
}

export default PostCard;
