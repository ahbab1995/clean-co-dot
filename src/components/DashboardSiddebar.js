import React from "react";
import { NavLink } from "react-router-dom";

const DashboardSiddebar = ({ children }) => {
  return (
        <div className="drawer drawer-mobile lg:drawer-open bg-accent mt-16">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
         <div class='drawer-content flex flex-col items-center justify-center'>
            {/* <!-- Page content here --> */}
            {children}
          </div>
        <div className="drawer-side bg-base-100 ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
           <ul class='menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content mt-16 lg:mt-0'>
              <li>
                <NavLink to='add-service'>Add Service</NavLink>
              </li>
              <li>
                <NavLink to='add-admin'>Add Admin</NavLink>
              </li>
            </ul>
        </div>
      </div>
    // <div class="drawer lg:drawer-open mt-16 bg-accent">
    //   <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    //   <div class="drawer-content flex flex-col items-center justify-center">
    //     {/* <!-- Page content here --> */}
    //     {children}
    //   </div>
    //   <div class="drawer-side  bg-base-100">
    //     <label for="my-drawer-2" class="drawer-overlay"></label>
    //     <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
    //       <li>
    //         <NavLink to="/dashboard/add-service">Add Service</NavLink>
    //       </li>
    //       <li>
    //         <NavLink to="/dashboard/add-admin">Add Admin</NavLink>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
};

export default DashboardSiddebar;
