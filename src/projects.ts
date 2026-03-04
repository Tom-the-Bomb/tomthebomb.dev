export interface Href {
    href: string;
    hrefTitle: string;
}

export interface Tag {
    name: string;
    color: string;
}

const TAGS = {
    python: { name: "Python", color: "text-python" },
    rust: { name: "Rust", color: "text-rust" },
    java: { name: "Java", color: "text-java" },
    ts: { name: "TS", color: "text-typescript" },
    js: { name: "JS", color: "text-javascript" },
    html: { name: "HTML", color: "text-html" },
    css: { name: "CSS", color: "text-css" },
    react: { name: "React", color: "text-react" },
    nextjs: { name: "Next.js", color: "text-nextjs" },
    solidjs: { name: "SolidJS", color: "text-solidjs" },
    vite: { name: "Vite", color: "text-vite" },
    tailwind: { name: "Tailwind", color: "text-tailwind" },
    bootstrap: { name: "Bootstrap", color: "text-bootstrap" },
    wasm: { name: "WebAssembly", color: "text-webassembly" },
    webgl: { name: "WebGL", color: "text-webgl" },
    flask: { name: "Flask", color: "text-flask" },
    axum: { name: "Axum", color: "text-axum" },
    fastapi: { name: "FastAPI", color: "text-fastapi" },
    mongo: { name: "MongoDB", color: "text-mongo" },
    d1: { name: "D1", color: "text-cloudflare" },
    r2: { name: "R2", color: "text-cloudflare" },
    sympy: { name: "SymPy", color: "text-sympy" },
    p5: { name: "p5.js", color: "text-p5" },
    d3: { name: "D3.js", color: "text-d3" },
    leaflet: { name: "Leaflet", color: "text-leaflet" },
    swiper: { name: "Swiper", color: "text-swiper" },
    discordpy: { name: "discord.py", color: "text-discordpy" },
} as const satisfies Record<string, Tag>;

export interface ProjectData {
    name: string;
    github: string;
    description: string;
    hrefs?: Href[];
    logo?: string;
    imgClass?: string;
    tags?: Tag[];
}

