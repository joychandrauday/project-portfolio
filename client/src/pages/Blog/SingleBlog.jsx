import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { Link, ScrollRestoration, useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { FaUser, FaCalendarAlt, FaEye, FaTags } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import useRelatedBlog from "../../hooks/useRelatedBlog";
import Swal from "sweetalert2";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  FacebookShareCount,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  PinterestShareCount,
  RedditIcon,
  RedditShareButton,
  RedditShareCount,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { useForm } from "react-hook-form";

const SingleBlog = () => {
  const { slug } = useParams();
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const shareUrl = `https://joychandrauday.web.app/blog/${slug}`;
  const { register, handleSubmit, reset } = useForm();
  const {
    data: blog,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["blog", slug],
    queryFn: async () => {
      const res = await axiosPublic.get(`/blog/${slug}`);
      return res.data;
    },
    keepPreviousData: true,
  });

  const {
    relatedBlogs,
    isLoading: relatedBlogsLoading,
    isError: relatedBlogsError,
  } = useRelatedBlog(blog?.category || "");

  useEffect(() => {
    const incrementViewCount = async () => {
      try {
        await axiosPublic.patch(`/blog/${slug}/view`);
      } catch (error) {
        console.error("Error incrementing view count:", error);
      }
    };

    incrementViewCount();
  }, [slug]);

  if (isLoading || relatedBlogsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center backdrop-blur">
        <div className="wrap">
          <div className="loading loading-ball loading-lg"></div>
        </div>
      </div>
    );
  }

  if (isError || relatedBlogsError) {
    return (
      <div className="text-center text-red-600">Error fetching blog data</div>
    );
  }

  // Exclude the current post from the related posts
  const filteredRelatedBlogs = relatedBlogs.filter(
    (post) => post.slug !== slug
  );

  const {
    title,
    author: { name: authorName, bio, profileImage, email },
    publishedDate,
    featuredImage,
    content,
    views,
    tags,
    comments,
  } = blog;

  const onSubmit = async (data) => {
    try {
      const commentData = {
        userName: user.displayName,
        image: user.photoURL,
        email: user.email,
        comment: data.comment,
        commentDate: new Date().toISOString(),
      };
      const response = await axiosPublic.post(
        `/blog/${slug}/comment`,
        commentData
      );
      console.log(response);
      if (response.status === 200) {
        Swal.fire({
          title: "Success!",
          text: "Your Comment has been added.",
          icon: "success",
          confirmButtonText: "OK",
        });
        refetch();
        reset();
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      Swal.fire({
        title: "Error!",
        text: "An error occurred while submitting your review. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="flex justify-between items-start pt-24 pl-32 pr-12">
      {/* Main Blog Content */}
      <div className="w-2/3 pr-12">
        <img
          src={featuredImage}
          alt={title}
          className="rounded-lg mb-8 w-full h-96 object-cover shadow-lg"
        />
        <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
        <div className="flex items-center text-gray-400 mb-6">
          <FaUser className="mr-2" />
          <span className="mr-4">{authorName}</span>
          <FaCalendarAlt className="mr-2" />
          <span className="mr-4">{new Date(publishedDate).toDateString()}</span>
          <FaEye className="mr-2" />
          <span>{views} views</span>
        </div>
        <div className="mb-8 text-gray-300 leading-relaxed">{content}</div>
        <div className="mb-8">
          <FaTags className="inline-block mr-2 text-yellow-400" />
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-700 text-gray-300 rounded-full px-3 py-1 text-sm mr-2"
            >
              #{tag}
            </span>
          ))}
        </div>
        {/* Share Section */}
        <div className="Demo__container flex gap-4">
          <div className="Demo__some-network">
            <FacebookShareButton
              url={shareUrl}
              title={title}
              className="Demo__some-network__share-button"
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>

            <div>
              <FacebookShareCount
                url={shareUrl}
                className="Demo__some-network__share-count"
              >
                {(count) => count}
              </FacebookShareCount>
            </div>
          </div>

          <div className="Demo__some-network">
            <FacebookMessengerShareButton
              url={shareUrl}
              appId="521270401588372"
              className="Demo__some-network__share-button"
            >
              <FacebookMessengerIcon size={32} round />
            </FacebookMessengerShareButton>
          </div>

          <div className="Demo__some-network">
            <TwitterShareButton
              url={shareUrl}
              title={title}
              className="Demo__some-network__share-button"
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </div>

          <div className="Demo__some-network">
            <TelegramShareButton
              url={shareUrl}
              title={title}
              className="Demo__some-network__share-button"
            >
              <TelegramIcon size={32} round />
            </TelegramShareButton>
          </div>

          <div className="Demo__some-network">
            <WhatsappShareButton
              url={shareUrl}
              title={title}
              separator=":: "
              className="Demo__some-network__share-button"
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>

          <div className="Demo__some-network">
            <LinkedinShareButton
              url={shareUrl}
              title={title}
              className="Demo__some-network__share-button"
            >
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
          </div>

          <div className="Demo__some-network">
            <PinterestShareButton
              url={shareUrl}
              media={featuredImage}
              className="Demo__some-network__share-button"
            >
              <PinterestIcon size={32} round />
            </PinterestShareButton>

            <div>
              <PinterestShareCount
                url={shareUrl}
                className="Demo__some-network__share-count"
              />
            </div>
          </div>

          <div className="Demo__some-network">
            <RedditShareButton
              url={shareUrl}
              title={title}
              windowWidth={660}
              windowHeight={460}
              className="Demo__some-network__share-button"
            >
              <RedditIcon size={32} round />
            </RedditShareButton>

            <div>
              <RedditShareCount
                url={shareUrl}
                className="Demo__some-network__share-count"
              />
            </div>
          </div>

          <div className="Demo__some-network">
            <EmailShareButton
              url={shareUrl}
              subject={title}
              body="body"
              className="Demo__some-network__share-button"
            >
              <EmailIcon size={32} round />
            </EmailShareButton>
          </div>
        </div>

        {/* Comments Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-4">Comments</h2>
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div
                key={index}
                className="bg-zinc-800 rounded-lg p-4 mb-4 flex gap-4 bg-gradient-to-tr from-zinc-800 to-zinc-900 shadow-xl shadow-black lg:px-10 md:p-4  mx-auto flex-col items-start lg:flex-row w-5/6 ml-0"
              >
                <div className="avatar">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img src={comment.image} alt={comment.userName} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-yellow-400">
                    {comment.userName}
                  </h3>
                  <p className="text-gray-300">{comment.comment}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(comment.commentDate).toLocaleDateString()}{" "}
                    {new Date(comment.commentDate).toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No comments yet. Be the first!</p>
          )}
        </div>

        {/* Comment Form */}
        {user ? (
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Comment as{" "}
              <span className="text-yellow-400">{user.displayName}</span>
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-zinc-800 rounded-lg p-6"
            >
              <div className="mb-4">
                <label
                  htmlFor="comment"
                  className="block text-lg font-medium text-gray-300 mb-2"
                >
                  Add your comment
                </label>
                <textarea
                  id="comment"
                  rows="4"
                  className="w-full p-3 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 text-black"
                  placeholder="Write your comment here..."
                  {...register("comment", { required: true })}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition"
              >
                {isLoading ? "posting comment..." : "Post Comment"}
              </button>
            </form>
          </div>
        ) : (
          <p className="text-gray-400 mt-8">
            Please{" "}
            <Link to="/login" className="text-yellow-400 underline">
              log in
            </Link>{" "}
            to post a comment.
          </p>
        )}
      </div>

      {/* Sidebar: Related Posts */}
      <div className="w-1/3  p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-white mb-4">Related Blogs</h2>
        {filteredRelatedBlogs.length > 0 ? (
          filteredRelatedBlogs.map((post, index) => (
            <div
              key={index}
              className="mb-6 text-center  bg-gradient-to-tr from-zinc-800 to-zinc-900 rounded-lg shadow-xl shadow-black flex flex-col justify-between h-full relative w-full group hover:-translate-y-1 transition-transform"
            >
              <Link to={`/blog/${post.slug}`}>
                <div className="flex gap-3 items-center">
                  <div className="avatar">
                    <div className="w-24 rounded">
                      <img src={post.featuredImage} />
                    </div>
                  </div>
                  <div className="wrap text-left">
                    <h3 className="text-lg font-semibold text-yellow-400">
                      {post.title}
                    </h3>
                    <div className="flex justify-between pr-3">
                      <p className="text-gray-500">
                        {new Date(post.publishedDate).toLocaleDateString()}
                      </p>
                      <p className="flex items-center gap-1">
                        <FaEye /> {post.views}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No related blogs found.</p>
        )}
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default SingleBlog;
