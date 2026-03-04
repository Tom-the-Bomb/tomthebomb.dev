interface Href {
    href: string;
    hrefTitle: string;
}

interface Tag {
    name: string;
    color: string;
}

export interface ProjectData {
    name: string;
    github: string;
    description: string;
    hrefs?: Href[];
    logo?: string;
    imgStyles?: string;
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
        tags: [
            { name: "p5.js", color: "text-p5" },
            { name: "TS", color: "text-typescript" },
            { name: "HTML", color: "text-html" },
            { name: "CSS", color: "text-css" },
            { name: "Vite", color: "text-vite" },
        ],
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
        tags: [{ name: "Python", color: "text-python" }],
        description:
            "Linear algebra library providing high-performance matrix & vector operations, transformations, and row reductions.",
    },
    {
        name: "Boba Log",
        github: "https://github.com/Tom-the-Bomb/boba-log",
        hrefs: [{ href: "https://boba.tomthebomb.dev", hrefTitle: "Website" }],
        logo: "boba-log",
        tags: [
            { name: "D1", color: "text-cloudflare" },
            { name: "R2", color: "text-cloudflare" },
            { name: "Tailwind", color: "text-tailwind" },
            { name: "TS", color: "text-typescript" },
            { name: "Next.js", color: "text-nextjs" },
        ],
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
        tags: [
            { name: "Rust", color: "text-rust" },
            { name: "WebAssembly", color: "text-webassembly" },
            { name: "HTML", color: "text-html" },
            { name: "CSS", color: "text-css" },
            { name: "JS", color: "text-javascript" },
        ],
        description:
            "Online brainfuck executor using WebAssembly bindings for a Rust-based interpreter crate.",
    },
    {
        name: "MTR History",
        github: "https://github.com/Tom-the-Bomb/mtr-history",
        hrefs: [{ href: "https://mtr.tomthebomb.dev", hrefTitle: "Website" }],
        logo: "mtr-history",
        tags: [
            { name: "D3.js", color: "text-d3" },
            { name: "React", color: "text-react" },
            { name: "Tailwind", color: "text-tailwind" },
        ],
        description:
            "Interactive timeline showcasing the development of Hong Kong's MTR system with smooth animated transitions.",
    },
    {
        name: "Bomb Paste",
        github: "https://github.com/Tom-the-Bomb/bomb-paste",
        hrefs: [{ href: "https://paste.tomthebomb.dev", hrefTitle: "Website" }],
        logo: "bomb-paste",
        imgStyles: "rounded-b-2xl",
        tags: [
            { name: "Rust", color: "text-rust" },
            { name: "Axum", color: "text-axum" },
            { name: "Bootstrap", color: "text-bootstrap" },
            { name: "HTML", color: "text-html" },
            { name: "JS", color: "text-javascript" },
            { name: "MongoDB", color: "text-mongo" },
        ],
        description:
            "Online pastebin service with a public REST API for fast text and code sharing.",
    },
    {
        name: "Ferrous Imagic Editor",
        github: "https://github.com/Tom-the-Bomb/imaging-app",
        hrefs: [{ href: "https://image.tomthebomb.dev", hrefTitle: "Website" }],
        logo: "ferrous-imagic-editor",
        tags: [
            { name: "Rust", color: "text-rust" },
            { name: "Axum", color: "text-axum" },
            { name: "HTML", color: "text-html" },
            { name: "Bootstrap", color: "text-bootstrap" },
            { name: "JS", color: "text-javascript" },
        ],
        description:
            "Blazingly fast web app that applies various image effects onto user-uploaded images.",
    },
    {
        name: "Discord Games",
        github: "https://github.com/Tom-the-Bomb/discord-games",
        logo: "discord-games",
        tags: [
            { name: "Python", color: "text-python" },
            { name: "discord.py", color: "text-discordpy" },
        ],
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
        tags: [
            { name: "Python", color: "text-python" },
            { name: "discord.py", color: "text-discordpy" },
        ],
        description:
            "Multifunctional Discord bot with image manipulation, math graphing, code execution, and games.",
    },
    {
        name: "Math Solver",
        github: "https://github.com/Tom-the-Bomb/math-solver",
        hrefs: [{ href: "https://math.tomthebomb.dev", hrefTitle: "Website" }],
        logo: "math-solver",
        tags: [
            { name: "Python", color: "text-python" },
            { name: "SymPy", color: "text-sympy" },
            { name: "React", color: "text-react" },
        ],
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
        tags: [
            { name: "React", color: "text-react" },
            { name: "Bootstrap", color: "text-bootstrap" },
        ],
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
        tags: [{ name: "Python", color: "text-python" }],
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
        tags: [{ name: "Python", color: "text-python" }],
        description:
            "Async library for safe, sandboxed code execution via tio.run's API.",
    },
    {
        name: "F-Stop",
        github: "https://github.com/f-stop-lang/f-stop-rply",
        hrefs: [{ href: "https://pypi.org/project/f-stop", hrefTitle: "PyPI" }],
        logo: "fstop",
        tags: [{ name: "Python", color: "text-python" }],
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
        tags: [
            { name: "Rust", color: "text-rust" },
            { name: "Python", color: "text-python" },
        ],
        description:
            "Wrapper around the Akinator API providing a gameloop-like interface. Rust core with Python bindings via PyO3.",
    },
    {
        name: "NANA Web",
        github: "https://github.com/Tom-the-Bomb/nana-web",
        logo: "nana-web",
        tags: [
            { name: "React", color: "text-react" },
            { name: "Flask", color: "text-flask" },
            { name: "MongoDB", color: "text-mongo" },
            { name: "R2", color: "text-cloudflare" },
        ],
        description:
            "Medical device dashboard for NANA neurological assessment devices with auth and patient management.",
    },
    {
        name: "HK Photos Map",
        github: "https://github.com/Tom-the-Bomb/hk-photos-map",
        hrefs: [{ href: "https://hk.tomthebomb.dev", hrefTitle: "Website" }],
        logo: "hk-photos-map",
        tags: [
            { name: "Leaflet", color: "text-leaflet" },
            { name: "Swiper", color: "text-swiper" },
            { name: "Vite", color: "text-vite" },
        ],
        description:
            "Interactive map displaying geotagged photos from Hong Kong with clustering and carousels.",
    },
    {
        name: "Bomb CDN",
        github: "https://github.com/Tom-the-Bomb/bomb-cdn",
        logo: "bomb-cdn",
        tags: [
            { name: "Rust", color: "text-rust" },
            { name: "Axum", color: "text-axum" },
        ],
        description:
            "File system based CDN service with a complete REST API for persistent file storage.",
    },
];
