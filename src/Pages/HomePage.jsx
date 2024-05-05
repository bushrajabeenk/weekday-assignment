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
  const [typeOfWorkList, setTypeOfWorkList] = useState([]);
  const [minExpList, setMinExpList] = useState([]);
  const [jobRolesList, setJobRolesList] = useState([]);
  const [minBasePayList, setMinBasePayList] = useState([]);

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

  useState(() => {
    const newtypeOfWorkList = jobsData.map(({ location, jdUid }) => ({
      location,
      jdUid,
    }));
    setTypeOfWorkList(newtypeOfWorkList);

    const newMinExpList = jobsData.map(({ minExp, jdUid }) => ({
      minExp,
      jdUid,
    }));
    setMinExpList(newMinExpList);

    const newJobRolesList = jobsData.map(({ jobRole, jdUid }) => ({
      jobRole,
      jdUid,
    }));
    setJobRolesList(newJobRolesList);

    const newMinBasePayList = jobsData.map(({ minJdSalary, jdUid }) => ({
      minJdSalary,
      jdUid,
    }));
    setMinBasePayList(newMinBasePayList);
  }, [jobsData]);

  return (
    <div className={styles.homePageMainDiv}>
      <Filters
        typeOfWorkList={typeOfWorkList}
        setTypeOfWorkList={setTypeOfWorkList}
        minExpList={minExpList}
        setMinExpList={setMinExpList}
        jobRolesList={jobRolesList}
        setJobRolesList={setJobRolesList}
        minBasePayList={minBasePayList}
        setMinBasePayList={setMinBasePayList}
      />
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
