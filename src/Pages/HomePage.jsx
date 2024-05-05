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
    setLoading(false);
    if (jobsData && jobsData.length > 0) {
      const newtypeOfWorkList =
        jobsData &&
        jobsData?.map(({ location, jdUid }) => ({
          location,
          jdUid,
        }));
      if (newtypeOfWorkList) {
        setTypeOfWorkList(newtypeOfWorkList);
      }
      const newMinExpList =
        jobsData &&
        jobsData?.map(({ minExp, jdUid }) => ({
          minExp,
          jdUid,
        }));
      if (newMinExpList) {
        setMinExpList(newMinExpList);
      }
      const newJobRolesList =
        jobsData &&
        jobsData?.map(({ jobRole, jdUid }) => ({
          jobRole,
          jdUid,
        }));
      if (newJobRolesList) {
        setJobRolesList(newJobRolesList);
      }
      const newMinBasePayList =
        jobsData &&
        jobsData?.map(({ minJdSalary, jdUid }) => ({
          minJdSalary,
          jdUid,
        }));
      if (newMinBasePayList) {
        setMinBasePayList(newMinBasePayList);
      }
    }
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
