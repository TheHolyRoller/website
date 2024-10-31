'use client';
import '../Styles/hamburger.css'; 

import { useDisclosure, useStatStyles } from '@chakra-ui/react';

import Link from 'next/link';


import React, {useState, useEffect, useReducer, useRef} from 'react'; 
import {
  ChakraProvider,
  extendTheme,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button
  } from '@chakra-ui/react';
  
  import { CloseButton } from '@chakra-ui/react';
  
  import MenuIcon from '@mui/icons-material/Menu';
  
  
  import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


  import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
  import InstagramIcon from '@mui/icons-material/Instagram';
  import YouTubeIcon from '@mui/icons-material/YouTube';

// import '../Styles/NewModal.css'; 
import { FaShoppingCart } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';




const theme = extendTheme({
    components: {
      Modal: {
        baseStyle: (props) => ({
          dialog: {
            maxWidth: ["95%", "95%", "95%"],
            minWidth: "95%",
            // bg: "#00ff00"
            bg: "#161822"
          }
        })
      }
    }
  });






const Sidebar = () => {


const checkRef = useRef(null); 
    

// Create the onclick function here that changes the click status of the check box

const closeMenu = (e) => {

if(checkRef.current){


    checkRef.current.checked = false; 

}





}




  return (
    <div className='mainSideBar'  style={{outline: '0px solid red', width: '50vw', margin: '0 auto'}} >

      <label className="hamburger-menu">
        <input ref={checkRef}  type="checkbox" />
      </label>
      
      {/* Sidebar element */}
      <aside className="sidebar">
        <nav className='slideOutMenu' style={{outline: '0px solid lime'}} >

        {/* Create the menu here  */}
        {/* crate the list here  */}
        <ul id='modal-list' style={{outline: '0px solid red'}}  >
           
           <li id='menu-list-item'style={{borderBottom: '0.0rem solid slategrey'}}    >

           {/* <h1  onClick={closeMenu} >CLOSE BUTTON</h1> */}

           {/* add in an onclick function call here to close the modal  */}
           <div id='list-item-content' onClick={closeMenu}  >
           <Link href='./ministries'  >
           Ministries 
           </Link> 

           </div>

           </li>
           
           
           <li id='menu-list-item' style={{borderBottom: '0.0rem solid slategrey'}}   >

           <div id='list-item-content' onClick={closeMenu}  >
           <Link href='./mission'>
           Mission 
           </Link> 
           
           </div>

               
           </li>
           <li id='menu-list-item'style={{borderBottom: '0.0rem solid slategrey'}}   >

             
           <div id='list-item-content' onClick={closeMenu}  >
           <Link href='./vision'>
           Vision 
           </Link> 
           
           </div>

           
           </li>
           
           
           <li id='menu-list-item' style={{borderBottom: '0.0rem solid slategrey'}}   >
           
           {/* Add in the container for the list item's content  */}
           
           
           
           
           <div id='list-item-content' onClick={closeMenu} >
           <Link href='./values'>
           Values 
           </Link> 
           
           </div>
           </li>

           
           
           {/* Add in the social media icons here  */}
           
           <div id='social-media-footer-section' >
           
           <ul id='social-media-footer-list' >
           
           <li id='social-media-item-footer' >
           
           <div id='social-footer-icon-container' >

           <Link href='https://www.facebook.com/' target="_blank">
           <FacebookRoundedIcon fontSize='5rem'  id='footer-icon' style={{color: 'white'}}  />
           </Link>

         
           </div>
               
               
           </li>
           <li id='social-media-item-footer' >
           
           <div id='social-footer-icon-container' >
           
           {/* Add in the icon here  */}
           <Link href='https://www.instagram.com/' target="_blank">
           
           <InstagramIcon fontSize='5rem' id='footer-icon' style={{color: 'white'}}  />
           </Link>
           
               
               
           </div>
               
           </li>
           
           <li id='social-media-item-footer' >
           
           <div id='social-footer-icon-container' >
           
           {/* Add in the icon here  */}
           <Link href='https://www.youtube.com/' target="_blank">
           <YouTubeIcon id='footer-icon' fontSize='12rem' style={{color: 'white', transform: 'scale(1.3)'}} />
           
           </Link>
           
           </div>
           </li>
           </ul>
               
           </div>
               
           </ul>





        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
