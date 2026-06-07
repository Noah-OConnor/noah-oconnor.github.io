---
slug: "crimson-knight"
title: "Crimson Knight"
description: "A third-person boss fight Souls-like built in Unreal Engine 5."
engine: "Unreal Engine"
languages: ["C++", "Blueprints"]
genre: "Souls-Like"
role: "Gameplay Programmer / Technical Designer"
status: "Complete"
coverImage: "/images/projects/crimson-knight/CrimsonKnight16x9.jpg"
media:
  - type: "video"
    src: "https://www.youtube.com/embed/RuBQoX2shuc?si=p9GjFjTnTX8PGnOJ&enablejsapi=1&autoplay=1&mute=1&playsinline=1"
  - type: "image"
    imgSrc: "/images/projects/crimson-knight/CrimsonKnightScreenshot1.jpg"
sections:
  - title: "About This Game"
    items:
      - type: "image"
        src: "/images/projects/crimson-knight/CrimsonKnightScreenshot1.jpg"     

      - type: "text"
        body: "Crimson Knight is a brutal third-person Souls-like where you face off against a towering god known as The 
        Absolute in a battle of precision, timing, and raw power. With a limited HUD to guide you, every dodge, strike, 
        and ability must be earned through mastery of the blade."

  - title: "Combat Design"
    items:
      - type: "text"
        body: "Combat in Crimson Knight was built from the ground up to deliver the deliberate pacing and visual 
        telegraphing of a Souls-like, while prioritizing responsive controls and a clean experience without relying on 
        HUD elements. I led the design and implementation of the player's melee combat system using Unreal's Gameplay 
        Ability System (GAS), Animation Montages, and Enhanced Input System combined with custom input buffer and 
        animation cancel systems to balance timing windows with player freedom."
        
      - type: "videoFile"
        src: "/images/projects/crimson-knight/CKLightCombo.mp4"

      - type: "text"
        body: "Beyond basic combos, I prototyped more advanced mechanics like a charge attack, dodge attack, and a 
        projectile slash special inspired by Elden Ring's Rivers of Blood. Each new ability required designing timing 
        logic, animation syncing, SFX, and VFX triggers, which I implemented with tight feedback loops using animation 
        notifies and Niagara effects."

      - type: "videoFile"
        src: "/images/projects/crimson-knight/CKDodgeCancel.mp4"

      - type: "text"
        body: "I focused on animation cancel rules and movement responsiveness to ensure that actions felt weighty 
        without becoming sluggish. Every ability was designed not just to function, but to feel satisfying and 
        intentional, reinforcing the game's single-boss focus. The result is a modular combat system that scales with 
        player mastery while staying readable and rewarding."
        
      - type: "videoFile"
        src: "/images/projects/crimson-knight/CKChargeAttack.mp4"

  - title: "Gameplay and Feel Tuning"
    items:
      - type: "text"
        body: "My core design goal for Crimson Knight was to make every player input feel deliberate and satisfying. I 
        wanted the combat to convey weight without sacrificing responsiveness, and for players to rely on visual and 
        auditory cues instead of traditional HUD elements. This meant refining input timing, ensuring attacks felt 
        impactful, and building a system of clear, readable telegraphs for The Absolute that gave players a fighting 
        chance without explicit prompts or health bars. Achieving the balance between precision and readability was one 
        of the project's most persistent and rewarding challenges."

      - type: "text"
        body: "To reach that goal, I fine-tuned animation cancel windows across all abilities, adjusted blendspace 
        logic for better movement transitions, and prototyped multiple iterations of dodge and roll behavior with 
        varying levels of commitment and recovery. I implemented time-stop effects and slow-motion triggers on boss 
        telegraphs to exaggerate key moments, and designed a charge feedback system using VFX instead of UI. I also 
        reworked some abilities, like jump and dodge into GAS abilities to gain better control over animation timing and
        cancel logic. Everything was tuned in constant iteration to maintain player agency while reinforcing clarity."

      - type: "text"
        body: "This resulted in a gameplay loop that rewards attentiveness and skill without over-explaining itself. 
        Attacks land with satisfying timing, transitions feel fluid, and players learn to anticipate threats based on 
        motion and sound rather than meters or popups. This created a tighter, more immersive experience that keeps the 
        player fully engaged in the fight. No health bars or ability cooldowns required."

  - title: "Gameplay Ability System - GAS"
    items:
      - type: "text"
        body: "At the start of Crimson Knight, I had never worked with Unreal's Gameplay Ability System (GAS), but I 
        knew it could be the key to building a flexible, designer-friendly combat framework. My goal was to create a 
        modular foundation that would allow me to rapidly develop, tune, and iterate on both the Knight's and The 
        Absolute's abilities. I wanted the system to support expressive, animation-driven gameplay while giving me the 
        tools to focus on feel and clarity rather than boilerplate logic or duplicated code."

      - type: "text"
        body: "To get there, I spent time early in pre-production researching GAS architecture and adapting our systems 
        to fit within its framework. I implemented all of the Knight's abilities from rolls and charge attacks to 
        time-stop and projectile slashes using GAS, often extending functionality with Blueprint scripting, animation 
        notifies, and enhanced input bindings. I converted core movement actions like jump and dodge into GAS abilities, 
        which gave me tighter control over animation syncing and cancel rules. With this setup, I could layer gameplay 
        effects, audio, and visual feedback directly into each ability in a unified, modular way."

      - type: "text"
        body: "The end result is a flexible, scalable system that has empowered our team to rapidly iterate on new 
        mechanics without redoing foundational logic. Abilities can be modified, replaced, or combined with minimal 
        overhead, enabling fast experimentation and polish without sacrificing clarity or performance. GAS has become a 
        core part of our workflow powering dozens of unique player and boss abilities and it continues to support the 
        evolving scope and complexity of our game."
---