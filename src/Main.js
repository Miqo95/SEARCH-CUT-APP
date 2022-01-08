import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { CountValAction } from "./Redux/countPage";

const useStyles = makeStyles(() => {
  return {
    rootImg: {
      width: 250,
      height: 250,
    },
    btnShowMore: {
      padding: 10,
      border: "none",
      fontSize: 20,
      backgroundColor: "#C32D3D ",
      color: "#d1d2d6 ",
      borderRadius: "15px ",
      cursor: "pointer",
    },
  };
});

const Main = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const countVal = useSelector((state) => state.countPage.countVal);
  const catVal = useSelector((state) => state.categoryValue.catVal);
  const [featuredCuts, setFeaturedCuts] = useState([]);

  const onShowMore = () => {
    dispatch(
      CountValAction.changeValue({
        countVal: countVal + 10,
      })
    );
  };

  useEffect(() => {
    fetch(
      `https://api.thecatapi.com/v1/images/search?limit=${countVal}&page=1&category_ids=${catVal}`
    )
      .then((response) => response.json())
      .then((result) => {
        setFeaturedCuts(result);
      });
    //   .catch((err) => console.log(err.name));
  }, [countVal, catVal]);

  console.log(featuredCuts);

  return (
    <div>
      {featuredCuts.map((item) => (
        <img className={classes.rootImg} src={item.url} alt="" />
      ))}
      <br />
      <button className={classes.btnShowMore} onClick={onShowMore}>
        Show More
      </button>
      <br />
      <br />
    </div>
  );
};

export default Main;
