
import Hero from "./Hero";
import Social from "./Social";



const HeroPage = () => {
  return (
    <div className="grid grid-cols-1 bg-black ">
        <Hero />
        <div className="hidden lg:block">
        <Social />
        </div> 
    </div>
  );
}

export default HeroPage;
