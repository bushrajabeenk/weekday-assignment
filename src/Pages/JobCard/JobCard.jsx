import React, { useState, useEffect } from "react";
import styles from "./jobCard.module.css";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Modal,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import check from "../../Assets/check.png";
import hourglass from "../../Assets/hourglass.png";
import thunder from "../../Assets/thunder.png";

const useStyles = makeStyles((theme) => ({
  blurredImage: {
    width: "25px",
    height: "25px",
    borderRadius: "50%",
    overflow: "hidden",
    position: "relative",
    marginRight: "8px",
  },
  image: {
    width: "25px",
    height: "25px",
    filter: "blur(8px)",
    borderRadius: "50%",
    marginRight: "8px",
  },
  compDiv: {
    fontWeight: "400",
    fontSize: "15px",
    color: "grey",
    letterSpacing: "2px",
  },
  titleDiv: {
    fontWeight: "400",
    fontSize: "16px",
  },
  locDiv: {
    fontWeight: "400",
    fontSize: "12px",
  },
  customCardMedia: {
    height: "40px",
    width: "40px",
    padding: "0px 10px",
  },
  mainDiv: {
    borderRadius: "20px",
    transition: "background-color 0.2s ease, transform 0.5s ease",
    "&:hover": {
      transform: "scale(1.02)",
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "700px",
    height: "550px",
    overflow: "auto",
    outline: "none",
    borderRadius: "10px",
  },
}));

const JobCard = ({ job, roleName, typeOfWork, minExp, minBasePay }) => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Card className={classes.mainDiv}>
      <CardContent>
        <Modal
          className={classes.modal}
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <div className={classes.paper}>{job?.jobDetailsFromCompany}</div>
        </Modal>
        <div className={styles.postedNumDays}>
          <img width={"11px"} height={"11px"} src={hourglass} alt="" />
          <p>Posted 10 days ago</p>
        </div>
        <div style={{ display: "flex" }}>
          {job?.logoUrl !== null && (
            <CardMedia
              component="img"
              alt="Job Image"
              image={job?.logoUrl}
              className={classes.customCardMedia}
            />
          )}
          <div>
            {job?.companyName !== null && (
              <Typography className={classes.compDiv} variant="body1">
                {job?.companyName}
              </Typography>
            )}
            {job?.jobRole !== null && (
              <Typography className={classes.titleDiv} variant="h5">
                {job?.jobRole}
              </Typography>
            )}
            {job?.location !== null && (
              <Typography className={classes.locDiv} variant="body2">
                {job?.location}
              </Typography>
            )}
          </div>
        </div>
        {job?.minJdSalary !== null && job?.maxJdSalary !== null ? (
          <div className={styles.salaryDiv}>
            <p>Estimated Salary:</p>
            <p>
              {job?.minJdSalary +
                " - " +
                job?.maxJdSalary +
                " " +
                job?.salaryCurrencyCode}
            </p>
            <p>
              <img width={"14px"} height={"14px"} src={check} alt="" />
            </p>
          </div>
        ) : (
          <div style={{ padding: "25px" }}></div>
        )}
        {job?.jobDetailsFromCompany !== null && (
          <>
            <div className={styles.abtCmpDiv}>About Company:</div>
            <div className={styles.abtUsDiv}>About Us</div>
            <Typography className={styles.descDiv} variant="body2">
              <div className={styles.descInnerDivTinted}>
                {job?.jobDetailsFromCompany}{" "}
              </div>
              <div
                className={styles.viewJobDiv}
                onClick={() => {
                  handleOpenModal();
                }}
              >
                View job
              </div>
            </Typography>
          </>
        )}
        {job?.minExp !== null ? (
          <>
            <div className={styles.minExpTextDiv}>Minimum Experience</div>
            <Typography className={styles.expDiv} variant="body2">
              {job?.minExp == 1
                ? job?.minExp + " year"
                : job?.minExp + " years"}
            </Typography>
          </>
        ) : (
          <div style={{ padding: "30px" }}></div>
        )}
        {job?.jdLink !== null && (
          <a style={{ textDecoration: "none" }} href={job?.jdLink}>
            <button className={styles.btnDiv}>
              <img width={"20px"} height={"20px"} src={thunder} alt="" />
              <p>Easy Apply</p>
            </button>
          </a>
        )}
        <div className={styles.belowBtnDiv}>
          <div className={classes.blurredImage}>
            <img className={classes.image} src="" alt="Blurred" />
          </div>
          <div className={classes.blurredImage}>
            <img className={classes.image} src="" alt="" Blurred />
          </div>
          <p>Unlock referral asks</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
