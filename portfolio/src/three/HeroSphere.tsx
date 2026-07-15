import{Float,Points,PointMaterial}from"@react-three/drei";
import {useMemo} from"react";
import MathUtils from"three/src/math/MathUtils";
import * as THREE from"three";
export default function HeroSphere() {
    const positions = useMemo(() => {
        const array = new Float32Array(2500 * 3);
        for (let i = 0; i < 2500; i++) {
            const radius=2;
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);
        array[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        array[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        array[i * 3 + 2] = radius * Math.cos(phi);
        }
    return array;
}, []);
return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <Points positions={positions}>
            <PointMaterial
                transparent
                color="#FFD700"
                size={0.04}
                sizeAttenuation
            depthWrite={false}
            />
        </Points>
    </Float>
);
}