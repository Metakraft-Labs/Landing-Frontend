import React, { useContext, useRef, useState } from "react";
// import * as THREE from "three";
import "../Style/brand.css";
import { Modal1, Modal2 } from "../components/modal.jsx";
import AppStore from "../contexts/AppStore";

const InfiniteSpace = () => {
    const [add, setAdd] = useState(1);
    const canvasRef = useRef(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = event => {
        setAdd(0.1);
        setShow(true);
        event.target.classList.add("home-head-3-11");
        event.target.classList.remove("home-head-3-12");
        setTimeout(() => {
            setAdd(1);
            event.target.classList.remove("home-head-3-11");
            event.target.classList.add("home-head-3-12");
        }, 2000);
    };
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = event => {
        setAdd(0.1);
        setShow1(true);
        event.target.classList.add("home-head-3-11");
        event.target.classList.remove("home-head-3-12");
        setTimeout(() => {
            setAdd(1);
            event.target.classList.remove("home-head-3-11");
            event.target.classList.add("home-head-3-12");
        }, 2000);
    };

    const { token } = useContext(AppStore);

    // useEffect(() => {
    //     const scene = new THREE.Scene();
    //     const camera = new THREE.PerspectiveCamera(
    //         70,
    //         window.innerWidth / window.innerHeight,
    //         0.1,
    //         1000,
    //     );
    //     camera.position.set(0.1, 0, 0);
    //     camera.rotation.set(0, 3.14 / 2, 0);
    //     const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });

    //     renderer.setSize(window.innerWidth, Math.min(0.485 * window.innerWidth, window.innerWidth));
    //     // renderer.setClearColor(0x000000, 0);
    //     renderer.setPixelRatio(window.devicePixelRatio);

    //     const stars = [];
    //     function addStar() {
    //         const starGeometry = new THREE.SphereGeometry(0.05, 10, 10);
    //         const starMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
    //         const star = new THREE.Mesh(starGeometry, starMaterial);

    //         const [, y, z] = Array(3)
    //             .fill()
    //             .map(() => THREE.MathUtils.randFloatSpread(100));

    //         star.position.set(THREE.MathUtils.randFloat(-50, 5), y, z);
    //         scene.add(star);
    //         stars.push(star);
    //     }
    //     for (let i = 0; i < 1000; i++) {
    //         addStar();
    //     }

    //     //lighting (wow)
    //     const light = new THREE.AmbientLight(0xffffff);
    //     scene.add(light);
    //     function animate() {
    //         //star positioning
    //         stars.forEach(s => {
    //             s.position.x += add;
    //             if (s.position.x > 5) {
    //                 s.position.x = -50;
    //                 s.position.y = THREE.MathUtils.randFloat(-50, 50);
    //                 s.position.y = THREE.MathUtils.randFloat(-50, 50);
    //             }
    //         });

    //         //window sizing
    //         // renderer.setSize(window.innerWidth,window.innerHeight);
    //         // renderer.setPixelRatio(window.devicePixelRatio);
    //         camera.aspect = window.innerWidth / window.innerHeight;
    //         camera.updateProjectionMatrix();

    //         //show time
    //         requestAnimationFrame(animate);
    //         renderer.render(scene, camera);
    //         //composer.render()
    //     }
    //     animate();
    // });

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
            <div className="home-head" style={{ width: "100%" }}>
                <div className="home-head-1">Making Internet</div>
                <div className="home-head-2">Super Fun!</div>
                <div className="home-head-3">
                    {/* {token ? (
                        <button className="home-head-3-2 home-head-3-12" onClick={handleShow1}>
                            Refer & Win
                        </button>
                    ) : (
                        <button className="home-head-3-1 home-head-3-12" onClick={handleShow}>
                            Early Access
                        </button>
                    )} */}
                </div>
            </div>
            <Modal1 show={show} close={handleClose} />
            <Modal2 show={show1} close={handleClose1} />
        </>
    );
};

export default InfiniteSpace;
