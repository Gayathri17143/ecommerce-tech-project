import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserCreate() {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const myFormik = useFormik({
    initialValues: {
      productname: "",
      price: "",
      category: "",
      colors: "",
      brand: "",
      images1: [],
      // images2: [],
      // images3: [],
    },
    validate: (values) => {
      let errors = {};

      if (!values.productname) {
        errors.productname = "Please enter product name";
      } else if (values.productname.length < 5) {
        errors.productname = "Name shouldn't be less than 5 letters";
      } else if (values.productname.length > 20) {
        errors.productname = "Name shouldn't be more than 20 letters";
      }
      if (!values.price) {
        errors.price = "Please enter price";
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

      return errors;
    },
    onSubmit: async (values) => {
      try {
        setLoading(true);

        // Prepare form data
        const formData = new FormData();
        formData.append('productname', values.productname);
        formData.append('price', values.price);
        formData.append('category', values.category);
        formData.append('colors', values.colors);
        formData.append('brand', values.brand);

        // Append images
        values.images1.forEach(file => {
          formData.append('images_column_1', file);
        });
        // values.images2.forEach(file => {
        //   formData.append('images_column_2', file);
        // });
        // values.images3.forEach(file => {
        //   formData.append('images_column_3', file);
        // });

        await axios.post("https://63a9bccb7d7edb3ae616b639.mockapi.io/users", formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        navigate("/product-list");
      } catch (error) {
        console.log(error);
        alert("Validation failed");
      } finally {
        setLoading(false);
      }
    }
  });

  const handleFileChange = (event, columnIndex) => {
    const files = Array.from(event.target.files);
    myFormik.setFieldValue(`images${columnIndex + 1}`, files);
  };

  return (
    <div className='container'>
      <form onSubmit={myFormik.handleSubmit}>
        <div className='row'>
          <div className="col-lg-6">
            <label>Product Name</label>
            <input
              name='productname'
              value={myFormik.values.productname}
              onChange={myFormik.handleChange}
              type="text"
              className={`form-control ${myFormik.errors.productname ? "is-invalid" : ""}`}
            />
            <span style={{ color: "red" }}>{myFormik.errors.productname}</span>
          </div>

          <div className='col-lg-4'>
            <label>Category</label>
            <select
              name='category'
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

          <div className='col-lg-4'>
            <label>Colors</label>
            <select
              name='colors'
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

          <div className='col-lg-4'>
            <label>Brand</label>
            <select
              name='brand'
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
              name='price'
              value={myFormik.values.price}
              onChange={myFormik.handleChange}
              type="text"
              className={`form-control ${myFormik.errors.price ? "is-invalid" : ""}`}
            />
            <span style={{ color: "red" }}>{myFormik.errors.price}</span>
          </div>

          {[0].map((index) => (
            <div key={index} className="col-lg-4">
              <label>Upload Images {index + 1}</label>
              <input
                type="file"
                multiple
                onChange={(event) => handleFileChange(event, index)}
                className="form-control"
              />
              <div>
                {myFormik.values[`images${index + 1}`].map((file, fileIndex) => (
                  <div key={fileIndex}>{file.name}</div>
                ))}
              </div>
            </div>
          ))}

          <div className='col-lg-4 mt-3'>
            <input
              disabled={isLoading}
              type="submit"
              value={isLoading ? "Submitting..." : "Create"}
              className='btn btn-primary'
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserCreate;
