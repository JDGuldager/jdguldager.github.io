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
    "image": "assets/shoulder.jpg",
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
        "Testing & research",
        "I helped recruit test participants, took part in testing, and iterated on the project. I also contributed to the academic writing."
      ],
      [
        "Published research",
        "Co-authored the published article VRehabilitation: A Pilot Study of HMD-Based Guided Exercise & Rehabilitation in VR for Post-Shoulder-Surgery Patients at Home. Featured at the XR Health workshop at IEEE VR 2025 in Saint-Malo, France, and published in the IEEE VRW 2025 proceedings."
      ],
      [
        "Evaluation",
        "A pilot study involved eight people with prior rehabilitation experience, together with physiotherapist feedback. Participants reported positive usability, while exercise variety, customisation, and comfort remained areas to improve."
      ],
      [
        "Scope",
        "A research prototype for investigating guided exercise at home. The pilot does not establish clinical effectiveness or readiness for unsupervised medical use."
      ]
    ],
    "process": {
      "title": "Making exercise guidance visible",
      "text": "I developed exercise-completion checks, repetition counting, exertion warnings, and the exercise-selection interface. The team combined these with an instructor avatar and virtual mirror to support guided exercise. I helped recruit participants, test, and iterate on the prototype. Pilot feedback highlighted exercise variety and customisation as priorities for a future iteration.",
      "image": "assets/process-shoulder.jpg",
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
    "image": "assets/interrogation.png",
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
        "Main technical challenge",
        "The biggest technical challenge I helped solve was developing the machine-learning model that estimates the user’s stress level from electrodermal activity (EDA) and blood-volume-pulse signals. This estimated state gives the narrative another input alongside explicit player choices."
      ],
      [
        "Experience implementation",
        "I worked extensively on optimisation, lighting, and the dialogue system, and helped with MetaHuman implementation. I also contributed to system integration, version control, testing, and the academic writing."
      ],
      [
        "Design question",
        "How can a story respond to the player beyond explicit dialogue choices? The project connects an estimated physiological state to an Unreal Engine narrative experience."
      ],
      [
        "System",
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
      "image": "assets/process-narrative.jpg",
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
    "image": "assets/fyrmester-logo.png",
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
        "DADIU internship",
        "This project is part of my internship semester at DADIU (The National Academy of Digital, Interactive Entertainment), where I work with a multidisciplinary game development team."
      ],
      [
        "Gameplay loop: pressure through competing tasks",
        "Inspired by Overcooked, I proposed a gameplay loop intended to overwhelm players who fall behind on their tasks. I refined it with the design team, incorporating feedback from the wider team. The aim was to make staying ahead of maintenance central to the experience."
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
        "Iteration & final production",
        "I helped bring the game towards completion through repeated cycles of bug fixing, re-testing, and iteration with the team."
      ],
      [
        "The experience",
        "Players move through the lighthouse and interact with its equipment. The gameplay screenshots show tasks involving coal, planks, pumping, and repairs, with task indicators and a shift timer providing context."
      ],
      [
        "Team credit",
        "The finished game combines the work of designers, programmers, artists, and audio specialists. The linked game page includes the full team credits."
      ]
    ],
    "process": {
      "title": "Early concept: balancing repairs, flooding, and the light",
      "text": "One of the earliest concept images explores an Overcooked-inspired loop: repair damage, drain floodwater, and keep the lighthouse running before tasks overwhelm the player. It also considers tower construction and movement options; these are early proposals, not a description of the finished game. I refined the initial loop with the design team and input from the wider team. My later floor layout placed essential materials downstairs, making flood prevention central to keeping the lighthouse operational. Open the image to read the original notes.",
      "image": "assets/process-fyrmester-early.png",
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
    "title": "Custom Hardware Space Project",
    "category": "Gameplay & physical interaction",
    "meta": [
      "Unity",
      "Arduino",
      "Individual project",
      "Course exam project"
    ],
    "image": "assets/process-glove.jpg",
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
        "My contribution",
        "I built a wearable glove controller and integrated it with a Unity spaceship game. The hardware combines an Arduino Nano, a BNO08x orientation sensor, a flex sensor, and a thumb-operated button. I also took part in testing and contributed to the academic writing."
      ],
      [
        "From gesture to gameplay",
        "Hand orientation controls rotation, finger flex controls throttle, and the button triggers shooting. Deadzones and exponential smoothing help reduce sensor noise. Gameplay systems manage asteroid spawning, projectiles, the timer, and scoring."
      ],
      [
        "What comes next",
        "The prototype was not empirically user-tested. Drift, recalibration, sensor noise, and the wired connection are limitations; a controlled comparison with keyboard input is proposed as future work."
      ]
    ],
    "video": "u9J_HRNVX4U",
    "process": {
      "title": "From a physical gesture to an in-game action",
      "text": "I placed the orientation sensor on the back of the hand, the flex sensor along a finger, and the firing button within thumb reach. The glove sends input through Arduino to Unity. Deadzones and smoothing reduce jitter before those signals control steering, throttle, and shooting. Sensor drift and the wired connection remain limitations; a keyboard comparison is future work.",
      "image": "assets/process-glove.jpg",
      "alt": "The custom glove prototype with its sensors, wiring, Arduino, and thumb button."
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
    "image": "assets/cartastrophe.png",
    "alt": "Cartastrophe gameplay showing a shopping trolley, shopping list, timer, and supermarket aisles.",
    "summary": "A frantic supermarket run: collect your shopping list before the store closes in three minutes.",
    "contribution": "Game design, level design, bug fixing, camera features, and UI features.",
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
        "DADIU internship",
        "This project is part of my internship semester at DADIU (The National Academy of Digital, Interactive Entertainment), where I work with a multidisciplinary game development team."
      ],
      [
        "My contribution",
        "I contributed to game design and level design, fixed bugs, and worked on camera and UI features as part of the WiggleTreeStudio team."
      ],
      [
        "The experience",
        "A short time limit turns an everyday shopping trip into a first-person arcade challenge. The supermarket environment, shopping list, and countdown give players a clear objective throughout the round."
      ],
      [
        "Team credit",
        "Developed with a multidisciplinary team. Full credits and downloadable Windows and macOS versions are available on the game page."
      ]
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
    "image": "assets/throwing.jpg",
    "alt": "VR throwing prototype with floating targets above an Earth backdrop.",
    "summary": "A force-based grabbing and throwing prototype designed to make hitting targets in VR easier and more predictable.",
    "contribution": "Application design, implementation, system integration, and version control within a collaborative team.",
    "role": "Design & Implementation",
    "links": [],
    "sections": [
      [
        "My contribution",
        "I contributed across application design and implementation, combining systems I built with work from teammates into the final build. I also handled version control and helped shape the overall interaction design. I also took part in testing and contributed to the academic writing."
      ],
      [
        "The challenge",
        "Throwing in VR can be sensitive to release timing and tracking. The project explores an alternative selection and throwing technique alongside Unity’s default interaction."
      ],
      [
        "The prototype",
        "A projected target and crosshair support force-based throwing. The same target-hitting task was used to compare the custom mechanic with the default interaction."
      ],
      [
        "Early findings",
        "Two participants completed five trials per technique. Both scored higher with the force-based interaction and rated target hitting more favourably. The small sample makes this an early usability signal, not a generalisable result."
      ]
    ],
    "video": "zg1tq0ce_X4",
    "process": {
      "title": "Making the throw more predictable",
      "text": "The team compared a custom interaction with Unity’s default throwing. A crosshair positioned in front of the non-throwing hand provides an explicit target, while movement magnitude controls throwing speed. Two participants scored higher with the custom technique across five trials each. This is an early usability result, not evidence of general performance.",
      "image": "assets/process-throwing.jpg",
      "alt": "Prototype screenshot showing the crosshair used to guide throws."
    }
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
    "image": "assets/stepping.jpg",
    "alt": "Virtual lily pads and tracked feet in the reactive stepping prototype.",
    "summary": "A frog-and-lily-pad stepping experience comparing fully immersive VR with AR for older adults with vestibular dysfunction.",
    "contribution": "Application design, implementation, system integration, and version control within a collaborative team.",
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
        "My contribution",
        "I contributed across application design and implementation, combining systems I built with work from teammates into the final build. I also handled version control and helped shape the overall interaction design. I also took part in testing and contributed to the academic writing."
      ],
      [
        "Design approach",
        "A frog guides reactive steps between lily pads. The project compares a virtual lake with passthrough AR, where users can still see their physical surroundings."
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
      "text": "The team tried Azure Kinect, then Vive trackers, before attaching Quest 3 controllers to the feet. Kinect struggled with occlusion and fast movement; Vive trackers added calibration and passthrough compatibility problems. Quest controllers simplified setup and supported both VR and AR. Early slip-on mounts were refined into elastic and Velcro attachments for participants’ own shoes.",
      "image": "assets/process-stepping.jpg",
      "alt": "Prototype mounting arrangement for attaching a Quest controller to footwear."
    }
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
    "image": "assets/neurojukebox-visuals.png",
    "alt": "NeuroJukebox visuals with floating panels surrounded by bright yellow, blue, and pink patterns.",
    "summary": "A prototype built during the two-day BR41N hackathon, exploring EEG input, music, and audio-reactive visuals.",
    "contribution": "Handled most of the application design and implementation, collaborating with a TouchDesigner designer who created the animated artwork.",
    "role": "Designer / Developer",
    "video": "ZUSKlnxOCf4",
    "links": [],
    "sections": [
      [
        "My contribution",
        "I carried out most of the application design and implementation. I collaborated with a TouchDesigner designer who created the animated artwork used in the experience."
      ],
      [
        "Project overview",
        "NeuroJukebox brings brain-signal input into an audiovisual experience. The project presentation outlines a pipeline connecting EEG processing, Python, and Unity."
      ],
      [
        "See the project",
        "The video presents the concept and implementation, including music and audio-reactive visuals."
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
    "image": "assets/tree.jpg",
    "alt": "Stylised forest environment from the tree embodiment VR experience.",
    "summary": "A slow-paced VR experience where breathing nurtures a responsive forest and the player inhabits a tree.",
    "contribution": "Application design, implementation, system integration, and version control within a collaborative team.",
    "role": "Design & Implementation",
    "links": [],
    "sections": [
      [
        "My contribution",
        "I contributed across application design and implementation, combining systems I built with work from teammates into the final build. I also handled version control and helped shape the overall interaction design. I also took part in testing and contributed to the academic writing."
      ],
      [
        "Design approach",
        "The experience moves away from conventional objectives. Respiration influences environmental growth through a root network, connecting the participant’s body to the surrounding forest."
      ],
      [
        "Interaction",
        "A seed phase develops into tree embodiment. Breathing drives environmental progression, supported by stylised visuals and responsive sound."
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
      "image": "assets/process-tree.jpg",
      "alt": "Team system diagram connecting physiological input, the VR environment, and intended experience outcomes."
    }
  }
];
