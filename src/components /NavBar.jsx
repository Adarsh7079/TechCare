import React from 'react'

const NavBar = () => {
  return (
   <div>
     <div className=' bg-[#FFFFFF] h-[72px] rounded-[70px] ml-[18px] flex  items-center mx-10 justify-between mt-14 px-7'>
       <img src="./logo.svg" alt="" className='h-48px] w-[211px]' />
       <div className=' w-[663px] flex justify-between items-center'>
           <div className=' flex gap-2'>
             <img src="./overview.svg " alt=""  className='w-[16px] h-[16px]'/>
             <h1 className=' text-[14px] text-[#072635] font-bold'>Overview</h1>
           </div>
           <div className=' flex gap-2 bg-[#01F0D0] w-[122px] justify-center  rounded-3xl py-2'>
             <img src="./patients.svg " alt=""  className='w-[24px] h-[17px]'/>
             <h1 className=' text-[14px] text-[#072635] font-bold'>Patients</h1>
           </div>
           <div className=' flex gap-2'>
             <img src="./schedule.svg " alt=""  className='w-[15px] h-[17px]'/>
             <h1 className=' text-[14px] text-[#072635] font-bold'>Schedule</h1>
           </div>
           <div className=' flex gap-2'>
             <img src="./message.svg " alt=""  className='w-[19px] h-[17px]'/>
             <h1 className=' text-[14px] text-[#072635] font-bold'>Message</h1>
           </div>
           <div className=' flex gap-2'>
             <img src="./Transactions.svg " alt=""  className='w-[22px] h-[17px]'/>
             <h1 className=' text-[14px] text-[#072635] font-bold'>Transactions</h1>
           </div>
       </div>
       <div className=' flex  w-[251px]'>
           <div className=' flex gap-3'>
              <img src="./Jose.png" alt=""  className=' w-[44px] h-[44px]'/>
             <div className='flex gap-5'>
             <div >
                <h1 className=' text-[14px] text[#072635] font-bold'>Dr. Jose Simmons</h1>
                <h1 className=' text-[#707070] text-[14px]'>General Practitioner</h1>
              </div>
              <div className='flex gap-4 justify-center items-center '>
                <img src="./setting.png" alt=""  className=' w-[19px] h-[20px]'/>
                <img src="./hordot.png" alt=""  className='w-[4px] h-[18px]'/>
              </div>
             </div>
           </div>
           <div></div>
         
       </div>
      </div>
   </div>
  )
}

export default NavBar