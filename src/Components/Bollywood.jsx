import React, { useEffect, useState, useContext } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import DataContext from "../DataContext";
import { Link } from "react-router-dom";
import "./Component.css";

const Bollywood = () => {
  const [visible, setVisible] = useState(5); 
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const lazyloader = () => {
      setTimeout(() => {
        setLoader(false);
      }, 1300);
    };
    lazyloader();
  }, []);

  const data = useContext(DataContext);
  const bollyMovies = data.filter((item) => item.category === "Bollywood");

  const handleLoad = () => {
    setVisible((prev) => prev + 5); 
  };

  return (
    <>
      <Navbar />
      {loader ? (
        <div className="loader"></div>
      ) : (
        <>
          <div className="Bollywoodmain">
            {/* LeftSide Section */}
            <div className="LeftSide">
              <h1 className="main-heading">Bollywood</h1>
              <div className="ChildMain">
                {bollyMovies.slice(0, visible).map((item) => (
                  <div className="BollyMainMovie-left" key={item.id}>
                    <Link to={`/detail/${item.id}`} className="bollylink">
                      <div className="bimg">
                        <img
                          src={item.img_url}
                          alt="Bollywood movie"
                          className="BollyMainimg"
                        />
                      </div>
                      <div className="bdes">
                        <h3 className="Title">{item.title}</h3>
                        <p className="description">
                          {item.description.split(" ").slice(0, 40).join(" ") + "..."}
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              {visible < bollyMovies.length && (
                <button onClick={handleLoad}>Load More</button>
              )}
            </div>

            {/* RightSide Section */}
            <div className="RightSide">
              <h1>Top Posts</h1>
              <div className="ChildMain">
                {bollyMovies.slice(0, visible).map((item) => (
                  <div className="BollyMainMovie" key={item.id}>
                    <Link to={`/detail/${item.id}`} className="rightbollypost">
                      <div className="bimg">
                        <img
                          src={item.img_url}
                          alt="Bollywood movie"
                          className="Bollyrightimg"
                        />
                      </div>
                      <div className="bdes">
                        <p className="description">
                          {item.description.split(" ").slice(0, 10).join(" ") + "..."}
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Footer />
        </>
      )}
    </>
  );
};

export default Bollywood;
