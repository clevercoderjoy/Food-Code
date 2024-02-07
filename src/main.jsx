import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App.jsx';
import { CartContext, CartContextProvider } from './contexts/CartContext';
import { RestaurantContext, RestaurantContextProvider } from './contexts/RestaurantContext.jsx';
import { UserContext, UserContextProvider } from './contexts/userContext.jsx';
import "./index.css";
import foodStore from './services/reduxStore/foodStore/foodStore.jsx';

export { CartContext, RestaurantContext, UserContext };

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={foodStore}>
      <RestaurantContextProvider>
        <UserContextProvider>
          <CartContextProvider>
            <BrowserRouter>
              <App />
              <ToastContainer />
            </BrowserRouter>
          </CartContextProvider>
        </UserContextProvider>
      </RestaurantContextProvider>
    </Provider>
  </React.StrictMode>
)
