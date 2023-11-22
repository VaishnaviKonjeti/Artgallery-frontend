import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllCategories,
  getAllImages,
  getSingleImage,
} from "../redux/reducers/gallerySlice";
import { FaImage, FaPaintBrush } from "react-icons/fa";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllImages());
    dispatch(getAllCategories());
  }, []);

  const { images, categories } = useSelector((state) => state.gallery);

  const handleCategories = (id) => {
    dispatch(getSingleImage(id));
  };

  return (
    <div className="container-fluid my-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center mb-4">
          <button
            onClick={() => dispatch(getAllImages())}
            className="btn btn-primary filter-button"
            data-filter="all"
          >
            <FaImage className="mr-2" />
            All
          </button>
          {categories &&
            categories.map((item) => (
              <button
                key={item._id}
                onClick={() => handleCategories(item._id)}
                className="btn btn-outline-dark filter-button mx-2"
                data-filter={item.name.toLowerCase()}
              >
                <FaPaintBrush className="mr-2" />
                {item.name}
              </button>
            ))}
        </div>
      </div>

      <div className="row">
        {images &&
          images.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-4 col-sm-6 my-3">
              <div className="card">
                <img
                  src={`http://localhost:8000/${item.name}`}
                  className="card-img-top"
                  alt={`Image ${index}`}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
