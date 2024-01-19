import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import Story from "./Story";

const BlogHome = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch blog posts from your backend API
    axios
      .get("https://blog-backend-lfz3.onrender.com/api/story/getAllStories")
      .then((response) => {
        // console.log("Data", response.data.data);
        setPosts(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("An error occurred while fetching blog posts:", error);
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      <h3 className="text-center mt-2 p-2"></h3>
      {loading ? (
        <div className="spinner-grow text-primary " role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div>
          {Array.isArray(posts) && posts.length > 0 ? (
            posts.map((post) => <Story key={post._id} {...post} />)
          ) : (
            <p>No posts available.</p>
          )}
        </div>
      )}
    </Container>
  );
};

export default BlogHome;
