import React from "react";

const skillsContent = [
  // IT Infrastructure & Administration
  { skillClass: "p90", skillPercent: "90", skillName: "IT Infrastructure" },
  { skillClass: "p88", skillPercent: "88", skillName: "ERP Systems" },
  { skillClass: "p80", skillPercent: "80", skillName: "DNS & Exchange Server" },
  { skillClass: "p85", skillPercent: "85", skillName: "Network Security" },
  { skillClass: "p87", skillPercent: "87", skillName: "ITS Support" },
  { skillClass: "p89", skillPercent: "89", skillName: "System Uptime" },

  // Software & Web Development
  { skillClass: "p90", skillPercent: "90", skillName: "PHP" },
  { skillClass: "p85", skillPercent: "85", skillName: "Laravel" },
  { skillClass: "p80", skillPercent: "80", skillName: "HTML/CSS" },
  { skillClass: "p78", skillPercent: "78", skillName: "JavaScript" },
  { skillClass: "p70", skillPercent: "70", skillName: "Vue.js" },
  { skillClass: "p72", skillPercent: "72", skillName: "React" },
  { skillClass: "p75", skillPercent: "75", skillName: "RESTful API" },
  { skillClass: "p80", skillPercent: "80", skillName: "Git & Debugging" },

  // Data Analysis & Reporting
  { skillClass: "p78", skillPercent: "78", skillName: "Data Analysis" },
  { skillClass: "p76", skillPercent: "76", skillName: "Fraud Detection" },
  { skillClass: "p74", skillPercent: "74", skillName: "Data Cleaning" },
  { skillClass: "p80", skillPercent: "80", skillName: "Reporting" },

  // Tools & Platforms
  { skillClass: "p85", skillPercent: "85", skillName: "MS Exchange Server" },
  { skillClass: "p80", skillPercent: "80", skillName: "Remote Support" },
  { skillClass: "p78", skillPercent: "78", skillName: "Database Management" },
  { skillClass: "p82", skillPercent: "82", skillName: "Documentation Systems" },

  // Soft Skills
  { skillClass: "p90", skillPercent: "90", skillName: "Problem Solving" },
  { skillClass: "p88", skillPercent: "88", skillName: "Collaboration" },
  { skillClass: "p85", skillPercent: "85", skillName: "Process Optimization" },
  { skillClass: "p87", skillPercent: "87", skillName: "Communication" },
];


const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
