import React from "react";

const experienceContent = [
  {
    year: "Nov 2021 – Present",
    position: "IT Executive",
    compnayName: "Dhaka Bypass Expressway Development Co. Ltd",
    details: `Oversaw IT infrastructure for the Intelligent Traffic System (ITS), including sensor integration, traffic data acquisition, and system uptime.\n
    Maintained hardware/software, provided tech support, and implemented performance enhancements.\n
    Developed and managed a full-scale ERP system (finance, HR, inventory, ops), administered DNS and Exchange servers, led IT monitoring/reporting, and managed cybersecurity, documentation, and disaster recovery readiness.`,
  },
  {
    year: "Jul 2020 – Oct 2021",
    position: "IT Executive",
    compnayName: "bKash Limited",
    details: `Managed IT operations, procurement, and infrastructure upgrades.\n
    Delivered cross-department tech support, analyzed financial data for patterns and anomalies, and ensured transactional accuracy.\n
    Supported backend systems and dashboards, collaborated with operations/risk teams, and enhanced system availability and operational insights.`,
  },
];


const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
