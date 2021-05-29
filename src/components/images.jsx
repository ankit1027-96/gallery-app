import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/images.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as heart } from "@fortawesome/free-regular-svg-icons";

const apiKey = "xlIbYtjmTgRC9c8-jQRK6DcPhsw3P3Sp3tzY8DKx2pY";
const Images = ({ search }) => {
  const [data, setdata] = useState([]);
  const [liked, setLiked] = useState([false]);
  useEffect(() => {
    const baseUrl = `https://api.unsplash.com/search/photos/?per_page=40&query=${search}&client_id=`;
    axios.get(`${baseUrl}${apiKey}`).then((res) => {
      setdata(res.data.results);
      console.log(res.data.results);
    });
  }, [search]);

  const handleLike = (id) => {
    if (!liked.includes(id)) {
      setLiked(liked.concat(id));
    }
  };
  const removeLike = (id) => {
    const index = liked.indexOf(id);
    const del = [...liked.slice(0, index), ...liked.slice(index + 1)];
    setLiked(del);
  };

  return (
    <div className="imagesContain container-fluid d-flex">
      <div className="imagesContainer d-flex row">
        {data.map((item) => (
              <img
                className="col image"
                src={`${item.urls.thumb}&w=300&h=200&fit=clip
            `}
                alt="imag1"
              />
        ))}
      </div>
    </div>
  );
};

export default Images;
