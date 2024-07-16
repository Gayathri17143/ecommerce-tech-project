import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Userlist() {

  const [userList, setUserList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(4);
  const [totalUsers, setTotalUsers] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getTotalUsers();
    getUsers();
  }, [currentPage, searchQuery]);

  let getTotalUsers = async () => {
    try {
      const users = await axios.get('https://63a9bccb7d7edb3ae616b639.mockapi.io/users');
      setTotalUsers(users.data.length);
    } catch (error) {
      console.log(error);
    }
  };

  let getUsers = async () => {
    try {
      const users = await axios.get("https://63a9bccb7d7edb3ae616b639.mockapi.io/users");
      setUserList(users.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  let handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm("Are you sure do you want to delete the data?");
      if (confirmDelete) {
        await axios.delete(`https://63a9bccb7d7edb3ae616b639.mockapi.io/users/${id}`);
        getUsers();
      }
    } catch (error) {
      console.log(error);
    }
  }
  const totalPages = Math.ceil(totalUsers / usersPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setLoading(true); // Set loading to true until data is fetched
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to the first page on search
  };
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4" style={{marginTop:"30px"}}>
        <h1 className="h3 mb-0 text-gray-800">Category-List</h1>
        <Link to="/create-Category" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
          <FontAwesomeIcon icon={faUser} className="creatinguser mr-2" />
          Create Category
        </Link>
        <input
          type="text"
          className="form-control" style={{width:"50%"}} 
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      {/* <!-- DataTables --> */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">DataTables</h6>
        </div>
        <div className="card-body">
          {
            isLoading ? <img src='https://media.giphy.com/media/ZO9b1ntYVJmjZlsWlm/giphy.gif' alt='' />
              : <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0" style={{border:"1px solid #ccc"}}>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Category Name</th>
                      <th>Brand</th>
                      <th>Description</th>
                      <th>Parent Category</th>
                      <th>Colors</th>
                      <th>Price</th>
                      <th>Image</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userList.map((user) => {
                      return (
                        <tr key={user.id}>
                          <td>{user.id}</td>
                          <td>{user.categoryname}</td>
                          <td>{user.brand}</td>
                          <td>{user.description}</td>
                          <td>{user.parentcategory}</td>
                          <td>{user.colors}</td>
                          <td>{user.price}</td>
                          <td><img src={user.image} alt={user.categoryname}   /></td>
                          <td>
                            <Link to={`/category-view/${user.id}`} className='btn btn-primary btn-sm mr-1'>View</Link>
                            <Link to={`/category-edit/${user.id}`} className='btn btn-info btn-sm mr-1'>Edit</Link>
                            <button onClick={() => handleDelete(user.id)} className='btn btn-danger btn-sm mr-1'>Delete</button>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
                <nav>
                <ul className="pagination">
                  {[...Array(totalPages)].map((_, index) => (
                    <li key={index + 1} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
                      <button onClick={() => paginate(index + 1)} className="page-link">
                        {index + 1}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
              </div>
          }
        </div>
      </div>
    </>
  )
}

export default Userlist;
