import React from "react";
import { Link } from "react-router-dom";
import Box from "./Box";
import "../../style/box.scss";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Loader from "../layout/Loader"

ChartJS.register(ArcElement, Tooltip, Legend);
const Dashboard = () => {
  const data = {
    labels: ["Preparing", "Out For Delivery", "Delivered"],
    datasets: [
      {
        label: "# of orders",
        data: [2, 3, 4],
        backgroundColor: [
          "rgba(159,63,176,0.1)",
          "rgba(78,63,176,0.2)",
          "rgba(156,0,60,0.3)",
        ],
        borderColor: ["rgb(159,63,176)", "rgb(78,63,176)", "rgb(156,0,60)"],
        borderWidth: 1,
      },
    ],
  };

  const loading = false;
  return (
    <section className="dashboard">
   {
    (loading === false) 
    ?(<Loader/>)
    :(
      <main>
      <article>
        <Box title="Users" value={213} />
        <Box title="Orders" value={13} />
        <Box title="Income" value={10053} />
      </article>

      <section>
        <div>
          <Link to="/admin/orders">View Orders</Link>
          <Link to="/admin/users">View user</Link>
        </div>

        <aside>
          <Doughnut data={data} />
        </aside>
      </section>
    </main>
    )
   }

   
    </section>
  );
};

export default Dashboard;
