import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { ContextAi } from "../context/ContextAi";

const SideBar = () => {
  const [extended, setExtented] = useState(false);
  const { onSent, previousPrompts, setRecentPrompt, newChat } =
    useContext(ContextAi);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div
      className={`sidebar min-h-screen inline-flex flex-col justify-between bg-[#282A2C] py-[25px] px-[15px] ${
        !extended ? "w-[90px]" : ""
      }`}
    >
      <div className="top">
        <div className="block  cursor-pointer p-2">
          <img
            onClick={() => setExtented(!extended)}
            src={assets.menu_icon}
            alt=""
            className="menu w-5"
          />
        </div>

        <div
          onClick={() => newChat()}
          className="new-chat mt-10 inline-flex items-center gap-2 py-2 px-[15px] bg-[#1e1f20] rounded-full text-sm cursor-pointer text-[#727174]"
        >
          <img src={assets.plus_icon} alt="" className="w-5" />
          {/* {extended ? <p>Nouveau chat</p> : } */}
          <p className={`${extended ? "block" : "hidden"}`}>Nouveau Chat</p>
        </div>
        {extended ? (
          <div className="recent flex flex-col">
            <p className="recent-title mt-[30px] mb-5 text-[#FFFFF1]">Récent</p>
            {previousPrompts.map((prompt, index) => {
              return (
                <div
                  onClick={() => loadPrompt(prompt)}
                  className="recent-entry flex items-start gap-2 p-2 pr-10 rounded-full text-[#FFFFF1] cursor-pointer hover:bg-[#3D3F42]"
                >
                  <img src={assets.message_icon} alt="" className="w-5" />
                  <p>{prompt.slice(0, 15)} ...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom flex flex-col p-2">
        <div className="bottom-item  recent-entry flex items-start gap-2 p-2 rounded-full text-[#FFFFF1] cursor-pointer hover:bg-[#3D3F42]">
          <img src={assets.question_icon} alt="" className="w-5" />
          {extended ? <p>Aide ?</p> : null}
        </div>
        <div className="bottom-item cursor-pointer recent-entry flex items-start gap-2 p-2 rounded-full text-[#FFFFF1]  hover:bg-[#3D3F42]">
          <img src={assets.history_icon} alt="" className="w-5" />
          {extended ? <p>Historique</p> : null}
        </div>
        <div className="bottom-item recent-entry flex items-start gap-2 p-2 rounded-full text-[#FFFFF1] cursor-pointer hover:bg-[#3D3F42]">
          <img src={assets.setting_icon} alt="" className="w-5" />
          {extended ? <p>Paramètres</p> : null}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
