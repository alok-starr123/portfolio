import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { servicesData } from "../constants";

const Services = () => {
    const text = `I build secure, high-perfomance full-stack web/apps with smoothUX to drive growth not headaches.`;
    const serviceRefs = useRef([]);
    return (
        <section id="services" className="min-h-screen bg-black rounded-t-4xl">
            <AnimatedHeaderSection subTitle={"Behind the scene, Beyond the screen"} title={"Service"} text={text} textColor={"text-white"}
            withScrollTrigger={true}
            />
            {servicesData.map((service, index) => (
                <div ref={(el) => (serviceRefs.current[index] = el )} key={index} className="sticky px-10 pt-6 text-white bg-black
                border-t-2 border-white/30 top-0">
                    <div className="flex items-center justify-between  gap-4 font-light">
                        <div className="flex flex-col gap-6">
                            <h2 className="text-4xl lg:text-5xl">{service.title}</h2>
                            <p className="text-xl leading-relaxed tracking-widest lg:text-2xl text-white/60 text-pretty">{service.description}
                            </p>
                            <div className="flex flex-col gap-2 text-2xl sm:gap-4 lg:text-3xl text-white/80">
                            {service.items.map((item, itemIndex) => (
                                <div key={`item-${index}-${itemIndex}`}>
                                    <h3 className="flex">
                                        <span className="mr-12 text-lg text-white/30">0{itemIndex + 1}
                                        {item.title}
                                        </span>
                                    </h3>
                                    {itemIndex < service.items.length -1 && (
                                    <div className="w-full h-px my-2 bg-white/50" />
                                    )}
                                </div>
                            ))}
                            </div>
                        </div>

                    </div>
                </div>
            ))}
        </section>
    );
};

export default Services;