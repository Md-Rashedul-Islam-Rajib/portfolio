import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
import Lottie from 'lottie-react'
import contact from '../../../assets/contact.json'
import ParticleComponent from '../../../components/ParticleComponent'
import { FaDiscord, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const serviceID = 'service_vvr9zvg'
    const templateID = 'template_gyabbmd'
    const userID = 'Grum3NypZpip-t7WU'

    emailjs
      .send(serviceID, templateID, data, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text)
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your message send successfully',
          showConfirmButton: false,
          timer: 1500,
        })
      })
      .catch((error) => {
        console.log('FAILED...', error)
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Your message sending failed',
          showConfirmButton: false,
          timer: 1500,
        })
      })
  }

  const contactArray = [
    'G',
    'e',
    't',
    ' ',
    'I',
    'n',
    ' ',
    'T',
    'o',
    'u',
    'c',
    'h',
  ]
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-6 md:pt-6 w-full h-full lg:pt-56">
      <div className="flex items-center justify-center">
        <div className="pl-32 flex items-center">
          <div>
            <h1 className="text-[#ffd700] md:text-2xl lg:text-4xl font-bold font-helvetica-neue">
              {contactArray?.map((letter, idx) => (
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
            <div className="text-white md:text-lg md:gap-4 md:mt-4 lg:text-xl flex flex-col lg:gap-6 lg:mt-6  font-light font-helvetica-neue">
              <p
                data-aos="fade-in"
                data-aos-delay="900"
                data-aos-duration="100"
              >
                Phone : +8801303050669
              </p>
              <p
                data-aos="fade-in"
                data-aos-delay="1100"
                data-aos-duration="100"
              >
                Email : rajib5570@gmail.com
              </p>
              <p
                data-aos="fade-in"
                data-aos-delay="1300"
                data-aos-duration="100"
              >
                Address : Pathantuli, Siddirganj, Narayanganj, Dhaka, Bangladesh
              </p>
              <div
              data-aos="fade-in"
              data-aos-delay="1500"
              data-aos-duration="100"
              className='text-4xl flex gap-6 z-50'>
                <Link to='https://www.linkedin.com/in/rashedul-islam-rajib'>
                <FaLinkedin className='text-[#126bc4]' />
                </Link>
                <Link to='https://github.com/Md-Rashedul-Islam-Rajib'>
                <FaGithub  className='text-[#16181f]' />
                </Link>
                <Link to='https://www.facebook.com/Rashedulislamrajj'>
                <FaFacebook  className='text-[#0866ff]' />
                </Link>
                <Link to='https://discordapp.com/users/rashedul_rajj'>
                <FaDiscord  className='text-[#5662f6]' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center z-50'>
        <div className="text-xl font-helvetica-neue flex items-center h-full">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full lg:py-2 placeholder:pl-6 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 text-black"
                {...register('Name')}
              />
            </label>

            <label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="w-full lg:py-2 placeholder:pl-6 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 text-black"
                {...register('email', { required: true })}
              />
            </label>
            {errors.email && (
              <p className="text-red-600 text-sm">Email is required</p>
            )}

            <label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
              <textarea
                id="bio"
                className="w-full lg:py-2 placeholder:pl-6 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 text-black"
                placeholder="Message"
                {...register('message')}
              ></textarea>
            </label>

            <div className="flex justify-center">
              <button className="btn bg-neutral-900 text-white w-1/2 rounded-xl lg:p-2">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <ParticleComponent />
    </div>
  )
}

export default Contact
