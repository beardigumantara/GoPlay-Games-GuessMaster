import React, { useContext } from "react";
import FramePNG from "../assets/images/polaroid-frame.png";
import { GameContext } from "../contexts/game";

const PolaroidCard = ({ imgSrc, text, imgText, cropping }) => {
  const { positionImage } = useContext(GameContext);
  console.log(positionImage.getImagePositions());

  return (
    <div className="container">
      <div className="polaroid-frame">
        <img src={FramePNG} alt="" className="" />
      </div>
      <div className="content-img">
        <div className="view-area">
          <div className={cropping && positionImage.getImagePositions()}>
            {imgSrc && <img src={imgSrc} alt="" className="" />}
          </div>
          <div className="view-area-shader">{imgText}</div>
        </div>
      </div>
      <div className="polaroid-text">
        <p className="">{text}</p>
      </div>

      <style jsx>{`
        .container {
          position: relative;
          width: 550px;
          height: 680px;
        }
        .polaroid-frame {
          z-index: 20;
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .polaroid-frame img {
          width: 100%;
          height: 100%;
        }

        .content-img {
          z-index: 10;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 44px;
        }

        .view-area img {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          top: 0;
          left: 0;
        }

        .view-area {
          position: relative;
          width: 464px;
          height: 490px;
          background: #000;
          overflow: hidden;
        }

        .polaroid-text {
          z-index: 30;

          position: absolute;
          width: 100%;
          bottom: 32px;
        }
        .polaroid-text p {
          color: black;
          font-family: Caveat;
          font-size: 54px;
        }
        .view-area-shader {
          position: absolute;
          width: 100%;

          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 54px;
          font-weight: bold;

          box-shadow: inset 0 0 24px #000000;
        }
      `}</style>
    </div>
  );
};

export default PolaroidCard;
