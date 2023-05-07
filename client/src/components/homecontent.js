import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

//image
import profile from "../image/profile.png";
import Area from "../image/area.png";
import Certificate from "../image/certificate.png";

function Homecontent() {
  return (
    <>
      <Helmet>
        <title>Mid-Term-Project :: 19_32171071_김지환</title>
        <meta name="description" content="자기소개" />
        <meta property="og:description" content="자기소개" />
      </Helmet>
      <div className="home_intro">
        <div className="home_intro_leftBox">
          <span className="home_intro_title">I AM</span>
          <span className="home_intro_description">
            학과 : 응용컴퓨터공학과
            <br />
            학번 : 32171071
            <br />
            이름 : 김지환
            <br />
            취미 : 음악 듣기, 운동(헬스)
            <br />
            <br />
            스타트업 회사에서 1년간 근무한 적이 있습니다.
            <br />
            아래의 버튼에 그 때 만들었던 사이트 링크를 걸어 놓겠습니다.
          </span>
          <button
            class="button_smallcolor"
            onClick={() => window.open("https://chickifarm.com", "_blank")}
          >
            사이트 방문하기
          </button>
        </div>
        <div className="home_intro_rightBox">
          <img className="main_image" src={profile} alt="" />
        </div>
      </div>
      <div className="home_intro">
        <div className="info_intro_leftBox">
          <span className="info_intro_title">The Info</span>
          <span className="info_intro_description">
            <b id="greensmall">Birth</b> : 1998.10.30
            <br />
            <b id="greensmall">E-mail</b> : dbgml1007589@naver.com
            <br />
            <b id="greensmall">Phone</b> : 010-0000-5747
            <br />
            <b id="greensmall">Address</b> : 경기도 군포시 산본1동
            <br />
            <b id="greensmall">MBTI</b> : ENFP
            <br />
            <b id="greensmall">Github Address</b> :
            https://github.com/yuanfeixiang
          </span>
        </div>
        <div className="info_intro_rightBox">
          <img className="info_image" src={Area} alt="" />
        </div>
      </div>
      <div className="home_intro">
        <div className="info_intro_leftBox">
          <span className="info_intro_title">Certificate</span>
          <span className="info_intro_description">
            <b id="purplesmall">정보처리기능사</b>
            <b id="redsmall">(2013.04.18)</b>
            <br />
            <b id="purplesmall">워드프로세서 1, 2급</b>
            <b id="redsmall">(2012.07.06)</b>
            <br />
            <b id="purplesmall">컴퓨터활용능력 2급</b>
            <b id="redsmall">(2012.09.14)</b>
            <br />
            <b id="purplesmall">한국사 4급</b> <b id="redsmall">(2015.02.10)</b>
            <br />
            <b id="purplesmall">전산회계 2급</b>
            <b id="redsmall">(2014.10.16)</b>
            <br />
            <b id="purplesmall">ERP 회계정보관리사 2급</b>
            <b id="redsmall">(2014.08.12)</b>
            <br />
            <b id="purplesmall">MOS[엑셀, 파워포인트, 엑세스]</b>
            <b id="redsmall">(2015)</b>
            <br />
            <b id="purplesmall">ITQ[한글, 엑셀, 파워포인트, 엑세스]</b>
            <b id="redsmall">(2011 ~ 2014)</b>
          </span>
        </div>
        <div className="info_intro_rightBox">
          <img className="info_image" src={Certificate} alt="" />
        </div>
      </div>
    </>
  );
}

export default Homecontent;
