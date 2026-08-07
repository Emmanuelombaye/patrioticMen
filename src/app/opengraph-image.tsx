import { ImageResponse } from "next/og";

export const alt = "Patriot Men's Health — Own your health.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#040914",
          color: "#EEF2F8",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 100% 0%, rgba(171,12,18,0.38), transparent 48%), radial-gradient(ellipse at 0% 100%, rgba(1,25,59,0.9), transparent 45%)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              width: 68,
              height: 68,
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
                borderLeft: "18px solid transparent",
                borderRight: "18px solid transparent",
                borderBottom: "32px solid #01193B",
              }}
            />
          </div>
          <div
            style={{
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#AB0C12",
            }}
          >
            Patriot Men&apos;s Health
          </div>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div
            style={{
              fontSize: 74,
              fontWeight: 800,
              lineHeight: 0.94,
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              maxWidth: 920,
            }}
          >
            Own your health.
          </div>
          <div
            style={{
              fontSize: 28,
              color: "rgba(238,242,248,0.78)",
              maxWidth: 780,
              lineHeight: 1.35,
            }}
          >
            Physician-guided programmes for weight, hormones, sexual health,
            hair, and longevity—shipped discreetly nationwide.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
