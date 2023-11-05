import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    header: {
        background: "#fff",
        boxShadow: "rgb(95, 94, 95) 0px 1px 3px 2px",
        margin: "0 -12px",
        padding: "4px 8px 2px 12px"
    },
    logo: {
        fontFamily: "'Dancing Script', cursive",
        fontSize: 40,
        paddingLeft: 12,
        fontWeight: 700,
        width: "fit-content",
        "@media (max-width: 480px)": {
            fontSize: 48,
        }
    },
});