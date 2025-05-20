import React from "react";

const educationContent = [
  {
    year: "Expected: July 2026",
    degree: "BSc in Computer Science & Engineering (In Progress)",
    institute: "Uttara University, Dhaka",
    details: `Pursuing a bachelor's degree in CSE with a focus on artificial intelligence, software engineering, and modern development tools. Gained hands-on experience in programming, data structures, and system design.`,
  },
  {
    year: "Graduated: July 2022",
    degree: "Diploma in Computer Engineering",
    institute: "Rajdhani Polytechnic & Textile College, Dhaka",
    details: `Completed a diploma program focused on core computer engineering topics including hardware, software, and embedded systems.`,
  },
  {
    year: "Graduated: May 2016",
    degree: "Secondary School Certificate (SSC), Business Studies",
    institute: "Bindan High School, Dhaka",
    details: `Completed secondary education with a focus on business and general studies.`,
  },
];


const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
