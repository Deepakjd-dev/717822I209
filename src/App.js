import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TopUsers from "./pages/TopUsers";
import TrendingPosts from "./pages/TrendingPosts";
import LiveFeed from "./pages/LiveFeed";

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Top Users</Link></li>
          <li><Link to="/trending">Trending Posts</Link></li>
          <li><Link to="/live-feed">Live Feed</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<TopUsers />} />
        <Route path="/trending" element={<TrendingPosts />} />
        <Route path="/live-feed" element={<LiveFeed />} />
      </Routes>
    </Router>
  );
};

export default App;