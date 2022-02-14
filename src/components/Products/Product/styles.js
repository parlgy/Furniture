import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
    // width: 200,
  },
  media: {
    paddingTop: '96.25%', // 16:9
    // height: 160,
    // width: 150,
    // marginLeft: "60px",
    marginTop: "5px",
    // margin: 10,
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
    // height: 60,
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    height: "15px",
    // width: 180
  },
}));
