"use client"

import { useRef } from "react"
import { useFrame, useLoader } from "@react-three/fiber"
import { Box } from "@react-three/drei"
import { Mesh } from "three"
import { TextureLoader } from "three"

const JaviCube = () => {
    const meshRef = useRef<Mesh>(null)

    const texture = useLoader(TextureLoader, "/profile2_clean_square.jpg")

    // Rotate the cube on each frame
    useFrame((_, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 1 * delta
            meshRef.current.rotation.y += 1 * delta
        }
    })

    return (
        <Box ref={meshRef} args={[1, 1, 1]}>
            <meshStandardMaterial attach="material" map={texture} />
        </Box>
    )
}

export default JaviCube