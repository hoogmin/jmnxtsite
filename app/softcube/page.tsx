"use client"

import JaviCube from "@/components/JaviCube"
import { Canvas } from "@react-three/fiber"

const CubePage = () => {
    return (
        <div style={{ height: "100vh", width: "100vw" }}>
            <Canvas>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <JaviCube />
            </Canvas>
        </div>
    )
}

export default CubePage