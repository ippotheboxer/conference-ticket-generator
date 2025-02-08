import React, { useState } from 'react';
import uploadIcon from "../assets/images/icon-upload.svg";
import infoIcon from "../assets/images/icon-info.svg";
import Label from './label';

interface formElementProps {
    title: string,
    htmlFor: string
}

const UploadPhotoElement: React.FC<formElementProps> = ({ title }) => {
    const [image, setImage] = useState<string>("");
    const [imageFail, setImagefail] = useState<boolean>(false);

    const onImageChange = (event: any) => {
        const file = event.target.files[0];
        
        if (event.target.files && event.target.files[0] && file.size < 500000) {
          setImage(URL.createObjectURL(event.target.files[0]));
        } else if (file.size > 500000) {
            setImagefail(true);
        }
       }

  return (
    <>
    <Label title='Upload Avatar' />
    <div className='flex items-center flex-col text-center mt-1 w-full text-neutral-300 bg-neutral/10 p-4 rounded-md border-dashed border border-neutral-500'>
        <img src={image === "" ? uploadIcon : image} alt="preview image" className='w-12 h-12 bg-neutral/12 p-2 rounded-md' />
        <label htmlFor="filePicker" className='text-sm pt-2 inconsolata-regular text-neutral-500'>Drag or drop or click to upload</label>
        <input
        type="file" 
        accept="image/jpeg, image/png"
        id="filePicker"
        style={{display: 'none'}}
        onChange={onImageChange} 
        />
    </div>
    {imageFail ? (
        <p className='mt-2 text-orange-500 text-sm inconsolata-regular flex flex-row items-center'>
            <img src={infoIcon} alt="Information icon" className='w-5 h-5 mr-1' />
            File too large. Please upload a photo under 500KB.
        </p>
    ) : (
        <p className='mt-2 text-neutral-500 text-sm inconsolata-regular flex flex-row items-center'>
            <img src={infoIcon} alt="Information icon" className='w-5 h-5 mr-1' />
            Upload your photo (JPG or PNG, max size: 500KB).
        </p>
    )}
    </>
  );
}

export default UploadPhotoElement;