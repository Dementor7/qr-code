import React from "react";
import { QRCodeSVG } from "qrcode.react";

const QrCode = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-center mt-5">
        <div>
          <QRCodeSVG value="https://reactjs.org/" size={300}  renderAs="canvas" />
        </div>
      </div>
    </div>
  );
};

export default QrCode;
