import React from 'react';

const OrderList = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email ID</th>
            <th>Service</th>
            <th>Pay With</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
            <td>Blue</td>
            <td>Blue</td>
          </tr>

        </tbody>
      </table>
    </div>
  );
};

export default OrderList;