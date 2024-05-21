// ActiveCampaigns.js
import React, { useState } from 'react';
import ActiveNavBar from '../sidebar/ActiveNavBar';
import DashboardCard from '../cards/dashboardCard';
import budgetImage from '../../assets/budgetImage.png';
import spentImage from '../../assets/spentImage.png';
import InputModal from '../modals/InputModal'; // Import your modal component here
import LineAreaChart from '../graphs/LineAreaChart';

const ActiveCampaigns = () => {
  
  const [budget, setBudget] = useState(50000);
  const [spent, setSpent] = useState(50000);
  const [userReached, setUserReached] = useState(500);
  const [usersReplied, setusersReplied] = useState(5);
  
  
  
  
  return (
    <>
      <div className='flex h-full w-full'>
        <div className='h-full w-[15vw]'>
          <ActiveNavBar headName={"Active Campaigns"} />
        </div>
        <div className='flex flex-row'>
          <div className='h-auto w-[85vw] p-2'>
            <div className='p-3 w-full h-full bg-white rounded-xl pb-0'>
              <div className='flex '>
                <div className=' ml-2 mt-2 bg-[#f4f7fe] w-[57.5vw] rounded-xl py-3 px-8 pt-7 pb-7 space-y-3 hover:bg-[#ebf1ff] shadow-md'>
                  <div>Title: Summer Sale 2023</div>
                  <div>description: "A summer sales campaign offering discounts on select products.",</div>
                  <div>startDate: new Date("2023-06-01"),</div>
                  <div>endDate: new Date("2023-08-31"),</div>
                  <div>platform: "Facebook",</div>
                  <div>targetAudience: "Young adults aged 18-35"</div>
                </div>
                <div className='font-semibold text-xl ml-6 mt-2 bg-[#f4f7fe] w-[20vw] rounded-xl py-3 px-8 pt-7 pb-7 space-y-3 hover:bg-[#ebf1ff] shadow-md'>
                  Status
                </div>

              </div>
              <div className='flex space-x-6 ml-2 mt-5'>
                <DashboardCard
                  title={"Total Budget"}
                  icon={budgetImage}
                  editable={true}
                  value={`₹ ${budget}`}
                  setValue={setBudget}
                  
                />

                <DashboardCard
                  title={"Total Spend"}
                  icon={spentImage}
                  value={`₹ ${spent}`}
                  setValue={setSpent}
                  editable={false}
                  height={28}
                  width={25}
                />
                <div className='space-y-5'>
                <DashboardCard
                  title={"Users Reached"}
                  icon={spentImage}
                  value={userReached}
                  
                  editable={false}
                  miniCard={true}
                />
                <DashboardCard
                title={"Users Replied"}
                icon={spentImage}
                value={usersReplied}
                
                editable={false}
                miniCard={true}
              />
                </div>
              </div>
              <div className='flex'> 
              <div>
              <LineAreaChart />
                <div className='ml-2 mt-2 bg-[#f4f7fe] w-[57.5vw] rounded-xl py-3 px-8 pt-7 pb-7 space-y-3 h-[50vh] hover:bg-[#ebf1ff] shadow-md'>
                  <div className='text-lg font-semibold  '>AI insights</div>
                  <div>
                    <ul>
                      <li>jkbqawd</li>
                      <li>qwdqa</li>
                      <li>qdwaqwd</li>
                      <li>qdwaw</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='w-[25vw]  '>
                <div className='bg-[#f4f7fe] h-[100vh] m-5 mr-10 ml-5 rounded-xl px-1 '>
                  <div className=' flex justify-center pt-4 text-lg font-semibold'>Users Reached Back</div>
                  <div className=' flex justify-center text-sm pb-3'>
                    <input className='w-[60%] mt-4 outline-none rounded-xl px-3 h-7 hover:bg-[#dbeafe]  ' type="text" placeholder='Search User' />
                  </div>
                  <div>
                  <ul className=' px-4  overflow-y-scroll max-h-[83vh] '> {/* Added overflow-y-auto and max-h-64 */}
          {[...Array(20)].map((_, index) => ( // Added key prop to each list item
            <li key={index} className='px-5 py-2 my-2 hover:bg-blue-100 rounded-xl'>
              jdjhcnsojcnjsld
            </li>
          ))}
        </ul>
                  </div>
                </div>
              </div>
              </div>
            </div>
            
          </div>
        </div>
        

      </div>
      

      
    </>
  );
};

export default ActiveCampaigns;
