import React from 'react';

const ActiveNavBar = ({ headName }) => {
  return (
    <div className='pl-2 py-2 w-[14.5vw] fixed h-full'>
      <div className='rounded-lg h-full w-full'>
        <div className='flex justify-center'>
          <div className='mt-3 font-semibold pb-5 mr-6 text-lg'>{headName}</div>
        </div>
        <ul className=' px-4 overflow-y-scroll max-h-[80vh]'>
          {[...Array(20)].map((_, index) => (
            <li key={index} className='px-5 py-3  my-2 hover:bg-blue-100 rounded-xl'>
              jdjhcnsojcnjsld
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ActiveNavBar;
