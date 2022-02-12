import multer from "multer";

import ImageKit from "imagekit";

const storage = multer.memoryStorage();

// Imagekit Config
const image_kit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC as string,
  privateKey: process.env.IMAGEKIT_PRIVATE as string,
  urlEndpoint: "https://ik.imagekit.io/imashish/",
});

// Imagekit upload & delete
export const upload_on_imagekit = async (file: any, filename: string) => {
  const upload = await image_kit.upload({
    file,
    fileName: filename,
    folder: "/habitual-ecommerce",
    useUniqueFileName: true,
    isPrivateFile: false,
  });
  return upload;
};

export const delete_image_from_imagekit = (path: string) => image_kit.deleteFile(path);

export default () => multer({ storage });
