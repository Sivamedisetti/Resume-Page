import React from "react";
import "./mainpage.css";
// import Formpage from './Formpage';
// import RollField from './components/input';
import { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

// import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Mainpage = () => {
  // const notify = (e) => toast(e);
  const postapiurl = "http://40.233.84.103:5001/add-user";

  const [selectedLanguages, setSelectedLanguages] = useState([]);
  // const [selectedtechnologies, setSelectedtechnologies] = useState([]);

  const programmingLanguages = [
    "JavaScript",
    "Python",
    "Java",
    "CPP",
    "C",
    "Dart",
    "HTML",
    "CSS",
  ];
  const technologies = [
    "Game_Development",
    "UI_UX",
    "Full_Stack",
    "Flutter",
    "Salseforce",
    "PEGA",
    "AWS_Cloud",
    "Google_Cloud",
    "Azure_Cloud",
    "GitHub",
    "Devops",
    "React_Native",
    "Cyber_Security",
    "VLSI",
    "Generative_AI",
  ];

  // const handleLanguageChange = (e) => {
  //     const { value } = e.target;
  //     if (selectedLanguages.includes(value)) {
  //         setSelectedLanguages(selectedLanguages.filter(lang => lang !== value));
  //     } else {
  //         setSelectedLanguages([...selectedLanguages, value]);
  //     }
  // };

  // const handletechChange = (e) => {
  //     const { value } = e.target;
  //     if (selectedtechnologies.includes(value)) {
  //         setSelectedtechnologies(selectedtechnologies.filter(tech => tech !== value));
  //     } else {
  //         setSelectedtechnologies([...selectedtechnologies, value]);
  //     }
  // }

  const handleNext = () => {
    const requiredFields = [
      "rollno",
      "name",
      "email",
      "mobile",
      "linkedin",
      "github",
    ];
    for (let fieldName of requiredFields) {
      const fieldValue = document.getElementsByName(fieldName)[0].value.trim();
      console.log(fieldValue);
      if (!fieldValue) {
        alert("Please fill in all required fields.");
        return;
      }
    }

    document.getElementById("firstform").style.display = "none";
    document.getElementById("secondform").style.display = "block";
    document.getElementById("thirdform").style.display = "none";
    document.getElementById("fourthform").style.display = "none";
  };

  const handleNext2 = () => {
    const requiredFields = [
      "secondaryCollege",
      "secondaryCollegeStream",
      "secondaryCollegeGradYear",
      "bachelorsDegree",
      "bachelorsDegreeStream",
      "bachelorsDegreeGradYear",
    ];
    for (let fieldName of requiredFields) {
      const fieldValue = document.getElementsByName(fieldName)[0].value.trim();
      console.log(fieldValue);
      if (!fieldValue) {
        alert("Please fill in all required fields.");
        return;
      }
    }
    document.getElementById("firstform").style.display = "none";
    document.getElementById("secondform").style.display = "none";
    document.getElementById("thirdform").style.display = "block";
    document.getElementById("fourthform").style.display = "none";
  };

  const handleNext3 = () => {
    const requiredFields = ["prolang", "framework"];
    const selectedProLang = document.querySelectorAll(
      `input[name=${requiredFields[0]}]:checked`
    ).length;
    const selectedFramework = document.querySelectorAll(
      `input[name=${requiredFields[1]}]:checked`
    ).length;
    if (selectedProLang === 0 || selectedFramework === 0) {
      alert(
        "Please select at least one Programming language and one Framework."
      );
      return;
    }
    document.getElementById("firstform").style.display = "none";
    document.getElementById("secondform").style.display = "none";
    document.getElementById("thirdform").style.display = "none";
    document.getElementById("fourthform").style.display = "block";
  };
  const handlepreview = () => {
    const requiredFields = ["project1Tittle", "project1Description"];
    for (let fieldName of requiredFields) {
      const fieldValue = document.getElementsByName(fieldName)[0].value.trim();
      console.log(fieldValue);
      if (!fieldValue) {
        alert("Please fill in at least one Project");
        return;
      }
    }
    document.getElementById("firstform").style.display = "none";
    document.getElementById("secondform").style.display = "none";
    document.getElementById("thirdform").style.display = "none";
    document.getElementById("fourthform").style.display = "none";
    document.getElementById("submitform").style.display = "block";
  };

  const prev = () => {
    document.getElementById("firstform").style.display = "block";
    document.getElementById("secondform").style.display = "none";
    document.getElementById("thirdform").style.display = "none";
    document.getElementById("fourthform").style.display = "none";
    document.getElementById("submitform").style.display = "none";
  };
  const prev2 = () => {
    document.getElementById("firstform").style.display = "none";
    document.getElementById("secondform").style.display = "block";
    document.getElementById("thirdform").style.display = "none";
    document.getElementById("fourthform").style.display = "none";
    document.getElementById("submitform").style.display = "none";
  };

  const prev3 = () => {
    document.getElementById("firstform").style.display = "none";
    document.getElementById("secondform").style.display = "none";
    document.getElementById("thirdform").style.display = "block";
    document.getElementById("fourthform").style.display = "none";
    document.getElementById("submitform").style.display = "none";
  };

  const prev4 = () => {
    document.getElementById("firstform").style.display = "none";
    document.getElementById("secondform").style.display = "none";
    document.getElementById("thirdform").style.display = "none";
    document.getElementById("fourthform").style.display = "block";
    document.getElementById("submitform").style.display = "none";
  };

  // const [selectedLang, setSelectedLang] = useState([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [formData, setFormData] = useState({
    personal: {
      rollno: "",
      name: "",
      email: "",
      mobile: "",
      linkedin: "",
      github: "",
    },
    education: {
      secondaryCollege: "",
      secondaryCollegeStream: "",
      secondaryCollegeGradYear: "",
      bachelorsDegree: "",
      bachelorsDegreeStream: "",
      bachelorsDegreeGradYear: "",
    },
    projects: {
      project1Tittle: "",
      project1Description: "",
      project2Tittle: "",
      project2Description: "",
    },
    languages: {},
    frameworks: {},
  });

  console.log(formData.projects);

  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      personal: {
        ...prevState.personal,
        [name]: value,
      },
    }));
  };

  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      education: {
        ...prevState.education,
        [name]: value,
      },
    }));
  };

  const handleProjectChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      projects: {
        ...prevState.projects,
        [name]: value,
      },
    }));
  };

  const handleLanguageChange = (e) => {
    const { value, checked } = e.target;
    setSelectedLanguages((prevLanguages) => {
      if (checked) {
        return [...prevLanguages, value];
      } else {
        return prevLanguages.filter((lang) => lang !== value);
      }
    });

    setFormData((prevState) => ({
      ...prevState,
      languages: {
        ...prevState.languages,
        [value]: checked,
      },
    }));
  };

  const handleTechChange = (e) => {
    const { value, checked } = e.target;
    setSelectedTechnologies((prevTech) => {
      if (checked) {
        return [...prevTech, value];
      } else {
        return prevTech.filter((tech) => tech !== value);
      }
    });

    setFormData((prevState) => ({
      ...prevState,
      frameworks: {
        ...prevState.frameworks,
        [value]: checked,
      },
    }));
  };

  // const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const request = new Request(postapiurl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    fetch(request)
      .then((response) => {
        if (response.ok) {
          alert("Form submitted successfully!");
          // setIsFormSubmitted(true);
        } else {
          throw new Error("Failed to submit form");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error submitting form");
      });
  };

  return (
    <div className="main-page">
      <div id="firstform" className="firstform">
        <div className="formpage">
          <div className="welcome">Personal Details</div>
          <div className="field">
            Roll Number *
            <input
              className="input"
              type="text"
              name="rollno"
              placeholder="Enter your Roll Number"
              maxLength={10}
              onChange={handlePersonalChange}
            />
          </div>

          <div className="field">
            Name *
            <input
              className="input"
              type="text"
              name="name"
              placeholder="Enter your Name"
              maxLength={30}
              onChange={handlePersonalChange}
            />
          </div>

          <div className="field">
            Email *
            <input
              className="input"
              type="text"
              name="email"
              placeholder="Enter your Email"
              maxLength={40}
              onChange={handlePersonalChange}
            />
          </div>

          <div className="field">
            Mobile Number *
            <input
              inputMode="numeric"
              pattern="[0-9]{10}"
              className="inputnum"
              type="text"
              name="mobile"
              placeholder="Enter your Mobile Number"
              maxLength={10}
              onChange={handlePersonalChange}
            />
          </div>

          <div className="field">
            LinkedIn Url *
            <input
              className="input"
              type="text"
              name="linkedin"
              placeholder="Enter your Linkedin URL"
              onChange={handlePersonalChange}
            />
          </div>

          <div className="field">
            Github Url *
            <input
              className="input"
              type="text"
              name="github"
              placeholder="Enter your Github URL"
              onChange={handlePersonalChange}
            />
          </div>
          <div className="next">
            <button className="next-button" onClick={handleNext}>
              Next
              <FaArrowAltCircleRight />
            </button>
          </div>
          <div className="logo">
            <img src="../cv.png" className="logo" alt="logo" />
          </div>
        </div>
      </div>
      <div id="secondform" className="secondform">
        <div className="formpage-1">
          <div className="welcome">Educational Details</div>
          {/* <div className="eudname">Intermediate Details</div> */}
          <div className="field">
            Intermediate/Diplamo College
            <input
              className="input"
              type="text"
              name="secondaryCollege"
              placeholder="Enter your Intermediate College Name"
              maxLength={40}
              onChange={handleEducationChange}
            />
          </div>

          <div className="field">
            Intermediate/Diplamo College Stream
            <input
              className="input"
              type="text"
              name="secondaryCollegeStream"
              placeholder="Enter your Secondary College Stream"
              maxLength={10}
              onChange={handleEducationChange}
            />
          </div>

          <div className="field">
            Intermediate/Diplamo College Graduation Year
            <input
              inputMode="numeric"
              pattern="[0-9]{4}"
              className="inputnum"
              type="text"
              name="secondaryCollegeGradYear"
              placeholder="Enter your Graduation Year"
              onChange={handleEducationChange}
              maxLength={4}
            />
          </div>
          <div>UG Details</div>
          <div className="field">
            Bachelor's Degree
            <input
              className="input"
              type="text"
              name="bachelorsDegree"
              placeholder="Enter your Bachelor Degree"
              onChange={handleEducationChange}
              maxLength={40}
            />
          </div>

          <div className="field">
            Bachelor's Degree Stream
            <input
              className="input"
              type="text"
              name="bachelorsDegreeStream"
              placeholder="Enter your Bachelor Degree Stream"
              onChange={handleEducationChange}
              maxLength={60}
            />
          </div>

          <div className="field">
            Bachelor's Degree College Name
            <input
              className="input"
              type="text"
              name="bachelorsDegreeCollegeName"
              placeholder="Enter your College Name"
              onChange={handleEducationChange}
              maxLength={40}
            />
          </div>

          <div className="field">
            Bachelor's Degree Graduation Year
            <input
              inputMode="numeric"
              pattern="[0-9]{4}"
              className="inputnum"
              type="text"
              name="bachelorsDegreeGradYear"
              placeholder="Enter your Graduation Year"
              onChange={handleEducationChange}
              maxLength={4}
            />
          </div>
          <div className="next">
            <button className="next-button" onClick={prev}>
              <FaArrowAltCircleLeft />
              Previous
            </button>
            <button className="next-button" onClick={handleNext2}>
              Next
              <FaArrowAltCircleRight />
            </button>
          </div>
        </div>
      </div>
      <div id="thirdform" className="thirdpage">
        <div className="formpage-2">
          <div className="welcome">Skills & Certifications</div>
          <div className="field-2">
            <div className="checkfield">
              Programming Languages
              {programmingLanguages.map((lang, index) => (
                <div key={index} className="lang">
                  <input
                    className="check"
                    type="checkbox"
                    id={lang}
                    name="prolang"
                    value={lang}
                    checked={selectedLanguages.includes(lang)}
                    onChange={handleLanguageChange} // Added onChange here
                  />
                  <label htmlFor={lang}>{lang}</label>
                </div>
              ))}
            </div>
            <div className="preview">
              <p>Selected Languages:</p>
              <ul>
                {selectedLanguages.map((lang, index) => (
                  <li key={index}>{lang}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="tech">
            <div>Technologies</div>
            <div>Selected Technologies</div>
          </div>
          <div className="field-2">
            <div className="checkfield scrollable">
              {technologies.map((fram, index) => (
                <div key={index} className="lang">
                  <input
                    className="check"
                    type="checkbox"
                    id={fram}
                    name="framework"
                    value={fram}
                    checked={selectedTechnologies.includes(fram)}
                    onChange={handleTechChange} // Added onChange here
                  />
                  <label htmlFor={fram}>{fram}</label>
                </div>
              ))}
            </div>
            <div className="preview-2 scrollable">
              <ul>
                {selectedTechnologies.map((fram, index) => (
                  <li key={index}>{fram}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="next">
            <button className="next-button" onClick={prev2}>
              <FaArrowAltCircleLeft />
              Previous
            </button>
            <button className="next-button" onClick={handleNext3}>
              Next
              <FaArrowAltCircleRight />
            </button>
          </div>
        </div>
      </div>
      <div id="fourthform" className="fourthpage">
        <div className="formpage-3">
          <div className="welcome">Projects Details</div>
          <div className="field">
            Project Name *
            <input
              className="input"
              type="text"
              name="project1Tittle"
              placeholder="Enter your Project Name"
              onChange={handleProjectChange}
            />
          </div>
          <div className="field">
            Project Description *
            <textarea
              maxLength={200}
              className="input textarea"
              name="project1Description"
              placeholder="Enter your Project Description (200 characters max)"
              onChange={handleProjectChange}
            />
            {/* <p>Characters left: {150 - projectDescription.length}</p> */}
          </div>
          <div className="field">
            Project Name
            <input
              className="input"
              type="text"
              name="project2Tittle"
              placeholder="Enter your Project Name"
              onChange={handleProjectChange}
            />
          </div>
          <div className="field">
            Project Description
            <textarea
              maxLength={200}
              className="input textarea"
              name="project2Description"
              placeholder="Enter your Project Description (200 characters max)"
              onChange={handleProjectChange}
            />
            {/* <p>Characters left: {150 - projectDescription.length}</p> */}
          </div>
          <div className="next">
            <button className="next-button" onClick={prev3}>
              <FaArrowAltCircleLeft />
              Previous
            </button>
            <button className="next-button" onClick={handlepreview}>
              Preview
              <FaArrowAltCircleRight />
            </button>
          </div>
        </div>
      </div>
      <div id="submitform">
        <div className="formpage-4 scrollable-3">
          <div className="welcome">Preview and Submit</div>
          <div className="field">
            <div className="previewnew">
              <p>Name:</p>
              <p>{formData.personal.name}</p>
            </div>
            <div className="previewnew">
              <p>Roll Number:</p>
              <p>{formData.personal.rollno}</p>
            </div>
            <div className="previewnew">
              <p>Email:</p>
              <p>{formData.personal.email}</p>
            </div>
            <div className="previewnew">
              <p>GitHub Link:</p>
              <p>{formData.personal.github}</p>
            </div>
            <div className="previewnew">
              <p>LinkedIn Url:</p>
              <p>{formData.personal.linkedin}</p>
            </div>
            <div className="preview">
              <p>Education:</p>
              <p>
                <h4>Secondary Education</h4>
                {formData.education.secondaryCollege}{" "}
                {formData.education.secondaryCollegeName}
              </p>
              <p>{formData.education.secondaryCollegeStream}</p>
              <p>{formData.education.secondaryCollegeGradYear}</p>
              <p>
                <h4>Bachelor's Degree</h4>
                {formData.education.bachelorsDegree}{" "}
                {formData.education.bachelorsDegreeName}
              </p>
              <p>{formData.education.bachelorsDegreeStream}</p>
              <p>{formData.education.bachelorsDegreeGradYear}</p>
            </div>
            <div className="preview-4">
              <div className="ha">Projects</div>
              <div className="wrap">
                {formData.projects.project1Tittle}
                <br />
                {formData.projects.project1Description}
              </div>
              <p>
                {formData.projects.project2Tittle}
                <br />
                {formData.projects.project2Description}
              </p>
            </div>
            <div className="tech">
              <div>Selected Technologies</div>
              <div>Technologies</div>
            </div>
            <div className="field-2">
              <div className="preview-3 scrollable-2">
                <ul>
                  {selectedLanguages.map((fram, index) => (
                    <li key={index}>{fram}</li>
                  ))}
                </ul>
              </div>
              <div className="preview-3 scrollable-2">
                <ul>
                  {selectedTechnologies.map((fram, index) => (
                    <li key={index}>{fram}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="next">
            <button className="next-button" onClick={prev4}>
              <FaArrowAltCircleLeft />
              Previous
            </button>
            <button className="next-button" onClick={handleSubmit}>
              Submit
              <FaArrowAltCircleRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
