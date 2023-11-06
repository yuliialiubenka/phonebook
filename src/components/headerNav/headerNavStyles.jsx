import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    nav: {
        display: "flex",
        justifyContent: "space-between",
    },
    logo: {
        fontFamily: "'Dancing Script', cursive",
        color: "#000",
        textDecoration: "none",
        fontSize: 40,
        fontWeight: 700,
        width: "fit-content",
        "@media (max-width: 480px)": {
            fontSize: 48,
        }
    },
    menuBtn: {
        border: "none",
        background: "transparent",
        cursor: "pointer",
    },
    navList: {
        display: "none",
        position: "absolute",
        background: "#000000d9",
        padding: 12,
        top: 56,
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 40,
        zIndex: 1,

        "@media (max-width: 480px)": {
            top: 64,
        }
    },
    homeLink: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "6px 6px 6px 20px",
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