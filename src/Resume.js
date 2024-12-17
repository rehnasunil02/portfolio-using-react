import React from "react";

const Resume = () => {
  return (
    <div className="resume-container">
      {/* Header */}
      <header className="resume-header">
        <h1>Rehna M</h1>
        <p><a href="mailto:rehnarehu2002@gmail.com">rehnarehu2002@gmail.com</a></p>
        <p>9567466974</p>
      </header>

      {/* Objective */}
      <section className="resume-section">
        <h2>Objective</h2>
        <div className="separator"></div>
        <p>
          Enthusiastic data science student seeking a job to apply my skills and
          gain hands-on experience in a dynamic and innovative environment. My
          goal is to become associated with a company where I can utilize my
          skills and gain further experience while enhancing the company’s
          productivity and reputation.
        </p>
      </section>

      {/* Education */}
      <div class="education-section">
      <h2>Education</h2>
      <div className="separator"></div>
            <div class="education-item">
                <div class="details">
                    <p><strong>Cochin University of Science and Technology</strong></p>
                    <p>MSc Computer Science with specialization in Data Science</p>
                </div>
                <div class="year">2023-2025</div>
            </div>
    
            <div class="education-item">
                <div class="details">
                    <p><strong>Mar Ivanios College</strong></p>
                    <p>BSc Computer Science</p>
                </div>
                <div class="year">2020-2023</div>
            </div>
    
            <div class="education-item">
                <div class="details">
                    <p><strong>Alan Feldman Public School</strong></p>
                    <p>AISSCE</p>
                </div>
                <div class="year">Graduated in 2020</div>
            </div>
        </div>

      {/* Skills */}
      <section className="resume-section">
        <h2>Skills</h2>
        <div className="separator"></div>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>SQL</li>
            <li>Python</li>
            <li>C Programming</li>
        </ul>
      </section>

      {/* Projects */}
      <section className="resume-section">
        <h2>Projects</h2>
        <div className="separator"></div>
        <ul>
            <li><b>HOUSE PRICE PREDICTION</b></li>
        </ul>
        <p>
            I developed a machine learning model to predict house prices using parameters like square footage, 
            number of bedrooms, bathrooms, and proximity to amenities. The project involved data collection, 
            cleaning, and preprocessing with Pandas and NumPy, and EDA to identify key features. I compared 
            regression algorithms, including Linear Regression, Decision Trees, and Random Forests, evaluating 
            performance with MAE and RMSE. Visualizing results with Matplotlib, the final model achieved high 
            accuracy, offering valuable insights for real estate stakeholders.
        </p>
      </section>

      {/* Certificates */}
      <section className="resume-section">
        <h2>Certificates</h2>
        <div className="separator"></div>
        <ul>
            <li>Completed three-day Python workshop at ICFOSS</li>
        </ul>
      </section>

      {/* Conclusion */}
      <section className="resume-section">
        <h2>Conclusion</h2>
        <div className="separator"></div>
        <ul>
          <li>I hereby declare that all the details provided above are true to the best of my knowledge.</li>
        </ul>
        
      </section>
    </div>
  );
};

export default Resume;
