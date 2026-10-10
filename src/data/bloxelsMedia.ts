// Add a public asset path to src. Empty paths render sockets in the case study.
export const bloxelsMedia = {
    maze: { type: "video", src: "/images/projects/bloxels/AStarMaze.mp4", title: "A* maze demonstration", caption: "A* searching for the best route through a flat voxel maze, shown in the engine’s path-debug view." },
    step: { type: "video", src: "/images/projects/bloxels/AStarStep.mp4", title: "A* step-up demonstration", caption: "A raised step changes the traversal choices and resulting path through the voxel environment." },
    sampling: { type: "video", src: "/images/projects/bloxels/ColumnSamplingCropped.mp4", title: "Column sampling optimization", caption: "Illustrated surface-height and biome sampling: 4,096 block evaluations → 256 column evaluations in a 16³ chunk. This measures repeated sampling work, not total generation speed." },
} satisfies Record<string, { type: "image" | "video"; src: string; title: string; caption: string }>;
