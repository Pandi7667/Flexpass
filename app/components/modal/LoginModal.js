'use client';

import React from 'react';
import Link from 'next/link';
import assets from '../Assets';
import Image from 'next/image';
function LoginModal({ show, onClose, handleSubmit, data, handleChange, error, showPassword, togglePasswordVisibility }) {
  if (!show) return null;

  return (
    <>
      <div className="modal fade show d-block flexpass_modal" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header text-center p-2">
              <h4 className="modal-title w-100">Sign in  </h4>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body pt-0">
              <form onSubmit={handleSubmit}>
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="mb-2 mt-2">
                  {/* <label for="email" class="form-label">Email:</label> */}
                  <input type="email" className="form-control" id="email" placeholder="Enter email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-2 position-relative">
                  {/* <label for="password" class="form-label">Password:</label>
                  <input type="password" class="form-control" id="password" placeholder="Enter password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                  /> */}
      <input
        type={showPassword ? 'text' : 'password'}
        className="form-control"
        id="password"
        placeholder="Enter password"
        name="password"
        value={data.password}
        onChange={handleChange}
      />
      <span
        onClick={togglePasswordVisibility}
        style={{
          position: 'absolute',
          right: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          cursor: 'pointer'
        }}
      >
        {showPassword ? <i className="fas fa-eye" style={{color:'#2167b2', fontSize:'13px'}} aria-hidden="true"></i> : <i className="fas fa-eye-slash" style={{ fontSize:'13px'}} aria-hidden="true"></i>}
      </span>
                </div>
                <div className="mb-2">
                  {/* <label for="Role" class="form-label">Role*</label> */}
                  <select className="form-select"
                    name="role"
                    value={data.role}
                    onChange={handleChange}
                  >
                    <option value="">Select role</option>
                    <option value="Admin">Admin</option>
                    <option value="AccountManager">Account Manager</option>
                    <option value="Partner">Partner</option>
                    <option value="Member">Member</option>
                  </select>
                </div>
                <div className="mb-2">
                  <p className="text-end mb-0"><Link style={{ textDecoration: 'none' }} href={'https://app.myflexpass.com/auth/forgot-password'}>Forgot Password</Link></p>
                </div>
                <div className='text-center'>
                  <button type="submit" className="btn btn-primary mt-0">Sign in </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="imgBlur">
        <Image src={assets.banner_01} alt="Myflexpass" />
      </div>
    </>
  )
}

export default LoginModal