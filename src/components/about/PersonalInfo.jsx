import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Emam" },
  { meta: "last name", metaInfo: "Hosen" },
  { meta: "Age", metaInfo: "25 Years" }, // Based on birthdate: Sep 22, 1999
  { meta: "Nationality", metaInfo: "Bangladeshi" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Gazipur" },
  { meta: "phone", metaInfo: "+8801610285004" }, // Replace with your number if desired
  { meta: "Email", metaInfo: "emamhsajeeb@gmail.com" }, // Replace with your email
  { meta: "LinkedIn", metaInfo: "emamhosencse" }, // Replace with your Skype ID
  { meta: "langages", metaInfo: "Bengali, English" },
];


const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
