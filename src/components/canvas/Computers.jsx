/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { Suspense, useEffect, useState } from "react";
import PropTypes from "prop-types";

import * as THREE from "three";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
//the models can be downloaded from sketchFab
const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={1.5} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.75}
        position={isMobile ? [0, -2, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};
Computers.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false); //this use state will tell
  //if we are on the mobile screen.
  useEffect(() => {
    //first of all we add a listner for the changes in the screen size.
    const mediaQuery = window.matchMedia("(max-width:500px)");

    //Set the intial value of the isMobile state variable
    setIsMobile(mediaQuery.matches);

    //Define a callback function to handle changes to the media queries.
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    //Add the callback function as a listner for the changes in the media query.
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      //Remove the listner when the component is unmounted
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;
