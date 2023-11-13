import Particles from "react-tsparticles";
import React, { useCallback, useEffect } from "react";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { Box, position } from "@chakra-ui/react";
export default function Particulas() {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    return (
    
        <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        
        options={{
            background: {
                color: {
                    value: "#f0f0f0",
                },
            },
            backgroundMode: {
                enable: true,
                zIndex: -1,
            },
            style: {
                position: "absolute",
                height: "100vh"
            },
            fpsLimit: 45,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "grab",
                        parallax: {
                          enable: true,
                          force: 5,
                          smooth: 100,
                        }
                      },
                    resize: true,
                },
                modes: {
                    grab: {
                        distance: 200,
                        lineLinked: {
                          blink: true,
                          color: "#4DB6AC",
                          consent: true,
                          opacity: 1,
                        },
                      },
                      repulse: {
                        distance: 250,
                        duration: 2,
                      },
                },
            },
            particles: {
                color: {
                    value: "#157D77",
                },
                links: {
                    color: "#002A2A",
                    distance: 150,
                    enable: true,
                    opacity: 1,
                    width: 1,
                },
                collisions: {
                    enable: true,
                    mode: "bounce",
                },
                move: {
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: true,
                    speed: 4,
                    straight: true,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 1,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    random: true,
                    value: 7
                },
            },
            detectRetina: true,
        }}
    />);
}