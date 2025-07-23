'use client';

import React, { useState } from 'react'
import { PostAPI } from '../components/api/Api'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function Contact() {
const router = useRouter();
  const [data, setData] = useState({
    name: '',
    email: '',
    phoneno: '',
    method: '',
    sendmessage: '',
  });

  //const navigate = useNavigate();

  const handleChange = (e) => {
    const { value, files, name } = e.target;

    if (files) {
      setData(prev => ({ ...prev, [name]: files[0] }));
    } else {
      setData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (event, action) => {
    event.preventDefault();
    event.stopPropagation();

    // const isValid = await formValidation(data);
    // if (!isValid) return;

    const formData = new FormData();
    // if (id) {
    //   formData.append('id', id);
    // }
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phoneno', data.phoneno);
    formData.append('method', data.method);
    // formData.append('description', data.description);
    formData.append('sendmessage', data.sendmessage);

    if (action === 'insert') {
      PostAPI({ url: '/contact', data: formData }, (res) => {
         console.log(res);
       // console.log(res);
        //toast.success('Successfully added contact');
       // navigate('/');
       router.push(`/home`);
        alert(`Thank you for contacting us! We've received your message and will be in touch shortly`);
        setData({});
      });
    } else if (action === 'update') {
    //   PostAPI({ url: ``, data: formData }, (res) => {
    //     //toast.success('Successfully updated contact');
    //   });
    }
  };

  return (
    <>
    <div className='row mt-3'>
      <h2 className='border-bottom pb-3 text-center mb-4'>Contact Us</h2>
      <div className='col-lg-11 col-xl-11 col-sm-12 col-12 mx-auto'>
        <div className='row mb-4'>
          <div className='col-lg-5 col-sm-5 col-12'>
            <div className='card-bx h-100 mb-4'>
              <div className='row align-items-center h-100'>
                <div className='col-lg-12 col-sm-12 col-12'>
                  <h3 className='mb-3'>Contact</h3>
                  <p><i style={{ color: '#2167b2' }} className="fas fa-clock" aria-hidden="true"></i> Open 24/7</p>
                  <p><i style={{ color: '#2167b2' }} className="fas fa-phone" aria-hidden="true"></i> (408) 896-5421</p>
                  <p><i style={{ color: '#2167b2' }} className="fas fa-envelope" aria-hidden="true"></i> info@myflexpass.com</p>
                  <div className='footer_grid'>
                    <div className="social_profile">
                      <ul>
                        <li><Link href="https://www.facebook.com/myflexpass/" target='_blank'><i className="fab fa-facebook-f"></i></Link></li>
                        <li><Link href="https://www.instagram.com/flexpass_/" target='_blank'><i className="fab fa-instagram"></i></Link></li>
                        <li><Link href="https://www.youtube.com/channel/UC4fi3Y0n1O_8JEdPHvccm6Q" target='_blank'><i className="fab fa-youtube"></i></Link></li>
                        <li><Link href="https://www.tiktok.com/@flexpass_" target='_blank'><i className="fab fa-tiktok"></i></Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-7 col-sm-7 col-12'>
            <form onSubmit={(e) => handleSubmit(e, 'insert')} className="p-md-5 border rounded-3 bg-body-tertiary">
              <div className='row'>
                <div className='col-lg-6 col-sm-6 col-12'>
                  <div className="form-floating mb-3">
                    <input type="text" id="" className="form-control"
                      name='name'
                      value={data?.name}
                      onChange={handleChange}
                    />
                    <label className="form-label" htmlFor="">Name</label>
                  </div>
                </div>
                <div className='col-lg-6 col-sm-6 col-12'>
                  <div className="form-floating mb-3">
                    <input type="email" id="form4Example2" className="form-control"
                      name='email'
                      value={data?.email}
                      onChange={handleChange}
                    />
                    <label className="form-label" htmlFor="form4Example2">Email</label>
                  </div>
                </div>
                <div className='col-lg-12 col-sm-12 col-12'>
                  <div className="form-floating mb-3">
                    <input type="phone" id="form4Example4" className="form-control"
                      name="phoneno"
                      value={data?.phoneno}
                      onChange={handleChange}
                    />
                    <label className="form-label" htmlFor="form4Example4">Phone</label>
                  </div>
                </div>
                <div className='col-lg-12 col-sm-12 col-12'>
                  <div className="form-floating mb-3">
                    <p>Preferred Method of Contact</p>
                    <div className="form-check form-check-inline">
                      <input type="radio" className="form-check-input" id="radio1"
                        name="method"
                        value="Phone"
                        checked={data?.method === 'Phone'}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="radio1">Phone</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input type="radio" className="form-check-input" id="radio2"
                        name="method"
                        value="Email"
                        checked={data?.method === 'Email'}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="radio2">Email</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input type="radio" className="form-check-input"
                        name="method"
                        value="Text"
                        checked={data?.method === 'Text'}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="radio3">Text</label>
                    </div>
                  </div>
                </div>
                <div className='col-lg-12 col-sm-12 col-12'>
                  <div className="form-floating mb-3">
                    <textarea className="form-control" id="form4Example3" rows="4"
                      name='sendmessage'
                      value={data?.sendmessage}
                      onChange={handleChange}
                    ></textarea>
                    <label className="form-label" htmlFor="form4Example3">Message</label>
                  </div>
                </div>
              </div>
              <button type="submit" className="w-100 btn btn-lg btn-primary">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact