
import { useState,useEffect } from "react";
import { useLocation } from 'react-router-dom';

const UploadWhatsappContacts = () => {
  const location = useLocation(); // Get location object using useLocation hook
  const messageData = location.state;
  
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
    <>
    <div className="flex justify-center mt-11">

      <div className=" bg-gray-100 p-4 rounded shadow-md w-[50vw]">
        <h2 className="text-xl font-bold mb-4">Upload Numbers</h2>
        <select
          value={uploadMethod}
          onChange={handleUploadMethodChange}
          className=" border rounded-xl px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-white hover:bg-gray-200"
        >
          <option value="textarea" >Enter Mob number (One per line)</option>
          <option value="upload" >Upload CSV File</option>
        </select>

        {uploadMethod === 'textarea' && (
          <textarea
            className="w-full border rounded p-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        )}

        {emails.length > 0 && (
          <div>
            <h3 className="text-lg font-bold mb-2">Uploaded Emails:</h3>
            <div className="overflow-y-auto max-h-40"> {/* Limiting to 8 items and providing scroll */}
              <ul className="flex  items-center justify-center flex-wrap">
              {emails.slice(0, emails.length).map((email, index) => (
                <li key={index} className="text-gray-800 text-sm font-mono bg-white border-2 mx-2 px-2 rounded-2xl my-2">
                  {email}
                </li>
              ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
      <div className='mt-20 flex items-center justify-center'>
        <button 
        className="bg-[#f3f4f6] text-black font-mono hover:bg-slate-200 py-2 px-4 rounded"
        onClick={sendEmail}
        >Send >></button>
      </div>
      </>
  );
};


export default UploadWhatsappContacts;
