import React from "react";
// import { Link } from "react-router-dom";
// import { AiOutlineEye } from "react-icons/ai";
import me from '../../assets/my.jpg'


const Users = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <section className="tableClass">
        <main>
          <table>
            <thead>
              <tr>
                <th>User Id</th>
                <th>User Name</th>
                <th>Photo</th>
                <th>Role</th>
                <th>Since</th>
              </tr>
            </thead>
  
            <tbody>
              {arr.map((i) => (
                <tr key={i}>
                  <td>#sdkfsdfdsf</td>
                  <td>Akshay</td>
                  <td>
                    <img src={me} alt="Profile" />
                  </td>
                  <td>Admin</td>
                  <td>23-02-2023</td>
                 
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </section>
  )
}

export default Users
