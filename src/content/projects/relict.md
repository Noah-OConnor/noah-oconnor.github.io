---
slug: "relict"
title: "Relict"
description: "A third-person roguelike shooter inspired by Risk of Rain 2 and Hades."
engine: "Unity"
languages: ["C#"]
genre: "Roguelike Shooter"
role: "Lead Programmer / System Administrator"
status: "Complete"
coverImage: "/images/projects/relict/Relict16x9.jpg"
media:
  - type: "video"
    src: "https://www.youtube.com/embed/BEzC50Tub3I?si=XRSMKZORVnkMUpiv&enablejsapi=1&autoplay=1&mute=1&playsinline=1"
    imgSrc: "/images/projects/relict/Relict16x9.jpg"
  - type: "image"
    imgSrc: "/images/projects/relict/RelictMedia1.jpg"
  - type: "image"
    imgSrc: "/images/projects/relict/RelictMedia2.jpg"
  - type: "image"
    imgSrc: "/images/projects/relict/RelictMedia3.jpg"
  - type: "image"
    imgSrc: "/images/projects/relict/RelictMedia4.jpg"
  - type: "image"
    imgSrc: "/images/projects/relict/RelictMedia5.jpg"
  - type: "image"
    imgSrc: "/images/projects/relict/RelictMedia6.jpg"
  - type: "image"
    imgSrc: "/images/projects/relict/RelictMedia7.jpg"
  - type: "image"
    imgSrc: "/images/projects/relict/RelictMedia8.jpg"

sections:
  - title: "About This Game"
    items:
      - type: "text"
        body: "Relict is a third-person roguelike shooter built in Unity, combining fast-paced combat with a 
        tarot-inspired power-up system. I served as Vision Holder, Code Lead, and System Administrator—guiding the game 
        from pitch to final build while leading a 15-person team through 9 sprints of agile development."

  - title: "Systems & Architecture"
    items:
      - type: "text"
        body: "Relict's gameplay is built around a dynamic system of tarot-themed powers that combine roguelike 
        randomness with player agency. As the Vision Holder and Technical Lead, I designed the Grace System, a modular 
        stat and ability framework inspired by Risk of Rain 2 and Hades. My goal was to create a persistent, upgradeable 
        loop where players would earn, equip, and combine powers drawn from two tarot categories: Minor Arcana (stat 
        boosts) and Major Arcana (active abilities)."

      - type: "text"
        body: "To support this, I implemented stat tracking and ability slot systems in Unity, with dynamic cooldowns, 
        buffs, and debuffs that responded to player loadouts. Powers could be acquired through Tarot Readings from the 
        High Priestess or enemy drops, and were tied to a scalable inventory system that persisted across levels. Each 
        upgrade or card choice had tangible gameplay effects, encouraging strategic decision-making and replayability."

      - type: "text"
        body: "This system became the core of Relict's progression and identity, giving players flexible builds, 
        meaningful upgrades, and emergent interactions between power sets. It also laid a foundation for scalable 
        content additions; new cards, stat effects, or powers could be integrated with minimal system rework."
        
  - title: "Combat & AI"
    items:
      - type: "text"
        body: "Combat in Relict had to strike a balance between quick readability and roguelike intensity. I created a 
        finite state machine (FSM) AI framework to support modular, reusable enemy behaviors. Enemies like the Crystal 
        Thrall, Ember Wolves, and Ice Golem shared a parent class handling health, knockback, and targeting, while 
        bosses like Justice and The Tower layered on unique attack patterns and hazard interactions."

      - type: "text"
        body: "I implemented key combat systems including hit detection, knockback, and projectile abilities like Silver 
        Shot. Each attack was tuned for visual clarity and feedback, with SFX and VFX cues that made combat readable 
        even in chaotic arenas. My FSM framework enabled easy addition of new enemy types with distinct behavior trees 
        minimizing boilerplate code while supporting variety"

      - type: "text"
        body: "Combined with a custom player controller, responsive stat systems, and tarot-driven loadouts, Relict's 
        combat evolved into a reactive loop that rewarded movement, timing, and build experimentation. The modularity 
        of the AI system also made it easy to create new challenges without reinventing the wheel each time."
        
  - title: "Accessibilty & UX"
    items:
      - type: "text"
        body: "Relict was built to be accessible from the ground up. As the Programming Lead and a Technical Designer, I 
        focused on creating a fully customizable input system and clear, readable interfaces while also working closely 
        with our Accessibility Lead to implement features aligned with our team's internal Accessibility Guidelines. 
        From font readability to motor accessibility, our shared goal was to make the game intuitive and playable for a 
        wide audience, without sacrificing depth."

      - type: "text"
        body: "I developed a custom input and rebinding system that supported seamless switching between keyboard/mouse 
        and gamepad. This included dynamically updating input prompts, ensuring menu parity across devices, and enabling 
        full controller navigation throughout the UI. I also implemented scalable UI elements, clear fonts, 
        high-contrast visuals, and menu structures that aligned with best practices for visual and cognitive 
        accessibility. Working from the guidelines, I helped implement features like separate volume sliders for music 
        and SFX, input sensitivity settings, and UI feedback that never relied solely on color or sound."

      - type: "text"
        body: "Together, these features ensured that Relict could be approached by players with a wide range of input 
        needs and preferences. By building accessibility into the core systems and tools, we improved both usability and 
        polish allowing every player to engage with the game on their terms, without compromising challenge or clarity."

---