export const projects: ProjectData[] = [
    {
        name: "Sketch a Fourier",
        github: "https://github.com/Tom-the-Bomb/fourier-drawer",
        hrefs: [
            { href: "https://fourier.tomthebomb.dev", hrefTitle: "Website" },
        ],
        logo: "fourier-drawer",
        tags: [TAGS.p5, TAGS.ts, TAGS.html, TAGS.css, TAGS.vite],
        description:
            "Discrete Fourier Transform visualizer that renders real-time drawings and SVGs as animated rotating vectors.",
    },
    {
        name: "Matrixflow",
        github: "https://github.com/Tom-the-Bomb/matrixflow",
        hrefs: [
            {
                href: "https://matrixflow.readthedocs.io/",
                hrefTitle: "Docs",
            },
        ],
        logo: "matrixflow",
        tags: [TAGS.python],
        description:
            "Linear algebra library providing high-performance matrix & vector operations, transformations, and row reductions.",
    },
    {
        name: "Boba Log",
        github: "https://github.com/Tom-the-Bomb/boba-log",
        hrefs: [{ href: "https://boba.tomthebomb.dev", hrefTitle: "Website" }],
        logo: "boba-log",
        tags: [TAGS.d1, TAGS.r2, TAGS.tailwind, TAGS.ts, TAGS.nextjs],
        description:
            "Full-stack web application for tracking boba consumption per shop over time with analytics and metrics.",
    },
    {
        name: "Brainfuck-web & rs",
        github: "https://github.com/Tom-the-Bomb/brainfuck-web",
        hrefs: [
            {
                href: "https://brainfuck.tomthebomb.dev",
                hrefTitle: "Website",
            },
            {
                href: "https://crates.io/crates/brainfuck-exe",
                hrefTitle: "Crates.io",
            },
        ],
        logo: "brainfuck-web",
        tags: [TAGS.rust, TAGS.wasm, TAGS.html, TAGS.css, TAGS.js],
        description:
            "Online brainfuck executor using WebAssembly bindings for a Rust-based interpreter crate.",
    },
    {
        name: "MTR History",
        github: "https://github.com/Tom-the-Bomb/mtr-history",
        hrefs: [{ href: "https://mtr.tomthebomb.dev", hrefTitle: "Website" }],
        logo: "mtr-history",
        tags: [TAGS.d3, TAGS.react, TAGS.tailwind],
        description:
            "Interactive timeline showcasing the development of Hong Kong's MTR system with smooth animated transitions.",
    },
    {
        name: "Bomb Paste",
        github: "https://github.com/Tom-the-Bomb/bomb-paste",
        hrefs: [{ href: "https://paste.tomthebomb.dev", hrefTitle: "Website" }],
        logo: "bomb-paste",
        imgClass: "rounded-b-2xl",
        tags: [
            TAGS.rust,
            TAGS.axum,
            TAGS.bootstrap,
            TAGS.html,
            TAGS.js,
            TAGS.mongo,
        ],
        description:
            "Online pastebin service with a public REST API for fast text and code sharing.",
    },
    {
        name: "Ferrous Imagic Editor",
        github: "https://github.com/Tom-the-Bomb/imaging-app",
        hrefs: [{ href: "https://image.tomthebomb.dev", hrefTitle: "Website" }],
        logo: "ferrous-imagic-editor",
        tags: [TAGS.rust, TAGS.axum, TAGS.html, TAGS.bootstrap, TAGS.js],
        description:
            "Blazingly fast web app that applies various image effects onto user-uploaded images.",
    },
    {
        name: "Discord Games",
        github: "https://github.com/Tom-the-Bomb/discord-games",
        logo: "discord-games",
        tags: [TAGS.python, TAGS.discordpy],
        description:
            "Collection of games (2048, chess, battleship, etc.) as a library for seamless discord.py integration.",
    },
    {
        name: "Bomb Bot",
        github: "https://github.com/Tom-the-Bomb/BombBot",
        hrefs: [
            {
                href: "https://discord.com/oauth2/authorize?client_id=819345387524456468",
                hrefTitle: "Invite",
            },
        ],
        logo: "bombbot",
        tags: [TAGS.python, TAGS.discordpy],
        description:
            "Multifunctional Discord bot with image manipulation, math graphing, code execution, and games.",
    },
    {
        name: "Math Solver",
        github: "https://github.com/Tom-the-Bomb/math-solver",
        hrefs: [{ href: "https://math.tomthebomb.dev", hrefTitle: "Website" }],
        logo: "math-solver",
        tags: [TAGS.python, TAGS.flask, TAGS.sympy, TAGS.react],
        description:
            "Solves, evaluates, and graphs symbolic math expressions using a custom Lexer/Parser/AST with SymPy.",
    },
    {
        name: "Pascal's Triangle",
        github: "https://github.com/Tom-the-Bomb/pascals-triangle",
        hrefs: [
            { href: "https://pascals.tomthebomb.dev", hrefTitle: "Website" },
        ],
        logo: "pascals-triangle",
        tags: [TAGS.react, TAGS.bootstrap],
        description:
            "Dynamic and interactive Pascal's Triangle visualization showcasing patterns and use-cases.",
    },
    {
        name: "Doc Search",
        github: "https://github.com/Tom-the-Bomb/doc-search",
        hrefs: [
            {
                href: "https://pypi.org/project/doc-search/",
                hrefTitle: "PyPI",
            },
        ],
        logo: "doc-search",
        tags: [TAGS.python],
        description:
            "Library providing structured search and parsing for Sphinx-based and C/C++ documentation.",
    },
    {
        name: "Async TIO",
        github: "https://github.com/Tom-the-Bomb/async-tio",
        hrefs: [
            {
                href: "https://pypi.org/project/async-tio/",
                hrefTitle: "PyPI",
            },
        ],
        logo: "tio",
        tags: [TAGS.python],
        description:
            "Async library for safe, sandboxed code execution via tio.run's API.",
    },
    {
        name: "F-Stop",
        github: "https://github.com/f-stop-lang/f-stop-rply",
        hrefs: [{ href: "https://pypi.org/project/f-stop", hrefTitle: "PyPI" }],
        logo: "fstop",
        tags: [TAGS.python],
        description:
            "Custom scripting language for accelerating image processing workflows with a full lexer/parser/AST runtime.",
    },
    {
        name: "Akinator.py & .rs",
        github: "https://github.com/Tom-the-Bomb/akinator.py",
        hrefs: [
            {
                href: "https://pypi.org/project/akinator.py/",
                hrefTitle: "PyPI",
            },
            {
                href: "https://crates.io/crates/akinator-rs",
                hrefTitle: "Crates.io",
            },
        ],
        logo: "akinator",
        tags: [TAGS.rust, TAGS.python],
        description:
            "Wrapper around the Akinator API providing a gameloop-like interface. Rust core with Python bindings via PyO3.",
    },
    {
        name: "NANA Web",
        github: "https://github.com/Tom-the-Bomb/nana-web",
        logo: "nana-web",
        tags: [TAGS.react, TAGS.flask, TAGS.mongo, TAGS.r2],
        description:
            "Medical device dashboard for NANA neurological assessment devices with auth and patient management.",
    },
    {
        name: "HK Photos Map",
        github: "https://github.com/Tom-the-Bomb/hk-photos-map",
        hrefs: [{ href: "https://hk.tomthebomb.dev", hrefTitle: "Website" }],
        logo: "hk-photos-map",
        tags: [TAGS.leaflet, TAGS.swiper, TAGS.vite],
        description:
            "Interactive map displaying geotagged photos from Hong Kong with clustering and carousels.",
    },
    {
        name: "Viewfinder",
        github: "https://github.com/Tom-the-Bomb/viewfinder",
        logo: "viewfinder",
        tags: [
            TAGS.solidjs,
            TAGS.mongo,
            TAGS.r2,
            TAGS.tailwind,
            TAGS.ts,
            TAGS.webgl,
        ],
        description:
            "Web-based image editor and image-hosting app with an extensive array of features comparable to Lightroom and VSCO.",
    },
    {
        name: "Bomb CDN",
        github: "https://github.com/Tom-the-Bomb/bomb-cdn",
        logo: "bomb-cdn",
        tags: [TAGS.rust, TAGS.axum],
        description:
            "File system based CDN service with a complete REST API for persistent file storage.",
    },
    {
        name: "AIO Piston",
        github: "https://github.com/Tom-the-Bomb/aio-piston",
        logo: "aio-piston",
        tags: [TAGS.python],
        description:
            "Async Python wrapper for the Piston API, allowing for easy code execution in 70+ languages.",
    },
    {
        name: "Number Slider",
        github: "https://github.com/Tom-the-Bomb/number-slider",
        logo: "number-slider",
        tags: [TAGS.java],
        description:
            "Custom number slider puzzle game built in Java with a custom game engine, featuring various difficulty settings.",
    },
];
