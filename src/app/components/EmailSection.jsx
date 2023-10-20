import React from 'react'

const EmailSection = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
        <div>
            <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                {" "}
                I'm currently loking for new opportunities, my inbox is always open.
                Whether you have a question or just want to say hi kasdjlkasjd
                alskdjak kasjdklaj kajsdlk!
            </p>
            <div className='socials flex flex-row gap-2 '></div>
        </div>
    </section>
  )
}

export default EmailSection