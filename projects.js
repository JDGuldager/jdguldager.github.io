window.projects = [
  {
    "id": "shoulder",
    "title": "VRehabilitation",
    "category": "Guided interaction design",
    "meta": [
      "Unity",
      "VR",
      "Semester project"
    ],
    "image": "assets/shoulder.webp",
    "alt": "VR exercise room with a virtual mirror and instructor avatar.",
    "summary": "A guided shoulder rehabilitation prototype using an instructor avatar, a virtual mirror, and movement feedback.",
    "contribution": "Exercise validation and repetition counting, exertion warnings, avatar animation logic, and exercise-selection UI. Co-designed the studio and helped recruit participants, test, and iterate.",
    "role": "Design & Implementation",
    "video": "DN0x5DwvmmU",
    "links": [
      [
        "Read published article",
        "https://ieeexplore.ieee.org/abstract/document/10972776"
      ],
      [
        "View code",
        "https://github.com/JDGuldager/VR-Rehabilitation---Shoulder-Rehabilitation-in-Virtual-Reality"
      ]
    ],
    "sections": [
      [
        "Exercise logic",
        "I implemented the logic for recognising correctly completed exercises and incrementing the repetition count, along with warnings when users exercised too hard. These features were designed to discourage overexertion during recovery from a recent shoulder injury."
      ],
      [
        "Avatar animation",
        "I implemented animation logic combining a VR-controller-driven upper body with traditional lower-body animation."
      ],
      [
        "Interface & studio design",
        "I built the interface for selecting exercises and having the physiotherapist NPC demonstrate them. I also designed the studio environment in collaboration with group members."
      ],
      [
        "Published research",
        "Co-authored the published article VRehabilitation: A Pilot Study of HMD-Based Guided Exercise & Rehabilitation in VR for Post-Shoulder-Surgery Patients at Home. Featured at the XR Health workshop at IEEE VR 2025 in Saint-Malo, France, and published in the IEEE VRW 2025 proceedings."
      ],
      [
        "Scope",
        "A research prototype for investigating guided exercise at home. The pilot does not establish clinical effectiveness or readiness for unsupervised medical use."
      ]
    ],
    "process": {
      "title": "What the pilot revealed",
      "text": "I helped recruit participants and test the prototype. Eight people with prior rehabilitation experience took part, alongside physiotherapist feedback. Participants reported positive usability; exercise variety, customisation, and comfort emerged as priorities for a future iteration. The image shows how repetition count and arm elevation were communicated during exercise.",
      "image": "assets/process-shoulder.webp",
      "alt": "Exercise prototype showing repetition count and arm-elevation feedback."
    },
    "highlight": "Co-authored research published in IEEE VRW 2025",
    "contributionPoints": [
      "Exercise validation, repetition counting, and exertion warnings.",
      "Avatar animation logic and exercise-selection UI.",
      "Studio co-design, participant recruitment, testing, and iteration."
    ]
  },
  {
    "id": "narrative",
    "title": "The Interrogation: Bioadaptive narratives",
    "category": "Interactive storytelling",
    "meta": [
      "Unreal Engine",
      "Python",
      "Semester project"
    ],
    "image": "assets/interrogation.webp",
    "alt": "A character seated across an interrogation table with a case file, recording equipment, and an illuminated exit sign.",
    "summary": "An experimental narrative that uses wearable biosignals and player choices to influence dialogue and story outcomes.",
    "contribution": "Helped develop the ML model estimating stress from EDA and blood-volume-pulse signals. Worked on optimisation, lighting, and the dialogue system, and helped integrate MetaHuman.",
    "role": "Design & Implementation",
    "video": "u2QmzKhKYxI",
    "links": [
      [
        "View code",
        "https://github.com/JDGuldager/ML-Stress-Detector-for-an-Adaptive-Narrative"
      ],
      [
        "Watch ML development walkthrough",
        "https://youtu.be/_JsQaANyR3A"
      ]
    ],
    "sections": [
      [
        "From biosignals to dialogue",
        "Wearable EDA and blood-volume-pulse signals feed a Python pipeline. A Random Forest model trained on WESAD estimates baseline, relaxed, or stressed states; Unreal Blueprints use these estimates alongside player choices."
      ],
      [
        "Evaluation & limits",
        "The model was evaluated offline, while the integrated real-time system was tested qualitatively. Noisy wrist signals remain a limitation. This is an exploration of narrative interaction, not a medical stress assessment."
      ]
    ],
    "process": {
      "title": "From story prototype to adaptive responses",
      "text": "The team first tested the story in Twine with four participants, checking whether the flashbacks and their triggers made sense. Feedback supported the structure while highlighting some confusion at the beginning. The response map then connected dialogue choices and physiological states to the interrogator’s behaviour.",
      "image": "assets/process-narrative.webp",
      "alt": "Team design diagram mapping dialogue choices and physiological states to four interrogator response styles."
    },
    "contributionPoints": [
      "Helped develop the ML model estimating stress from EDA and blood-volume-pulse signals.",
      "Worked on optimisation, lighting, and the dialogue system.",
      "Helped integrate MetaHuman."
    ]
  },
  {
    "id": "fyrmester",
    "title": "Fyrmester: Burden of Light",
    "category": "Game & level design",
    "meta": [
      "DADIU internship",
      "3-week project",
      "WiggleTreeStudio",
      "Windows"
    ],
    "image": "assets/fyrmester-logo.webp",
    "alt": "Fyrmester: The Burden of Light — white title lettering beside a lighthouse on a rocky island.",
    "summary": "Keep a lighthouse running as tasks pile up and flooding threatens essential supplies. Staying ahead of maintenance is key to avoiding failure.",
    "contribution": "Created the initial gameplay loop and floor sequence, implemented the entire in-game UI, and co-designed the camera. Iterated with the team through bug fixing and repeated testing.",
    "role": "Game Designer / Level Designer",
    "video": "m6NMnlolrgI",
    "links": [
      [
        "Get the game",
        "https://wiggletreestudio.itch.io/fyrmester-burden-of-light"
      ],
      [
        "About DADIU",
        "https://www.dadiu.dk/"
      ]
    ],
    "sections": [
      [
        "Gameplay loop: pressure through competing tasks",
        "Inspired by Overcooked, the loop is intended to overwhelm players who fall behind on maintenance. I refined my initial proposal with the design team and feedback from the wider team."
      ],
      [
        "Floor layout: making flooding matter",
        "I arranged the lighthouse floors around the flooding mechanic, placing the most important materials at the bottom. This makes keeping the lighthouse flood-free essential: neglecting the water threatens access to the supplies needed to keep operating and avoid losing the game. The layout ties task prioritisation directly to the consequences of flooding."
      ],
      [
        "UI implementation & camera design",
        "I implemented the entire in-game UI from start to finish. I also co-designed the camera, which was implemented by one of the programmers."
      ],
      [
        "Team credit",
        "The finished game combines the work of designers, programmers, artists, and audio specialists. The linked game page includes the full team credits."
      ]
    ],
    "process": {
      "title": "Early concept: balancing repairs, flooding, and the light",
      "text": "This early concept explores competing repairs, flooding, and light maintenance. It also proposes tower construction and alternative movement controls—ideas under consideration at this stage, rather than features of the finished game. Open the image to read the original notes.",
      "image": "assets/process-fyrmester-early.webp",
      "alt": "Early lighthouse concept sheet with annotated repairs, flooding, light maintenance, and notes on competing tasks, movement, and difficulty."
    },
    "contributionPoints": [
      "Created the initial gameplay loop and floor sequence.",
      "Implemented the entire in-game UI and co-designed the camera.",
      "Fixed bugs and iterated through repeated testing with the team."
    ]
  },
  {
    "id": "asteroids",
    "title": "Custom Hardware Space Game Project",
    "category": "Gameplay & physical interaction",
    "meta": [
      "Unity",
      "Arduino",
      "Individual project",
      "Course exam project"
    ],
    "image": "assets/process-glove.webp",
    "alt": "Custom glove controller with its sensors, wiring, Arduino, and thumb-operated button.",
    "summary": "A one-minute asteroid game controlled by a custom glove: rotate your hand to steer, bend a finger for throttle, and press to fire.",
    "contribution": "Custom controller hardware, input processing, Unity integration, and gameplay systems.",
    "role": "Designer / Developer",
    "links": [
      [
        "View code",
        "https://github.com/JDGuldager/SpaceAsteroidsMobileAndWearable"
      ]
    ],
    "sections": [
      [
        "Project context",
        "An individual course project for the Mobile and Wearable Computing exam."
      ],
      [
        "Evaluation & next steps",
        "Development included implementation testing, but no formal participant study. Sensor drift, recalibration, and the wired connection remain limitations. A controlled comparison with keyboard input was proposed as future work."
      ]
    ],
    "video": "u9J_HRNVX4U",
    "process": {
      "title": "From a physical gesture to an in-game action",
      "text": "I placed the BNO08x orientation sensor on the back of the hand, a flex sensor along a finger, and the firing button within thumb reach. An Arduino Nano sends their input to Unity. Deadzones and exponential smoothing reduce jitter before the signals control steering, throttle, and shooting.",
      "image": "assets/asteroids.webp",
      "alt": "Player spaceship surrounded by an asteroid field in the glove-controlled Unity game."
    },
    "contributionPoints": [
      "Built the custom glove controller and input processing.",
      "Integrated the hardware with Unity and implemented gameplay systems."
    ]
  },
  {
    "id": "cartastrophe",
    "title": "Cartastrophe",
    "category": "Game & level design",
    "meta": [
      "DADIU internship",
      "One-week game jam",
      "Unity",
      "Windows / macOS"
    ],
    "image": "assets/cartastrophe.webp",
    "alt": "Cartastrophe gameplay showing a shopping trolley, shopping list, timer, and supermarket aisles.",
    "summary": "A frantic supermarket run: collect your shopping list before the store closes in three minutes.",
    "contribution": "Level design, gameplay-loop development, and balancing. Designed and implemented the scoring system. Created and implemented the camera script.",
    "role": "Game Designer / Level Designer",
    "video": "gZmLCCT5Gbo",
    "links": [
      [
        "Get the game",
        "https://wiggletreestudio.itch.io/cartastrophe"
      ],
      [
        "About DADIU",
        "https://www.dadiu.dk/"
      ]
    ],
    "sections": [
      [
        "The experience",
        "The shopping list and countdown keep the objective visible during the three-minute round. These systems support a short arcade experience built within a one-week production window."
      ],
      [
        "Team credit",
        "Developed with a multidisciplinary team. Full credits and downloadable Windows and macOS versions are available on the game page."
      ]
    ],
    "contributionPoints": [
      "Level design, gameplay-loop development, and balancing.",
      "Designed and implemented the scoring system.",
      "Created and implemented the camera script."
    ]
  },
  {
    "id": "throwing",
    "title": "Improving throwing interactions in VR",
    "category": "Interaction design",
    "meta": [
      "Unity",
      "VR",
      "3-person project"
    ],
    "image": "assets/throwing.webp",
    "alt": "VR throwing prototype with floating targets above an Earth backdrop.",
    "summary": "A force-based grabbing and throwing prototype designed to make hitting targets in VR easier and more predictable.",
    "contribution": "Implemented the throwing physics, scoring, and general gameplay interactions. Carried out testing and contributed to the academic writing.",
    "role": "Design & Implementation",
    "links": [],
    "sections": [
      [
        "Collaboration",
        "A teammate developed the different object types while I implemented the physics, scoring, and general interactions. I also contributed to the academic writing."
      ],
      [
        "The challenge",
        "Throwing in VR can be sensitive to release timing and tracking. The project explores an alternative selection and throwing technique alongside Unity’s default interaction."
      ]
    ],
    "video": "zg1tq0ce_X4",
    "process": {
      "title": "Making the throw more predictable",
      "text": "The team compared a custom interaction with Unity’s default throwing. A crosshair positioned in front of the non-throwing hand provides an explicit target, while movement magnitude controls throwing speed. Two participants scored higher with the custom technique across five trials each. This is an early usability result, not evidence of general performance.",
      "image": "assets/process-throwing.webp",
      "alt": "Prototype screenshot showing the crosshair used to guide throws."
    },
    "contributionPoints": [
      "Implemented the throwing physics, scoring, and general gameplay interactions.",
      "Carried out testing and contributed to the academic writing."
    ]
  },
  {
    "id": "stepping",
    "title": "VRStepulake",
    "category": "Accessible interaction design",
    "meta": [
      "Unity",
      "VR / AR",
      "Group project"
    ],
    "image": "assets/stepping.webp",
    "alt": "Virtual lily pads and tracked feet in the reactive stepping prototype.",
    "summary": "A frog-and-lily-pad stepping experience comparing fully immersive VR with AR for older adults with vestibular dysfunction.",
    "contribution": "Owned end-to-end implementation, carrying out the development iterations largely independently. Contributed to testing and academic writing within the group project.",
    "role": "Design & Implementation",
    "video": "LMOELrw7tPA",
    "links": [
      [
        "View code",
        "https://github.com/JDGuldager/AR-and-VR-Application-for-Vestibular-Dysfunction-in-Elderly"
      ]
    ],
    "sections": [
      [
        "Design approach",
        "Passthrough AR lets users see their physical surroundings during the stepping task. The project compared this with a fully virtual lake to explore orientation, comfort, and acceptance."
      ],
      [
        "Prototype",
        "Built in Unity for Meta Quest 3, using controllers attached to the feet for step detection. Step distance and timing provide ways to adjust the task."
      ],
      [
        "Evaluation",
        "Five participants aged 65–78 evaluated the experience. Four preferred AR; visibility of the room helped orientation and perceived safety. The study assessed feasibility and acceptance rather than long-term clinical effectiveness."
      ]
    ],
    "process": {
      "title": "Three approaches to foot tracking",
      "text": "I worked through the implementation iterations from Azure Kinect to Vive trackers, then Quest 3 controllers attached to the feet. Kinect struggled with occlusion and fast movement; Vive trackers added calibration and passthrough compatibility problems. Quest controllers simplified setup and supported both VR and AR. Early slip-on mounts were refined into elastic and Velcro attachments for participants’ own shoes.",
      "image": "assets/process-stepping.webp",
      "alt": "Prototype mounting arrangement for attaching a Quest controller to footwear."
    },
    "contributionPoints": [
      "Owned end-to-end implementation, carrying out the development iterations largely independently.",
      "Contributed to testing and academic writing within the group project."
    ]
  },
  {
    "id": "neurojukebox",
    "title": "NeuroJukebox",
    "category": "Programming & arts",
    "meta": [
      "Two-day BR41N hackathon",
      "Unity",
      "Python",
      "Group project"
    ],
    "image": "assets/neurojukebox-visuals.webp",
    "alt": "NeuroJukebox visuals with floating panels surrounded by bright yellow, blue, and pink patterns.",
    "summary": "A prototype built during the two-day BR41N hackathon, exploring EEG input, music, and audio-reactive visuals.",
    "contribution": "Handled most of the application design and implementation, collaborating with a TouchDesigner designer who created the animated artwork.",
    "role": "Designer / Developer",
    "video": "ZUSKlnxOCf4",
    "links": [],
    "sections": [
      [
        "Prototype approach",
        "The prototype connects EEG processing, Python, and Unity to combine brain-signal input with music and animated artwork. The linked video demonstrates the concept and implementation developed during the two-day hackathon."
      ]
    ],
    "contributionPoints": [
      "Handled most of the application design and implementation.",
      "Collaborated with a TouchDesigner designer who created the animated artwork."
    ]
  },
  {
    "id": "tree",
    "title": "What Is It Like to Be a Tree?",
    "category": "Embodied experience design",
    "meta": [
      "Unity",
      "VR",
      "Group project"
    ],
    "image": "assets/tree.webp",
    "alt": "Stylised forest environment from the tree embodiment VR experience.",
    "summary": "A slow-paced VR experience where breathing nurtures a responsive forest and the player inhabits a tree.",
    "contribution": "Worked on optimisation and communication between Pure Data, Unity, and OpenSignals for respiratory-sensor input. Contributed to testing, research, and writing the report.",
    "role": "Design & Implementation",
    "links": [],
    "sections": [
      [
        "Design approach",
        "The experience moves away from conventional objectives: a seed phase develops into tree embodiment, with respiration influencing growth through a root network. The intention was to connect the participant’s body to the surrounding forest."
      ],
      [
        "What the study found",
        "Forty participants took part across VR and control conditions. The study found no significant differences between conditions on its quantitative measures, although participants described relaxation, curiosity, and immersion."
      ]
    ],
    "video": "AbHXMI11V94",
    "process": {
      "title": "Connecting breathing to the environment",
      "text": "The team linked live respiration input to environmental growth and visual feedback. Distant trees react later than nearby trees, making the effect spread outward. Animated bark used a flipbook shader instead of video textures to address mapping and performance constraints. These choices connect the visual design to the practical requirements of a VR build.",
      "image": "assets/process-tree.webp",
      "alt": "Team system diagram connecting physiological input, the VR environment, and intended experience outcomes."
    },
    "contributionPoints": [
      "Worked on optimisation and communication between Pure Data, Unity, and OpenSignals for respiratory-sensor input.",
      "Contributed to testing, research, and writing the report."
    ]
  }
];
