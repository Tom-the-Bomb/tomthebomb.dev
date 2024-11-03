
# Personal Website

- Located at [tomthebomb.dev](https://tomthebomb.dev)

- A revamped version of my old website, which can be found at [old.tomthebomb.dev](https://old.tomthebomb.dev)
    - [GitHub](https://github.com/Tom-the-Bomb/old-tomthebomb.dev)

- Meant to showcase my projects and interests.

Made with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com)

- **Image Pre-processing**
    - Converts iOS `HEIC/HEIF` images to `JPEG` using `process_images.py`
    - Strips all GPS & location EXIF data from all images
    - Generates a smaller version of the image for faster initial page loads with a filename of `{filename}_small.jpg` (if it does not already exist)

    Install script dependencies by running:

        ```powershell
        py -m pip install -r requirements/dev.txt
        ```
