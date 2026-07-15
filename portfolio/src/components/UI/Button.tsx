import{motion} from "framer-motion";

interface Props {
    children: React.ReactNode;
}
export default function Button({ children }: Props) {
    return (
        <motion.button
            whileHover={{ scale: 1.05,y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="gold-button
            px-6 py-3"
        >
            {children}
        </motion.button>
    );
}