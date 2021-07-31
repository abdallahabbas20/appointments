import React, {useState, useEffect} from "react";
import {ContactForm} from '../../components/contactForm/ContactForm';
import {TileList} from '../../components/tileList/TileList'

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const contactList = props.contacts;
  const addContact = props.addContact;

  const handleSubmit = (e) => {
    e.preventDefault();

    const alreadyPresent = contactList.some(contact => contact.name === e.target.value);
    
    if (alreadyPresent) {
      alert('Name already present!')
      return;
    } else {
      addContact(name, email, phone);
      setName('');
      setEmail('');
      setPhone('');
    }
 
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };

  // const onChange = (event) => {
  //   const alreadyPresent = contactList.some(contact => contact.name === event.target.value);
  //   if (alreadyPresent) {
  //     alert('Name already present!')
  //     return;
  //   } 

  // };

  useEffect(() => {
    // check if duplicate
    if (name === 'Abdallah') {
      setName('Aboud')
    }

    const alreadyPresent = contactList.some(contact => contact.name === name);
    if (alreadyPresent) {
      alert('Name already present!')
      return;
    } 
    
  }, [name, contactList])

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm name={name} phone={phone} email={email} setName={setName} setPhone={setPhone} setEmail={setEmail} handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contactList={contactList} />
      </section>
    </div>
  );
};
