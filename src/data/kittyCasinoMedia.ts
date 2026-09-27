// Set src to a public asset path to replace a socket with an image or video.
export const kittyCasinoMedia = {
    planning: { type: "image", src: "", title: "Production planning and team coordination", caption: "Planning artifacts connecting parallel feature work, team responsibilities, and release priorities." },
    release: { type: "image", src: "", title: "Release testing and follow-up", caption: "Representative test and issue records showing cross-feature checks and release support." },
} satisfies Record<string, { type: "image" | "video"; src: string; title: string; caption: string }>;
