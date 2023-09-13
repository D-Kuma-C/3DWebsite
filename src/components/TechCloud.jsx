import React, { Suspense } from "react";
import { TagCloud } from "@frank-mayer/react-tag-cloud";
// same as: import TagCloud from "@frank-mayer/react-tag-cloud"
import { SectionWrapper } from "../hoc";
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from './Loader';
import { Canvas } from '@react-three/fiber';

const TechCloud = () => {
    return (
        <Canvas>
            <Suspense >
                <OrbitControls enableZoom={false} />
                <TagCloud>
                    {[
                        "VSCode",
                        "TypeScript",
                        "React",
                        "Preact",
                        "Parcel",
                        "Jest",
                        "Next",
                        "ESLint",
                        "Framer Motion",
                        "Three.js",
                    ]}
                </TagCloud>
            </Suspense>
        </Canvas>
    )
}

export default SectionWrapper(TechCloud);