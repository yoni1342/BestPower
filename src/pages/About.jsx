import electrician from "../assets/electrician.jpg";
import Icon from "../assets/Group.png";

// type Props = {
//     icon: string,
//     title: string,
//     description: string
// }

const AboutCard = ({ icon, title, description }) => {
    return (
        <div className='bg-white w-[325px] h-[357px] shadow rounded-xl flex flex-col font-poppins'>
            <img src={icon} alt="icon" className='w-[78px] h-[86px] mx-auto mt-10 mb-5' />
            <h2 className='text-center text-lg font-bold'>{title}</h2>
            <p className='text-base  p-4 text-center'>{description}</p>
        </div>
    );
}

const About = () => {
    return (
        <div
            className='relative md:w-[1230px] md:h-[424px] my-20 mx-auto rounded-xl md:bg-url(electrician) md:bg-cover md:bg-center '
            style={{
                backgroundImage: `url(${electrician})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                zIndex: 0
            }}
        >
            <div className='absolute inset-0 bg-white md:opacity-30 rounded-xl'></div>
                <div className='relative z-10 flex justify-center h-full items-center'>
                    <div className='flex flex-col md:flex-row gap-10'>
                        <AboutCard 
                            icon={Icon}
                            title="Lorem ipsum dolor sit"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, mollitia ipsa sapiente" />
                        <AboutCard 
                            icon={Icon}
                            title="Lorem ipsum dolor sit"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, mollitia ipsa sapiente" />
                        <AboutCard 
                            icon={Icon}
                            title="Lorem ipsum dolor sit"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, mollitia ipsa sapiente" />
                    </div>
                </div>
        </div>
    );
}

export default About;