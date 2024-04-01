import { useEffect, useState } from 'react';
import { backendURL } from '../config';
import DefaultLayout from '../layout/DefaultLayout';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch(`${backendURL}/orders`);
      const data = await response.json();
      setOrders(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  return (
    <DefaultLayout>
      <div className="relative overflow-x-auto rounded  ">
        <table className="w-full text-sm text-left text-black ">
          <thead className="text-sm text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6  py-3">
                Id
              </th>
              <th scope="col" className="px-6  py-3">
                Customer Name
              </th>
              <th scope="col" className="px-6 py-3 ">
                Product Name
              </th>
              <th scope="col" className="px-6 py-3 ">
                Status
              </th>
              <th scope="col" className="px-6 py-3 ">
                Quantity
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order: any) => (
              <tr className="  border-b" key={order.id}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {order.id}
                </th>
                <td className="px-6 py-4">{order.customer.name}</td>
                <td className="px-6 py-4">{order.product.name}</td>
                <td className="px-6 py-4">{order.status}</td>
                <td className="px-6 py-4">{order.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DefaultLayout>
  );
};

export default Orders;
