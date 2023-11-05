import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    registerForm: {
        display: "flex",
        flexDirection: "column",
        gap: 12,
        marginTop: 14,
        marginBottom: 16
    },
    registerFormTitle: {
        textAlign: "center",
        margin: "0 0 2px 0"
    },
    registerFormLabel: {
        width: "100%",
        display: "flex",
        gap: 6,
        alignItems: "center"
    },
    registerFormInput: {
        width: "100%",
        borderRadius: 8,
        fontFamily: "inherit",
        padding: "6px 12px",
        lineHeight: 1.2,
        fontSize: 16,
        border: "1px solid #000",
        "&:focus, &:focus-visible": {
            border: "1px solid rgb(95, 94, 95)",
            outline: "none",
            boxShadow: "rgb(95, 94, 95) 0px 1px 3px 2px;",
        }
    },
    labelImg: {
        flexShrink: 0
    },
    registerButton: {
        padding: 6,
        fontFamily: "inherit",
        lineHeight: 1.2,
        fontWeight: 600,
        fontSize: 16,
        borderRadius: 8,
        color: "#fff",
        background: "#000",
        border: "1px solid #000",
        cursor: "pointer",
    }
});