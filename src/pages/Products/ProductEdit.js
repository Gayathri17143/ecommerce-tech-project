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
        productname: user.data.productname,
        price: user.data.price,
        category: user.data.category,
        colors: user.data.colors,
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
      productname: "",
      price: "",
      category: "",
      colors: "",
      brand: "",
      image: null
    },
    validate: (values) => {
      let errors = {};

      if (!values.productname) {
        errors.productname = "Please enter product name";
      } else if (values.productname.length < 5) {
        errors.productname = "Name shouldn't be less than 5 letters";
      } else if (values.productname.length > 25) {
        errors.productname = "Name shouldn't be more than 25 letters";
      }

      if (!values.category) {
        errors.category = "Please select a category";
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

      return errors;
    },

    onSubmit: async (values) => {
      try {
        setLoading(true);

        const formData = new FormData();
        formData.append("productname", values.productname);
        formData.append("price", values.price);
        formData.append("category", values.category);
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

        navigate("/product-list");
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <>
      <h3>Product Edit - Id : {params.id}</h3>
      <div className="container">
        <form onSubmit={myFormik.handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <label>Product Name</label>
              <input
                name="productname"
                value={myFormik.values.productname}
                onChange={myFormik.handleChange}
                type="text"
                className={`form-control ${myFormik.errors.productname ? "is-invalid" : ""}`}
              />
              <span style={{ color: "red" }}>{myFormik.errors.productname}</span>
            </div>

            <div className="col-lg-4">
              <label>Category</label>
              <select
                name="category"
                value={myFormik.values.category}
                onChange={myFormik.handleChange}
                className={`form-control ${myFormik.errors.category ? "is-invalid" : ""}`}
              >
                <option value="">----Select----</option>
                <option value="Mobile">Mobile</option>
                <option value="Laptop">Laptop</option>
                <option value="Smart watch">Smart watch</option>
                <option value="TV">TV</option>
                <option value="Speakers">Speakers</option>
                <option value="HeadPhones">HeadPhones</option>
              </select>
              <span style={{ color: "red" }}>{myFormik.errors.category}</span>
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
