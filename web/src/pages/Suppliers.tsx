import { useEffect, useState } from 'react';

import { backendURL } from '../config';
import DefaultLayout from '../layout/DefaultLayout';

const Suppliers = () => {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    fetchSuppliers();
  }, []);

  const fetchSuppliers = async () => {
    try {
      const response = await fetch(`${backendURL}/suppliers`);
      const data = await response.json();
      setSuppliers(data);
    } catch (error) {
      console.error('Error fetching suppliers:', error);
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
                Name
              </th>
              <th scope="col" className="px-6  py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3 ">
                Contact Person
              </th>
              <th scope="col" className="px-6 py-3 ">
                Phone
              </th>
              <th scope="col" className="px-6 py-3 ">
                Email
              </th>
              <th scope="col" className="px-6 py-3 ">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {suppliers.map((supplier: any) => (
              <tr className="border-b" key={supplier.id}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {supplier.id}
                </th>

                <td className="px-6 py-4">{supplier.name}</td>
                <td className="px-6 py-4">{supplier.address}</td>
                <td className="px-6 py-4">{supplier.contact_person}</td>
                <td className="px-6 py-4">{supplier.phone}</td>
                <td className="px-6 py-4">{supplier.email}</td>
                <td className="px-6 py-4">{supplier.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DefaultLayout>
  );
};

export default Suppliers;
