import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DataContext from "../DataContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./CategoryDetail.css";

const CategoryDetail = () => {
  const { id } = useParams();
  const data = useContext(DataContext);
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);

  // Find the current post
  const post = data.find((item) => item.id === parseInt(id));

  // Filter out the current post and select 3 random items
  const otherPosts = data.filter((item) => item.id !== parseInt(id));
  const randomPosts = otherPosts.sort(() => 0.5 - Math.random()).slice(0, 3);

  // Toggle like state
  const handleLike = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <>
      <Navbar />
      <div className="detailsParMain">
        <div className="detailschildmain">
          <button className="BackButton" onClick={() => navigate(-1)}>
            <div className="BackEroImg"></div>
            Go Back
          </button>
          <div className="MainDetails">
            <h1 className="DetailsTitle">{post.title}</h1>

            <div className="personalintro">
              <div className="namedate">
                <h3>Ansh Sisodiya</h3>
                <h4>1 November 2024</h4>
              </div>
              <div className="socialmedia">
                <div className="like-button" onClick={handleLike}>
                  <img
                    src={isLiked ? "liked-icon.png" : "like-icon.png"}
                    alt="like"
                    className={`like-icon ${isLiked ? "liked" : ""}`}
                  />
                </div>
                <div className="twitter">
                  <img src="twitter-icon.png" alt="Twitter" />
                </div>
                <div className="facebook">
                  <img src="facebook-icon.png" alt="Facebook" />
                </div>
                <div className="YouTube">
                  <img src="youtube-icon.png" alt="YouTube" />
                </div>
                <div className="instagram">
                  <img src="instagram-icon.png" alt="Instagram" />
                </div>
              </div>
            </div>

            <img className="Detailsimg" src={post.img_url} alt={post.title} />
            <p className="DetailsDescription">{post.description}</p>
          </div>
        </div>
      </div>

      <div className="DetailsMore">
        <h1 className="DetailsMoreHead">More From The Domain</h1>

        <div className="card-grid">
          {randomPosts.map((item, index) => (
            <div key={index} className="card">
              <img src={item.img_url} className="card-image" alt={item.title} />
              <div className="card-description">
                <p className="overlay-text">{item.description.substring(0, 50)}...</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CategoryDetail;
