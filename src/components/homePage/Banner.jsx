const Banner = () => {
  return (
    <div className="carousel w-full h-[80vh] mt-12 mb-12">
      {banner.map((item, idx) => (
        <div
          key={idx}
          style={{
            background: `linear-gradient(45deg, rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${
              idx + 1
            }.jpg)`,
          }}
          id={`slide${idx + 1}`}
          className="carousel-item relative w-full  bg-cover rounded-lg"
        >
          <div className="p-24 max-w-[50%] text-wrap w-full flex flex-col justify-center gap-8">
            <h2 className="text-white font-bold text-6xl">{item.title}</h2>
            <p className="text-lg text-white">{item.description}</p>
            <div className="space-x-5">
            <button className="btn btn-primary hover:btn-outline ">Discover More</button>
            <button className="btn btn-outline btn-primary text-white">Latest Projects</button>
            </div>
          </div>
         
          <div className="absolute right-5 gap-10 bottom-24 flex">
            <a
              href={`#${item.prev}`}
              className="btn btn-circle hover:bg-primary hover:text-white bg-transparent backdrop-blur-0 text-white"
            >
              ❮
            </a>
            <a
              href={`#${item.next}`}
              className="btn btn-circle hover:bg-primary hover:text-white bg-transparent backdrop-blur-0 text-white"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
const banner = [
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "slide2",
    prev: "slide6",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "slide3",
    prev: "slide1",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "slide4",
    prev: "slide2",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "slide5",
    prev: "slide3",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "slide6",
    prev: "slide4",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "slide1",
    prev: "slide5",
  },
];
export default Banner;
