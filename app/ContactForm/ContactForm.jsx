'use client'

import React, { useState, useEffect, useMemo  } from "react";

// import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
// import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.min.css';

// import React, { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";
// import Formspark from 'react-formspark';



// import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ReactDOM from 'react-dom'

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const options = [
  ' ',
  ' ',
  'Mr',
  'Mrs',
  'Dr', 
  'Rev',
  'Ms',
  'Sir',
  'Lady', 
  
];



import fv from '../Styles/form.module.css'; 


// import  '../Styles/form.css'; 
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

import Filter from "bad-words";
const filter = new Filter();


const FORMSPARK_FORM_ID = "EPq8u563";


const ContactForm = () => {


  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });
  




   const [formKey, setFormKey] = useState(0);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [messageError, setMessageError] = useState("");
  
  
  
  // Add in the ClassToggling state variables here 
  
  
  
  
  const initialInputValues = useMemo(() => ({
    name: "",
    email: "",
    message: ""
  }), []);
  
    
  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError(" ");
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);

  };
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(" ");
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    setPhoneError(" ");
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setMessageError(" ");
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );
  
  
  

  const [disabled, setDisabled] = useState(false);

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setFormKey(formKey + 1);
    
    let isValid = true;
    if (!name) {
      setNameError("Name is required");
      isValid = false;
    }
    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Email is invalid");
      isValid = false;
    }
 
    if (!message) {
      setMessageError("Message is required");
      isValid = false;
    } else if (message.length > 500) {
      setMessageError("Message is too long");
      isValid = false;
    } else if (filter.isProfane(message)) {
      setMessageError("Message contains profanity");
      isValid = false;
    }
    
  //   await addDoc(collection(db, productID ), {
  //     name:  name,
  //     email: email,
  //     phone: phone,
  //      message: message

  // })
  
  
  setName(" ");
