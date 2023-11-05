import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from 'components/header/header';
import { Loader } from '../loader/loader';
import { useStyles } from "./wrapperStyles";
import Phone from "../../data/phone.png";

export const Wrapper = ({ children, ...props }) => {
    const classes = useStyles();
    
    return (
        <div className={classes.wrapper}
            style={{
                backgroundImage: `url(${Phone})`,
            }}
        >
            <div className={classes.wrapperItem}>
                <Header />
                {children}
                    {/* Displaying the HeaderNav component, which contains the navigation bar */}
                    <Suspense fallback={<Loader />}>
                        <Outlet />
                        {/* Outputting the Outlet child component, which will contain the appropriate component depending on the current path */}
                    </Suspense>
            </div>
        </div>
    );
};