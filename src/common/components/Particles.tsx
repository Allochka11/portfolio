import React from "react";
import {useCallback} from "react";
import Particles from "react-particles";
import type {Container, Engine} from "tsparticles-engine";
import {loadFull} from "tsparticles";
import s from './Particles.module.scss'

const ParticlesContainer = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        // console.log(container);
    }, []);


    return (

        <Particles
            id="tsparticles"
            className={s.particles}
            init={particlesInit}
            loaded={particlesLoaded}
            options={
                {
                    fpsLimit: 80,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 1,
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.1,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.3,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 4,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: {min: 1, max: 5},
                        },
                    },
                    detectRetina: false,
                }
            }
        />


    );
};

export default ParticlesContainer;
