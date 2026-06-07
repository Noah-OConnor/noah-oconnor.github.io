---
slug: "bloxels"
title: "Bloxels"
description: "An open world sandbox game inspired by Terraria and Minecraft."
engine: "Unreal Engine"
languages: ["C++", "Blueprints"]
genre: "Voxel Sandbox"
role: "Solo"
status: "Prototype"
coverImage: "/images/projects/bloxels/bloxels16x9.jpg"
sections:
  - title: "About This Game"
    items:
      - type: "text"
        body: "Bloxels is a dynamic sandbox game where you shape the world block by block and take on fast-paced combat 
        against hostile creatures. Explore an endlessly generated terrain filled with mountains, rivers, and biomes, all 
        while building, mining, and fighting to survive. Bloxels delivers a responsive, creative experience built for 
        both action and exploration."
        
  - title: "Voxel Engine and Optimization"
    items:
      - type: "text"
        body: "Bloxels started as a personal challenge to build a voxel engine from scratch and quickly grew into a 
        fully featured, procedurally generated sandbox game. I used Unreal Engine's ProceduralMeshComponent to manually 
        construct voxel geometry, generating all vertices, triangles, normals, and UVs for each mesh. Chunks were 
        organized into 16 by 16 by 16 voxel grids, and I wrote the systems to scale dynamically as the world expanded."

      - type: "text"
        body: "To keep performance under control, I implemented hidden face removal to avoid rendering unseen geometry. 
        This reduced chunk triangle counts from over 24,000 to roughly 1,300. I later applied Greedy Meshing to merge 
        visible voxel faces across axes, which significantly cut down draw calls and memory usage. Originally 
        implemented using six separate directional checks, I refactored the algorithm into three clean, generalized 
        functions for better maintainability and performance."

  - title: "World Generation and Async Chunk Loading"
    items:
      - type: "text"
        body: "Bloxels features infinite procedural terrain generated at runtime using Fast Noise Generator. I used 
        layered noise algorithms like Perlin and Simplex to shape elevation, river placement, and biome transitions 
        based on temperature and height. These parameters were inspired by procedural generation techniques used in 
        early Minecraft development talks and adapted to Unreal's coordinate systems."

      - type: "text"
        body: "To maintain smooth performance during exploration, I implemented asynchronous chunk loading. Using 
        FNonAbandonableTask, I offloaded heavy mesh generation to background threads while preserving the ability to 
        return data safely to the main thread for mesh creation. Chunk generation was broken into three clear stages: 
        noise-based voxel data, mesh data generation after neighbor checks, and final mesh construction. This structure 
        eliminated frame hitches and allowed consistent hidden face culling between neighboring chunks."

  - title: "Voxel Data System and Materials"
    items:
      - type: "text"
        body: "I designed the voxel system to support a wide range of block types by implementing a voxel properties 
        data table. This defined each block's ID, material, transparency, and other gameplay traits. The system allowed 
        the game to manage a growing set of block types without needing to duplicate logic or assets."

      - type: "text"
        body: "To optimize material use across all voxel types, I created a texture atlas and built a smart material 
        capable of UV shifting based on voxel data. This allowed every block type to share a single master material 
        while still displaying unique textures per face. It greatly simplified material management and improved 
        performance by minimizing shader switches and draw calls."

  - title: "Player Interaction and Camera Systems"
    items:
      - type: "text"
        body: "I implemented first- and third-person camera modes with the ability to switch seamlessly during gameplay. 
        Block interaction was built with accurate hit detection for placing and breaking blocks, and used the voxel data 
        table to control placement logic and item return. This allowed for a smooth and consistent building system that 
        felt responsive and readable."

      - type: "text"
        body: "These systems laid the foundation for player-driven world shaping and opened the door to future gameplay 
        features like construction, resource collection, and base building. The interaction design prioritized clarity 
        and responsiveness, with every action giving players immediate feedback."
---