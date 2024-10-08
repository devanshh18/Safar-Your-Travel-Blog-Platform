import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import { Transition } from "@headlessui/react";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);
  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService
        .getPost(slug)
        .then((post) => {
          if (post) setPost(post);
          else navigate("/");
        })
        .catch((error) => {
          console.error("Failed to fetch post:", error);
          navigate("/");
        });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    if (post) {
      appwriteService.deletePost(post.$id).then((status) => {
        if (status) {
          if (post.featuredImage) {
            appwriteService.deleteFile(post.featuredImage).then(() => {
              navigate("/");
            }).catch(error => {
              console.error("Failed to delete file:", error);
            });
          } else {
            navigate("/");
          }
        }
      }).catch(error => {
        console.error("Failed to delete post:", error);
      });
    }
  };

  return post ? (
    <div className="py-8">
      <Container>
        <Transition
          show={true}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="w-full flex flex-col md:flex-row justify-center mb-4 relative border rounded-xl p-2">
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-xl w-full md:w-auto"
              loading="lazy"
            />

            {isAuthor && (
              <div className="absolute right-6 top-6">
                <Link to={`/edit-post/${post.$id}`}>
                  <Button bgColor="bg-green-500" className="mr-3">
                    Edit
                  </Button>
                </Link>
                <Button bgColor="bg-red-500" onClick={deletePost}>
                  Delete
                </Button>
              </div>
            )}
          </div>
        </Transition>
        <div className="w-full mb-6">
          <h1 className="text-2xl font-bold">{post.title}</h1>
        </div>
        {/* Use a div with custom styles to ensure proper spacing for paragraphs */}
        <div className="browser-css text-left space-y-4">
          {parse(post.content)}
        </div>
      </Container>
    </div>
  ) : null;
}
