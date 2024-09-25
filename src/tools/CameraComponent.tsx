import { useEffect, useRef, useState } from "react";
import routes from "../utils/api/routes";
import { ClipLoader } from "react-spinners";
import text from "../utils/format/text";
import toast from "react-hot-toast";

export default function CameraComponent({ setText }: { setText: Function }) {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    socketRef.current = new WebSocket(routes.signDecIARoute);
    let lastMessageTime = 0;
    const THROTTLE_INTERVAL = 700;

    socketRef.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const imageBytes = new Uint8Array(
        atob(data.image)
          .split("")
          .map((char) => char.charCodeAt(0))
      );
      const blob = new Blob([imageBytes], { type: "image/jpeg" });
      const url = URL.createObjectURL(blob);
      setVideoSrc(url);
      const now = Date.now()
      if(now - lastMessageTime < THROTTLE_INTERVAL){
        return;
      }
      lastMessageTime = now;
      setText((prevText: string) => prevText + text.convertLabel(data.label));
    };
    socketRef.current.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    socketRef.current.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
        socketRef.current = null;
        toast.loading(
          "Sometimes the connection and use of the camera is not interrupted immediately, if you want to close it immediately, please refresh the page",
          {duration:3000}
        );
      }
    };
  }, []);
  return (
    <div>
      {videoSrc ? (
        <img
          src={videoSrc}
          alt="WebSocket Frame"
          width={540}
          height={380}
          className="rounded-md border border-neutral-900"
        />
      ) : (
        <>
          <ClipLoader color="#36D7B7" />
          <p>Conectando al servidor...</p>
        </>
      )}
    </div>
  );
}
