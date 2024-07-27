import image from "../assets/heroImage.jpg"
const Hero = () => {
  return (
    <div className="rounded-lg p-4 bg-secondary md:flex hidden flex-col m-4">
      <div className="h-72 w-full rounded-md overflow-hidden">
        <img src={image} alt="hero" className="h-full w-full object-cover" />
      </div>
      <h1 className="mt-4 text-2xl font-semibold">Discover Your Inner Peace</h1>
      <p className="mt-2">
        Join us for a series of wellness retreats designed to help you find
        tranquility and rejuvenation.
      </p>
    </div>
  );
}

export default Hero