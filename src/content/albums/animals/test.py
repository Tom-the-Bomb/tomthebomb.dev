from PIL import Image

with Image.open('./src/content/albums/animals/20240724_084212168_iOS.heic') as img:
    print(img.format)