"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useMemo, useRef, useState, Suspense, forwardRef, useImperativeHandle } from "react";
import type { CubeFaceData } from "@/features/role-flow/roleFaces";

export type RoleCubeHandle = {
  next: () => void;
  prev: () => void;
  setIndex: (i: number) => void;
};

const FACE_EULERS: THREE.Euler[] = [
  new THREE.Euler(0, 0, 0),                 // front
  new THREE.Euler(0, -Math.PI / 2, 0),      // right
  new THREE.Euler(0, Math.PI, 0),           // back
  new THREE.Euler(0, Math.PI / 2, 0),       // left
  new THREE.Euler(-Math.PI / 2, 0, 0),      // top
  new THREE.Euler(Math.PI / 2, 0, 0),       // bottom
];

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const q = window.matchMedia("(prefers-reduced-motion: reduce)");
    const l = () => setReduced(q.matches);
    l(); q.addEventListener("change", l);
    return () => q.removeEventListener("change", l);
  }, []);
  return reduced;
}

function renderIcon(name?: string) {
  const map: Record<string, string> = {
    vinyl: "💽", calendar: "📅", city: "📍", search: "🔎",
    hourglass: "⏳", star: "⭐", martini: "🍸", cards: "🗂️",
    loop: "🔁", handshake: "🤝"
  };
  return map[name ?? ""] ?? "◎";
}

function CubeCore({ faces, activeIndex }: { faces: CubeFaceData[]; activeIndex: number }) {
  const group = useRef<THREE.Group>(null);
  const target = useRef(new THREE.Quaternion());
  const tmp = useRef(new THREE.Quaternion());
  const reduced = usePrefersReducedMotion();
  const { pointer } = useThree();
  const t0 = useRef(performance.now());

  useEffect(() => {
    target.current.setFromEuler(FACE_EULERS[activeIndex % 6]);
  }, [activeIndex]);

  useFrame((_, delta) => {
    if (!group.current) return;

    const t = (performance.now() - t0.current) / 1000;
    const floatY = reduced ? 0 : Math.sin(t * 0.7) * 0.08;
    group.current.position.set(0, floatY, 0);

    // slerp toward face orientation
    group.current.quaternion.slerp(target.current, 1 - Math.pow(0.0001, delta));

    // subtle pointer tilt
    const tiltX = reduced ? 0 : THREE.MathUtils.clamp(pointer.y * -0.12, -0.2, 0.2);
    const tiltY = reduced ? 0 : THREE.MathUtils.clamp(pointer.x *  0.18, -0.25, 0.25);
    tmp.current.setFromEuler(new THREE.Euler(tiltX, tiltY, 0));
    group.current.quaternion.multiply(tmp.current);
  });

  const s = 2.2;
  const faceAnchors = useMemo(
    () => ([
      { pos: [0, 0,  s/2 + 0.008], rot: [0, 0, 0] },
      { pos: [s/2 + 0.008, 0, 0],  rot: [0, -Math.PI/2, 0] },
      { pos: [0, 0, -s/2 - 0.008], rot: [0, Math.PI, 0] },
      { pos: [-s/2 - 0.008, 0, 0], rot: [0, Math.PI/2, 0] },
      { pos: [0,  s/2 + 0.008, 0], rot: [Math.PI/2, 0, 0] },
      { pos: [0, -s/2 - 0.008, 0], rot: [-Math.PI/2, 0, 0] },
    ] as const),
    []
  );

  return (
    <group ref={group}>
      <mesh>
        <boxGeometry args={[s, s, s]} />
        <meshBasicMaterial color="black" transparent opacity={0.18} />
      </mesh>

      {faceAnchors.map((f, i) => (
        <group key={i} position={f.pos as any} rotation={f.rot as any}>
          {/* subtle face plane */}
          <mesh>
            <planeGeometry args={[s, s]} />
            <meshBasicMaterial color="#e11d48" transparent opacity={0.05} />
          </mesh>

          {/* per-face UI */}
          <Html transform distanceFactor={1.18}>
            <div className="flex h-[220px] w-[220px] flex-col items-center justify-center rounded-2xl bg-black/20 ring-1 ring-[rgba(225,29,72,0.35)] shadow-[0_0_28px_rgba(225,29,72,0.18)] backdrop-blur-[1px]">
              <div className="mb-2 text-2xl drop-shadow-[0_0_10px_rgba(225,29,72,0.55)]">
                {renderIcon(faces[i]?.icon)}
              </div>
              <div className="text-white font-semibold text-center leading-tight px-3">
                {faces[i]?.title ?? `Step ${i + 1}`}
              </div>
              {faces[i]?.blurb && (
                <div className="mt-1 text-white/70 text-xs px-4 text-center">{faces[i].blurb}</div>
              )}
            </div>
          </Html>
        </group>
      ))}
    </group>
  );
}

const RoleCube = forwardRef<RoleCubeHandle, {
  faces: CubeFaceData[];
  className?: string;
  startIndex?: number;
}>(({ faces, className = "", startIndex = 0 }, ref) => {
  const [idx, setIdx] = useState(startIndex);

  useImperativeHandle(ref, () => ({
    next: () => setIdx((i) => (i + 1) % 6),
    prev: () => setIdx((i) => (i + 5) % 6),
    setIndex: (i: number) => setIdx(((i % 6) + 6) % 6),
  }), []);

  return (
    <div className={`relative mx-auto h-[520px] w-full max-w-[700px] ${className}`} aria-label="Role 3D steps">
      <Canvas
        frameloop="always"
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 5.2], fov: 45 }}
      >
        <Suspense fallback={null}>
          <CubeCore faces={faces} activeIndex={idx} />
        </Suspense>
      </Canvas>
      <div className="pointer-events-auto absolute -bottom-3 right-0 flex gap-2">
        <button onClick={() => (ref as any)?.current?.prev?.()} className="rounded-xl px-3 py-1 panel-solid neon-outline">←</button>
        <button onClick={() => (ref as any)?.current?.next?.()} className="rounded-xl px-3 py-1 panel-solid neon-outline">→</button>
      </div>
    </div>
  );
});
RoleCube.displayName = "RoleCube";

export default RoleCube;

