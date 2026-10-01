// Add a public asset path to src. Empty paths render sockets in the case study.
export const bloxelsMedia = {
    world: { type: "video", src: "", title: "3D world generation and chunk streaming", caption: "Surface and underground generation across vertical bands, including the cave field and chunk boundaries." },
    pathfinding: { type: "video", src: "", title: "Voxel A* path debug view", caption: "On-demand traversal through the generated world, including diagonal movement, jump-up, and step-down transitions." },
    structures: { type: "video", src: "", title: "Structure selection, export, and import", caption: "Select voxel bounds, choose an origin, export relative block coordinates, and import the .blxl structure elsewhere." },
} satisfies Record<string, { type: "image" | "video"; src: string; title: string; caption: string }>;
