import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const UsePreviewImg = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const maxFileSizeInByte = 2 * 1024 * 1024; //2mb
  const handleChangeImg = (e) => {
    const file = e.target.files[0];

    if (file && file.type.startsWith("image/")) {
      // check file size
      if (file.size > maxFileSizeInByte) {
        toast.info("File size must be less than 2Mb");
        setSelectedFile(null);
        return;
      }
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedFile(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      toast.info("please select an image");
      setSelectedFile(null);
    }
  };

  return { selectedFile, setSelectedFile, handleChangeImg };
};
export default UsePreviewImg;
