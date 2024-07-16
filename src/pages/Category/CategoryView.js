import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function UserView() {
    const params = useParams();
    const [userList, setUserList] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        //On Load
        getUsers();
        console.log("welcome to userview");
    }, []);

    let getUsers = async () => {
        try {
            const user = await axios.get(`https://63a9bccb7d7edb3ae616b639.mockapi.io/users/${params.id}`);
            // console.log(user);
            setUserList(user.data);
            // console.log(userList);
            setLoading(false);
        } catch (error) {
            console.log(error);
            // setLoading(false);
        }
    }

    return (
        <>
            <div style={{marginTop:"20px",padding:"2%"}}>CategoryView - {params.id}</div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">CategoryView</h6>
                </div>
                <div className="card-body">
                    {
                        isLoading ? <img src='https://media.giphy.com/media/ZO9b1ntYVJmjZlsWlm/giphy.gif' alt='card'/>
                            :
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0" style={{border:"1px solid #ccc"}}>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Description</th>
                                            <th>Categoryname</th>
                                            <th>Price</th>
                                            <th>Parent Category</th>
                                            <th>Colors</th>
                                            <th>Brand</th>
                                            <th>Image</th>
                                        </tr>
                                    </thead>
                                     
                                    <tbody>
                                        <tr>
                                            <td>{userList.id}</td>
                                            <td> {userList.categoryname} </td>
                                            <td>{userList.price}</td>
                                            <td>{userList.description}</td>
                                            <td>{userList.parentcategory}</td>
                                            <td>{userList.colors}</td>
                                            <td>{userList.brand}</td>
                                            <td><img src={userList.image} alt={userList.categoryname} /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                    }
                </div>
            </div>
        </>

    )
}

export default UserView