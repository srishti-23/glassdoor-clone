import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Community from "./pages/Community";
import Salary from "./pages/Salary";
import Companies from "./pages/Companies";
import Password from "./components/Password";
import Signup from "./components/Signup";
import { Provider } from 'react-redux';
import store from './store'; 
import { AuthProvider } from "./contexts/authContext/Index";
import BookmarkedJobs from "./components/BookmarkedJobs";

function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/salary" element={<Salary />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/community" element={<Community />} />
            <Route path="/password" element={<Password />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/boomarkedjobs" element={<BookmarkedJobs />} />
          </Routes>
        </Router>
      </Provider>
    </AuthProvider>
  );
}

export default App;
