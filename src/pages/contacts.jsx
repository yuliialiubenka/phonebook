import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from 'components/contactForm/contactForm';
import { ContactList } from 'components/contactList/contactList';
import { fetchContacts } from 'redux/contacts/operations';
import ContactFilter from '../components/contactFilter/contactFilter';
import { EmptyBlock } from '../components/emptyBlock/emptyBlock';
import { selectLoading, selectContacts, selectVisibleContacts } from 'redux/contacts/selectors';
import { Loader } from '../components/loader/loader';
import { useStyles } from "./pagesStyles";
import data from '../data/data';

// The Tasks component is responsible for displaying the list of contacts and their forms
export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const contacts = useSelector(selectContacts);
  const visibleContacts = useSelector(selectVisibleContacts);
  const classes = useStyles();

  useEffect(() => {
    // Request to receive contacts from the server
    dispatch(fetchContacts());
  }, [dispatch]);

  let filterContent;
  let contactsList;

  if (contacts.length > 0 ) {
    filterContent = <ContactFilter 
                      title={data.filterTitle}
                    />
  } else if (contacts.length === 0) {
    filterContent = <EmptyBlock
                      emptyText1={data.emptyText1}
                      emptyText2={data.emptyText2}
                    />
  }

  if (contacts.length > 0 && visibleContacts.length !== 0) {
    contactsList = <ContactList/>
  } else if (contacts.length > 0 && visibleContacts.length === 0) {
    contactsList = <div className={classes.noContacts}>{data.noContacts}</div>
  }

  return (
    <>
      <ContactForm btnText={data.btnText} />
      {filterContent}
      {isLoading && <Loader />}
      {!isLoading && contactsList}
    </>
  );
}
