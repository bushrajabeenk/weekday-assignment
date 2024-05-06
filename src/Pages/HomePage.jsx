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

  const [typeOfWork, setTypeOfWork] = useState([]);
  const [typeOfWorkList, setTypeOfWorkList] = useState([]);

  const [minExp, setMinExp] = useState([]);
  const [minExpList, setMinExpList] = useState([]);

  const [jobRolesList, setJobRolesList] = useState([]);
  const [roleName, setRoleName] = useState([]);

  const [minBasePay, setMinBasePay] = useState([]);
  const [minBasePayList, setMinBasePayList] = useState([]);

  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedResults, setSearchedResults] = useState([]);

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
      const uniqueData = newtypeOfWorkList.filter((value, index, self) => {
        return (
          self.findIndex((obj) => obj?.location === value?.location) === index
        );
      });
      if (uniqueData) {
        setTypeOfWorkList(uniqueData);
      }

      const newMinExpList =
        jobsData &&
        jobsData?.map(({ minExp, jdUid }) => ({
          minExp,
          jdUid,
        }));
      const uniqueData2 = newMinExpList.filter((value, index, self) => {
        return self.findIndex((obj) => obj?.minExp === value?.minExp) === index;
      });
      if (uniqueData2) {
        setMinExpList(uniqueData2);
      }

      const newJobRolesList =
        jobsData &&
        jobsData?.map(({ jobRole, jdUid }) => ({
          jobRole,
          jdUid,
        }));
      const uniqueData3 = newJobRolesList.filter((value, index, self) => {
        return (
          self.findIndex((obj) => obj?.jobRole === value?.jobRole) === index
        );
      });
      if (uniqueData3) {
        setJobRolesList(uniqueData3);
      }

      const newMinBasePayList =
        jobsData &&
        jobsData?.map(({ minJdSalary, jdUid }) => ({
          minJdSalary,
          jdUid,
        }));
      const uniqueData4 = newMinBasePayList.filter((value, index, self) => {
        return (
          self.findIndex((obj) => obj?.minJdSalary === value?.minJdSalary) ===
          index
        );
      });
      if (uniqueData4) {
        setMinBasePayList(uniqueData4);
      }
    }
  }, [jobsData]);

  useEffect(() => {
    const filteredJobsData = jobsData?.filter((job) => {
      return (
        roleName?.includes(job?.jobRole?.toLowerCase()) &&
        minBasePay?.includes(job?.minJdSalary) &&
        minExp?.includes(job?.minExp) &&
        typeOfWork?.includes(job?.location?.toLowerCase())
      );
    });
    setFilteredData(filteredJobsData);
  }, [roleName, minBasePay, minExp, typeOfWork, jobsData]);

  return (
    <div className={styles.homePageMainDiv}>
      <Filters
        jobsData={jobsData}
        typeOfWorkList={typeOfWorkList}
        setTypeOfWorkList={setTypeOfWorkList}
        minExpList={minExpList}
        setMinExpList={setMinExpList}
        jobRolesList={jobRolesList}
        setJobRolesList={setJobRolesList}
        minBasePayList={minBasePayList}
        setMinBasePayList={setMinBasePayList}
        minBasePay={minBasePay}
        setMinBasePay={setMinBasePay}
        typeOfWork={typeOfWork}
        setTypeOfWork={setTypeOfWork}
        minExp={minExp}
        setMinExp={setMinExp}
        roleName={roleName}
        setRoleName={setRoleName}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setSearchedResults={setSearchedResults}
      />
      <div className={styles.jobsContainer}>
        {(filteredData?.length > 0
          ? filteredData
          : searchedResults?.length > 0
          ? searchedResults
          : jobsData && jobsData
        )?.map((job) => {
          return (
            <JobCard
              key={job?.jdUid}
              job={job}
              roleName={roleName}
              typeOfWork={typeOfWork}
              minExp={minExp}
              minBasePay={minBasePay}
            />
          );
        })}
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
};

export default HomePage;
