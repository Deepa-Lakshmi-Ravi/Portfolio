import "./Project.css";

const Project = () => {
  return (
    <>
      <section className="project" id="project">
        <div className="project-container">
          <div className="project-title">
            <h4>My Projects</h4>
            <p>Discover my projects, where creativity meets innovation</p>
          </div>
          <div className="projects-list">
            <div className="project-item-1">
              <i className="fa-solid fa-brain"></i>
              <h4>
                Parkinson's Disease Prediction Using Spiral Images in Deep
                Learning
              </h4>
              <p>
                A development of web application for early prediction of the
                disease by classifying the spiral images of healthy and diseased
                subjects in an efficient manner.
              </p>
              <div className="btn" style={{ marginTop: "80px" }}>
                <button type="button" className="view-btn">
                  View
                </button>
              </div>
            </div>
            <div className="project-item-2">
              <i className="fa-solid fa-landmark"></i>
              <h4>Zen Class Student DashBoard</h4>
              <p>
                The ZenClass student dashboard web application aims to provide
                students with a centralized platform to access their academic
                information, such as course schedules, tasks, grades, live
                sessions and communication with instructors.The goal is to
                enhance the overall learning experience and streamline student
                engagement with course materials and instructors.
              </p>
              <div className="btn" style={{ marginTop: "10px" }}>
                <a
                  href="https://zenclass-student-dashboard-frontend.netlify.app/"
                  target="_blank"
                >
                  <button type="button" className="view-btn">
                    View
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
