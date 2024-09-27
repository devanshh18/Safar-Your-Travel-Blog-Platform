import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { Transition } from "@headlessui/react";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap -mx-2">
          {posts.map((post) => (
            <Transition
              key={post.$id}
              show={true}
              enter="transition-opacity duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <PostCard {...post} />
              </div>
            </Transition>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
