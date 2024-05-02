import React from 'react';
import { useState, useRef,useEffect,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UploadEmailContacts from './UploadEmailContacts';
import { Link } from 'react-router-dom';
import serviceContext from '../../context/serviceContext'

const EmailMessageInput = () => {
  

  const context = useContext(serviceContext);
  const { service,setservice } = context;

  const [inputValue, setInputValue] = useState('');
  const textAreaRef = useRef(null);
  const [aiassist, setaiassist] = useState(false);
  const [inputDone, setInputDone] = useState(false);
  
  
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
        
          setInputDone(true) // Redirect to the EmailInput component

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
    setInputDone(false);
    adjustTextareaHeight();
  }, [inputValue]); // Trigger on input value change


  return (
    <>
        {!inputDone ?<>
          <div className="h-[100vh]">
          <div className="pt-32 flex items-center justify-center">
            <div className='relative'>
              <textarea
                ref={textAreaRef}
                className="px-5 py-5 outline-none mr-9 pb-4 font-mono h-8 bg-[#1e293b] backdrop-blur-lg backdrop-saturate-200 bg-opacity-75 shadow-2xl text-white rounded-2xl w-[40vw] text-sm break-before-auto"
                value={inputValue}
                onChange={handleChange}
                placeholder={aiassist ? "Please enter prompt for your message" : "Please enter your message"}
                onInput={adjustTextareaHeight} // Additional event listener for efficiency
              />
              <button onClick={handleAiassistclick}>
                <div className={`rounded-2xl bg-[#f3f4f6] absolute bottom-4 right-12 px-4 py-1 border-2 ${aiassist ? "border-green-300" : ""}`}>Ai Assist</div>
              </button>
            </div>
          </div>
          <div className='flex justify-center'>
            <button onClick={handleNextButtonClick} className='justify-center h-11 w-28 font-mono mt-24 bg-[#f3f4f6] text-black text-lg rounded-lg'>{aiassist ? "Generate" : "Next"}</button>
          </div>
        </div>
        </>
        :
        <div><UploadEmailContacts/> </div>
        }
        </>
      
    
    
  );
};


export default EmailMessageInput;
