import React, { useEffect, useState } from "react";
import { api } from "../api";

const TrendingPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchTrendingPosts = async () => {
      try {
        const usersResponse = await api.get("/users");
        const users = Object.keys(usersResponse.data.users);

        let allPosts = [];
        for (let userId of users) {
          const postsResponse = await api.get(`/users/${userId}/posts`);
          allPosts = [...allPosts, ...postsResponse.data.posts];
        }

        for (let post of allPosts) {
          const commentsResponse = await api.get(`/posts/${post.id}/comments`);
          post.commentCount = commentsResponse.data.comments.length;
        }

        allPosts.sort((a, b) => b.commentCount - a.commentCount);
        setPosts(allPosts.slice(0, 5));
      } catch (error) {
        console.error("Error fetching trending posts:", error);
      }
    };

    fetchTrendingPosts();
  }, []);

  return (
    <div>
      <h1>Trending Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>Post:</strong> {post.content} <br />
            <strong>Comments:</strong> {post.commentCount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingPosts;
