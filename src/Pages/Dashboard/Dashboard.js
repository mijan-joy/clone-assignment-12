import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <h2 className='text-2xl text-center font-bold text-secondary'>Welcome To Your Dashboard</h2>
                {/* <!-- Page content here --> */}
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard/myOrders">My Orders</Link></li>
                    <li><Link to="/dashboard/addReview">Add Review</Link></li>

                    <li><Link to="/dashboard/addProduct">Add Product</Link></li>
                    <li><Link to="/dashboard/users">All Users</Link></li>
                    <li><Link to="/dashboard/manageProducts">Manage Products</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;