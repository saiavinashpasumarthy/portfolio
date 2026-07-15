import {motion, AnimatePresence} from "framer-motion";
import {useEffect, useState} from "react";

interface LoadingScreenProps {
    children: React.ReactNode;
}
export default function LoadingScreen({children}: LoadingScreenProps) {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <AnimatePresence>
                {isLoading && (
                    <motion.div className="loading-screen" initial={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.5}}>
                        <motion.h1 className="loading-logo gradient-text" initial={{opacity: 0, scale:0.8,}} animate={{opacity: 1,scale:1}} transition={{duration:0.8,}}>
                            SA
                        </motion.h1>
                    <motion.div
    className="loading-bar" initial={{width: 0}} animate={{width:220}} transition={{duration: 2, ease: "easeInOut",}} />
    </motion.div>
                )}
            </AnimatePresence>
            {!isLoading && children}
        </>
    );
}