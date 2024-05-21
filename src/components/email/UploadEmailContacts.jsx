import { useState,useEffect } from "react";
import { useLocation } from 'react-router-dom';
import TextEditor from "../TextEditor";

const UploadEmailContacts = ({messageData}) => {
  console.log(messageData)
 
  
  const [emails, setEmails] = useState([]);
  const [uploadMethod, setUploadMethod] = useState('textarea'); // Default method

  const sendEmail = async ()=>{
    
    const reqBackendToSendEmail= await fetch('http://localhost:3000/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emails)
    }).then(response=>{
      console.log(response)
    })
    
    
  }

  const handleTextAreaChange = (event) => {
    const newEmails = event.target.value.split(/[, \r?\n]+/); // Split on commas, spaces, or newlines
    
      setEmails(newEmails.map((email) => email.trim())); // Trim leading/trailing whitespace
   
  };
  

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'text/csv') {
      const reader = new FileReader();
      reader.onload = (e) => {
        const csvData = e.target.result;
        const newEmails = csvData.split(/[, \r?\n]+/).map((row) => row.trim()); // Split on newlines and trim
        setEmails(newEmails);
      };
      reader.readAsText(file);
    } else {
      alert('Please upload a valid CSV file containing emails.');
    }
  };

  const handleUploadMethodChange = (event) => {
    setUploadMethod(event.target.value);
  };

  return (
    <div className="h-[80vh]">
    <div className="flex justify-center mt-11 text-black ">
      <div className="  p-4 rounded shadow-md w-[50vw]">
    
        <h2 className="text-xl font-bold mb-4">Upload Email Contacts</h2>
        <div className="mb-4 flex justify-start space-x-14">
          <div>
          <input
            type="radio"
            id="emailInput"
            value="textarea"
            checked={uploadMethod === "textarea"}
            onChange={handleUploadMethodChange}
            className="mr-2 bg-white"
          />
          <label htmlFor="emailInput">Type Email Address</label>
          </div>
          
          <div>
            <input
              type="radio"
              id="uploadInput"
              value="upload"
              checked={uploadMethod === "upload"}
              onChange={handleUploadMethodChange}
              className="mr-2"
            />
            <label htmlFor="uploadInput">Upload CSV File</label>
            </div>
          
          </div>


        {uploadMethod === 'textarea' && (
          <textarea
            className="w-full   p-2 h-24 resize-none mr-9 rounded-lg pb-4 font-mono text-sm  outline-none px-3 py-4 bg-[#ffffff] "
            placeholder="Enter emails, one per line"
            onChange={handleTextAreaChange}
            value={emails.join('\n')}
          />
        )}

        {uploadMethod === 'upload' && (
          <input
          type="file"
          accept=".csv"
          onChange={handleFileUpload}
          className="w-auto border px-2 py-4 focus:outline-none focus:ring-1 focus:ring-black resize-none mr-9 rounded-lg pb-4 font-mono text-sm text-black outline-none bg-[#f4f7fe] "
          style={{ color: 'black' }} // Change button text color
        />
        
        )}

        {emails.length > 0 && (
          <div>
            <h3 className="text-lg font-bold mb-2">Uploaded Emails:</h3>
            <div className="overflow-y-auto max-h-24"> {/* Limiting to 8 items and providing scroll */}
              <ul className="flex  items-center justify-center flex-wrap">
              {emails.slice(0, emails.length).map((email, index) => (
                <li key={index} className="text-black text-sm font-mono bg-white  mx-2 px-2 rounded-2xl my-2">
                  {email}
                </li>
              ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
      <div className='mt-12 flex items-center justify-center'>
        <button 
        className="bg-[#d0d3d9] text-black font-mono hover:bg-slate-200 py-2 px-6 rounded"
        onClick={sendEmail}
        >Send </button>
      </div>
      </div>
  );
};


export default UploadEmailContacts;
