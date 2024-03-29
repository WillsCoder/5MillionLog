import React from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
import { ContactForm } from './forms/ContactForm'
import { Footer } from './home-comp/Footer'
import { Header } from './home-comp/Header'

export const Contact = () => {
  return (
    <div>
        <Header/>
         {/* contact us hero */}
         <div className='bg-contact lg:bg-fit bg-cover lg:h-80 h-44'>
            <div className='box h-full'>
                <div className='grid h-full items-center'>
                    <p className='lg:text-3xl fw-700 text-white'>Contact Us</p>
                </div>
            </div>
        </div>
        <div className='section pb-6'>
            <div className='box'>
                <div>
                    <p className='fw-600 text-2xl'>Office Address</p>
                    <div className='lg:grid-4 justify-between mt-6'>
                        <div className='p-5 shadow'>
                            <p className='mb-2 fw-500'>Houston Texas</p>
                            <p>9898 Bissonnet Street Houston Texas 77038 United States</p>
                        </div>
                        <div className='p-5 shadow'>
                            <p className='mb-2 fw-500'>Lagos Office</p>
                            <p>19 Omotola plaza, Afolabi Aina street, off Awolowo way Ikeja, Lagos state.</p>
                        </div>
                        <div className='p-5 shadow'>
                            <p className='mb-2 fw-500'>Abuja Office</p>
                            <p>Suite A4 Danziyal plaza Central Business District Abuja.</p>
                        </div>
                        <div className='p-5 shadow'>
                            <p className='mb-2 fw-500'>Ogbomosho Office</p>
                            <p>3 D Place complex opposite Bovas filling station Aroje Area Ogbomosho Oyo state.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='section'>
            <div className='box'>
                <div className='lg:flex lg:w-11/12 mx-auto border shadow '>
                    <div className='lg:w-7/12 lg:px-10 px-4 py-10'>
                        <p className='lg:text-2xl text-lg fw-600'>Get in touch</p>
                        <p className='py-4 lg:w-8/12'>Fill in the placeholders below with the appropriate information to keep in touch with us.</p>
                        <ContactForm/>
                    </div>
                    <div className='lg:w-5/12 flex items-center py-12 px-5 lg:py-0 lg:px-10 bg-contact2 lg:bg-fit bg-cover'>
                        <div className='text-white'>
                            <p className='lg:text-2xl text-lg fw-600'>Contact Information</p>
                            <p className='fs-500 py-6'>Reach us via the following links and information provided below.</p>
                            <div className='my-6'>
                                <p className='fw-600 text-lg'>Address</p>
                                <p className='fs-500 pt-4'>9898 Bissonnet Street Houston Texas 77038 United States.</p>
                            </div>
                            <div className='my-6'>
                                <p className='fw-600 text-lg'>Phone</p>
                                <p className='fs-500 pt-4'>+234 012 2001 00</p>
                            </div>
                            <div className='my-6'>
                                <p className='fw-600 text-lg'>Email</p>
                                <p className='fs-500 pt-4'>info@company.com</p>
                            </div>
                            <div className='mt-6'>
                                <ul className='flex text-xl'>
                                    <li><FaFacebookSquare /></li>
                                    <li className='px-4'><FaTwitterSquare /></li>
                                    <li className=''><FaInstagramSquare /></li>
                                    <li className='px-4'><FaLinkedin /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
