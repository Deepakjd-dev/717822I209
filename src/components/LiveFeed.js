import React, { useEffect, useState } from "react";
import { api } from "../api";

const LiveFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchLiveFeed = async () => {
      try {
        const usersResponse = await api.get("/users");
        const users = Object.keys(usersResponse.data.users);

        let allPosts = [];
        for (let userId of users) {
          const postsResponse = await api.get(`/users/${userId}/posts`);
          allPosts = [...allPosts, ...postsResponse.data.posts];
        }

        // Sort by newest first
        allPosts.sort((a, b) => b.id - a.id);
        setPosts(allPosts);
      } catch (error) {
        console.error("Error fetching live feed:", error);
      }
    };

    fetchLiveFeed();
    const interval = setInterval(fetchLiveFeed, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Live Feed</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default LiveFeed;
