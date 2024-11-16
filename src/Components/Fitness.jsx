import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import DataContext from "../DataContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Advertisenment from "./Advertisenment";
import "./Navbar.css";
import Footer from "./Footer";

const Fitness = () => {

  const [visible,setVisible]=useState(5);
  const [visibleAds, setVisibleAds] = useState(3); // Controls visible ads
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
  const Fitness = data.filter((item) => item.category === "Fitness");

  
  // Advertisement data
  const adddata = [
    {
      id: 1,
      imageUrl: "https://www.google.com/imgres?q=advertisement%20cars%20rolls&imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D1520479021645757&imgrefurl=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D1520479021645757%26id%3D268119860215019%26set%3Da.307252082968463&docid=93gm9uacGi4sPM&tbnid=UMQJOJiCUMCQvM&vet=12ahUKEwiuw6mJhNaJAxWcR2wGHalaFjQQM3oECHIQAA..i&w=1080&h=1080&hcb=2&ved=2ahUKEwiuw6mJhNaJAxWcR2wGHalaFjQQM3oECHIQAA",
    },
    {
      id: 2,
      imageUrl: "https://www.google.com/imgres?q=advertisement%20cars%20rolls&imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D1520479021645757&imgrefurl=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D1520479021645757%26id%3D268119860215019%26set%3Da.307252082968463&docid=93gm9uacGi4sPM&tbnid=UMQJOJiCUMCQvM&vet=12ahUKEwiuw6mJhNaJAxWcR2wGHalaFjQQM3oECHIQAA..i&w=1080&h=1080&hcb=2&ved=2ahUKEwiuw6mJhNaJAxWcR2wGHalaFjQQM3oECHIQAA",
    }, 
    {
      id: 3,
      imageUrl: "https://www.google.com/imgres?q=advertisement%20cars%20benz&imgurl=https%3A%2F%2Fnewspaperads.ads2publish.com%2Fwp-content%2Fuploads%2F2017%2F11%2Fmercedes-benz-car-a-refined-sport-ad-lucknow-times-17-11-2017.png&imgrefurl=https%3A%2F%2Fwww.advertgallery.com%2Fnewspaper%2Fmercedes-benz-car-a-refined-sport-ad%2F&docid=rmUIdHbzSs2bLM&tbnid=nXETZmdor9RHqM&vet=12ahUKEwik9MT7g9aJAxXYSmwGHdphDr0QM3oECF8QAA..i&w=1324&h=1371&hcb=2&ved=2ahUKEwik9MT7g9aJAxXYSmwGHdphDr0QM3oECF8QAA",
    },
    {
      id: 4,
      imageUrl: "https://www.google.com/imgres?q=advertisement%20shirts%20louis%20&imgurl=https%3A%2F%2Fd168jcr2cillca.cloudfront.net%2Fuploadimages%2Fcoupons%2F6258-Louis-Philippe_Pune_Sales_4.png&imgrefurl=https%3A%2F%2Fwww.upto75.com%2FLouis_Philippe%2Fm%2F6258%2FSale_Offer.html&docid=WGeu9Rvl6hcGYM&tbnid=blJao6zW98Ru4M&vet=12ahUKEwia55Xng9aJAxV_TWcHHYQOOTMQM3oECEYQAA..i&w=600&h=456&hcb=2&ved=2ahUKEwia55Xng9aJAxV_TWcHHYQOOTMQM3oECEYQAA",
    },
    {
      id: 5,
      imageUrl: "https://www.google.com/imgres?q=advertisement%20shirts%20peter&imgurl=https%3A%2F%2Fimg-cdn.thepublive.com%2Ffilters%3Aformat(webp)%2Fafaqs%2Fmedia%2Fpost_attachments%2F7918daf349e7a39b217b924e4832bf04f0273193dabed623740b71079d6401f8.jpg&imgrefurl=https%3A%2F%2Fwww.afaqs.com%2Fnews%2Fadvertising%2Fand-now-peter-england-launches-linen-shirts-infused-with-antiviral-technology&docid=77BKn15WjPt2gM&tbnid=zj-NLtk__ftm1M&vet=12ahUKEwjzjrPQg9aJAxWhSmwGHUgjNV4QM3oECEgQAA..i&w=1000&h=1000&hcb=2&ved=2ahUKEwjzjrPQg9aJAxWhSmwGHUgjNV4QM3oECEgQAAg",
    },
    {
      id: 6,
      imageUrl: "https://www.google.com/imgres?q=advertisement%20shoes&imgurl=https%3A%2F%2Fimages.squarespace-cdn.com%2Fcontent%2Fv1%2F6219238e0278bd045f89ac26%2F7cea4bb2-01fc-4727-a500-fd33b236c1f5%2Fad-design-image-example-for-shoes-advertisement.jpg&imgrefurl=https%3A%2F%2Fwww.dozro.com%2Fad-image%2Fshoes-advertisement&docid=0mozmI-T98OYoM&tbnid=fXl0Qy_w8A_XxM&vet=12ahUKEwiLp4O5g9aJAxUuXmwGHVDcCkcQM3oFCIABEAA..i&w=1600&h=2000&hcb=2&ved=2ahUKEwiLp4O5g9aJAxUuXmwGHVDcCkcQM3oFCIABEAA",
    },
    {
      id: 7,
      title: "Ad Title 7",

      imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F25-inspiring-notforprofit-ads--396316835929839051%2F&psig=AOvVaw2_yXM-9JV7j2ZAi-XNeItE&ust=1731474319643000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKC538Hu1YkDFQAAAAAdAAAAABAE",
    },
    {
      id: 8,
      title: "Ad Title 8",
  
      imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.silvermouse.com.my%2Fblog%2Fcreative-ad-design-for-print-digital%2F&psig=AOvVaw3eNHXhfIxVFjc-kqJ0aHEI&ust=1731474445697000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODD4P7u1YkDFQAAAAAdAAAAABAE",
  
    },
    {
      id: 9,
      title: "Ad Title 9",
      imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgecdesigns.com%2Fsocial-media-poster-templates%2Ffree%2Ffurniture-shop-advertisement-instagram-poster-template&psig=AOvVaw3eNHXhfIxVFjc-kqJ0aHEI&ust=1731474445697000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODD4P7u1YkDFQAAAAAdAAAAABAJ",
    }
  ];

  const handleload=()=>{
    setVisible((prev)=>prev+5);
    setVisibleAds((prev) => prev + 5); // Increase the number of visible ads

  }

  return (
    <>
      <Navbar />
      {loader ? (
        <div className="loader"></div>
      ) : (
        <>
      <div className="Bollywoodmain">
        <div className="LeftSide">
          <h1 className="main-heading">Fitness</h1>
          <div className="ChildMain">
            {Fitness.slice(0, visible).map((item) => (
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
                  <p className="description">{item.description.split(" ").slice(0, 40).join(" ")+"..."}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <button onClick={handleload}>Load More</button>
        </div>

        <div className="RightSide">
          <h1>Top Posts</h1>
          {Fitness.slice(5, 10).map((item) => (
            <div className="BollyMainMovie" key={item.id}>
              <Link to={`/detail/${item.id}`} className="rightbollypost">
                <img 
                  src={item.img_url} 
                  alt="Bollywood movie" 
                  className="Bollyrightimg" 
                  />
                {/* <h3 className="Title">{item.title}</h3> */}
                <p className="description">{item.description.split(" ").slice(0, 10).join(" ")+"..."}</p>
              </Link>
            </div>
          ))}

          {/* Advertisement Section */}
          <div className="Advertisement">
                {adddata.slice(0, visibleAds).map((ad) => (
                  <Advertisenment 
                    key={ad.id}
                    description={ad.description}
                    imageUrl={ad.imageUrl}
                  />
                ))}
              </div>

        </div>
      </div>
      
      <Footer/>
        </>
      )}
      </>
  );
};

export default Fitness;
