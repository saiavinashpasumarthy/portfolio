import { Canvas } from "@react-three/fiber"; 
import HeroSphere from"./HeroSphere";
export default function Scene() {
    return (
        <Canvas camera={{ position: [0, 0, 5]}}>
            <ambientLight intensity={0.4} />
            <pointLight
            position={[5, 5, 5]}
            intensity={4}
            color="#FFD700"
            />
            <HeroSphere />
        </Canvas>
    );
}