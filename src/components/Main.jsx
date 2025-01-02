import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { ContextAi } from "../context/ContextAi";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  } = useContext(ContextAi);

  return (
    <div className="main flex-1 min-h-screen pb-[15vh] relative">
      <div className="nav flex justify-between items-center text-[22px] p-5 text-[#FFFFF1]">
        <p>Gemini-clone</p>
        <img src={assets.user_icon} alt="" className="w-10 rounded-full" />
      </div>
      <div className="main-container max-w-[900px] m-auto">
        {!showResult ? (
          <>
            <div className="greet my-[20px] lg:my-[35px] mx-0 text-[35px]   md:text-[50px] text-[#c4c7c5] font-[500] p-5">
              <p>
                <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#5182ED] to-[#D56573]">
                  Salut, Jeune homme !
                </span>
              </p>
              <p>Comment puis-je t'aider aujourd'hui ?</p>
            </div>
            <p className="text-xl text-[#FFFFF1] pl-5">Suggestions...</p>
            <div className="cards grid grid-cols-1 gap-[15px] md:grid-cols-2 lg:grid-cols-4 p-5 pt-1  ">
              <div
                className="card h-[200px] p-[15px] bg-[#282A2C] rounded-lg relative cursor-pointer hover:bg-[#727174]/70"
                onClick={() => {
                  setInput("Résume brièvement ce concept : l'amour");
                  onSent();
                }}
              >
                <p className="text-[#adadad] text-[17px]">
                  Résume brièvement ce concept : l'amour
                </p>
                <img
                  src={assets.bulb_icon}
                  alt=""
                  className="absolute w-[35px] p-[5px] bg-[#ffffff] rounded-2xl bottom-2.5 right-2.5"
                />
              </div>
              <div
                className="card h-[200px] p-[15px] bg-[#282A2C] rounded-lg relative cursor-pointer hover:bg-[#727174]/70"
                onClick={() => {
                  setInput(
                    "Proposez de beaux endroits à voir lors des prochaines vacances"
                  );
                  onSent();
                }}
              >
                <p className="text-[#adadad] text-[17px]">
                  Proposez de beaux endroits à voir lors des prochaines vacances
                </p>
                <img
                  src={assets.compass_icon}
                  alt=""
                  className="absolute w-[35px] p-[5px] bg-[#ffffff] rounded-2xl bottom-2.5 right-2.5"
                />
              </div>
              <div
                className="card h-[200px] p-[15px] bg-[#282A2C] rounded-lg relative cursor-pointer hover:bg-[#727174]/70"
                onClick={() => {
                  setInput(
                    "Réfléchissez à des activités de renforcement de l'esprit d'équipe pour notre projet d'intégration"
                  );
                  onSent();
                }}
              >
                <p className="text-[#adadad] text-[17px]">
                  Réfléchissez à des activités de renforcement de l'esprit
                  d'équipe pour notre projet d'intégration
                </p>
                <img
                  src={assets.message_icon}
                  alt=""
                  className="absolute w-[35px] p-[5px] bg-[#ffffff] rounded-2xl bottom-2.5 right-2.5"
                />
              </div>
              <div
                className="card h-[200px] p-[15px] bg-[#282A2C] rounded-lg relative cursor-pointer hover:bg-[#727174]/70"
                onClick={() => {
                  setInput("Parlez-moi de React js et de React native");
                  onSent();
                }}
              >
                <p className="text-[#adadad] text-[17px]">
                  Parlez-moi de React js et de React native
                </p>
                <img
                  src={assets.code_icon}
                  alt=""
                  className="absolute w-[35px] p-[5px] bg-[#ffffff] rounded-[20px] bottom-2.5 right-2.5"
                />
              </div>
            </div>
          </>
        ) : (
          <div className="result py-0 px-[5%] max-h-[70vh] overflow-y-scroll">
            <div className="result-title my-10 mx-0 flex items-center gap-5">
              <img
                src={assets.user_icon}
                alt=""
                className="w-10 rounded-full"
              />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data flex items-start gap-5 ">
              <img
                src={assets.gemini_icon}
                alt=""
                className="w-10 rounded-full"
              />
              {loading ? (
                <div className="loader w-full flex flex-col gap-2.5">
                  {" "}
                  <hr className="rounded-[4px] border-none bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] bg-[length:800px_50px] h-5" />
                  <hr className="rounded-[4px] border-none bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] bg-[length:800px_50px] h-5" />
                  <hr className="rounded-[4px] border-none bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] bg-[length:800px_50px] h-5" />
                </div>
              ) : (
                <p
                  dangerouslySetInnerHTML={{ __html: resultData }}
                  className="text-[17px] leading-7 font-[400]"
                ></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom absolute bottom-0 w-full max-w-[900px] py-0 px-5 m-auto ">
          <div className="search-box flex justify-between items-center border py-2.5 px-5 gap-5 rounded-[50px] text-[#FFFFF1] bg-[#1E1F20">
            <input
              type="text"
              placeholder="Entrez un prompt ici..."
              className="flex-1 bg-transparent border-none  outline-none p-2 text-[18px]"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <div className="flex items-center gap-5 ">
              <img
                src={assets.gallery_icon}
                alt=""
                className="w-[24px] cursor-not-allowed"
              />
              <img
                src={assets.mic_icon}
                alt=""
                className="w-[24px] cursor-not-allowed"
              />
              {input ? (
                <img
                  src={assets.send_icon}
                  alt=""
                  className="w-[24px] cursor-pointer"
                  onClick={() => onSent()}
                />
              ) : null}
            </div>
          </div>
          <p className="bottom-info text-[13px] my-[15px] mx-auto text-center font-[300] text-[#585858]">
            Gemini peut afficher des informations inexactes, notamment sur des
            personnes, alors vérifiez ses réponses. Votre vie privée et les
            applications Gemini
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
