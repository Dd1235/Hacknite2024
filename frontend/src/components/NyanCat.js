import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

const NyanCat = () => {
  const options = useMemo(
    () => ({
      autoPlay: true,
      background: {
        color: {
          value: "#043564",
        },
        image:
          "url('https://vincentgarreau.com/particles.js/assets/img/kbLd9vb_new.gif')",
        position: "0 50%",
        repeat: "no-repeat",
        size: "60%",
        opacity: 1,
      },
      backgroundMask: {
        composite: "destination-out",
        cover: {
          color: {
            value: "#fff",
          },
          opacity: 1,
        },
        enable: false,
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      detectRetina: true,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          repulse: {
            distance: 200,
            duration: 0.4,
            factor: 100,
            speed: 0.5,
            maxSpeed: 50,
            easing: "ease-out-quad",
          },
        },
      },
      particles: {
        number: {
          value: 80,
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "star",
          options: {
            star: {
              sides: 5,
            },
          },
        },
        opacity: {
          value: 0.75,
        },
        size: {
          value: 4,
        },
        move: {
          enable: true,
          speed: 6,
          direction: "left",
          outModes: {
            default: "out",
          },
        },
        collisions: {
          enable: false,
          mode: "bounce",
        },
        life: {
          duration: 0,
        },
        zIndex: {
          value: 0,
        },
      },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      responsive: [],
    }),
    []
  );

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
    // loadFull(engine);
  }, []);

  return <Particles init={particlesInit} options={options} />;
};

export default NyanCat;
