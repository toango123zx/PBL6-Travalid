import React, { createContext, useState, useEffect, useCallback } from 'react';
import './App.css';
import { LayoutAdmin, LayoutDefault, LayoutSupplier } from './layout';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import {
  HomePage,
  AttractionsPage,
  AtractionDetailPage,
  CartPage,
  AuthPage,
  ContactPage,
  AdminPage,
  NotFoundPage,
  ProfilePage,
  AdminManageUser,
  SupplierManageProduct,
  SalesPage,
  SaleDetailPage,
} from './page';
import authAPI from './api/authAPI';
export const APP_CONTEXT = createContext({});
function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUser = useCallback(async () => {
    try {
      const res = await authAPI.me();
      if (res.data) {
        setUser(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);
  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <APP_CONTEXT.Provider value={{ user, setUser, isLoading, setIsLoading }}>
      <div className="App">
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/" element={<LayoutDefault />}>
            <Route path="attractions" element={<AttractionsPage />} />
            <Route path="attractions/:id" element={<AtractionDetailPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="sales" element={<SalesPage />} />
            <Route path="sales/:id" element={<SaleDetailPage className={''} />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="admin" element={<LayoutAdmin />}>
              <Route index element={<AdminPage />} />
              <Route path="accounts" element={<AdminManageUser />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
            <Route path="supplier" element={<LayoutSupplier />}>
              <Route index element={<AdminPage />} />
              <Route path="products" element={<SupplierManageProduct />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </APP_CONTEXT.Provider>
  );
}

export default App;
