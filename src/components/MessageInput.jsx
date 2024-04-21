import React from 'react';
import { useState, useRef,useEffect,useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';
import serviceContext from '../context/serviceContext';

const Whatsapp = () => {
  

  const context = useContext(serviceContext);
  const { service,setservice } = context;

  const [inputValue, setInputValue] = useState('');
  const textAreaRef = useRef(null);
  const [aiassist, setaiassist] = useState(false);
  
  const navigate = useNavigate(); // Hook to access the history object
  // useEffect(() => {
  //   if (!localStorage.getItem("myUser")) {
  //     navigate("/login");
  //   }

  // });
  
  
  
  const handleChange = (event) => {
    setInputValue(event.target.value);

  };

  const handleNextButtonClick = async() => {
    console.log(service)
    try {
      if (aiassist) {
        // console.log("in function")
        const prompt = {
          "prompt": inputValue
        };
        console.log(prompt)
        const response = await fetch('http://localhost:3000/aiassist', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(prompt)
        });
        
     
        const data = await response.json();
        console.log(data);

        setInputValue(data);
        setaiassist(false);

      } 
      
      
      
      else if (inputValue.length > 5) {
        if(service=='email'){
          navigate('/UploadEmailContacts', { state: inputValue }); // Redirect to the EmailInput component
        }else if(service==='whatsapp'){
          navigate('/uploadWhatsappContacts',{state: inputValue})
        }
      } else if (inputValue.length < 5) {
        console.log("please enter message of min length 10");
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle the error appropriately (e.g., display an error message to the user)
    }
  };
  



  
  // Function to adjust textarea height based on content

  const adjustTextareaHeight = () => {
    if (textAreaRef.current) {
      const scrollHeight = textAreaRef.current.scrollHeight;
      const currentHeight = textAreaRef.current.clientHeight;
      const maxHeight = window.innerHeight * 0.4; // Adjust max height (80% of viewport)
      
      // Save the current scrollTop before adjusting the height
      const scrollTop = textAreaRef.current.scrollTop;
  
      // Dynamically adjust height only if it needs to grow
      if (scrollHeight > currentHeight && scrollHeight <= maxHeight) {
        textAreaRef.current.style.height = `${scrollHeight}px`;
  
        // Adjust scrollTop to keep content visible at the top
        textAreaRef.current.scrollTop = scrollTop + (scrollHeight - currentHeight);
      } else if (scrollHeight > maxHeight) {
        // Stop growing at the defined max height
        textAreaRef.current.style.height = `${maxHeight}px`;
        
        // Adjust scrollTop to keep content visible at the top
        textAreaRef.current.scrollTop = 0;
      }
    }
  }
  
  
  const  handleAiassistclick=()=>{
    setaiassist(!aiassist);
    setInputValue("")
  }
  // Use useEffect to handle height adjustment on initial render and updates
  useEffect(() => {
    adjustTextareaHeight();
    if(window.location.pathname==='/email'){
      setservice('email')
    }
    if(window.location.pathname==='/whatsapp'){
      setservice('whatsapp')
    }
  }, [inputValue]); // Trigger on input value change


  return (
    <div className="bg-white h-screen">
      <div className="bg-white pt-32  flex items-center justify-center">
        <div className=' relative'>
        <textarea
          ref={textAreaRef}
          className="font-mono px-5 py-5 outline-blue-200 rounded-2xl w-[40vw] border text-sm break-before-auto"
          value={inputValue}
          onChange={handleChange}
          
          placeholder={aiassist ? "Please enter prompt for your message" : "Please enter your message"}

          onInput={adjustTextareaHeight} // Additional event listener for efficiency
        />
        
       <button onClick={handleAiassistclick}><div className={`rounded-2xl bg-[#f3f4f6]  absolute bottom-4 right-5 px-4 py-1 border-2 ${aiassist?"border-green-300":""}`}>Ai Assit </div></button>
       </div>
      
      </div>
      <div className=' flex justify-center '> 
        <button onClick={handleNextButtonClick} className=' justify-center h-11 w-28 font-mono mt-24 bg-[#f3f4f6]  text-black text-lg rounded-lg' >{aiassist?"Generate":"Next"}</button>
        </div>
    </div>
  );
};


export default Whatsapp;
