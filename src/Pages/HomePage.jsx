import React, { useEffect, useState } from "react";
import styles from "./homePage.module.css";
import Filters from "./Filters/Filters";
import JobCard from "./JobCard/JobCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs } from "../Redux/jobCardSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const { jobsData } = useSelector((state) => state.jobCardSlice);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 10 && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    dispatch(getAllJobs(page));
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch, page]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [jobsData]);

  return (
    <div className={styles.homePageMainDiv}>
      <Filters />
      <div className={styles.jobsContainer}>
        {jobsData?.map((job) => (
          <JobCard key={job?.jdUid} job={job} />
        ))}
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
};

export default HomePage;
