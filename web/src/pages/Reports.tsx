import { useEffect, useState } from 'react';
import { backendURL } from '../config';
import DefaultLayout from '../layout/DefaultLayout';

const Reports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const response = await fetch(`${backendURL}/reports`);
      const data = await response.json();
      setReports(data);
    } catch (error) {
      console.error('Error fetching reports:', error);
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
                Type
              </th>
              <th scope="col" className="px-6  py-3">
                title
              </th>
              <th scope="col" className="px-6  py-3">
                Content
              </th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report: any) => (
              <tr className="border-b" key={report.id}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {report.id}
                </th>
                <td className="px-6 py-4">{report.type}</td>
                <td className="px-6 py-4">{report.title}</td>
                <td className="px-6 py-4">{report.content}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DefaultLayout>
  );
};

export default Reports;
