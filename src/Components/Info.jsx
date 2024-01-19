import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { Oval } from "react-loader-spinner";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Info() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = 1000; // 2 seconds delay
    const timeout = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const delay = 3000; // 5 seconds delay
    const timeout = setTimeout(() => {
      navigate("/home");
    }, delay);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <>
      <div className="container min-vh-100 d-flex align-items-center justify-content-center py-5 py-md-0">
        <div className="col-md-7 rounded-2 shadow-lg p-3 mb-5" style={{ background: '#e3f2fd' }}>
          <div className="text-center p-5">
            <img src="/bloglogo1.png" alt="Logo" width="64" height="64" />

            <h1 className="text-main fw-bolder">
              Welcome to Tech <span className="text-primary">Blog</span>
            </h1>

            {loading ? (
              <div class="spinner-grow text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            ) : (
              <div class="spinner-grow text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
