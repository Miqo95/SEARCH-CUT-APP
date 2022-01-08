import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { CatValAction } from "./Redux/categoryValue";

const useStyles = makeStyles(() => {
  return {
    root: {
      backgroundColor: "#C32D3D !important",
      color: "#d1d2d6 !important",
      borderRadius: "15px !important",
    },
  };
});

export default function BasicSelect() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    dispatch(
      CatValAction.changeValue({
        catVal: age,
      })
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel sx={{ marginLeft: "65px !important", color: "#d1d2d6" }}>
          Hats
        </InputLabel>
        <Select
          className={classes.root}
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value={1}>Hets</MenuItem>
          <MenuItem value={2}>Space</MenuItem>
          <MenuItem value={3}>Funny</MenuItem>
          <MenuItem value={4}>Sunglasses</MenuItem>
          <MenuItem value={5}>Boxes</MenuItem>
          <MenuItem value={6}>Caturday</MenuItem>
          <MenuItem value={7}>Ties</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
