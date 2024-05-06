import React, { useState } from "react";
import styles from "./filters.module.css";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import CancelIcon from "@mui/icons-material/Cancel";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, roleName, theme) {
  return {
    fontWeight:
      roleName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Filters = ({
  jobsData,
  typeOfWorkList,
  setTypeOfWorkList,
  minExpList,
  setMinExpList,
  jobRolesList,
  setJobRolesList,
  minBasePayList,
  setMinBasePayList,
  roleName,
  setRoleName,
  minBasePay,
  setMinBasePay,
  typeOfWork,
  setTypeOfWork,
  minExp,
  setMinExp,
}) => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = () => {};

  const handleChangeRole = (event) => {
    const {
      target: { value },
    } = event;
    setRoleName(value);
  };
  const handleDeleteRole = (chipToDelete) => () => {
    setRoleName((prevroleName) => {
      const updatedroleName = prevroleName?.filter(
        (name) => name !== chipToDelete
      );
      return updatedroleName;
    });
  };

  const handleChangeMinExp = (event) => {
    const {
      target: { value },
    } = event;
    setMinExp(value);
  };
  const handleDeleteMinExp = (chipToDelete) => () => {
    setMinExp((prevminExp) => {
      const updatedminExp = prevminExp.filter((name) => name !== chipToDelete);
      return updatedminExp;
    });
  };

  const handleChangetypeOfWork = (event) => {
    const {
      target: { value },
    } = event;
    setTypeOfWork(value);
  };
  const handleDeletetypeOfWork = (chipToDelete) => () => {
    setTypeOfWork((prevtypeOfWork) => {
      const updatedtypeOfWork = prevtypeOfWork.filter(
        (name) => name !== chipToDelete
      );
      return updatedtypeOfWork;
    });
  };

  const handleChangeminBasePay = (event) => {
    const {
      target: { value },
    } = event;
    setMinBasePay(value);
  };
  const handleDeleteMinBasePay = (chipToDelete) => () => {
    setMinBasePay((prevminBasePay) => {
      const updatedminBasePay = prevminBasePay.filter(
        (name) => name !== chipToDelete
      );
      return updatedminBasePay;
    });
  };

  return (
    <div className={styles.filterMainDiv}>
      <div className={styles.roles}>
        <div>
          <FormControl sx={{ m: 1, width: 200 }}>
            <InputLabel id="demo-multiple-chip-label">Roles</InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              value={roleName}
              onChange={handleChangeRole}
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected?.map((value) => {
                    return (
                      <Chip
                        key={value}
                        label={value}
                        onDelete={handleDeleteRole(value?.name)}
                        deleteIcon={<CancelIcon />}
                      />
                    );
                  })}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {jobRolesList?.map((name) => (
                <MenuItem
                  key={name?.jobRole}
                  value={name?.jobRole}
                  style={getStyles(name?.jobRole, minExp, theme)}
                >
                  {name?.jobRole}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>

      <div className={styles.minExp}>
        <div>
          <FormControl sx={{ m: 1, width: 200 }}>
            <InputLabel id="demo-multiple-chip-label">
              Minimum Experience
            </InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              value={minExp}
              onChange={handleChangeMinExp}
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip
                      key={value}
                      label={value}
                      onDelete={handleDeleteMinExp(value?.name)}
                      deleteIcon={<CancelIcon />}
                    />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {minExpList?.map((name) => (
                <MenuItem
                  key={name?.minExp}
                  value={name?.minExp}
                  style={getStyles(name?.minExp, minExp, theme)}
                >
                  {name?.minExp}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>

      <div className={styles.typeOfWork}>
        <div>
          <FormControl sx={{ m: 1, width: 200 }}>
            <InputLabel id="demo-multiple-chip-label">Type Of Work</InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              value={typeOfWork}
              onChange={handleChangetypeOfWork}
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip
                      key={value}
                      label={value}
                      onDelete={handleDeletetypeOfWork(value?.name)}
                      deleteIcon={<CancelIcon />}
                    />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {typeOfWorkList?.map((name) => (
                <MenuItem
                  key={name?.location}
                  value={name?.location}
                  style={getStyles(name?.location, typeOfWork, theme)}
                >
                  {name?.location}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>

      <div className={styles.minBasePay}>
        <div>
          <FormControl sx={{ m: 1, width: 200 }}>
            <InputLabel id="demo-multiple-chip-label">
              Minimum Base Pay
            </InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              value={minBasePay}
              onChange={handleChangeminBasePay}
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip
                      key={value}
                      label={value}
                      onDelete={handleDeleteMinBasePay(value?.name)}
                      deleteIcon={<CancelIcon />}
                    />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {minBasePayList?.map((name) => {
                return (
                  <MenuItem
                    key={name?.jdUid}
                    value={name?.minJdSalary}
                    style={getStyles(name?.minJdSalary, minBasePay, theme)}
                  >
                    {name?.minJdSalary}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
      </div>

      <div className={styles.searchCompany}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={() => {}}
        />
      </div>

      <div></div>
    </div>
  );
};

export default Filters;
