import React, { useState } from 'react';
import uploadIcon from "../assets/images/icon-upload.svg";
import infoIcon from "../assets/images/icon-info.svg";
import Label from './Label';

interface formElementProps {
    title: string;
    name: string;
    onImageUpload: (imageUrl: string) => void;
}

const UploadPhotoElement: React.FC<formElementProps> = ({ title, name, onImageUpload }) => {
    const [image, setImage] = useState<string>("");
    const [imageFail, setImagefail] = useState<boolean>(false);

    const onImageChange = (event: any) => {
        const file = event.target.files[0];
        
        if (event.target.files && event.target.files[0] && file.size < 500000) {
            const imageUrl  = URL.createObjectURL(file);
            setImage(imageUrl);
            onImageUpload(imageUrl);
            setImagefail(false);
        } else if (file.size > 500000) {
            setImagefail(true);
        }
       }

  return (
    <>
    <Label title={title} htmlFor={name} />
    <div className='flex items-center flex-col text-center mt-1 w-full text-neutral-300 bg-neutral/10 py-6 px-4 rounded-md border-dashed border border-neutral-500 hover:bg-neutral/20'>
        <img src={image === "" ? uploadIcon : image} alt="preview image" className={image === "" ? 
            'lg:w-16 lg:h-16 md:w-12 md:h-12 w-8 h-8 bg-neutral/12 lg:p-2 p-1 rounded-md' : 
            'lg:w-20 lg:h-20 md:w-16 md:h-16 w-12 h-12 bg-neutral/12 rounded-md border border-neutral-300'
         } />
            {image === "" ? (
                <label htmlFor="filePicker" className='hover:cursor-pointer text-sm pt-2 inconsolata-regular text-neutral-300'>
                    Drag and drop or click to upload
                </label>
                ) : (
                <div className='flex flex-row pt-4'>
                    <button onClick={() => setImage("")} className='bg-neutral/10 py-1 px-2 rounded-sm underline hover:cursor-pointer mr-3 inconsolata-regular text-base'>Remove image</button> 
                    <label htmlFor='filePicker' className='bg-neutral/10 p-1 rounded-sm hover:cursor-pointer mr-2 inconsolata-regular text-base'>Change image</label>
                </div>
                )}
        
        <input
        type="file" 
        accept="image/jpeg, image/png"
        id="filePicker"
        style={{display: 'none'}}
        onChange={onImageChange}
        name={name}
        />
    </div>
    {imageFail ? (
        <p className='text-xs md:text-sm mt-2 text-orange-500 inconsolata-regular'>
            <img src={infoIcon} alt="Information icon" className='h-4 md:h-5 mr-1 inline-block' />
            File too large. Please upload a photo under 500KB.
        </p>
    ) : (
        <p className='text-xs md:text-sm mt-2 text-neutral-500 inconsolata-regular'>
            <img src={infoIcon} alt="Information icon" className='h-4 md:h-5 mr-1 inline-block' />
            Upload your photo (JPG or PNG, max size: 500KB).
        </p>
    )}
    </>
  );
}

export default UploadPhotoElement;