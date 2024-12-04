import { Typography } from "@material-tailwind/react";
import { useEffect, useRef, useState } from "react";
import './index.css';
import { Widget10Component, Widget11Component, Widget12Component, Widget13Component, Widget14Component, Widget1Component, Widget2Component, Widget3Component, Widget4Component, Widget5Component, Widget6Component, Widget7Component, Widget8Component, Widget9Component } from "../../../container/Pages/Home";


const Navbar = ({ setWidgetArray, active, setActive }) => {

    const navlinks = ["All", "About", "Projects", "Media", "Contact"];
    const [sliderStyles, setSliderStyles] = useState({ width: 50, left: 0 }); // Track slider position
    const navRefs = useRef([]); // Refs for each tab to get their dimensions
    const [isInitialRender, setIsInitialRender] = useState(true); // Track the initial render

    const updateSliderPosition = () => {
        if (navRefs.current[active]) {
            const activeTab = navRefs.current[active];
            const tabRect = activeTab.getBoundingClientRect(); // Position relative to viewport

            let leftPosition = tabRect.left;

            // Adjust left by 5.489px only during the initial render
            if (isInitialRender) {
                leftPosition -= 27; // Subtract 27px on initial render
            }

            // Update the slider's position and width based on the active tab
            setSliderStyles({
                width: activeTab.offsetWidth, // Tab width
                left: leftPosition, // Position relative to the viewport
            });
        }
    };

    useEffect(() => {
        updateSliderPosition();
        window.addEventListener("resize", updateSliderPosition); // Update on window resize

        return () => {
            window.removeEventListener("resize", updateSliderPosition); // Cleanup the event listener
        };
    }, [active, isInitialRender]);

    const handleTabClick = (index) => {
        setActive(index);
        setIsInitialRender(false); // Disable the initial render state on first interaction

        if (index === 0) {
            setWidgetArray([
                { i: "widget1", x: 0, y: 0, w: 4, h: 1, component: Widget1Component },
                { i: "widget2", x: 4, y: 0, w: 2, h: 1, component: Widget2Component },
                { i: "widget3", x: 8, y: 0, w: 2, h: 2, component: Widget3Component },
                { i: "widget4", x: 0, y: 0, w: 2, h: 1, component: Widget4Component },
                { i: "widget5", x: 2, y: 2, w: 2, h: 1, component: Widget5Component },
                { i: "widget6", x: 4, y: 4, w: 2, h: 2, component: Widget6Component },
                { i: "widget7", x: 0, y: 4, w: 4, h: 1, component: Widget7Component },
                { i: "widget8", x: 8, y: 0, w: 2, h: 1, component: Widget8Component },
                { i: "widget9", x: 0, y: 4, w: 4, h: 1, component: Widget9Component },
                { i: "widget10", x: 4, y: 4, w: 4, h: 1, component: Widget10Component },
                { i: "widget11", x: 2, y: 8, w: 4, h: 1, component: Widget11Component },
                { i: "widget12", x: 2, y: 8, w: 4, h: 1, component: Widget12Component },
                { i: "widget13", x: 0, y: 4, w: 2, h: 2, component: Widget13Component },
                { i: "widget14", x: 8, y: 4, w: 2, h: 2, component: Widget14Component },
            ])
        }

        else if (index === 1) {
            setWidgetArray([
                { i: "widget1", x: 0, y: 0, w: 4, h: 1, component: Widget1Component },
                { i: "widget2", x: 4, y: 0, w: 2, h: 1, component: Widget2Component },
                { i: "widget3", x: 4, y: 2, w: 2, h: 2, component: Widget3Component },
                { i: "widget4", x: 6, y: 2, w: 2, h: 1, component: Widget4Component },
                { i: "widget5", x: 8, y: 0, w: 2, h: 1, component: Widget5Component },
                { i: "widget6", x: 8, y: 2, w: 2, h: 2, component: Widget6Component },
                { i: "widget7", x: 2, y: 3, w: 4, h: 1, component: Widget7Component },
                { i: "widget8", x: 0, y: 0, w: 2, h: 1, component: Widget8Component },
                { i: "widget9", x: 0, y: 4, w: 4, h: 1, component: Widget9Component },
                { i: "widget10", x: 4, y: 4, w: 4, h: 1, component: Widget10Component },
                { i: "widget11", x: 4, y: 8, w: 4, h: 1, component: Widget11Component },
                { i: "widget12", x: 0, y: 8, w: 4, h: 1, component: Widget12Component },
                { i: "widget13", x: 0, y: 2, w: 2, h: 2, component: Widget13Component },
                { i: "widget14", x: 2, y: 2, w: 2, h: 2, component: Widget14Component },
            ])
        }

        else if (index === 2) {
            setWidgetArray([
                { i: "widget1", x: 4, y: 2, w: 4, h: 1, component: Widget1Component },
                { i: "widget2", x: 8, y: 4, w: 2, h: 1, component: Widget2Component },
                { i: "widget3", x: 8, y: 0, w: 2, h: 2, component: Widget3Component },
                { i: "widget4", x: 0, y: 0, w: 2, h: 1, component: Widget4Component },
                { i: "widget5", x: 8, y: 2, w: 2, h: 1, component: Widget5Component },
                { i: "widget6", x: 0, y: 0, w: 2, h: 2, component: Widget6Component },
                { i: "widget7", x: 0, y: 4, w: 4, h: 1, component: Widget7Component },
                { i: "widget8", x: 0, y: 0, w: 2, h: 1, component: Widget8Component },
                { i: "widget9", x: 2, y: 0, w: 4, h: 1, component: Widget9Component },
                { i: "widget10", x: 4, y: 4, w: 4, h: 1, component: Widget10Component },
                { i: "widget11", x: 2, y: 0, w: 4, h: 1, component: Widget11Component },
                { i: "widget12", x: 0, y: 8, w: 4, h: 1, component: Widget12Component },
                { i: "widget13", x: 2, y: 2, w: 2, h: 2, component: Widget13Component },
                { i: "widget14", x: 4, y: 2, w: 2, h: 2, component: Widget14Component },
            ])
        }

        else if (index === 3) {
            setWidgetArray([
                { i: "widget1", x: 0, y: 2, w: 4, h: 1, component: Widget1Component },
                { i: "widget2", x: 4, y: 4, w: 2, h: 1, component: Widget2Component },
                { i: "widget3", x: 8, y: 0, w: 2, h: 2, component: Widget3Component },
                { i: "widget4", x: 0, y: 2, w: 2, h: 1, component: Widget4Component },
                { i: "widget5", x: 2, y: 2, w: 2, h: 1, component: Widget5Component },
                { i: "widget6", x: 4, y: 4, w: 2, h: 2, component: Widget6Component },
                { i: "widget7", x: 0, y: 0, w: 4, h: 1, component: Widget7Component },
                { i: "widget8", x: 8, y: 0, w: 2, h: 1, component: Widget8Component },
                { i: "widget9", x: 0, y: 4, w: 4, h: 1, component: Widget9Component },
                { i: "widget10", x: 0, y: 1, w: 4, h: 1, component: Widget10Component },
                { i: "widget11", x: 0, y: 8, w: 4, h: 1, component: Widget11Component },
                { i: "widget12", x: 4, y: 0, w: 4, h: 1, component: Widget12Component },
                { i: "widget13", x: 4, y: 4, w: 2, h: 2, component: Widget13Component },
                { i: "widget14", x: 8, y: 4, w: 2, h: 2, component: Widget14Component },
            ])
        }

        else if (index === 4) {
            setWidgetArray([
               { i: "widget1", x: 2, y: 3, w: 4, h: 1, component: Widget1Component },
                { i: "widget2", x: 4, y: 0, w: 2, h: 1, component: Widget2Component },
                { i: "widget3", x: 8, y: 2, w: 2, h: 2, component: Widget3Component },
                { i: "widget4", x: 0, y: 1, w: 2, h: 1, component: Widget4Component },
                { i: "widget5", x: 0, y: 0, w: 2, h: 1, component: Widget5Component },
                { i: "widget6", x: 0, y: 1, w: 2, h: 2, component: Widget6Component },
                { i: "widget7", x: 0, y: 4, w: 4, h: 1, component: Widget7Component },
                { i: "widget8", x: 2, y: 2, w: 2, h: 1, component: Widget8Component },
                { i: "widget9", x: 2, y: 2, w: 4, h: 1, component: Widget9Component },
                { i: "widget10", x: 2, y: 3, w: 4, h: 1, component: Widget10Component },
                { i: "widget11", x: 4, y: 4, w: 4, h: 1, component: Widget11Component },
                { i: "widget12", x: 2, y: 8, w: 4, h: 1, component: Widget12Component },
                { i: "widget13", x: 0, y: 4, w: 2, h: 2, component: Widget13Component },
                { i: "widget14", x: 8, y: 0, w: 2, h: 2, component: Widget14Component },
            ])
        }
    };

    // console.log(sliderStyles)

    return (
        <>
            <div className="w-full flex flex-col lg:flex-row gap-5 lg:gap-0 items-center justify-between p-12 px-14 pt-12 sticky top-0 z-20 bg-[rgb(9,12,16)]">
                <Typography className="text-white font-lora text-3xl font-black logo-text cursor-pointer" onClick={() => handleTabClick(0)}>ankita</Typography>
                <div
                    className="flex w-fit items-center justify-center p-[5px] border-2 border-[rgb(48,54,61)] rounded-full cursor-pointer"
                >
                    <div
                        className="absolute h-8 bg-[rgb(33,38,45)] rounded-full transition-all duration-500 ease-in-out"
                        style={{ width: `${sliderStyles.width}px`, left: `${sliderStyles.left}px` }}
                    />
                    {navlinks.map((link, index) => (
                        <Typography
                            key={index}
                            className={`tab text-white text-sm font-medium font-poppins py-[5px] px-4 tracking-wider rounded-full z-10`}
                            ref={(el) => (navRefs.current[index] = el)} // Store reference for each navlink
                            onClick={() => handleTabClick(index)}
                        >
                            {link}
                        </Typography>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Navbar;

