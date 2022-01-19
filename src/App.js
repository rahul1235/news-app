import "./App.css";

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import ScrollToTop from "react-scroll-to-top";

import NavBar from "./components/NavBar";
import News from "./components/News";

const App = () => {
  const pageSize = 20;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const [progress, setProgress] = useState(10);
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  const lightMode = {
    color: "black",
    backgroundColor: "white",
    // border: "1px solid white",
  };
  const darkMode = {
    color: "white",
    backgroundColor: "black",
    borderColor: "#5f6368",
    // border: "1px solid black",
  };

  const modeStyle = mode === "dark" ? darkMode : lightMode;
  return (
    <>
      <Router>
        <LoadingBar
          color="#f11946"
          height={3}
          progress={progress}
          // onLoaderFinished={() => setProgress(0)}
        />
        <NavBar modeStyle={modeStyle} toggleMode={toggleMode}></NavBar>
        <ScrollToTop smooth={true}></ScrollToTop>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                key="home"
                pageSize={pageSize}
                country="in"
                category="general"
                apiKey={apiKey}
                modeStyle={modeStyle}
              ></News>
            }
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                key="business"
                pageSize={pageSize}
                country="in"
                category="business"
                apiKey={apiKey}
                modeStyle={modeStyle}
              ></News>
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                key="entertainment"
                pageSize={pageSize}
                country="in"
                category="entertainment"
                apiKey={apiKey}
                modeStyle={modeStyle}
              ></News>
            }
          ></Route>
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={setProgress}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
                apiKey={apiKey}
                modeStyle={modeStyle}
              ></News>
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                key="health"
                pageSize={pageSize}
                country="in"
                category="health"
                apiKey={apiKey}
                modeStyle={modeStyle}
              ></News>
            }
          ></Route>
          <Route
            path="/science"
            element={
              <News
                setProgress={setProgress}
                key="science"
                pageSize={pageSize}
                country="in"
                category="science"
                apiKey={apiKey}
                modeStyle={modeStyle}
              ></News>
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                key="sports"
                pageSize={pageSize}
                country="in"
                category="sports"
                apiKey={apiKey}
                modeStyle={modeStyle}
              ></News>
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                key="technology"
                pageSize={pageSize}
                country="in"
                category="technology"
                apiKey={apiKey}
                modeStyle={modeStyle}
              ></News>
            }
          ></Route>
        </Routes>
      </Router>
      <footer className=" footer text-center text-lg-start dark" style={modeStyle}>
        <div className="text-center p-3">
          © {new Date().getFullYear()} Copyright Created By{" : "}
          <a href="mailto:prajapati.rahul373@gmail.com">Rahul Prajapati</a>
        </div>
      </footer>
    </>
  );
};

export default App;
