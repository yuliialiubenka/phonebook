import { Circles } from 'react-loader-spinner';
import { useStyles } from './loaderStyles';

export const Loader = () => {
  const classes = useStyles();
  return (
    <div className={classes.loaderWrapper}>
      <Circles
          height="80"
          width="80"
          color="#000000"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass="loader"
          visible={true}
      />
    </div>
  );
};