'use client';

//import assets from '../Assets'

function CardDesign() {

   const data = [
      {
         id:1,
         title:"Memberships that Fit Your Budget",
         description:"FLEXPASS offers a variety of membership plans designed to fit your lifestyle and budget. Enjoy access to premium gyms without paying for services you don't use. Stay active and pampered, all while staying within your financial comfort zone.",
         image:"https://myflexpass.com/video/ourservice/Untitled-design-3.webp",
      },
      {
         id:2,
         title:"Customizable Monthly Credits",
         description:"With FLEXPASS, you can customize your monthly credits to match your personal needs. You're in control of how you use your credits each month, ensuring you get exactly what you want.",
         image:"https://myflexpass.com/video/ourservice/tile22.webp",
      },
      {
         id:3,
         title:"Carry Over Unused Credits",
         description:"Don’t worry about unused credits going to waste. FLEXPASS allows you to carry over any unused credits from one month to the next, giving you the flexibility to use them when it’s convenient for you.",
         image:"https://myflexpass.com/video/ourservice/tile33.webp",
      },
      {
         id:4,
         title:"No Contracts or Commitments",
         description:"FLEXPASS offers ultimate flexibility with no long-term contracts or commitments. You're free to adjust, pause, or cancel your membership whenever you like, without hidden fees or hassles.",
         image:"https://myflexpass.com/video/ourservice/tile44.webp",
      },
      {
         id:5,
         title:"Total Flexibility for Users",
         description:"The perfect app for frequent travelers, remote workers and business professionals, providing access to a variety of gyms and fitness classes across California",
         image:"https://myflexpass.com/video/ourservice/tile55.webp",
      },  
      {
         id:6,
         title:"Flexible Class Scheduling via the App",
         description:"Say goodbye to rigid schedules! With FLEXPASS, you can easily book classes and appointments through our user-friendly app. Enjoy flexible scheduling and access your favorite services whenever it works best for you.",
         image:"https://myflexpass.com/video/ourservice/tile66.webp",
      }
   ]
  return (
  <>
        <div className="row mt-5 gymcard">
           <div className='container'>
              <div className='row'>
                 <div className='col-lg-12' >
                   <h2 className='mb-2 mb-sm-3 mb-lg-5 mt-2 text-center'>What Sets Us <span style={{color:'#2167b2'}}>Apart</span> </h2>
                    <div className='page-content' data-aos="fade-up"  data-aos-duration="3000">
                        
                       {data.map((item, index) => (
                        
                          <div className="card" style={{
                             backgroundImage: `url(${item.image})`,
                             backgroundSize: 'cover',
                             backgroundPosition: 'center',
                             height:'300px',
                          }} key={index}>
                             <div className="content">
                                <h2 className="title">{item.title}</h2>
                                <p className="copy">{item.description}</p>
                                {/* <button class="btn">View Trips</button> */}
                             </div>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </div>
  </>
  )
}

export default CardDesign