import { useEffect, useState } from 'react';
import { backendURL } from '../config';
import DefaultLayout from '../layout/DefaultLayout';

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await fetch(`${backendURL}/customers`);
      const data = await response.json();
      setCustomers(data);
    } catch (error) {
      console.error('Error fetching customers:', error);
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
                Image
              </th>
              <th scope="col" className="px-6 py-3 ">
                Name
              </th>
              <th scope="col" className="px-6 py-3 ">
                Contact Number
              </th>
              <th scope="col" className="px-6 py-3 ">
                Email
              </th>
              <th scope="col" className="px-6 py-3 ">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer: any) => (
              <tr className="border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {customer.id}
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  <img src={customer.photo} className=" h-12 w-12 rounded-full" alt="" />
                </th>
                <td className="px-6 py-4">{customer.name}</td>
                <td className="px-6 py-4">{customer.contact_number}</td>
                <td className="px-6 py-4">{customer.email}</td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-primary hover:underline">
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DefaultLayout>
  );
};

export default Customers;
