import "./Education.css";

const Education = () => {
  return (
    <>
      <section className="education" id="education">
        <div className="education-container">
          <div className="row">
            <div className="education-content">
              <h2 className="title">Education</h2>

              <div className="time-line">
                <div className="time-line-item">
                  <div className="circle-dot"></div>
                  <h3 className="item-title">
                    B.Tech Information Technology - 79%
                  </h3>
                  <h4 className="item-title">
                    University College of Engineering Anna University
                  </h4>
                  <h4 className="item-title">
                    <i className="fa-solid fa-calendar"></i>
                    2019 - 2023
                  </h4>
                </div>
                <div className="time-line-item">
                  <div className="circle-dot"></div>
                  <h3 className="item-title">HSC - 79.6%</h3>
                  <h4 className="item-title">
                    Bhagavan Higher Secondary School
                  </h4>
                  <h4 className="item-title">
                    <i className="fa-solid fa-calendar"></i>
                    2018 - 2019
                  </h4>
                </div>
                <div className="time-line-item">
                  <div className="circle-dot"></div>
                  <h3 className="item-title">SSLC - 91%</h3>
                  <h4 className="item-title">
                    St Antony's Girls Higher Secondary School
                  </h4>
                  <h4 className="item-title">
                    <i className="fa-solid fa-calendar"></i>
                    2016 - 2017
                  </h4>
                </div>
              </div>
            </div>
            <div className="certificate">
              <h2 className="title">Certificate</h2>
              <div className="time-line">
                <div className="time-line-item">
                  <div className="circle-dot"></div>
                  <h3 className="item-title">Android Development WorkShop</h3>
                  <h4 className="item-title">UCE-BIT Campus</h4>
                  <h4 className="item-title">
                    <i className="fa-solid fa-calendar"></i>
                    FEB - 2023
                  </h4>
                  <div className="education-btn">
                    <a href="" target="_blank">
                      <button type="submit" className="submit-btn">
                        View
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Education;
