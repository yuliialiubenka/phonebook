import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    link: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "6px 6px 6px 28px",
        fontFamily: "inherit",
        lineHeight: 1.2,
        fontWeight: 600,
        fontSize: 16,
        borderRadius: 8,
        color: "#000",
        background: "#fff",
        border: "1px solid #fff",
        cursor: "pointer",
        textDecoration: "none",
        width: 150,
        textAlign: "center",
        position: "relative",

        "& img": {
            position: "absolute",
            left: 6
        }
    }
});