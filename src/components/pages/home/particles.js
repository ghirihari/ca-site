import React from 'react'
import Particles from "react-tsparticles";

const ParticlesCont = () => {
  return (
    <Particles
        params={
            {
                    "background": {
                      "color": {
                        "value": "#0f204b"
                      },
                      "position": "50% 50%",
                      "repeat": "no-repeat",
                      "size": "cover"
                    },
                    "fullScreen": {
                      "zIndex": 1
                    },
                    "fpsLimit": 60,
                    "interactivity": {
                      "modes": {
                        "attract": {
                          "maxSpeed": 5
                        }
                      }
                    },
                    "particles": {
                      "links": {
                        "color": {
                          "value": "#fcb117"
                        },
                        "distance": 100,
                        "enable": true
                      },
                      "move": {
                        "enable": true,
                        "path": {},
                        "outModes": {
                          "bottom": "out",
                          "left": "out",
                          "right": "out",
                          "top": "out"
                        },
                        "spin": {}
                      },
                      "number": {
                        "value": 10
                      },
                      "opacity": {
                        "animation": {}
                      },
                      "size": {
                        "value": 1,
                        "animation": {}
                      },
                      "wobble": {
                        "speed": 1
                      }
                    }
            }
        }
    />
  )
}

export default ParticlesCont