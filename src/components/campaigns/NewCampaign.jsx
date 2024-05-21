import React, { useState } from 'react';
import newCampaignImage from "../../assets/newCampaignImage.png"
 
const NewCampaign = () => {
  const [campaignData, setCampaignData] = useState({
    name: '',
    startDate: '',
    endDate: '',
    description: '',
    budget: 0,
    platform: '',
    targetAudience: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCampaignData({ ...campaignData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send the campaignData to your backend for saving to the database
    console.log(campaignData);
  };

  return (
    <>
    <div className='flex justify-around '>
      <div>
      <h2 className="text-2xl font-semibold mb-4 mt-5">Create New Campaign</h2>
        <img src={newCampaignImage} width={700} alt="" />
      </div>
      <div className=' w-[35vw]'>
        <div className="container mx-auto px-4 py-8 pt-4">
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label className="font-semibold mb-1">Name:</label>
              <input c type="text" name="name" value={campaignData.name} onChange={handleChange} required className="py-2 px-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500" />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold mb-1">Description:</label>
              <textarea name="description" value={campaignData.description} onChange={handleChange} className="py-2 px-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"></textarea>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold mb-1">Start Date:</label>
              <input type="date" name="startDate" value={campaignData.startDate} onChange={handleChange} required className="py-2 px-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500 " />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold mb-1">End Date:</label>
              <input type="date" name="endDate" value={campaignData.endDate} onChange={handleChange} required className="py-2 px-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500" />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold mb-1">Budget:</label>
              <input type="number" name="budget" value={campaignData.budget} onChange={handleChange} className="py-2 px-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500" />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold mb-1">Platform:</label>
              <input type="text" name="platform" value={campaignData.platform} onChange={handleChange} className="py-2 px-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500" />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold mb-1">Target Audience:</label>
              <input type="text" name="targetAudience" value={campaignData.targetAudience} onChange={handleChange} className="py-2 px-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500" />
            </div>
            <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">Create Campaign</button>
          </form>
        </div>
      </div>

    </div>
    </>
  );
};

export default NewCampaign;
