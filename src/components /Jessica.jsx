import React from "react";

const data = [
  {
    problem: `Hypertension`,
    description: `Chronic high blood pressure`,
    status: `Under Observation`,
  },
  {
    problem: `Type 2 Diabetes`,
    description: `Insulin resistance and elevated blood sugar`,
    status: `Cured`,
  },
  {
    problem: `Asthma`,
    description: `Recurrent episodes of bronchial constriction`,
    status: `Inactive`,
  },
  {
    problem: `Hypertension`,
    description: `Chronic high blood pressure`,
    status: `Under Observation`,
  },
  {
    problem: `Asthma`,
    description: `Recurrent episodes of bronchial constriction`,
    status: `Inactive`,
  },
  {
    problem: `Hypertension`,
    description: `Chronic high blood pressure`,
    status: `Under Observation`,
  },
];

const Jessica = () => {
  return (
    <div>
      <section>
        <div className=" flex gap-14 flex-wrap">
          <div className=" bg-[#FFFF] px-20 mt-10 flex w-[880px] h-[673px]  rounded-3xl">
            Jessica
          </div>
          <div className=" w-[500px] bg-[#FFFF] mt-10 rounded-3xl">
            <div className=" w-full flex flex-col  items-center">
              <div className=" flex flex-col gap-5">
                <img
                  src="./j2.png"
                  alt=""
                  className="w-[200px] h-[200px] flex mt-7 "
                />
                <h1 className="text-[#072635] text-[24px] font-extrabold flex justify-center">
                  Jessica Taylor
                </h1>
              </div>
            </div>
            <div className=" flex flex-col gap-5 mt-10">
              <div className=" flex gap-5 px-5 ">
                <img src="./cal.png" alt="" className=" w-[42px] h-[42px]" />
                <div>
                  <h1 className=" text-[#072635] text-[14px] ">
                    Date Of Birth
                  </h1>
                  <h1 className=" text-[#072635] text-[14px] font-bold ">
                    August 23, 1996
                  </h1>
                </div>
              </div>
              <div className=" flex gap-5 px-5 ">
                <img src="./gnder.png" alt="" className=" w-[42px] h-[42px]" />
                <div>
                  <h1 className=" text-[#072635] text-[14px] ">Gendr</h1>
                  <h1 className=" text-[#072635] text-[14px] font-bold ">
                    Female
                  </h1>
                </div>
              </div>
              <div className=" flex gap-5 px-5 ">
                <img src="./phone.png" alt="" className=" w-[42px] h-[42px]" />
                <div>
                  <h1 className=" text-[#072635] text-[14px] ">Contact info</h1>
                  <h1 className=" text-[#072635] text-[14px] font-bold ">
                    (415) 555-1234
                  </h1>
                </div>
              </div>
              <div className=" flex gap-5 px-5 ">
                <img src="./phone.png" alt="" className=" w-[42px] h-[42px]" />
                <div>
                  <h1 className=" text-[#072635] text-[14px] ">
                    Emergency Contacts
                  </h1>
                  <h1 className=" text-[#072635] text-[14px] font-bold ">
                    (415) 555-5678
                  </h1>
                </div>
              </div>
              <div className=" flex gap-5 px-5 ">
                <img src="./ins.png" alt="" className=" w-[42px] h-[42px]" />
                <div>
                  <h1 className=" text-[#072635] text-[14px] ">
                    Insurance Provider
                  </h1>
                  <h1 className=" text-[#072635] text-[14px] font-bold ">
                    Sunrise Health Assurance
                  </h1>
                </div>
              </div>
              <div className="w-full flex mt-7 items-center justify-center mb-10">
                <div className="bg-[#01F0D0] w-[220px] h-[41px] rounded-3xl  justify-center text-[14px] flex items-center">
                  Show All Information
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" flex gap-14">
        <div className=" bg-[#FFFF] rounded-3xl  w-[880px] h-[349px] p-5 -mt-7 ">
          <div>
            <h1 className="text-[#072635] text-[24px] font-extrabold">
              Diagnostic List
            </h1>
          </div>
          <div>
            <div className=" flex justify-between rounded-3xl h-[48px] items-center bg-[#F6F7F8] px-5  mt-10">
              <h1 className=" text-[14px] text-[#072635] font-bold">
                Problem/Diagnosis
              </h1>
              <h1 className=" text-[14px] text-[#072635] font-bold">
                Description
              </h1>
              <h1 className=" text-[14px] text-[#072635] font-bold">Status</h1>
            </div>
            <div className=" overflow-y-scroll h-[250px]">
              {data.map((item) => (
                <div className=" flex justify-between px-5 text-[#072635] text-[14px] mt-10  ">
                  <h1>Hypertension</h1>
                  <h1>Hypertension</h1>
                  <h1>Under Observation</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-[#FFFF] w-[500px] rounded-3xl  h-[296px] mt-10 p-5 ">
          <div>
            <h1 className="text-[#072635] text-[24px] font-extrabold">
              Lab Results
            </h1>
          </div>
          <div className=" overflow-y-scroll">
            <div className=" flex justify-between mt-10">
              <h1 className=" text-[#072635] text-[13px]fv">Blood Tests</h1>
              <img src="./download.png " alt="" className="h-[20px] w-[20px]" />
            </div>
            <div className=" flex justify-between mt-10">
              <h1 className=" text-[#072635] text-[13px]fv">Blood Tests</h1>
              <img src="./download.png " alt="" className="h-[20px] w-[20px]" />
            </div>
            <div className=" flex justify-between mt-10">
              <h1 className=" text-[#072635] text-[13px]fv">Blood Tests</h1>
              <img src="./download.png " alt="" className="h-[20px] w-[20px]" />
            </div>
            <div className=" flex justify-between mt-10">
              <h1 className=" text-[#072635] text-[13px]fv">Blood Tests</h1>
              <img src="./download.png " alt="" className="h-[20px] w-[20px]" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Jessica;
