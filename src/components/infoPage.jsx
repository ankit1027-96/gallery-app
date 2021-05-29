import React, { useState, useEffect } from "react";

import { useParams } from "react-router";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as heart } from "@fortawesome/free-regular-svg-icons";

const Info = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    var url = `https://api.unsplash.com/photos/${id}/?client_id=xlIbYtjmTgRC9c8-jQRK6DcPhsw3P3Sp3tzY8DKx2pY`;
    async function fetchData() {
      await axios
        .get(url)
        .then((res) => {
          const data = res.data;
          const items = {
            name: data.user.name,
            profileImage: data.user.profile_image.medium,
            imageUrl: data.urls.regular,
            title: data.description,
            alt: data.alt_description,
          };
          setData(items);
          console.log(data);
        })
        .catch((err) => console.log(err));
    }
    fetchData();
  }, []);

  const handleLike = () => {
    if (!liked) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  };

  return (
    <div className="container-fluid">
      <div className="d-flex flex-wrap justify-content-center">
        <div className="images">
          <img
            src={`${data.imageUrl}&auto=format&fit=crop&w=600&h=500`}
            alt={data.alt}
          />
        </div>
        <div className="details">
          <h1>{data.title}</h1>
          <div>
            <img src={data.profileImage} alt="" />
          </div>
          <ul>
            <li>
              <li>Name:</li> {data.name}
            </li>
            <li>
              <button onClick={handleLike} className="btn btn-secondary">
                {liked ? (
                  <FontAwesomeIcon icon={faHeart} />
                ) : (
                  <FontAwesomeIcon icon={heart} />
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Info;
