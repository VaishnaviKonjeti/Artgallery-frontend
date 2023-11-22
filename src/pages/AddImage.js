import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllCategories,
  getAllImages,
  postNewImage,
} from "../redux/reducers/gallerySlice";
import { FaUpload, FaHome } from "react-icons/fa"; // Importing Font Awesome icons

const AddImage = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const formdata = new FormData();
  formdata.append("image", file);
  formdata.append("category", category);

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  const { categories } = useSelector((state) => state.gallery);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postNewImage(formdata));
    navigate("/home");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4">
            <h2 className="text-center mb-4 text-primary">
              <FaUpload className="mr-2" /> Add Image
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="imageInput">Image:</label>
                <input
                  id="imageInput"
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="form-control"
                />
              </div>

              <div className="form-group mt-4">
                <label htmlFor="categorySelect">Category:</label>
                <select
                  id="categorySelect"
                  className="form-control custom-select"
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="" disabled>
                    Please Select
                  </option>
                  {categories &&
                    categories.map((item) => (
                      <option key={item._id} value={item._id}>
                        {item.name}
                      </option>
                    ))}
                </select>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-block mt-4"
              >
                <FaUpload className="mr-2" /> Upload
              </button>
            </form>

            <button
              className="btn btn-secondary btn-block mt-3"
              onClick={() => navigate("/home")}
            >
              <FaHome className="mr-2" /> Go to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddImage;
