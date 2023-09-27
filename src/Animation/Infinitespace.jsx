import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import "../Style/brand.css";
import { Modal1, Modal2 } from "../components/modal.jsx";
import { navVariants } from "../utils/motion";

const InfiniteSpace = () => {
    const [add] = useState(1);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const canvasRef = useRef(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);

    useEffect(() => {
        if (isInView) {
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(
                70,
                window.innerWidth / window.innerHeight,
                0.1,
                1000,
            );
            camera.position.set(0.1, 0, 0);
            camera.rotation.set(0, 3.14 / 2, 0);
            const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });

            renderer.setSize(
                window.innerWidth,
                Math.min(0.485 * window.innerWidth, window.innerWidth),
            );
            // renderer.setClearColor(0x000000, 0);
            renderer.setPixelRatio(window.devicePixelRatio);

            const stars = [];
            function addStar() {
                const starGeometry = new THREE.SphereGeometry(0.05, 10, 10);
                const starMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
                const star = new THREE.Mesh(starGeometry, starMaterial);

                const [, y, z] = Array(3)
                    .fill()
                    .map(() => THREE.MathUtils.randFloatSpread(100));

                star.position.set(THREE.MathUtils.randFloat(-50, 5), y, z);
                scene.add(star);
                stars.push(star);
            }
            for (let i = 0; i < 1000; i++) {
                addStar();
            }

            //lighting (wow)
            const light = new THREE.AmbientLight(0xffffff);
            scene.add(light);
            function animate() {
                //star positioning
                stars.forEach(s => {
                    s.position.x += add;
                    if (s.position.x > 5) {
                        s.position.x = -50;
                        s.position.y = THREE.MathUtils.randFloat(-50, 50);
                        s.position.y = THREE.MathUtils.randFloat(-50, 50);
                    }
                });

                //window sizing
                // renderer.setSize(window.innerWidth, window.innerHeight);
                // renderer.setPixelRatio(window.devicePixelRatio);
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                //show time
                requestAnimationFrame(animate);
                renderer.render(scene, camera);
                //composer.render()
            }
            animate();
        }
    }, [isInView]);

    return (
        <>
            <div className="homeBody" style={{ width: "100%" }}>
                <canvas
                    ref={canvasRef}
                    style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        zIndex: "-1",
                        height: "1000",
                    }}
                />
            </div>

            <div
                className={`home-head bg-transparent xl:px-44 px-32 sm:px-16 ss:px-14 xs:px-10 h-[800px] md:h-[780px] xs:h-[600px] ss:h-[650px] flex justify-start items-center`}
            >
                <div>
                    <div className="mt-5 xs:mt-32">
                        <h1 className="text-[#EAEAEA] font-encodeSans leading-[137px] md:leading-[120px] sm:leading-[100px] ss:leading-[85px] xs:leading-[60px] text-[110px] md:text-[100px] sm:text-[100px] ss:text-[80px] xs:text-[50px] font-bold">
                            Create, Launch <br className="xs:hidden ss:hidden sm:hidden" />
                            <span
                                className={`text-transparent bg-clip-text bg-gradient-to-r from-[#016DB0] to-[#01FFCA]`}
                            >
                                Monetize!
                            </span>
                        </h1>
                        <p className="home-partner-4-3 font-spaceGrotesk">
                            3D experiences in a Minute with your community across platforms{" "}
                        </p>
                    </div>
                    <div
                        ref={ref}
                        className={`my-6 mt-10 flex flex-row text-[22px] xs:text-[16px] ss:text-[16px] xs:flex-col font-bold font-inter `}
                    >
                        <motion.button
                            whileInView="show"
                            initial="hidden"
                            variants={navVariants}
                            onClick={() => setShow(true)}
                            // animate={mainControls}
                            // initial="hidden"
                            // transition={{
                            //     duration: 0.5,
                            //     delay: 0.25,
                            // }}
                            // variants={{
                            //     hidden: {
                            //         opacity: 0,
                            //         y: 75,
                            //     },
                            //     show: {
                            //         opacity: 1,
                            //         y: 0,
                            //     },
                            // }}
                            className="home-partner-3 home-head-3-12 w-[277px] h-[79px] xs:w-[160px] xs:h-[48px]  ss:w-[160px] ss:h-[48px]  rounded-[8px]"
                        >
                            Early Access
                        </motion.button>
                        <motion.button
                            whileInView="show"
                            initial="hidden"
                            variants={navVariants}
                            onClick={() => setShow1(true)}
                            className="home-partner-3 home-head-3-12 w-[277px] h-[79px] xs:w-[160px] xs:h-[48px]  ss:w-[160px] ss:h-[48px]  rounded-[8px] xs:ml-0 xs:mt-4 ml-12"
                        >
                            Refer & Win
                        </motion.button>
                    </div>
                </div>
            </div>
            <Modal1 show={show} close={handleClose} />
            <Modal2 show={show1} close={handleClose1} />
        </>
    );
};

export default InfiniteSpace;
