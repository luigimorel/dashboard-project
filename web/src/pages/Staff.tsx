import { useEffect, useState } from 'react';
import { backendURL } from '../config';
import DefaultLayout from '../layout/DefaultLayout';

const Staff = () => {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    fetchStaffMembers();
  }, []);

  const fetchStaffMembers = async () => {
    try {
      const response = await fetch(`${backendURL}/staff`);
      const data = await response.json();
      setStaff(data);
    } catch (error) {
      console.error('Error fetching staff:', error);
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
                Photo
              </th>
              <th scope="col" className="px-6  py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3 ">
                Position
              </th>
              <th scope="col" className="px-6 py-3 ">
                Status
              </th>
              <th scope="col" className="px-6 py-3 ">
                Phone
              </th>
              <th scope="col" className="px-6 py-3 ">
                Email
              </th>
              <th scope="col" className="px-6 py-3 ">
                Gender
              </th>
            </tr>
          </thead>
          <tbody>
            {staff.map((staff: any) => (
              <tr className="border-b" key={staff.id}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {staff.id}
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  <img src={staff.photo} className=" h-12 w-12 rounded-full" alt="" />
                </th>
                <td className="px-6 py-4">{staff.name}</td>
                <td className="px-6 py-4">{staff.position}</td>
                <td className="px-6 py-4">{staff.status}</td>
                <td className="px-6 py-4">{staff.phone}</td>
                <td className="px-6 py-4">{staff.email}</td>
                <td className="px-6 py-4">{staff.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DefaultLayout>
  );
};

export default Staff;