setLastName(" "); 
setEmail(" ");
setPhone(" ");
setMessage(" ");
alert("Your message has been sent. Thank you!");
  };
  
  
  // Find out what this does 
  // useEffect(() => {
  //   setName(initialInputValues.name);
  //   setEmail(initialInputValues.email);
  //   setMessage(initialInputValues.message);
  // }, [formKey, initialInputValues]);
  
  
  const onSubmit = async (e) => {
    e.preventDefault();
    await submit({ name,lastName, message, email });
    setLastName(" "); 
    setEmail(" ");
    setPhone(" ");
    setMessage(" ");
    setName(" ");

    alert("Form submitted");
    console.log('FormSparkSubmitted'); 
    
    
    useEffect(() => {
      setName(initialInputValues.name);
      setEmail(initialInputValues.email);
      setMessage(initialInputValues.message);
    }, [formKey, initialInputValues]);
    
    
    
  };
  

  return (
    <div className={fv.ContactForm}  >
      <div className={fv.container}>
        
        <div className={fv.row}>

        {/* Toggling */}
          <div 
          // className='col12 textcenter'>
          className={`${fv.col12} ${fv.textcenter}`}>
            <div className={fv.contactForm}>
            
            
            {/* Add in the formSpark form component here  */}
            {/* <Formspark
            key={formKey}
        formId={formId}
        name="yourName"
        email="yourEmail"
        message="yourMessage"
        showName={true}
        showEmail={true}
        showMessage={true}
        // layout="vertical"
        style={{ color: 'blue' }}
        onSubmit={handleSubmit}
        noValidate
      > */}
            
            <form key={formKey} id={fv.contactform} onSubmit={onSubmit} noValidate>
                
                
                
                
                {/* Row 1 of form */}
                <div id={fv.contentcontainer} >
   <div id={fv.CTAtextcontainer}>
   
   <div id={fv.CTAcontainer} >
  </div>
    
    <div id={fv.CTAtext}>
    
    <div id={fv.CTAHeader}>
<span id={fv.CTAheaderspan}>
Get in touch 
</span>

   </div>
    
    
    We love to hear from people, so if you'd like to ask a question, get some info or just want to say hi, drop us a message below.   
    </div>
   
   </div>
   
   {/* Toggling */}
                <div id={fv.namerow}  
                // className='row formRow'>
          className={`${fv.row} ${fv.formRow}`}>
                
                  <div id={fv.namecolumn}>
       <div id={fv.dropdowncontentcontainer}>
                <div  id={fv.dropdowncontainer}>
    
    <div id={fv.nameheader }>
          Name 
          <span id={fv.nameasterisk} >
            * 
          </span>
            
            
          </div>
    
    
    <div id={fv.titlecontainer}>
    
    
    <div id={fv.dropdowntitle}>
    
    Title 
    
    </div>
      
          
      <List
      
      id={fv.dropdownlist}

        component="nav"
        arialabel="Device settings"
        sx={{ bgcolor: 'background.paper' }}
      >
      {/* Add in the icon here  */}
      <ArrowDropDownIcon style={{color: '#0bb8d0', position: 'absolute', top: '23%', right: '18%'}} 
      onClick={handleClickListItem} 
      />
      
        <ListItem
          button
          id={fv.lockbutton}
          ariahaspopup="listbox"
          ariacontrols="lockmenu"
          // arialabel="when device is locked"
          ariaexpanded={open ? 'true' : undefined}
          onClick={handleClickListItem} 
          
          
        >
          <ListItemText
            // primary="When device is locked"
            secondary={options[selectedIndex]}
            id={fv.listItemTxt}
            
          />
        </ListItem>
      </List>
      <Menu
        id={fv.lockmenu}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'arialabelledby': 'lockbutton',
          role: 'listbox',
          
          
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
            id={fv.menuItem}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>

      
    </div>

    </div>
    
    </div>
    <div id={fv.firstnamecontainer} >
      <div id={fv.firstnametitle}>
          
    First 
    <span id={fv.firstNameSpan}  style={{display: 'inline', marginLeft: '0.5rem'}} >Name </span>

    </div>
                    <input
                    id={fv.nameinput}
                      type='text'
                      name='name'
                      value={name}
                      
                      style={{color: 'black'}}
                      onChange={handleNameChange}
                      // Toggling
                      className={`${fv.formInput} ${fv.firstname}`}
                      
                      placeholder='First Name'
                    >
                    </input>
                    
    </div>
                  <div id={fv.namecolumn}>
    
    <div id={fv.lastnametitlecontainer} >
      <div id={fv.nameheadlinetitle}>
                      Last 
                      <span id={fv.lastnamespan} style={{display: 'inline', marginLeft: '0.5rem'}} >
                        Name 
                      </span>
                      
                    </div>
            
                    <input
                    id={fv.nameinput}
                      type='text'
                      name='name'
                      value={lastName}
                      
                      style={{color: 'black'}}
                      onChange={handleLastNameChange}
                     
                      // /formcontrol
                      // Toggling
                      // className=' formInput lastname'
                      className={`${fv.formInput} ${fv.lastname}`}
                      
                      placeholder=' Name'
                    >
                    
                    </input>
                    
    </div>
                  </div>
                  
                  
                  </div>
                  
                </div>
                
                <ul id={fv.inputlist} >
                  <li id={fv.inputlistitem} >
                  <div id={fv.emailrow}  className={fv.col6}>
                  
                  <div id={fv.inputmaincontainer} >
                      
                      
                  <div id={fv.emailtitle} >
                    Email 
                    <span id={fv.emailasterisk} > * </span>
                    
                  </div>
                  
                  
                    <input
                    id={fv.emailinput}
                      type='email'
                      name='email'
                      value={email}
                      
                     
                    //  Toggling
                      // className=' formInput emailaddress '
                      className={`${fv.formInput} ${fv.emailaddress}`}
                      
                      placeholder='Email address'
                      style={{color: 'black'}}
                      onChange={handleEmailChange}
                      
                      
                    ></input>
                    
                    {/* #!@#@$!@#$!@#$ */}
                    {/* Input Container Here end  */}
                  </div>
                    
          
                  </div>
                  </li>
                  <li id={fv.inputlistitem} >
                  
                  {/* Toggling */}
                  <div id={fv.phonenumberrow}  
                  // className='row formRow'>
                      className={`${fv.row} ${fv.formRow}`}>
                  
                  <div id={fv.phoneinput}  className={fv.col}>
                  
                  
                  <div id={fv.phoneinputcontentcontainer} >
                    
                  <div id={fv.phonetitle} >
                    Phone 
                  </div>
                  
                  
                    <input
                    id={fv.phoneinput}
                      type='text'
                      name='subject'
                      value={phone}
                      
                      
                      
                      onChange={handlePhoneChange}

                      // Toggling
                      // className='formcontrol formInput'
                      className={`${fv.formcontrol} ${fv.formInput}`}
                      
                      placeholder='Phone Number'
                      style={{color: 'black'}}
                      
                    ></input>

                    {/* {errors.subject && (
                      <span className='errorMessage'>{errors.subject.message}</span>
                    )} */}
                    
                    
                    {/* Add in the end of the phone input container here  */}
                    
                    
                  </div>
                    
                    
                  </div>
                  
                  
                  
                </div>
                  </li>
                  
                </ul>
              
              
                {/* Row 3 of form */}
                {/* Toggling */}
                <div id={fv.messagerow}  
                // className='row formRow'
                className={`${fv.row} ${fv.formRow}`}
                
                
                >
                  <div id={fv.textareainput}  className={fv.col} >
                  
                  <div id={fv.textareacontentcontainer}  style={{position: 'relative'}} >

                  <label id={fv.textarealabel} className={fv.messageHeader}  >
                
                
                    <div id={fv.textareaheader}>

                    
                    Drop us a message   
                    </div>
                
                
                
                    <span id={fv.messageAsterisk}> * </span>
                  
                </label>

                    <textarea
                      rows={3}
                      name='message'
                      onChange={handleMessageChange}
                      id={fv.messagetextarea}
                      value={message}
                      
                      // Toggling
                      // className='formcontrol formInput messageinput '
                      className={`${fv.formcontrol} ${fv.formInput} ${fv.messageinput}`}
                      
                      placeholder='Message'
                      style={{color: 'black'}}
                    ></textarea>

                  </div>
                  
                  <button id={fv.submitbutton}  className={fv.submitbtn} disabled={submitting} type='submit' >
                  Submit 
                </button>
                    
                  </div>
                </div>
                
                </div>
                
              </form>
              
              {/* Add in the form Spark closing tab here  */}
      {/* </Formspark> */}
              
              
              
            </div>
            {/* <ToastContainer /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;