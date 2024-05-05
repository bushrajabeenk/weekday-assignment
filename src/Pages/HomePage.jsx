import React, { useEffect } from "react";
import styles from "./homePage.module.css";
// import Filters from "./Filters/Filters";
import JobCard from "./JobCard/JobCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs } from "../Redux/jobCardSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const { jobsData } = useSelector((state) => state.jobCardSlice);

  useEffect(() => {
    dispatch(getAllJobs());
  }, []);

  return (
    <div className={styles.homePageMainDiv}>
      {/* <Filters /> */}
      <div className={styles.jobsContainer}>
        {jobsData?.map((job) => (
          <JobCard key={job?.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
