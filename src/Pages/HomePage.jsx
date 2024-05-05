import React from "react";
import styles from "./homePage.module.css";
// import Filters from "./Filters/Filters";
import JobCard from "./JobCard/JobCard";
import wepik from "../Assets/wepik.png";
import twitter from "../Assets/twitter.png";

const HomePage = () => {
  const jobs = [
    {
      id: 1,
      title: "Software Developer",
      company: "fampay",
      location: "Bangalore",
      image: wepik,
      description:
        "ABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any country. ABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any country ABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any country. ABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any country. ABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any country. ABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any country",
      experience: "2 years",
    },
    {
      id: 2,
      title: "Software Developer",
      company: "fampay",
      location: "Bangalore",
      image: wepik,
      description:
        "ABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any country. ABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any country",
      experience: "2 years",
    },
    {
      id: 3,
      title: "Software Developer",
      company: "fampay",
      location: "Bangalore",
      image: twitter,
      description:
        "ABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any country. ABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any country",
      experience: "2 years",
    },
    {
      id: 4,
      title: "Software Developer",
      company: "fampay",
      location: "Bangalore",
      image: twitter,
      description:
        "ABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any country. ABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any country",
      experience: "2 years",
    },
    {
      id: 5,
      title: "Software Developer",
      company: "fampay",
      location: "Bangalore",
      image: wepik,
      description:
        "ABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any country. ABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any country",
      experience: "2 years",
    },
    {
      id: 6,
      title: "Software Developer",
      company: "fampay",
      location: "Bangalore",
      image: wepik,
      description:
        "ABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any country. ABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any countryABC is a new startup, built for serving the requirements of farmers of the country which are an important asset of any country",
      experience: "2 years",
    },
  ];
  return (
    <div className={styles.homePageMainDiv}>
      {/* <Filters /> */}
      <div className={styles.jobsContainer}>
        {jobs?.map((job) => (
          <JobCard key={job?.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
