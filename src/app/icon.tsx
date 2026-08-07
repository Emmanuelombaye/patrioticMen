import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Compact brand mark favicon (Patriot chevron). */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FFFFFF",
        }}
      >
        <div
          style={{
            width: 0,
            height: 0,
            borderLeft: "11px solid transparent",
            borderRight: "11px solid transparent",
            borderBottom: "20px solid #01193B",
            marginTop: -2,
          }}
        />
      </div>
    ),
    { ...size },
  );
}
