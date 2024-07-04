import ParticleComponent from "../../../components/ParticleComponent"

const Education = () => {
  const eduArray = ['E', 'd', 'u', 'c', 'a', 't', 'i', 'o', 'n']

  return (
    <div className="w-full h-screen">

      <div className="mt-8 md:pl-32 md:mt-20">
        <h1 className="text-[#ffd700] text-xl text-center md:text-start md:text-3xl lg:text-5xl font-bold font-helvetica-neue">
          {eduArray?.map((letter, idx) => (
            <span
              data-aos="zoom-out"
              data-aos-delay={`${idx * 100}`}
              data-aos-duration={`${idx * 100}`}
              key={idx}
            >
              {letter}
            </span>
          ))}
        </h1>
      </div>
      <div className="border md:ml-32 my-4 border-b-[#ffd700] w-full"></div>
      <div className="md:pl-32">
        <p className="text-white text-xl font-helvetica-neue">Bachelors of Sciences and Masters of Sciences in Mathematics from National University</p>
      </div>

          <ParticleComponent />
    </div>
  )
}

export default Education
