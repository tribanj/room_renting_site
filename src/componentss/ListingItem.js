import React from "react";
import { Link } from "react-router-dom";
import { FaBed, FaBath } from "react-icons/fa";
import "../../src/styles/listingItem.css"
const ListingItem = ({ listing, id, onDelete, onEdit }) => {
//  console.log(listing, "list")
  
  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <div className="card category-link" style={{ width: "800px" }}>
          <Link to={`/category/${listing.type}/${id}`}>
            <div className="row container p-2">
              <div className="col-md-5">
                <img
                  src={listing.imgUrls[0]}
                  className="img-thumbnail"
                  alt={listing.name}
                  height={200}
                  width={300}
                />
              </div>
              <div className="col-md-5">
                <p>Location: {listing.location ?listing.location:"not available"}</p>
                <h2>{listing.name}</h2>
                <p>
                  RS :{" "}
                  {listing.offer
                    ? listing.discountedPrice
                    : listing.regularPrice}{" "}
                  {listing.type === "rent" && " / Month"}
                </p>
                <p>
                  <FaBed /> &nbsp;
                  {listing.bedrooms > 1
                    ? `${listing.bedrooms} Bedrooms`
                    : "1 Bedreoom"}
                </p>
                <p>
                  <FaBath /> &nbsp;
                  {listing.bathrooms > 1
                    ? `${listing.bathrooms} Bathrooms`
                    : "1 Bathroom"}
                </p>
              </div>
            </div>
          </Link>

          <div className="m-2 p-3">
            {onDelete && (
              <button
                className="btn btn-danger"
                onClick={() => onDelete(listing.id)}
              >
                Delete room
              </button>
            )}
            {onEdit && (
              <button
                className="btn btn-info ms-3"
                onClick={() => onEdit(listing.id)}
              >
                Edit details
              </button>
            )}
          </div>

        </div>
      </div>
    </>
  );
};

export default ListingItem;