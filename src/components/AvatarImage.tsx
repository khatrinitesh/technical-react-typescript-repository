import React from 'react';
import { useAvatarImageStore } from '../store/useAvatarImageStore';
import BtnPrimary from './BtnPrimary';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const AvatarImage:React.FC = () => {
    const {selectedAvatar,avatars,setSelectedAvatar} = useAvatarImageStore();

    const navigate  = useNavigate();

    const handleClick  = () => {
        navigate("/");
    }
  return (
    <>
    <BtnPrimary onClick={handleClick}>Back</BtnPrimary>
      <div className="flex flex-wrap justify-center gap-6">
      {avatars.map((avatar, index) => (
        <motion.div
          key={index}
          className="relative"
          whileHover={{ scale: 1.1 }} // Scale effect on hover
          whileTap={{ scale: 0.9 }} // Scale effect on tap
        >
          <motion.img
            src={avatar}
            alt={`Avatar ${index}`}
            className={`w-20 h-20 rounded-full object-cover cursor-pointer border-4 ${
              selectedAvatar === avatar ? 'border-blue-500' : 'border-transparent'
            }`}
            onClick={() => setSelectedAvatar(avatar)} // Set selected avatar on click
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }} // Fade-in effect for avatars
          />
        </motion.div>
      ))}
    </div>
    </>
  );
}

export default AvatarImage;
