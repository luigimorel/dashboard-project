import { useEffect, useState } from 'react';
import { backendURL } from '../config';
import DefaultLayout from '../layout/DefaultLayout';

const Companies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      const response = await fetch(`${backendURL}/companies`);
      const data = await response.json();
      setCompanies(data);
    } catch (error) {
      console.error('Error fetching companies:', error);
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
              <th scope="col" className="px-6 py-3 ">
                Name
              </th>
              <th scope="col" className="px-6  py-3">
                Address
              </th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company: any) => (
              <tr className="border-b" key={company.id}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {company.id}
                </th>
                <td className="px-6 py-4">{company.name}</td>
                <td className="px-6 py-4">{company.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DefaultLayout>
  );
};

export default Companies;
