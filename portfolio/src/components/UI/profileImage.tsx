import {motion} from "framer-motion";
import profileImage from "../../assets/profile image.jpeg";

export default function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0 , scale: 0.8}}
      animate={{ opacity: 1 , scale: 1}}
      transition={{ duration: 0.8, }}
      className="relative flex items-center justify-center"
    >
        <div className="gold-orb" />
      <img src={profileImage} alt="Sai Avinash" className="relative w-80 h-80 object-cover rounded-full border border-yellow-500/30" />
    </motion.div>
  );
}