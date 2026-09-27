// Fill src with a public image or video path. Empty paths keep the media sockets visible.
export const multiplayerMedia = {
    combat: { type: "video", src: "", title: "Replicated firing and reloading", caption: "Weapon fire, reload, reserve ammo, and target health viewed across connected clients." },
    latency: { type: "video", src: "", title: "Two-client latency test", caption: "Multiple PIE clients under approximately 150 ms simulated latency and packet loss." },
    abilities: { type: "video", src: "", title: "Runtime ability activation", caption: "Granting and removing ability slots, activating movement abilities, and observing stamina and HUD changes." },
    range: { type: "video", src: "", title: "Target-range debugging", caption: "Spawned dummies, damage/status feedback, and debug keys or logs used to inspect runtime behavior." },
    connection: { type: "video", src: "", title: "Listen-server LAN connection", caption: "Two clients connected to the same listen-server build using the LAN launch workflow." },
} satisfies Record<string, { type: "image" | "video"; src: string; title: string; caption: string }>;
