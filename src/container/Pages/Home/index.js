import React, { useEffect, useRef, useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import face from '../../../assets/images/face.png';
import hoverFace from '../../../assets/images/hover-face.png';
import linkedin from '../../../assets/images/linkedin.png';
import github from '../../../assets/images/github.png';
import dineout from '../../../assets/images/dineout1.png';
import weather from '../../../assets/images/weather.png';
import deniot from '../../../assets/images/deniot.png';
import day_night from '../../../assets/images/day_night.png';
import planet from '../../../assets/images/planet.png';
import ayka from '../../../assets/images/ayka.png';
import gmail from '../../../assets/images/gmail.png';
import "./index.css";
import { Avatar, Typography } from "@material-tailwind/react";
import { MdArrowOutward, MdContentCopy } from "react-icons/md";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { FaCheck } from "react-icons/fa";
import Navbar from "../../../common/components/Navbar";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export const Widget1Component = () => {

    const [image, setImage] = useState(hoverFace);

    const [isHovered, setIsHovered] = useState(false);  // New state for hover

    const handleMouseEnter = () => {
        setIsHovered(true);
        setTimeout(() => {
            setImage(face);
        }, 100 );  // Slight delay for smooth effect
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setTimeout(() => {
            setImage(hoverFace);
        }, 100 );  // Slight delay for smooth effect
    };

    return <div className="flex flex-col items-start justify-start p-6 py-8 transition" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Avatar
            className={`absolute top-5 w-36 h-36 object-contain transition-opacity duration-500 ease-in-out ${isHovered ? 'opacity-0' : 'opacity-100'}`}
            src={hoverFace}
        />
        <Avatar
            className={`absolute top-5 w-36 h-36 object-contain transition-opacity duration-500 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            src={face}
        />
        <Typography className="text-white font-poppins text-left font-light text-sm tracking-wider mt-32">
            I'm <span className="text-white font-lora text-3xl font-black">ankita</span>, a developer from India. I'm interested in React, Node, Product Design, Jamstack, Startups, Cryptocurrencies and Music.
        </Typography>
    </div>;
}
export const Widget2Component = () => {
    const mapContainerRef = useRef();
    const mapRef = useRef();

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiZGhpbWFuYW5raXRhNTQiLCJhIjoiY20xdWI4M21hMGFnejJrcXVyaDk4dGdzMyJ9.W7_XoG5zlsA9AQMNF0mKiw';

        mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            center: [77.21184, 28.579553], // starting position [lng, lat]
            zoom: 13.5, // starting zoom
            style: "mapbox://styles/mapbox/streets-v12",
            dragPan: false,
            dragRotate: false,
            interactive: false,
        });

        mapRef.current.setStyle("mapbox://styles/mapbox/standard", {
            "config": {
                "basemap": {
                    "lightPreset": "night"
                }
            }
        });

        var el = document.createElement('div');
        var img = document.createElement('img');
        el.className = 'marker';
        img.src = face;
        img.style.width = '60px';
        img.style.height = '60px';
        el.style.backgroundColor = 'rgb(174,223,223,0.7)';
        el.style.border = '3px solid rgb(174,223,223)';
        el.style.borderRadius = '100%';
        el.style.padding = '10px';

        el.appendChild(img)


        // Set marker options.
        const marker = new mapboxgl.Marker(el).setLngLat([77.21184, 28.579553])
            .addTo(mapRef.current);

    }, []);

    return <div className="!w-[250px] !h-[270px] 2xl:!w-[320px]">
        <div className="map-container overflow-hidden"
            ref={mapContainerRef}
        />
    </div>;
} 
export const Widget3Component = () => {

    return <div className="!h-[560px] w-[280px] 2xl:w-[350px] flex items-center justify-center project-card">
        <div className="h-[450px] w-[200px] 2xl:w-[250px] flex items-center justify-center -rotate-[30deg] translate-x-16">
            <img src={dineout} className="object-cover w-full h-full rounded-3xl" />
        </div>
        <a
            href="https://mydineout-clone-app.netlify.app"
            target="_blank"
            onMouseDown={e => e.stopPropagation()}
            className="absolute bottom-3 left-3 link-project-btn cursor-pointer flex items-center justify-center gap-2 px-3"
        >
            <Typography className="text-white font-poppins text-xs">Dineout</Typography>
            <MdArrowOutward className="text-white" />
        </a>
    </div>;
}
export const Widget4Component = () => {
    return <div className="!h-[270px] w-[246px] 2xl:w-[320px] 2xl:h-[320px] flex items-center justify-center project-card rounded-3xl overflow-hidden" >
        <div className="h-[250px] 2xl:h-[290px] w-[310px] flex items-center justify-center -rotate-[30deg] translate-x-24 rounded-3xl">
            <img src={day_night} className="object-cover w-full h-full rounded-3xl" />
        </div>
        <a
            href="https://scroll-parallax-two.vercel.app/"
            target="_blank"
            onMouseDown={e => e.stopPropagation()}
            className="absolute bottom-3 left-3 link-project-btn cursor-pointer flex items-center justify-center gap-2 py-3"
        >
            <Typography className="text-white font-poppins text-xs">Day-night Scroll</Typography>
            <MdArrowOutward className="text-white" />
        </a>
    </div>;
}
export const Widget5Component = () => {
    return <div className="!w-[250px] !h-[270px] 2xl:!w-[320px] flex items-center justify-center">
        <img src={linkedin} className="w-20 h-20" />
        <a
            onMouseDown={e => e.stopPropagation()}
            href="https://www.linkedin.com/in/ankitadhiman13"
            target="_blank"
            className="absolute bottom-3 left-3 link-btn cursor-pointer"
        >
            <MdArrowOutward className="text-white" />
        </a>
    </div>;
}
export const Widget6Component = () => {
    return <div className="!h-[560px] w-[300px] 2xl:w-[400px] flex items-center justify-center project-card" >
        <div className="h-[250px] w-[550px] flex items-center justify-center -rotate-[30deg] translate-x-14">
            <img src={weather} className="object-cover w-full h-full rounded-3xl" />
        </div>
        <a
            href="https://ankita-weather-app.vercel.app"
            target="_blank"
            onMouseDown={e => e.stopPropagation()}
            className="absolute bottom-3 left-3 link-project-btn cursor-pointer flex items-center justify-center gap-2 py-3"
        >
            <Typography className="text-white font-poppins text-xs">Weather App</Typography>
            <MdArrowOutward className="text-white" />
        </a>
    </div>;
}
export const Widget7Component = () => {
    return <div className="p-8 py-8 flex flex-col items-start justify-between gap-4 h-[270px] w-full">
        <div className="flex flex-col items-center justify-center gap-1">
            <Typography className="text-white font-lora text-left font-black text-lg">
                Frontend Animation in 2024: A Fusion of Tech and Creativity — It's a Whole New World, Folks!
            </Typography>
            <Typography className="text-white font-poppins text-sm text-left tracking-wider">
                Fellow digital dreamers and code wizards! Dive into mind-blowing trends
                that are painting our digital world with new colors.
            </Typography>
        </div>
        <div className="flex items-center justify-end gap-4 w-full relative">
            <a
                href="https://medium.com/@dhimanankita54/frontend-animation-in-2024-a-fusion-of-tech-and-creativity-its-a-whole-new-world-folks-f19b470eab36"
                target="_blank"
                onMouseDown={e => e.stopPropagation()}
                className="absolute -bottom-0 left-0 link-project-btn cursor-pointer flex items-center justify-center gap-1 px-5"
            >
                <MdArrowOutward className="text-white" />
                <Typography className="text-white font-poppins text-xs">Read More</Typography>
            </a>
            <Typography className="text-gray font-poppins text-xs font-medium -mt-1">Jan 3, 2024</Typography>
        </div>
    </div>;
}
export const Widget8Component = () => {
    return <div className="!w-[250px] !h-[270px] 2xl:!w-[320px] flex items-center justify-center">
        <img src={github} className="w-20 h-20" />
        <a
            onMouseDown={e => e.stopPropagation()}
            href="https://github.com/dhimanankita54"
            target="_blank"
            className="absolute bottom-3 left-3 link-btn cursor-pointer"
        >
            <MdArrowOutward className="text-white" />
        </a>
    </div>;
}
export const Widget9Component = () => {
    return <div className="!h-[270px] w-[520px] 2xl:w-[800px] flex items-center justify-center project-card rounded-3xl overflow-hidden" >
        <div className="h-[250px] w-[410px] flex items-center justify-center -rotate-[25deg] translate-x-24 rounded-3xl">
            <img src={deniot} className="object-cover w-full h-full rounded-3xl" />
        </div>
        <a
            href="https://deniot-clone.vercel.app"
            target="_blank"
            onMouseDown={e => e.stopPropagation()}
            className="absolute bottom-3 left-3 link-project-btn cursor-pointer flex items-center justify-center gap-2 py-3"
        >
            <Typography className="text-white font-poppins text-xs">Deniot</Typography>
            <MdArrowOutward className="text-white" />
        </a>
    </div>;
}
export const Widget10Component = () => {
    return <div className="p-8 py-8 flex flex-col items-start justify-between gap-4 h-[270px] w-full">
        <div className="flex flex-col items-start justify-center gap-1">
            <Typography className="text-white font-lora text-left font-black text-lg">
                IMDb — Clone
            </Typography>
            <Typography className="text-white font-poppins text-sm text-left tracking-wider">
                A short journey of my team project as it relates to frontend and backend development, and how I've found value in the cross-section between both.
            </Typography>
        </div>
        <div className="flex items-center justify-end gap-4 w-full relative">
            <a
                href="https://medium.com/@dhimanankita54/imdb-clone-228074bacacc"
                target="_blank"
                onMouseDown={e => e.stopPropagation()}
                className="absolute -bottom-0 left-0 link-project-btn cursor-pointer flex items-center justify-center gap-1 px-5"
            >
                <MdArrowOutward className="text-white" />
                <Typography className="text-white font-poppins text-xs">Read More</Typography>
            </a>
            <Typography className="text-gray font-poppins text-xs font-medium -mt-1">Feb 27, 2022</Typography>
        </div>
    </div>;
}
export const Widget11Component = () => {
    return <div className="!h-[270px] w-[520px] 2xl:w-[800px] flex items-center justify-center project-card rounded-3xl overflow-hidden" >
        <div className="h-[250px] w-[410px] flex items-center justify-center -rotate-[25deg] translate-x-24 rounded-3xl">
            <img src={planet} className="object-cover w-full h-full rounded-3xl" />
        </div>
        <a
            href="https://circular-slider-eight.vercel.app"
            target="_blank"
            onMouseDown={e => e.stopPropagation()}
            className="absolute bottom-3 left-3 link-project-btn cursor-pointer flex items-center justify-center gap-2 py-3"
        >
            <Typography className="text-white font-poppins text-xs">Planetary Carousel</Typography>
            <MdArrowOutward className="text-white" />
        </a>
    </div>;
}
export const Widget12Component = () => {
    return <div className="p-8 py-8 flex flex-col items-start justify-between gap-4 h-[270px] w-full">
        <div className="flex flex-col items-start justify-center gap-1">
            <Typography className="text-white font-lora text-left font-black text-lg">
                Coursera-clone with Backend
            </Typography>
            <Typography className="text-white font-poppins text-sm text-left tracking-wider">
                A short journey of my team project as it relates to frontend and backend development, and how I've found value in the cross-section between both.
            </Typography>
        </div>
        <div className="flex items-center justify-end gap-4 w-full relative">
            <a
                href="https://medium.com/@dhimanankita54/coursera-clone-with-backend-80fe96e0176a"
                target="_blank"
                onMouseDown={e => e.stopPropagation()}
                className="absolute -bottom-0 left-0 link-project-btn cursor-pointer flex items-center justify-center gap-1 px-5"
            >
                <MdArrowOutward className="text-white" />
                <Typography className="text-white font-poppins text-xs">Read More</Typography>
            </a>
            <Typography className="text-gray font-poppins text-xs font-medium -mt-1">Jan 23, 2022</Typography>
        </div>
    </div>;
}
export const Widget13Component = () => {
    return <div className="!h-[560px] w-[280px] 2xl:w-[350px] flex items-center justify-center project-card">
        <div className="h-[450px] w-[200px] 2xl:w-[250px] flex items-center justify-center -rotate-[30deg] translate-x-16">
            <img src={ayka} className="object-cover w-full h-full rounded-3xl" />
        </div>
        <a
            href="https://ayka.vercel.app"
            target="_blank"
            onMouseDown={e => e.stopPropagation()}
            className="absolute bottom-3 left-3 link-project-btn cursor-pointer flex items-center justify-center gap-2 px-3"
        >
            <Typography className="text-white font-poppins text-xs">Ayka</Typography>
            <MdArrowOutward className="text-white" />
        </a>
    </div>;
}
export const Widget14Component = () => {

    const [copySign, setCopySign] = useState(<MdContentCopy className="text-white" />)
    return <div className="flex flex-col items-center justify-center">
        <img src={gmail} className="w-20 h-20" />
        <div
            onMouseDown={e => e.stopPropagation()}
            href="https://www.linkedin.com/in/ankitadhiman13"
            target="_blank"
            className="absolute bottom-3 left-3 link-btn cursor-pointer"
            onClick={() => {
                navigator.clipboard.writeText("dhimanankita54@gmail.com");
                setCopySign(<FaCheck className="text-white" />)
            }}
        >
            {copySign}
        </div>
    </div>;
}

const Home = () => {
    const [layouts, setLayouts] = useState(null);
    const [active, setActive] = useState(0);
    const [widgetArray, setWidgetArray] = useState([
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
    ]);

    const handleModify = (layouts, layout) => {
        const tempArray = widgetArray;
        setLayouts(layout);
        layouts?.map((position) => {
            tempArray[Number(position.i)].x = position.x;
            tempArray[Number(position.i)].y = position.y;
            tempArray[Number(position.i)].width = position.w;
            tempArray[Number(position.i)].height = position.h;
        });
        setWidgetArray(tempArray);
    };

    return (
        <>
            <Navbar setWidgetArray={setWidgetArray} active={active} setActive={setActive} />
            <div className="items-center justify-center flex min-h-screen pb-16">
                <ResponsiveReactGridLayout
                    onLayoutChange={handleModify}
                    verticalCompact={true}
                    layout={layouts}
                    breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                    preventCollision={false}
                    cols={{ lg: 8, md: 8, sm: 4, xs: 4, xxs: 4 }}
                    rowHeight={270}
                    autoSize={true}
                    draggableHandle=".drag-handle"
                    margin={{
                        lg: [20, 20],
                        md: [20, 20],
                        sm: [20, 20],
                        xs: [20, 20],
                        xxs: [20, 20],
                    }}
                >
                    {widgetArray?.map((widget, index) => {
                        return (
                            <div
                                className="reactGridItem rounded-3xl"
                                key={index}
                                data-grid={{
                                    x: widget?.x,
                                    y: widget?.y,
                                    w: widget?.w,
                                    h: widget?.h,
                                    i: widget.i,
                                    minW: 2,
                                    maxW: Infinity,
                                    minH: 2,
                                    maxH: Infinity,
                                    isDraggable: true,
                                    isResizable: false,
                                }}
                            >
                                <div className={` overflow-hidden drag-handle cursor-grab
                                        ${active === 1 && (index !== 0 && index !== 1 && index !== 4 && index !== 7 && index !== 13) && "inactive-section"}
                                        ${active === 2 && (index !== 2 && index !== 3 && index !== 5 && index !== 8 && index !== 10 && index !== 12) && "inactive-section"}
                                        ${active === 3 && (index !== 6 && index !== 9 && index !== 11) && "inactive-section"}
                                        ${active === 4 && (index !== 4 && index !== 7 && index !== 13 && index !== 1) && "inactive-section"}
                                    `}>
                                    {widget.component()}</div>
                            </div>
                        );
                    })}
                </ResponsiveReactGridLayout>
            </div>
        </>
    );
};

export default Home;
