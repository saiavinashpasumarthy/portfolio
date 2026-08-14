import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Detect WebGL support at module load time
function hasWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas');
    const ctx =
      canvas.getContext('webgl2') ||
      canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl');
    if (!ctx) return false;
    // Check for actual GPU availability
    const ext = (ctx as WebGLRenderingContext).getExtension('WEBGL_debug_renderer_info');
    if (ext) {
      const vendor = (ctx as WebGLRenderingContext).getParameter(ext.UNMASKED_VENDOR_WEBGL as number);
      // Replit preview environment returns 0xffff (no GPU)
      if (vendor === 0xffff || vendor === 65535) return false;
    }
    return true;
  } catch {
    return false;
  }
}

const WEBGL_AVAILABLE = typeof document !== 'undefined' && hasWebGL();

// ── CSS-only fallback ──────────────────────────────────────────────────────────
function NeuralSphereFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(255,215,0,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Orbiting rings */}
      {[160, 230, 300, 360].map((size, i) => (
        <div
          key={i}
          className="absolute rounded-full border"
          style={{
            width: size,
            height: size,
            borderColor: `rgba(255,215,0,${0.14 - i * 0.025})`,
            animation: `spin ${12 + i * 5}s linear infinite ${i % 2 === 0 ? '' : 'reverse'}`,
          }}
        />
      ))}

      {/* Monogram */}
      <div
        className="relative z-10 select-none"
        style={{
          fontSize: '6rem',
          fontWeight: 700,
          fontFamily: 'Space Grotesk, sans-serif',
          background: 'linear-gradient(135deg, #FFD700 0%, #FFC107 60%, #FF8C00 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          filter: 'drop-shadow(0 0 40px rgba(255,215,0,0.25))',
        }}
      >
        SA
      </div>

      {/* Orbiting dots */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: i % 3 === 0 ? 5 : 3,
            height: i % 3 === 0 ? 5 : 3,
            background: '#FFD700',
            opacity: 0.3 + (i % 3) * 0.15,
            top: `calc(50% + ${115 * Math.sin((deg * Math.PI) / 180)}px)`,
            left: `calc(50% + ${115 * Math.cos((deg * Math.PI) / 180)}px)`,
            boxShadow: '0 0 8px rgba(255,215,0,0.7)',
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  );
}

// ── Three.js sphere ────────────────────────────────────────────────────────────
function SphereParticles({
  mouseRef,
}: {
  mouseRef: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const groupRef = useRef<THREE.Group>(null);

  const { positions, colors, linePositions } = useMemo(() => {
    const count = 900;
    const radius = 2.5;
    const posArr: number[] = [];
    const colArr: number[] = [];
    const pts: THREE.Vector3[] = [];

    for (let i = 0; i < count; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      const r = radius * (0.92 + Math.random() * 0.08);
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      posArr.push(x, y, z);
      pts.push(new THREE.Vector3(x, y, z));
      const t = Math.random();
      if (t < 0.5) colArr.push(1.0, 0.84, 0.0);
      else if (t < 0.8) colArr.push(1.0, 0.757, 0.027);
      else colArr.push(1.0, 0.549, 0.0);
    }

    const lineArr: number[] = [];
    const threshold = 0.7;
    for (let i = 0; i < count && lineArr.length < 10800; i++) {
      for (let j = i + 1; j < count && lineArr.length < 10800; j++) {
        if (pts[i].distanceTo(pts[j]) < threshold) {
          lineArr.push(pts[i].x, pts[i].y, pts[i].z, pts[j].x, pts[j].y, pts[j].z);
        }
      }
    }

    return {
      positions: new Float32Array(posArr),
      colors: new Float32Array(colArr),
      linePositions: new Float32Array(lineArr),
    };
  }, []);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.08;
    groupRef.current.rotation.x = Math.sin(t * 0.05) * 0.1;
    groupRef.current.rotation.x +=
      (-mouseRef.current.y * 0.25 - groupRef.current.rotation.x) * 0.03;
    groupRef.current.rotation.z +=
      (mouseRef.current.x * 0.08 - groupRef.current.rotation.z) * 0.03;
    groupRef.current.scale.setScalar(1 + Math.sin(t * 0.4) * 0.018);
  });

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.018}
          sizeAttenuation
          vertexColors
          transparent
          opacity={0.85}
          depthWrite={false}
        />
      </points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#FFD700" transparent opacity={0.11} depthWrite={false} />
      </lineSegments>
    </group>
  );
}

// ── Public component ───────────────────────────────────────────────────────────
export default function NeuralSphere() {
  const mouseRef = useRef({ x: 0, y: 0 });

  if (!WEBGL_AVAILABLE) {
    return <NeuralSphereFallback />;
  }

  return (
    <div
      className="w-full h-full relative"
      onMouseMove={e => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseRef.current = {
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
        };
      }}
      onMouseLeave={() => {
        mouseRef.current = { x: 0, y: 0 };
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 55% at 50% 50%, rgba(255,215,0,0.06) 0%, transparent 70%)',
        }}
      />
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.5} color="#FFD700" />
        <pointLight position={[5, 5, 5]} intensity={1} color="#FFD700" />
        <SphereParticles mouseRef={mouseRef} />
      </Canvas>
    </div>
  );
}
