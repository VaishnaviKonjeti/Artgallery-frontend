import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postNewCategory, getAllCategories } from "../redux/reducers/gallerySlice";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaHome } from "react-icons/fa";

const AddCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await dispatch(postNewCategory(input));
      await dispatch(getAllCategories());
      navigate("/add-image");
    } catch (error) {
      console.error("Error adding category:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="text-center mb-4">
                <FaPlus className="mr-2" /> Add category
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="artistInput">Category:</label>
                  <div className="input-group">
                    <input
                      id="artistInput"
                      name="name"
                      value={input.name}
                      onChange={(e) =>
                        setInput({ ...input, [e.target.name]: e.target.value })
                      }
                      type="text"
                      className="form-control"
                      placeholder="Enter Category"
                      disabled={isSubmitting}
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <FaPlus />
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Adding..." : "Add Category"}
                </button>
              </form>

              <button
                className="btn btn-secondary btn-block mt-3"
                onClick={() => navigate("/")}
              >
                <FaHome className="mr-2" /> Go to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
