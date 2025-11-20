import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

const AppWithAOS = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100,
      easing: 'ease-out-cubic',
    });
  }, []);

  return <App />;
};

createRoot(document.getElementById("root")!).render(<AppWithAOS />);
