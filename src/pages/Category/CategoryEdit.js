import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UserEdit() {
  const params = useParams();
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      setLoading(true);
      const user = await axios.get(`https://63a9bccb7d7edb3ae616b639.mockapi.io/users/${params.id}`);
      myFormik.setValues({
        Categoryname: user.data.Categoryname,
        price: user.data.price,
        parentcategory: user.data.parentcategory,
        colors: user.data.colors,
        description: user.data.description,
        brand: user.data.brand,
        image: null
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const myFormik = useFormik({
    initialValues: {
      Categoryname: "",
      price: "",
      description:"",
      parentcategory: "",
      colors: "",
      brand: "",
      image: null
    },
    validate: (values) => {
      let errors = {};

      if (!values.Categoryname) {
        errors.Categoryname = "Please enter Category name";
      } else if (values.Categoryname.length < 5) {
        errors.Categoryname = "Name shouldn't be less than 5 letters";
      } else if (values.Categoryname.length > 25) {
        errors.Categoryname = "Name shouldn't be more than 25 letters";
      }

      if (!values.parentcategory) {
        errors.parentcategory = "Please select a parentcategory";
      }

      if (!values.colors) {
        errors.colors = "Please select a color";
      }

      if (!values.brand) {
        errors.brand = "Please select a brand";
      }

      if (!values.price) {
        errors.price = "Please enter a price";
      }
      if (!values.description) {
        errors.description = "Please enter a description";
      }

      return errors;
    },

    onSubmit: async (values) => {
      try {
        setLoading(true);

        const formData = new FormData();
        formData.append("Categoryname", values.Categoryname);
        formData.append("price", values.price);
        formData.append("description", values.description);
        formData.append("parentcategory", values.parentcategory);
        formData.append("colors", values.colors);
        formData.append("brand", values.brand);
        if (values.image) {
          formData.append("image", values.image);
        }

        await axios.put(
          `https://63a9bccb7d7edb3ae616b639.mockapi.io/users/${params.id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          }
        );

        navigate("/category-list");
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <>
      <h3>Category Edit - Id : {params.id}</h3>
      <div className="container">
        <form onSubmit={myFormik.handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <label>Category Name</label>
              <input
                name="Categoryname"
                value={myFormik.values.Categoryname}
                onChange={myFormik.handleChange}
                type="text"
                className={`form-control ${myFormik.errors.Categoryname ? "is-invalid" : ""}`}
              />
              <span style={{ color: "red" }}>{myFormik.errors.Categoryname}</span>
            </div>
            <div className="col-lg-6">
              <label>Description</label>
              <input
                name="description"
                value={myFormik.values.description}
                onChange={myFormik.handleChange}
                type="text"
                className={`form-control ${myFormik.errors.description ? "is-invalid" : ""}`}
              />
              <span style={{ color: "red" }}>{myFormik.errors.description}</span>
            </div>

            <div className="col-lg-4">
              <label>Parent Category</label>
              <select
                name="parentcategory"
                value={myFormik.values.parentcategory}
                onChange={myFormik.handleChange}
                className={`form-control ${myFormik.errors.parentcategory ? "is-invalid" : ""}`}
              >
                <option value="">----Select----</option>
                <option value="Mobile">Mobile</option>
                <option value="Laptop">Laptop</option>
                <option value="Smart watch">Smart watch</option>
                <option value="TV">TV</option>
                <option value="Speakers">Speakers</option>
                <option value="HeadPhones">HeadPhones</option>
              </select>
              <span style={{ color: "red" }}>{myFormik.errors.parentcategory}</span>
            </div>

            <div className="col-lg-4">
              <label>Colors</label>
              <select
                name="colors"
                value={myFormik.values.colors}
                onChange={myFormik.handleChange}
                className={`form-control ${myFormik.errors.colors ? "is-invalid" : ""}`}
              >
                <option value="">----Select----</option>
                <option value="Black">Black</option>
                <option value="White">White</option>
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
                <option value="Gray">Gray</option>
                <option value="Red">Red</option>
              </select>
              <span style={{ color: "red" }}>{myFormik.errors.colors}</span>
            </div>

            <div className="col-lg-4">
              <label>Brand</label>
              <select
                name="brand"
                value={myFormik.values.brand}
                onChange={myFormik.handleChange}
                className={`form-control ${myFormik.errors.brand ? "is-invalid" : ""}`}
              >
                <option value="">----Select----</option>
                <option value="IPhone">IPhone</option>
                <option value="Vivo">Vivo</option>
                <option value="Samsung">Samsung</option>
                <option value="Oppo">Oppo</option>
                <option value="Bose">Bose</option>
                <option value="Dell">Dell</option>
              </select>
              <span style={{ color: "red" }}>{myFormik.errors.brand}</span>
            </div>

            <div className="col-lg-6">
              <label>Price</label>
              <input
                name="price"
                value={myFormik.values.price}
                onChange={myFormik.handleChange}
                type="text"
                className={`form-control ${myFormik.errors.price ? "is-invalid" : ""}`}
              />
              <span style={{ color: "red" }}>{myFormik.errors.price}</span>
            </div>

            <div className="col-lg-6">
              <label>Image</label>
              <input
                name="image"
                type="file"
                onChange={(event) => myFormik.setFieldValue("image", event.currentTarget.files[0])}
                className={`form-control ${myFormik.errors.image ? "is-invalid" : ""}`}
              />
              <span style={{ color: "red" }}>{myFormik.errors.image}</span>
            </div>

            <div className="col-lg-4 mt-3">
              <input
                disabled={isLoading}
                type="submit"
                value={isLoading ? "Updating..." : "Update"}
                className="btn btn-primary"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default UserEdit;
