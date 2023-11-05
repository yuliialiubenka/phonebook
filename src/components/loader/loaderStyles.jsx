import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  loaderWrapper: {
    "& .loader": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 11,
      background: "#ffffffc9"
    }
  }
});
