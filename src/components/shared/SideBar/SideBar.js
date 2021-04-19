import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faList, faComment, faPlus, faShieldAlt, faTasks, faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import './SideBar.css'
import { UserContext } from '../../../App';

const SideBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [allAdmin, setAllAdmin] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        fetch('https://immense-sands-37830.herokuapp.com/isadmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    console.log(isAdmin)
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 col-sm-12 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">

                <li>
                    <Link to="/home" className="text-white side-link">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>


                <li>
                    <Link to="/dashboard/book" className="text-white">
                        <FontAwesomeIcon icon={faShoppingCart} /> <span>Book</span>
                    </Link>
                </li>

                <li>
                    <Link to="/dashboard/review" className="text-white">
                        <FontAwesomeIcon icon={faComment} /> <span>Review</span>
                    </Link>
                </li>

                <li>
                    <Link to="/dashboard/orderlist" className="text-white">
                        <FontAwesomeIcon icon={faList} /> <span>Order List</span>
                    </Link>
                </li>
                {
                    isAdmin && <div>
                        <li>
                            <Link to="/dashboard/addService" className="text-white">
                                <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/makeAdmin" className="text-white">
                                <FontAwesomeIcon icon={faShieldAlt} /> <span>Make Admin</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/manage" className="text-white">
                                <FontAwesomeIcon icon={faTasks} /> <span>Manage Service</span>
                            </Link>
                        </li>
                    </div>
                }




            </ul>

        </div>
    );
};

export default SideBar;