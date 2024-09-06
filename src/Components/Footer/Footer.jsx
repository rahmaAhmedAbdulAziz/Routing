import React from "react";

export default function Footer() {
  return (
    <>
    {/* fixed-bottom */}
      <footer className=" text-center text-white pt-5">
        <div className="container pb-5">
          <div className="row">
            <div className="col-lg-4">
              <h2 className="fw-bolder mb-3">LOCATION </h2>
              <p>2215 John Daniel Drive </p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="col-lg-4">
                <h2 className="fw-bolder mb-3">AROUND THE WEB</h2>
                <div className="icon">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin-in"></i>
                <i className="fa-solid fa-globe"></i>    
                          </div>
            </div>
            <div className="col-lg-4">
            <h2 className="fw-bolder mb-3">ABOUT FREELANCER </h2>
<p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
          </div>
        </div>
      <div className="lastFooter py-3">
<p>Copyright © Your Website 2021

</p>
      </div>
      </footer>
    </>
  );
}
