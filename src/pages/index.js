import * as React from "react";
import group94 from "../images/group94.png";
import Frame from "../images/Frame.svg";

const IndexPage = () => {
  return (
    <div className="relative bg-white w-full h-[1146px] md:h-auto overflow-hidden text-left text-base text-gray-400 font-source-sans-pro">
      <img
        className="absolute top-[2530.03px] left-[36px] w-[1368px] h-[1107.93px]  "
        alt=""
        src = {Frame}
      />
      <div className="absolute top-[1383px] left-[40px] bg-gray-100 w-[982px] h-[431px] md:h-auto hidden" />
      <div className="absolute top-[1895px] left-[418px] bg-gray-100 w-[982px] h-[431px] md:h-auto hidden" />
      <b className="absolute top-[79px] left-[711px] uppercase inline-block">
        who we are
      </b>
      <b className="absolute top-[79px] left-[856px] md:m-auto uppercase inline-block text-violet">
        what we do
      </b>
      <b className="absolute top-[79px] left-[1000px] md:m-auto  uppercase inline-block">
        join us
      </b>
      <b className="absolute top-[79px] left-[1112px] md:m-auto  uppercase inline-block">
        support JCRC
      </b>
      <div className="absolute top-[23px] left-[1276px] md:m-auto  text-sm uppercase font-semibold text-gray-200 inline-block">
        contact us
      </div>
      <div className="absolute top-[23px] left-[1180px] md:m-auto  text-sm uppercase font-semibold text-gray-200 inline-block">
        newsroom
      </div>
      <img
        className="absolute top-[20px] left-[1369px] w-[20px] h-[20px] md:m-auto  md:h-auto"
        alt=""
        src="../icons.svg"
      />
      <img
        className="absolute top-[150px] left-[0px] w-[1440px] h-[500px] object-cover lg:w-[80px] lg:h-full md:h-auto md:m-auto md:w-full"
        alt=""
        src= {group94}
      />
      <b className="absolute top-[238px] left-[724px] text-[200px] leading-[80%] uppercase inline-block outline-8 outline-white border-white text-bg-transparent bg-[transparent] ">
        <p className="[margin-block-start:0] [margin-block-end:0px]">we are</p>
        <p className="m-[0]">jcrc</p>
      </b>
      <div className="absolute top-[432px] left-[1228px] text-[18px] tracking-[0.05em] leading-[140%] uppercase font-semibold text-white inline-block">
        <p className="[margin-block-start:0] [margin-block-end:0px]">{`JEWISH `}</p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">{`COMMUNITY `}</p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">{`RELATIONS `}</p>
        <p className="m-[0]">COUNCIL</p>
      </div>
      <button className="cursor-pointer [border:none] p-[0] bg-[transparent] absolute top-[68px] left-[1260px] w-[140px] h-[42px]">
        <div className="absolute top-[0px] left-[0px] bg-gray-300 w-[140px] h-[42px]" />
        <b className="absolute top-[10px] left-[20px] text-base uppercase inline-block font-source-sans-pro text-white text-left">
          donate
        </b>
        <div className="absolute top-[0px] left-[98px] bg-turquoise w-[42px] h-[42px]" />
        <img
          className="absolute top-[12.34px] left-[113px] w-[15px] h-[17.32px]"
          alt=""
          src="../polygon-3.svg"
        />
      </button>
      <img
        className="absolute top-[75.75px] left-[821.57px] w-[14.86px] h-[24.5px]"
        alt=""
        src="../line-1.svg"
      />
      <img
        className="absolute top-[75.75px] left-[965.57px] w-[14.86px] h-[24.5px]"
        alt=""
        src="../line-1.svg"
      />
      <img
        className="absolute top-[75.75px] left-[1077.57px] w-[14.86px] h-[24.5px]"
        alt=""
        src="../line-1.svg"
      />
      <img
        className="absolute top-[1839px] left-[859.5px] w-[702.5px] h-[500px] hidden mix-blend-normal"
        alt=""
      />
      <div className="absolute top-[1751px] left-[309px] w-[218px] h-[46px] hidden">
        <div className="absolute top-[0px] left-[0px] bg-violet w-[1px] h-[46px]" />
        <div className="absolute top-[0px] left-[9px] bg-violet w-[1px] h-[46px]" />
        <div className="absolute top-[0px] left-[22px] bg-violet w-[1px] h-[46px]" />
        <div className="absolute top-[0px] left-[41px] bg-violet w-[1px] h-[46px]" />
        <div className="absolute top-[0px] left-[72px] bg-violet w-[1px] h-[46px]" />
        <div className="absolute top-[0px] left-[136px] bg-violet w-[1px] h-[46px]" />
        <div className="absolute top-[0px] left-[217px] bg-violet w-[1px] h-[46px]" />
      </div>
      <img
        className="absolute top-[2026px] left-[578px] w-[822.5px] h-[500px] hidden mix-blend-normal"
        alt=""
      />
      <img
        className="absolute top-[1372px] left-[13px] w-[1387px] h-[1092px] hidden"
        alt=""
      />
      <div className="absolute top-[650px] left-[0px] bg-turquoise w-[1440px] h-[14px]" />
      <img
        className="absolute top-[26px] left-[32px] w-[222px] h-[96px] overflow-hidden"
        alt=""
        src= {Frame}
      />
      <div className="relative w-[821px] h-[498px] hidden" />
    </div>
  );
};

export default IndexPage;
