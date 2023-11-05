import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { changeFilter } from 'redux/filter/filter';
import { useStyles } from "./contactFilterStyles";
import SearchIcon from "../../data/search-icon.svg";

export default function ContactFilter ({ ...props }) {
    const classes = useStyles();
    const value = useSelector(selectFilter); // Getting the current value of the filter from the state
    const dispatch = useDispatch(); // Getting the dispatch function from Redux to change the filter
    
    const onChangeFilter = event => {
        const normalizedValue = event.target.value.toLowerCase();

        dispatch(changeFilter(normalizedValue)); // Calling the changeFilter action, which changes the value of the filter in the Redux store
    };

    return (
        <div className={classes.filterWrapper}>
            <h2 className={classes.filterTitle}>{props.title}</h2>
            <label className={classes.filterLabel} htmlFor="search">
                <img
                    className={classes.labelImg}
                    src={SearchIcon} 
                    alt="Phone" 
                    width={32}
                />
                <input
                    name='search'
                    className={classes.filterInput}
                    type="text"
                    placeholder="Find contacts by name"
                    value={value} 
                    onChange={onChangeFilter}
                />
            </label>
        </div>
    );
};
  
  