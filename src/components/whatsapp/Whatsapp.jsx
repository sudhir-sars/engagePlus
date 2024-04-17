import React from 'react'

const Whatsapp = () => {
  const [inputValue, setInputValue] = useState('');
  const textAreaRef = useRef(null);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to adjust textarea height based on content
  const adjustTextareaHeight = () => {
    
    if (textAreaRef.current) {
      const scrollHeight = textAreaRef.current.scrollHeight;
      const currentHeight = textAreaRef.current.clientHeight;
      const maxHeight = window.innerHeight * 0.4; // Adjust max height (80% of viewport)
      

      // Dynamically adjust height only if it needs to grow
      if (scrollHeight > currentHeight && scrollHeight <= maxHeight) {
        textAreaRef.current.style.height = `${scrollHeight}px`;
      } else if (scrollHeight > maxHeight) {
        // Stop growing at the defined max height
        textAreaRef.current.style.height = `${maxHeight}px`;
      }
    }
  };

  // Use useEffect to handle height adjustment on initial render and updates
  useEffect(() => {
    adjustTextareaHeight();
  }, [inputValue]); // Trigger on input value change

  return (
    <div className="bg-slate-200 h-screen">
      <div className="bg-slate-200 pt-32 border-red-400 flex items-center justify-center">
        <textarea
          ref={textAreaRef}
          className="font-mono px-5 py-5 outline-blue-200 rounded-2xl w-[40vw] border text-sm break-before-auto"
          value={inputValue}
          onChange={handleChange}
          placeholder="Please enter your message"
          onInput={adjustTextareaHeight} // Additional event listener for efficiency
        />
      </div>
      <div className=' flex justify-center bg-slate-200'> 
        <button className=' justify-center h-11 w-28 font-mono mt-24 bg-slate-500 text-white text-lg rounded-lg' >Next</button>
        </div>
    </div>
  );
};    


export default Whatsapp
