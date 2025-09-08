// import Image from 'next/image';
// import assets from '../Assets';

const FAQSection = ({getFqa}) => {
  //console.log('FAQSection',getFqa);
   if (!getFqa || getFqa.length === 0) {
    return null;
  }
  return (

    <section className="bg-white py-0 py-md-0">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-lg-12">
            <div className='card border rounded-3 text-left shadow-sm'>
              <div className='card-body p-3 text-left w-100'>
                <div className="accordion accordion-flush" id="accordionExample">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-xl-12">
                      <h3 className="mb-3 text-start">FAQ</h3>
                      {/* <p className="lead fs-4 text-secondary mb-5">
                        Find answers to common questions or get in touch with our support team.
                      </p> */}
                      <div className="accordion accordion-flush" id="accordionExample">
                        <div className="accordion accordion-flush" id="accordionExample">
                          {getFqa.map((item) => (
                            <div key={item.id} className="accordion-item">
                              <h2 className="accordion-header" id={`heading-${item.id}`}>
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#collapse-${item.id}`}
                                  aria-expanded="false"
                                  aria-controls={`collapse-${item.id}`}
                                >
                                  {item.faqqus}
                                </button>
                              </h2>
                              <div
                                id={`collapse-${item.id}`}
                                className="accordion-collapse collapse"
                                aria-labelledby={`heading-${item.id}`}
                                data-bs-parent="#accordionExample"
                              >
                                <div className="accordion-body">
                                  <p className="text-start">{item.faqans}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        {/* <div className="accordion-item">
                          <h2 className="accordion-header" id="headingTwo">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              What types of exercises are included in the workout circuit?
                            </button>
                          </h2>
                          <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body text-left">
                              The circuit includes strength moves (using dumbbells, kettlebells, medicine balls), kickboxing combinations on bags, and a final core/abs-focused round.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingThree">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              Are the workouts the same everyday, or do they change?
                            </button>
                          </h2>
                          <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body text-left">
                              <p className='text-left'>The workouts change daily—new sequencing and challenges keep things fresh.</p>
                            </div>
                          </div>
                        </div> */}

                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
