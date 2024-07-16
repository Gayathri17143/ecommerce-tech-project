import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Userlist() {

  const [userList, setUserList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(3);
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
      <div className="d-sm-flex align-items-center justify-content-between mb-4" style={{marginTop:"20px"}}>
        <h1 className="h3 mb-0 text-gray-800">User-List</h1>
        <Link to="/create-user" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
          <FontAwesomeIcon icon={faUser} className="creatinguser mr-2" />
          Create User
        </Link>
      </div>
      <div className="mb-4">
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
                <table className="table " id="dataTable" width="100%" cellSpacing="0" style={{border:"1px solid #ccc"}}>
                  <thead>
                    <tr style={{borderWidth:"1px"}}>
                      <th>Id</th>
                      <th>Name</th>
                      <th>E-Mail</th>
                      <th>City</th>
                      <th>State</th>
                      <th>Country</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  {/* <tfoot>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>E-mail</th>
                      <th>City</th>
                      <th>State</th>
                      <th>Country</th>
                      <th>Action</th>
                    </tr>
                  </tfoot> */}
                  <tbody>
                    {userList.map((user) => {
                      return (
                        <tr>
                          <td>{user.id}</td>
                          <td>{user.username}</td>
                          <td>{user.email}</td>
                          <td>{user.city}</td>
                          <td>{user.state}</td>
                          <td>{user.country}</td>
                          <th>
                            <Link to={`/user-view/${user.id}`} className='btn btn-primary btn-sm mr-1'>View</Link>
                            <Link to={`/user-edit/${user.id}`} className='btn btn-info btn-sm mr-1'>Edit</Link>
                            <button onClick={() => handleDelete(user.id)} className='btn btn-danger btn-sm mr-1'>Delete</button>
                          </th>
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

export default Userlist