'use client';

// import assets from '../Assets';
// import Image from 'next/image';
function ContactMsg({ show, onClose }) {
  if (!show) return null;

  return (
    <>
      <div className="modal fade show d-block flexpass_modal" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header text-center p-0 border-0">
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body pt-5 pb-5 text-center">
              <h3 className='mb-3' style={{color:'#05b465'}}>Thank you for contacting us! </h3>
              <h6>We`ve received your message and will be in touch shortly!</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactMsg