import React, { useContext, useState, useEffect } from "react";
import Navbar from "./Navbar";
import DataContext from "../DataContext";
import { Link } from "react-router-dom";
import Advertisenment from "./Advertisenment"; // Import Advertisement component
import "./Home.css";
import Footer from "./Footer";

const Home = () => {
  const data = useContext(DataContext);

  // Filter Bollywood movies
  const bollyMovies = data.filter((item) => item.category === "Bollywood");

  // Array of selected IDs for random images/cards
  const selectedArray = [
    1, 2, 3, 8, 13, 15, 16, 17, 18, 22, 23, 24, 25, 26, 27, 45, 51, 53, 62, 65,
    67, 69, 70, 73, 75, 76, 77, 83, 84,
  ];

  // Function to get a random image from selectedArray
  const getRandomImage = () => {
    const randomId =
      selectedArray[Math.floor(Math.random() * selectedArray.length)];
    return data.find((item) => item.id === randomId);
  };

  const img1 = getRandomImage();
  const img2 = getRandomImage();
  const img3 = getRandomImage();

  const card1 = getRandomImage();
  const card2 = getRandomImage();
  const card3 = getRandomImage();

  // State for loader
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const lazyloader = () => {
      setTimeout(() => {
        setLoader(false);
      }, 1300);
    };
    lazyloader();
  }, []);

  return (
    <>
      {loader ? (
        <div className="loader"></div>
      ) : (
        <>
          <Navbar />
          {/* Main Container */}
          <div className="main-container">
            <Link to="/detail">
              <div className="header-container">
                <div
                  className="box box1"
                  style={{ backgroundImage: `url(${img1?.img_url})` }}
                >
                  <div className="overlay">
                    {img1?.description.split(" ").slice(0, 20).join(" ") + "..."}
                  </div>
                </div>
                <div
                  className="box box2"
                  style={{ backgroundImage: `url(${img2?.img_url})` }}
                >
                  <div className="overlay">
                    {img2?.description.split(" ").slice(0, 20).join(" ") + "..."}
                  </div>
                </div>
                <div
                  className="box box3"
                  style={{ backgroundImage: `url(${img3?.img_url})` }}
                >
                  <div className="overlay">
                    {img3?.description.split(" ").slice(0, 20).join(" ") + "..."}
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Second Container */}
          <div className="second-container">
            <h1>The Latest</h1>
            <div className="card-grid">
              <div
                className="card"
                style={{ backgroundImage: `url(${card1?.img_url})` }}
              >
                <div className="card-description">
                  <h2>{card1?.name}</h2>
                  <p>
                    {card1?.description.split(" ").slice(0, 40).join(" ") + "..."}
                  </p>
                </div>
              </div>
              <div
                className="card"
                style={{ backgroundImage: `url(${card2?.img_url})` }}
              >
                <div className="card-description">
                  <h2>{card2?.name}</h2>
                  <p>
                    {card2?.description.split(" ").slice(0, 40).join(" ") + "..."}
                  </p>
                </div>
              </div>
              <div
                className="card"
                style={{ backgroundImage: `url(${card3?.img_url})` }}
              >
                <div className="card-description">
                  <h2>{card3?.name}</h2>
                  <p>
                    {card3?.description.split(" ").slice(0, 40).join(" ") + "..."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bollywood Section */}
          <div className="Bollywoodmain">
            <div className="LeftSide">
              <h1 className="main-heading">Bollywood</h1>
              <div className="ChildMain">
                {bollyMovies.slice(5,10).map((item) => (
                  <div className="BollyMainMovie" key={item.id}>
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
                          {item.description
                            .split(" ")
                            .slice(0, 40)
                            .join(" ") + "..."}
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="RightSide">
              <h1>Top Posts</h1>
              {bollyMovies.slice(5, 9).map((item) => (
                <div className="BollyMainMovie" key={item.id}>
                  <Link to={`/detail/${item.id}`} className="rightbollypost">
                    <img
                      src={item.img_url}
                      alt="Bollywood movie"
                      className="Bollyrightimg"
                    />
                    <p className="description">
                      {item.description
                        .split(" ")
                        .slice(0, 10)
                        .join(" ") + "..."}
                    </p>
                  </Link>
                </div>
              ))}
          {/* Advertisement Section */}
          <div className="advertisement-container">
            <Advertisenment Advisible={2} /> 
          </div>
            </div>
          </div>


          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
