import React from 'react'

const data=[
    {
        img:`./Emily.png`,
        name:`Emily Williams`,
        gender:`Female`,
        age:`18`
    },
    {
        img:`./Ryan.png`,
        name:`Ryna Johnson`,
        gender:`Male`,
        age:`45`
    }, 
    {
        img:`./Brandon.png`,
        name:`Brandon Mitchell`,
        gender:`Male`,
        age:`36`
    }, {
        img:`./Jessica.png`,
        name:`Jessica Taylor`,
        gender:`Female`,
        age:`28`
    }, {
        img:`./Samantha.png`,
        name:`Samantha Johnson`,
        gender:`Female`,
        age:`56`
    }, {
        img:`./Ashley.png`,
        name:`Ashley Martinez`,
        gender:`Female`,
        age:`54`
    }, {
        img:`./Oliva.png`,
        name:`Oliva Brown`,
        gender:`Female`,
        age:`32`
    },
    {
        img:`./Tyler.png`,
        name:`Tyler Davis`,
        gender:`Male`,
        age:`19`
    }, {
        img:`./Kevin.png`,
        name:`Kevin Anderson`,
        gender:`Male`,
        age:`30`
    }, {
        img:`./dyan.png`,
        name:`Dyan Thompson`,
        gender:`Male`,
        age:`36`
    }, {
        img:`./Nathan.png`,
        name:`Nathan Evans`,
        gender:`Male`,
        age:`58`
    }, {
        img:`./Mike.png`,
        name:`Mike Nolan`,
        gender:`Male`,
        age:``
    }
]

const NavigationBar = () => {
  return (
    <div  className=' bg-[#FFFFFF]  h-screen w-[367px] mt-10 rounded-3xl ml-[18px] '>
        <div className=' w-full rounded-3xl flex justify-between p-5 '>
            <h1 className=' text-[24px] font-extrabold '>Patients</h1>
            <img src="./search.png" alt="" className='w-[20px] h-[20px] mt-2 ' />
        </div>
      <div className='flex flex-col gap-3 h-screen overflow-y-scroll'>
        {
            data.map((item)=>(
                <div className=' flex justify-between px-5 mt-5'>
                <div className=' flex gap-5'>
                    <div>
                        <img src={item.img} alt="" className=' w-[48px] h-[48px]' />
                    </div>
                    <div className='flex flex-col text-[14px]  justify-center '>
                        <h1 className='text-[#072635] font-bold '>{item.name}</h1>
                        <h1 className=' text-[#707070]'>{item.gender}, <span>{item.age}</span></h1>
                    </div>
                </div>
                <div className=' flex items-center'>
                    <img src="./dotvertical.svg" alt="" className=' w-[22px] h[4px]' />
                </div>
            </div>
            ))
        }
      </div>
    </div>
  )
}

export default NavigationBar