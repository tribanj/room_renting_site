import React, { useState, useEffect } from "react";
import Layout from "../componentss/Layout/Layout";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";
import { getAuth } from "firebase/auth";
import { useNavigate, Link, useParams } from "react-router-dom";
import Spinner from "../componentss/Spinner";
// import SwipeCore, { EffectCoverflow, Navigation, Pagination } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "../../src/styles/listing.css"

//config
// SwipeCore.use([EffectCoverflow, Pagination]);

const Listing = () => {
  const [listing, setListing] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const auth = getAuth();

  useEffect(() => {
    const fetchListing = async () => {
      const docRef = doc(db, "listings", params.listingId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log(docSnap.data(), "data");
        setListing(docSnap.data());   
        setLoading(false);
        
      }
      console.log(docRef,"<------------------durgesh")

    };
    fetchListing();
  }, [params.listingId]);


  if (loading) {
    return <Spinner />;
  }
  

  console.log(listing,"fulldata")

  return (
    <Layout>
      <div className="container d-flex align-items-center justify-content-center mt-4">
        <div className="card" style={{ width: "600px" }}>
          <div className="card-header">
            {listing.imgUrls === undefined ? <></>:
            // eslint-disable-next-line jsx-a11y/alt-text
            <img src={listing.imgUrls} style={{height:"400px", width:"600px"}}/>
  }
          </div>
          <div className="card-body">
            <h3>{listing.name}</h3>
            <h6>
              Price :{" "}
              {listing.offer ? listing.discountedPrice : listing.regularPrice} /
              RS
            </h6>
            <p>Property For : {listing.type === "rent" ? "Rent" : "Sale"}</p>
            <p>
              {listing.offer && (
                <span>
                  {listing.regularPrice - listing.discountedPrice} Discount
                </span>
              )}
            </p>
            <p>
              {listing.bedrooms > 1
                ? `${listing.bedrooms} Bedrooms`
                : "1 Bedroom"}
            </p>
            <p>
              {listing.bathrooms > 1
                ? `${listing.bathrooms} bathrooms`
                : "1 Bathroom"}
            </p>
            <p>{listing.parking ? `Parking spot` : "no spot for parking"}</p>
            <p>{listing.furnished ? `furnished house` : "not furnished"}</p>
            <Link
              className="btn btn-success"
              to={`/contact/${listing.useRef}?listingName=${listing.name}`}
            >
              Contact Landlord
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Listing;