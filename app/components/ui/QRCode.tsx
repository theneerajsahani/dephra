import React from "react";
import QRCode from "react-qr-code";

interface QRCodeProps {
    value: string;
    size?: number;
}

export default function QRCodeComponent({ value, size = 128 }: QRCodeProps) {
    return (
        <div style={{ height: "auto", margin: "0 auto", maxWidth: size, width: "100%" }}>
            <QRCode
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={value}
                viewBox={`0 0 256 256`}
            />
        </div>
    );
}
