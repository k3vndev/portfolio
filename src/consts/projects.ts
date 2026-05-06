import type { IconName, Project } from '@types'

/**
 * `IconName: DisplayName` pairs for technologies used in projects
 */
export const TECHNOLOGIES_MAP = {
  react: 'React',
  'next-js': 'Next.js',
  'type-script': 'TypeScript',
  'java-script': 'JavaScript',
  'mongo-db': 'MongoDB',
  'tailwind-css': 'Tailwind CSS',
  'node-js': 'Node.js',
  python: 'Python',
  'python-white': 'Python White',
  css: 'CSS',
  zod: 'Zod',
  supabase: 'Supabase',
  'open-ai': 'OpenAI',
  leaflet: 'Leaflet',
  'c-sharp': 'C#',
  unity: 'Unity',
  blender: 'Blender'
} as const satisfies Partial<Record<IconName, string>>

export const PROJECTS: Project[] = [
  {
    title: 'Studymate',
    technologies: ['next-js', 'supabase', 'open-ai'],
    overview:
      'AI-powered learning platform that generates and manages personalized Studyplans.\nUsers can track progress, complete structured learning paths, and interact with an AI assistant designed to guide their studies in real time.',
    description:
      'Studymate is an AI-powered web application designed to support structured self-learning.\nIt allows users to generate personalized study plans, track their progress, and interact with an AI assistant that adapts to their current learning state.',
    code: 'https://github.com/k3vndev/studymate',
    preview: 'https://studymate-web.vercel.app',
    images: ['1.webp', '2.webp', '3.webp', '4.webp', '5.webp', '6.webp', '7.webp'],
    metrics: [
      {
        value: '7+',
        label: 'UI Screens'
      },
      {
        value: '3+',
        label: 'AI Features'
      },
      {
        value: 'Full',
        label: 'Auth System'
      }
    ],
    details: [
      {
        type: 'title',
        content: { text: 'Features' }
      },
      {
        type: 'paragraph',
        content:
          'Studymate combines [AI assistance] with structured learning tools, allowing users to plan, track, and complete their learning process in a single platform.'
      },
      {
        type: 'bullets',
        content: [
          '🤖 [AI assistant] that generates and adapts Studyplans in real time.',
          '📚 Structured [Studyplans] with lessons, tasks, and progression.',
          '✅ [Task system] with daily goals and completion tracking.',
          '⏱️ [Focus mode] with timer and task management for deep work.',
          '🏆 [Profile system] with progress stats, streaks, and achievements.'
        ]
      },

      {
        type: 'title',
        content: { text: 'Problem & Approach' }
      },
      {
        type: 'paragraph',
        content:
          'Self-learning often lacks structure, consistency, and guidance. Studymate addresses this by combining [AI-driven planning] with a [task-based system], helping users move from goals to execution without losing direction.'
      },

      {
        type: 'subtitle',
        content: 'Key Benefits'
      },
      {
        type: 'bullets',
        content: [
          'Transforms vague goals into structured learning paths.',
          'Encourages consistency through tasks, streaks, and rewards.',
          'Provides contextual help through an adaptive AI assistant.'
        ]
      },

      {
        type: 'title',
        content: { text: 'System Design' }
      },
      {
        type: 'paragraph',
        content:
          'Studymate is built around a [Studyplan lifecycle], where plans are created, followed, and completed through a combination of user actions and AI interaction.'
      },
      {
        type: 'bullets',
        content: [
          'Studyplans are created privately through chat.',
          'Plans can be saved and reused across sessions.',
          'Users progress through structured lessons and tasks.',
          'Each user interacts with their own personalized version.'
        ]
      },

      {
        type: 'title',
        content: { text: 'Technical Highlights' }
      },
      {
        type: 'paragraph',
        content:
          'Built as a [full-stack application] with a focus on scalability, real-time interaction, and maintainable architecture.'
      },
      {
        type: 'bullets',
        content: [
          'Next.js + TypeScript for a modern full-stack architecture.',
          'Supabase for authentication and real-time database.',
          'Zustand for predictable global state management.',
          'Zod for schema validation and data consistency.',
          'Integration with OpenAI API for dynamic AI responses.'
        ]
      }
    ]
  },
  {
    title: 'Pixi Paint',
    technologies: ['next-js', 'mongo-db', 'tailwind-css'],
    overview:
      'Web-based pixel art platform for creating and sharing 8×8 artwork.\nIncludes a public gallery and small interactive mini-games.',
    description:
      'Pixi Paint is a web-based pixel art platform built around a simple idea: making creative tools accessible instantly. It allows users to create, save, and share 8×8 pixel artwork directly in the browser, without requiring accounts or setup.\nThe platform focuses on removing friction from the creative process, enabling users to start drawing, export their work, or publish it to a public gallery in seconds.',
    code: 'https://github.com/k3vndev/pixi-paint',
    preview: 'https://pixi-paint.vercel.app',
    images: ['1.webp', '2.webp', '3.webp', '4.webp', '5.webp'],
    details: [
      {
        type: 'title',
        content: { text: 'Features' }
      },
      {
        type: 'paragraph',
        content:
          'Pixi Paint provides a focused environment for pixel art creation, emphasizing [simplicity] and [speed] while still delivering meaningful features.'
      },
      {
        type: 'bullets',
        content: [
          '⚡ [Instant access] with [no login required].',
          '🎨 Custom 8×8 [painting system] with smooth interactions.',
          '💾 [Save, export, and re-import] artwork seamlessly.',
          '🌍 [Share artwork] through a public, anonymous gallery.',
          '🎮 Includes [mini-games] that encourage [creativity].'
        ]
      },

      {
        type: 'title',
        content: { text: 'A Solution to a Problem' }
      },
      {
        type: 'paragraph',
        content:
          'Many creative tools introduce barriers like accounts, complex interfaces, or slow workflows. Pixi Paint removes these by prioritizing [accessibility] and [instant interaction], allowing users to create and share without friction.'
      },

      {
        type: 'subtitle',
        content: 'Key Benefits'
      },
      {
        type: 'bullets',
        content: [
          'Reduced friction in the creative process.',
          'Encourages quick and repeated usage.',
          'Balances simplicity with functional depth.'
        ]
      },

      {
        type: 'title',
        content: { text: 'Technical Highlights' }
      },
      {
        type: 'paragraph',
        content:
          'Built with a focus on [clean architecture] and maintainability, using reusable components and clear separation of concerns to ensure scalability and performance.'
      },
      {
        type: 'bullets',
        content: [
          'React + TypeScript for a structured frontend.',
          'Zustand for predictable state management.',
          'Zod for data validation.',
          'MongoDB for persistent data.',
          'Custom UI inspired by retro interfaces.'
        ]
      }
    ]
  },
  {
    title: 'Quizzie',
    technologies: ['react', 'node-js', 'mongo-db'],
    overview:
      'Full-stack platform for creating, managing, and taking custom quizzes.\nSupports authentication, scoring, and interactive quiz experiences.',
    description:
      'Quizzie is a full-stack web application that allows users to create, manage, and share quizzes through an intuitive editor, while also enabling instant play through publicly accessible quiz links.',
    code: 'https://github.com/K3vnDev/quizzie',
    preview: 'https://quizzie-wb.netlify.app',
    images: ['1.webp', '2.webp', '3.webp', '4.webp', '5.webp'],
    details: [
      {
        type: 'title',
        content: { text: 'Features' }
      },
      {
        type: 'paragraph',
        content:
          'Quizzie combines [quiz creation] and [instant play] in a single platform, allowing users to build and share interactive quizzes with minimal friction.'
      },
      {
        type: 'bullets',
        content: [
          '📝 Intuitive [quiz editor] with real-time preview.',
          '🎮 [Instant play] of public quizzes with no login required.',
          '🔗 [Shareable links] for easy distribution.',
          '💾 [Auto-save] system with local and cloud persistence.',
          '✨ Polished UI with smooth interactions and feedback.'
        ]
      },

      {
        type: 'title',
        content: { text: 'Problem & Approach' }
      },
      {
        type: 'paragraph',
        content:
          'Creating and sharing quizzes is often fragmented across tools or requires complex setups. Quizzie simplifies this by combining [creation], [management], and [play] into a single streamlined experience.'
      },

      {
        type: 'subtitle',
        content: 'Key Benefits'
      },
      {
        type: 'bullets',
        content: [
          'Enables quick creation and sharing of interactive quizzes.',
          'Reduces friction with instant access and no login requirements.',
          'Provides a smooth experience for both creators and players.'
        ]
      },

      {
        type: 'title',
        content: { text: 'Core System' }
      },
      {
        type: 'paragraph',
        content:
          'Quizzie is built around a [creation → play → feedback] loop, where users can design quizzes, share them, and immediately interact with the results.'
      },
      {
        type: 'bullets',
        content: [
          'Create quizzes with structured questions and answers.',
          'Customize behavior with timers, layouts, and settings.',
          'Play quizzes through public links with real-time scoring.',
          'Receive feedback and results at the end of each session.'
        ]
      },

      {
        type: 'title',
        content: { text: 'Technical Highlights' }
      },
      {
        type: 'paragraph',
        content:
          'Built as a [full-stack application] with a focus on reliability, state management, and user interaction.'
      },
      {
        type: 'bullets',
        content: [
          'React for building a dynamic and interactive UI.',
          'Zustand for managing application state.',
          'Node.js and Express for backend logic.',
          'MongoDB for storing quizzes and user data.',
          'Zod for validation and data consistency.'
        ]
      }
    ]
  }
]

