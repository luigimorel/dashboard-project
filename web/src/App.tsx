import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';

// Pages
import Categories from './pages/Categories';
import Companies from './pages/Companies';
import Customers from './pages/Customers';
import Orders from './pages/Orders';
import Products from './pages/Products';
import Reports from './pages/Reports';
import Staff from './pages/Staff';
import Suppliers from './pages/Suppliers';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        {/* Products */}
        <Route
          path="/"
          element={
            <>
              <PageTitle title="Products" />
              <Products />
            </>
          }
        />

        {/* Orders */}
        <Route
          path="/orders"
          element={
            <>
              <PageTitle title="Orders" />
              <Orders />
            </>
          }
        />

        {/* Customers */}
        <Route
          path="/customers"
          element={
            <>
              <PageTitle title="Customers" />
              <Customers />
            </>
          }
        />

        {/* Companies */}
        <Route
          path="/companies"
          element={
            <>
              <PageTitle title="Companies" />
              <Companies />
            </>
          }
        />

        {/* Staff */}
        <Route
          path="/staff"
          element={
            <>
              <PageTitle title="Staff" />
              <Staff />
            </>
          }
        />

        {/* Suppliers */}
        <Route
          path="/suppliers"
          element={
            <>
              <PageTitle title="Suppliers" />
              <Suppliers />
            </>
          }
        />

        {/* Categories */}
        <Route
          path="/categories"
          element={
            <>
              <PageTitle title="Categories" />
              <Categories />
            </>
          }
        />

        {/* Reports */}
        <Route
          path="/reports"
          element={
            <>
              <PageTitle title="Reports" />
              <Reports />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
