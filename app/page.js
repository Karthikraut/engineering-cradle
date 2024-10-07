"use client"
import React, { useEffect, useState } from 'react';
import { useAuth } from './utils/authContext';
import Login from './login/page';

const Page = () => {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null); // Store user data
  const { token } = useAuth();

  // Fetch products and user data
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://intern-task-api.bravo68web.workers.dev/api/products', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      setProducts(data);
    };

    const getUser = async () => {
      const response = await fetch("https://intern-task-api.bravo68web.workers.dev/api/me", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const userData = await response.json();
      setUser(userData); // Store user data in state
      console.log("I am ", userData);
    };

    if (token) {
      fetchProducts();
      getUser();
    }
  }, [token]);

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // Filter products based on the search term
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Reset the current page when search term changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return token !== null ? (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 py-8">
        {/* Display User Name */}
        {user && (
          <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Welcome, {user.user.sub}
          </h1>
        )}

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search products..."
          className="mb-4 p-2 border border-gray-300 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Product List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentProducts.map((product) => (
            <div className="relative border border-gray-200 rounded-lg p-4 shadow-md dark:bg-gray-800 dark:border-gray-700" key={product.id}>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="mt-2 text-lg font-semibold dark:text-white">{product.title}</h3>
              <div className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded transform rotate-12">
                ${product.price.toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-between items-center mt-4">
          <button 
            className={`px-4 py-2 bg-blue-600 text-white rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handlePrevPage} 
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="text-gray-900 dark:text-white font-semibold">
            Page {currentPage} of {totalPages}
          </span>
          <button 
            className={`px-4 py-2 bg-blue-600 text-white rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handleNextPage} 
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  ) : (
    <Login />
  );
};

export default Page;
