import React from "react";
import Logo from "../../../assets/img/profil1.jpeg";
import "./UserInfo.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

function UserInfo() {
  return (
    <div className="relative top-20 p-4 mt-1 flex justify-evenly max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex justify-evenly">
        <div className="h-48 md:shrink-0 ">
          {/* <Logo/> */}
          <img
            className="h-full rounded-xl w-full object-cover md:h-full md:w-48"
            src={Logo}
            alt="userlogo"
          />
          {/* <img src={"../../assets/img/profil1.jpeg"} alt="userlogo" /> */}
        </div>
        <div className="p-3">
          <h1 className="flex justify-center mt-2 text-2xl text-blue-500 font-semibold">
            DJEFIE EVAN
          </h1>
          <div className="flex mt-2 text-lg leading-tight font-medium text-black hover:underline">
            <span>
              <EmailIcon />
            </span>
            <h4>evan.djefie@groupecerco.com</h4>
          </div>
          <div className="flex justify-center mt-2 text-lg leading-tight font-medium text-black">
            <span>
              <LocalPhoneIcon />
            </span>
            <h4>+225 0555435816</h4>
          </div>
          <div className="flex justify-center mt-2 text-lg">
            <span>
              <LocationOnIcon />
            </span>
            <h4>Abidjan, Cocody</h4>
          </div>
          <div className="UserIcons flex justify-center mt-2 text-lg">
            <span>
              <QrCode2Icon />
            </span>
            <span>
              <QrCodeScannerIcon /> Ajouter
            </span>
            <span>
              <QuestionAnswerIcon />
            </span>
            <span>@</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
