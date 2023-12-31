export const navVariants = {
    hidden: {
        opacity: 0,
        y: 75,
        // scale: 0,
        // transition: {
        //     type: "spring",
        //     stiffness: 300,
        //     damping: 140,
        // },
    },
    show: {
        opacity: 1,
        // scale: 1,
        y: 0,
        // transition: {
        //     type: "spring",
        //     stiffness: 80,
        //     delay: 0.1,
        //     ease: "easeOut",
        // },
    },
};

export const fadeIn = (direction, type, delay, duration) => ({
    hidden: {
        x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
    },
    show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            type,
            delay,
            duration,
            ease: "easeOut",
        },
    },
});

export const planetVariants = direction => ({
    hidden: {
        x: direction === "left" ? "-100%" : "100%",
        rotate: 120,
    },
    show: {
        x: 0,
        rotate: 0,
        transition: {
            type: "spring",
            duration: 1.8,
            delay: 0.5,
        },
    },
});
