import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const serviceID = 'service_vvr9zvg';
    const templateID = 'template_gyabbmd';
    const userID = 'Grum3NypZpip-t7WU';

    emailjs.send(serviceID, templateID, data, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Your message send successfully",
            showConfirmButton: false,
            timer: 1500
          });
      })
      .catch((error) => {
        console.log('FAILED...', error);
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Your message sending failed",
            showConfirmButton: false,
            timer: 1500
          });
      });
  };

  return (
    <div className='grid grid-cols-2 justify-between w-full'>
        <div></div>


        <div>

        <div className='text-4xl font-helvetica-neue flex items-center h-full'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>

          <input  type="text" placeholder="Name" className="w-full py-2 placeholder:pl-6 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"  {...register('Name')} />
         
        </label>

        <label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
  
  <input id="email" type="email" placeholder="Email" className="w-full py-2 placeholder:pl-6 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" {...register('email', { required: true })} />
				
</label>
  {errors.email && <p className="text-red-600 text-sm">Email is required</p>}

  <label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
  
  <textarea id="bio"
   className="w-full py-2 placeholder:pl-6 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
   placeholder="Message"
    {...register('message')}
   ></textarea>
</label>


  <div className='flex justify-center'>
  <button className="btn bg-neutral-900 text-white w-1/2 rounded-xl p-2">Submit</button>
  </div>
      </form>
    </div>

        </div>
    </div>
  )
}

export default Contact
