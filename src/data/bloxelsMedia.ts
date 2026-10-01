// Add a public asset path to src. Empty paths render sockets in the case study.
export const bloxelsMedia = {
    world: { type: "video", src: "", title: "3D world generation and chunk streaming", caption: "Surface and underground generation across vertical bands, including the cave field and chunk boundaries." },
    maze: { type: "video", src: "/images/projects/bloxels/AStarMaze.mp4", title: "A* maze demonstration", caption: "A* searching for the best route through a flat voxel maze, shown in the engine’s path-debug view." },
    step: { type: "video", src: "/images/projects/bloxels/AStarStep.mp4", title: "A* step-up demonstration", caption: "A raised step changes the traversal choices and resulting path through the voxel environment." },
    sampling: { type: "video", src: "/images/projects/bloxels/ColumnSamplingCropped.mp4", title: "Column sampling optimization", caption: "Sampling column-based world-generation values once per column instead of repeating them for every block: 16× fewer evaluations of those samples per chunk." },
    structures: { type: "video", src: "", title: "Structure selection, export, and import", caption: "Select voxel bounds, choose an origin, export relative block coordinates, and import the .blxl structure elsewhere." },
} satisfies Record<string, { type: "image" | "video"; src: string; title: string; caption: string }>;
