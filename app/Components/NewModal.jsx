
'use client'
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

<<<<<<< HEAD
import '../Styles/NewModal.css'; 
=======
// import '../Styles/NewModal.css'; 
>>>>>>> 56e2ad2 (testing)
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



<<<<<<< HEAD

 export default function NewModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
=======
 export default function NewModal() {
    const { isOpen, onOpen, onClose } = useDisclosure(); 
>>>>>>> 56e2ad2 (testing)
    const [size, setSize] = React.useState('md')

    const [scrollBehavior, setScrollBehavior] = React.useState('inside')
    const handleSizeClick = (newSize) => {
      setSize(newSize)
      onOpen()
    }
    const sizes = [ 'full'];
    const [open, setIsOpen] = useState('open');
    const [toggle, setToggle] = useState(true); 
    const [className, setClassName] = useState("class1");
    const handleClick = () => {
      setIsOpen(!open);
      console.log("this has been toggled ")
      setToggle(!toggle); 
      
      if (className === "class1") {
        setClassName("class2");
      }
      else {
        setClassName("class1");
      }
      
      
      
    }
    
    
    useEffect(() => {
      // Get the button element by its id
      const button = document.getElementById("toggle-button");
      // If the toggle state is true, hide the button
      if (!toggle) {
        button.style.display = "none";
      }
      // If the toggle state is false, show the button
      else {
        button.style.display = "block";
      }
    }, [toggle, open]);
    
    
    const style1 = {
      // If the state is false, set the display to "none"
      display: className === "class1" ? "inlineBlock" : "none",
      fontSize: '2.1rem', 
      borderRadius: '5px', 
      marginLeft: '1rem', 

      
      

    };
  
    return (
      <>
        {sizes.map((size) => (
          <Button
          
          
          
          id='modal-open-button'

            onClick={() => handleSizeClick(size)}
            key={size}
            m={4}
            >

            <div id='open-btn-container' >
           
<<<<<<< HEAD
              
              
              
              
=======
>>>>>>> 56e2ad2 (testing)
              <MenuIcon   id='toggle-button' className={className}  style={style1}  />

              
            <div
            
            style={{marginTop: '-1.69rem', 
        transform: 'translate(0rem, 0rem)', position: 'relative', 
        textTransform: 'uppercase', 
        fontWeight: '550', 
<<<<<<< HEAD
        marginLeft: '2.3rem'}}
=======
        marginLeft: '2.3rem', outline: '0px solid lime'}}
>>>>>>> 56e2ad2 (testing)
            
            id='toggle-button-text'
            >
              Menu   
            </div> 
              
            </div>
          </Button>
        ))}
        
<<<<<<< HEAD
        <div id='second-menu-btn-container' >
=======
        <div id='second-menu-btn-container' onClick={handleClick} style={{cursor: 'pointer'}} >
>>>>>>> 56e2ad2 (testing)

        
        
        <FaBars id='second-toggle-button' className={className}   />
        
        {/* <MenuIcon   id='second-toggle-button' className={className}     /> */}
        </div>
        
        

        
<ChakraProvider theme={theme}>

        <Modal 
        ml={0} pl={0}
        
        // scrollBehavior={scrollBehavior}
        blockScrollOnMount={false} 
        
        colorScheme='orange'
        bg='#161822'
        style={{backgroundColor: '#161822'}}
        scrollBehavior="inside"   
        id='modal' onClose={onClose} size={size} isOpen={isOpen}>
          <ModalOverlay 


<<<<<<< HEAD
=======

>>>>>>> 56e2ad2 (testing)
           opacity='1'
           backdropFilter='blur(30px) hue-rotate(190deg)'
            id='modal-overlay' />
          
          <ModalContent pl={0} ml={0}  id='modal-content' >
          

            <header id='modal-header-container' style={{outline: '0px solid red'}} >
            <ModalHeader id='menu-logo'>
            
            <div id='modal-logo-container' >
          
            <div id='modal-logo' >
          
          <Link href='/'  onClick={onClose} >
          
            Revival
          </Link>

            </div>
              
            </div>

            <Button
          
          id='modal-close-button'

          style={{background: 'none'}}

          onClick={onClose} 

            key={size}
            m={4}
            >

            <ModalCloseButton id='modal-close-icon-button' onClick={onClose}    />
            <div id='close-btn-container' style={{}}   >


              {/* <MenuIcon   id='toggle-button' className={className}  style={style1}  /> */}
            <span id="close-modal-span"  >
              Close 
            </span> 
              
            </div>
          </Button>
            
            

            </ModalHeader>
            
      
            
            
            </header>

            <ModalBody overflowY="scroll" id='modal-body'>

            <div id='modal-content-container' >
            
            <div id='modal-list-container' style={{outline: '0px solid blue'}}  >
            <ul id='modal-list' style={{outline: '0px solid red'}}  >
           
            <li id='menu-list-item'style={{borderBottom: '0.0rem solid slategrey'}}   >

            {/* add in an onclick function call here to close the modal  */}
            <div id='list-item-content' style={{}} onClick={onClose}  >
            <Link href='./ministries'>
            Ministries 
            </Link> 
<<<<<<< HEAD
            
            
=======



>>>>>>> 56e2ad2 (testing)
            </div>

            </li>
            
            
            <li id='menu-list-item' style={{borderBottom: '0.0rem solid slategrey'}}   >

            <div id='list-item-content' style={{}} onClick={onClose}  >
            <Link href='./mission'>
            Mission 
            </Link> 
            
            </div>

                
            </li>
            <li id='menu-list-item'style={{borderBottom: '0.0rem solid slategrey'}}   >

              
            <div id='list-item-content' style={{}} onClick={onClose}  >
            <Link href='./vision'>
            Vision 
            </Link> 
            
            </div>

            
            </li>
            
            
            <li id='menu-list-item' style={{borderBottom: '0.0rem solid slategrey'}}   >
            
            {/* Add in the container for the list item's content  */}
            
            
            
            
            <div id='list-item-content' style={{}} onClick={onClose}  >
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
            </div>
            </div>
          
          
            </ModalBody>
            <ModalFooter id='modal-footer' style={{position: 'relative'}} >

            </ModalFooter>
          </ModalContent>
          
        </Modal>
          </ChakraProvider>
        
      </>
    )
  }