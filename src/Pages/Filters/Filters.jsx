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

const Filters = () => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState("");

  const [roleName, setRoleName] = useState([]);
  const handleChangeRole = (event) => {
    setRoleName(event.target.value);
  };
  const handleDeleteRole = (chipToDelete) => () => {
    setRoleName((prevroleName) => {
      const updatedroleName = prevroleName.filter(
        (name) => name !== chipToDelete
      );
      return updatedroleName;
    });
  };

  const [minExp, setMinExp] = useState([]);
  const handleChangeMinExp = (event) => {
    setMinExp(event.target.value);
  };
  const handleDeleteMinExp = (chipToDelete) => () => {
    setMinExp((prevminExp) => {
      const updatedminExp = prevminExp.filter((name) => name !== chipToDelete);
      return updatedminExp;
    });
  };

  const [typeOfWork, setTypeOfWork] = useState([]);
  const handleChangetypeOfWork = (event) => {
    setTypeOfWork(event.target.value);
  };
  const handleDeletetypeOfWork = (chipToDelete) => () => {
    setTypeOfWork((prevtypeOfWork) => {
      const updatedtypeOfWork = prevtypeOfWork.filter(
        (name) => name !== chipToDelete
      );
      return updatedtypeOfWork;
    });
  };

  const [minBasePay, setMinBasePay] = useState([]);
  const handleChangeminBasePay = (event) => {
    setMinBasePay(event.target.value);
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
                  {selected.map((value) => (
                    <Chip
                      key={value}
                      label={value}
                      onDelete={handleDeleteRole(value)}
                      deleteIcon={<CancelIcon />}
                    />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, roleName, theme)}
                >
                  {name}
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
                      onDelete={handleDeleteMinExp(value)}
                      deleteIcon={<CancelIcon />}
                    />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, minExp, theme)}
                >
                  {name}
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
                      onDelete={handleDeletetypeOfWork(value)}
                      deleteIcon={<CancelIcon />}
                    />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, typeOfWork, theme)}
                >
                  {name}
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
                      onDelete={handleDeleteMinBasePay(value)}
                      deleteIcon={<CancelIcon />}
                    />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, minBasePay, theme)}
                >
                  {name}
                </MenuItem>
              ))}
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