export const GAMEDEV_PROJECT: Project = {
  title: 'My Snowy Friend',
  technologies: ['unity', 'c-sharp', 'blender'],
  images: ['1.gif', '2.webp', '3.webp', '4.webp'],
  overview:
    'My Snowy Friend is a cozy adventure game where the player helps a snowman rescue a lost cat and guide it back home through a winter world filled with small puzzles and exploration.\nI designed and built the entire project solo, including gameplay systems, mechanics, and overall architecture.',
  description:
    'My Snowy Friend is a cozy puzzle-adventure game built in Unity, where players guide a snowman and a rescued kitten through a series of environmental challenges.\nThe game combines physics-based interactions, state-driven mechanics, and structured level design to create a cohesive gameplay and narrative experience.\nI developed the entire project solo, handling everything from core gameplay systems to level design and art creation.',
  metrics: [
    {
      value: '100%',
      label: 'Solo Dev'
    },
    {
      value: '10+',
      label: 'Unique Mechanics'
    },
    {
      value: '5+',
      label: 'Designed Levels'
    }
  ],
  details: [
    {
      type: 'title',
      content: { text: 'Concept & Experience' }
    },
    {
      type: 'paragraph',
      content:
        'My Snowy Friend is a [cozy puzzle-adventure] focused on guiding a snowman and a kitten through a series of environmental challenges using [logic], [movement], and [physics-based interactions].'
    },
    {
      type: 'bullets',
      content: [
        '🧩 Environmental puzzles built around movement and positioning.',
        '🛷 Dual-entity gameplay with player and sled interactions.',
        '🎬 Narrative progression through cinematics.',
        '❄️ Dynamic mechanics tied to the melting system.'
      ]
    },

    {
      type: 'title',
      content: { text: 'Problem & Approach' }
    },
    {
      type: 'paragraph',
      content:
        'Designing puzzle games requires balancing [challenge], [clarity], and [progression]. This project approaches it through structured levels, controlled mechanics, and gradual complexity, ensuring players learn systems without confusion.'
    },

    {
      type: 'subtitle',
      content: 'Key Benefits'
    },
    {
      type: 'bullets',
      content: [
        'Clear learning curve through section-based level design.',
        'Consistent rules across all interactive systems.',
        'Balanced difficulty without softlocks.'
      ]
    },

    {
      type: 'title',
      content: { text: 'System Design & Architecture' }
    },
    {
      type: 'paragraph',
      content:
        'The game is built around a modular [entity system], allowing shared behavior across multiple gameplay elements while keeping logic scalable and maintainable.'
    },
    {
      type: 'bullets',
      content: [
        'Base [MotionEntity] system extended into player and interactive objects.',
        'Separation between movement logic and interaction rules.',
        'Reusable systems for activators, mechanisms, and physics interactions.',
        'Consistent rules applied across all entities and level elements.'
      ]
    },

    {
      type: 'title',
      content: { text: 'Gameplay Systems' }
    },
    {
      type: 'paragraph',
      content:
        'Gameplay is driven by [state-based interactions], where entities, mechanisms, and environment elements respond dynamically to player actions.'
    },
    {
      type: 'bullets',
      content: [
        'Pressure plates and activators controlling level state.',
        'Directional systems affecting movement and puzzle outcomes.',
        'Sliding mechanics tied to specific entity types.',
        'Hazard systems with cooldown and state conditions.'
      ]
    },

    {
      type: 'title',
      content: { text: 'Level Design' }
    },
    {
      type: 'paragraph',
      content:
        'Levels are structured to teach, challenge, and reinforce mechanics through a controlled progression system.'
    },
    {
      type: 'bullets',
      content: [
        'Levels divided into teaching, challenge, and variation sections.',
        'Grid-based layouts ensuring predictable interactions.',
        'Progression designed to avoid softlocks.',
        'Cinematics used to pace gameplay and narrative.'
      ]
    },

    {
      type: 'title',
      content: { text: 'Technical Highlights' }
    },
    {
      type: 'paragraph',
      content:
        'Developed in Unity with a focus on [state management], [system design], and scalable architecture.'
    },
    {
      type: 'bullets',
      content: [
        'Custom entity architecture for reusable gameplay systems.',
        'State-driven logic for interactions and mechanics.',
        'Separation of concerns across gameplay components.',
        'Structured level flow and progression systems.'
      ]
    },

    {
      type: 'title',
      content: { text: 'Impact on My Development' }
    },
    {
      type: 'paragraph',
      content:
        'This project strengthened my ability to design and manage [complex systems], structure large-scale projects, and maintain consistency across interconnected mechanics.'
    },
    {
      type: 'bullets',
      content: [
        'Improved project planning and system organization.',
        'Experience managing multiple interacting systems.',
        'Stronger understanding of state-driven architecture.',
        'Enhanced problem-solving in complex scenarios.'
      ]
    }
  ]
}
