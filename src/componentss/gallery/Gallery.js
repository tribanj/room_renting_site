import React from "react";
import HeadTitle from "../HeadTitle/HeadTitle";
import Card from "./Card";
import GalleryData from "./GalleryData";
import "./Gallery.css";


const Gallery = () => {
  return (
    <>
      <HeadTitle />
      <section className="gallery top">
        <div className="container grid">
          {GalleryData.map((value) => {
            return <Card images={value.images} title={value.title} desc={value.desc}/>;
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;
