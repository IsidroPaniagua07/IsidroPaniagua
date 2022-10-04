import { useState } from 'react'
import Modal from  './Modal/Modal'
import IMAGES from './images/IMAGES'

const HomePageMobile = () => {
    const [ isOpen, setIsOpen ] = useState(false)
    const [ modalType, setModalType ] = useState("")

    // const handleModal = (e) => {
    //     const { id } = e.target
    //     setModalType(id)
    //     setIsOpen(true)

    // }

    document.addEventListener('click', (event) => {
        if (event.target.id === 'portalbackground' && ( isOpen === true)) {
            setIsOpen(false)
            setModalType("")
        }
        });  

  return (
<>
    <div className="w-full h-full flex flex-col items-center px-2">
        <div className="h-fit w-fit flex flex-col justify-end items-center border-b border-white py-4 opacity-70 pointer-events-none">
            <div className="font-bold text-4xl ">
                Isidro Paniagua
            </div>
            <div className="font-bold text-2xl">
                Front-End Web Developer
            </div>
        </div>
        <div className="grid grid-cols-12 w-auto pointer-events-none text-center">
            <p className='col-start-2'>Javascript</p>
            <p className='col-start-5 col-span-4'>React & Redux</p>
            <p className='col-start-10'>NodeJS</p>
            <p className='row-start-2 col-start-2 col-span-5 text-sm'>SQL & MongoDB</p>
            <p className='row-start-2 col-start-6 col-span-6 text-sm'>NextJS</p>
        </div>
        <div className='h-1/6 w-full flex flex-col justify-center items-center text-sm text-center pointer-events-none mt-20 mb-36'>
            <p className='italic text-3xl pb-2'>Hello!</p> 
            <p className='text-center'>I'm a Javascript developer building full-stack web applications.</p>
            <p className=''>I'm passionate about building functional products that are enjoyable end-user experiences.</p>
            <p className='pt-8 text-lg'>Please check out my work on my GitHub and have a great day.</p>
        </div>
        {/* <div className="h-full w-full flex justify-center items-center overflow-x-scroll">
            <div className=' w-full flex flex-row gap-10 justify-center'>
                <img id="internal" src={IMAGES.InternalThumbNail} onClick={(e) => handleModal(e)} alt="" className='opacity-70 hover:opacity-100 duration-300 ease-in-out' />
                <img id="bingo" src={IMAGES.BingoThumbNail} onClick={(e) => handleModal(e)} alt="" className='opacity-70 hover:opacity-100 duration-300 ease-in-out' />
            </div>
        </div> */}
        <div className="h-fit min-h-[40px] w-full flex items-center self-end justify-self-end justify-center gap-6">
            <a href="https://www.linkedin.com/in/isidropaniagua/" rel="noopener noreferrer" target="_blank">
                <img src={IMAGES.LinkedInLogo} alt="LinkedIn" className='opacity-70 hover:opacity-100 duration-300 ease-in-out' />
            </a>
            <a href="https://github.com/IsidroPaniagua07" rel="noopener noreferrer" target="_blank">
                <img src={IMAGES.GitHubLogo} alt="GitHub" className='opacity-70 hover:opacity-100 duration-300 ease-in-out' />
            </a>
        </div>
    </div>

    <Modal isOpen={isOpen} modalType={modalType}>
        <div className=' h-full w-full flex flex-col'>
            <div className='h-4/5 w-full overflow-y-scroll'>
                {modalType==="internal"
                ?<div className='grid grid-cols-4 gap-2 justify-center items-center py-2'>
                    <img src={IMAGES.EventPage} alt="" className='col-span-2' />
                    <img src={IMAGES.EventList} alt="" className='col-span-2' />
                    <img src={IMAGES.SearchResults} alt="" className='col-span-2' />
                    <img src={IMAGES.EditModal} alt="" className='col-span-2' />
                    <img src={IMAGES.AdminCenter} alt="" className='col-start-2 col-span-2' />
                </div>
                :<div className='grid grid-cols-2 gap-2 justify-center items-center'>
                    <img src={IMAGES.Board} alt="" className='' />
                    <img src={IMAGES.ControlsLarge} alt="" className='h-full' />
                </div>
            }
                
            </div>
            <div className='h-1/5 w-full flex justify-center items-center border-t border-black text-xl'>
                {modalType==="internal"
                ?<p className='w-[90%]'>Internal website to handle employee or patron events,
                    when a badge is swiped the user's information is inserted into the SQL database and a response is returned.
                    Includes Admin Center to add or edit current events. Created with scaling in mind to include other modules as needed. Uses React / NodeJS / MSSQL.
                </p>
                :<p className='w-[90%]'>Bingo application requested by Marketing department to handle Bingo events.
                    Includes WebSocket to handle data transmission from server to clients. The Controls page syncs up with all other clients
                    and includes number of balls drawn to keep track of special promotion. Made to be easily picked up by any employee.
                </p>
            }
                
            </div>
        </div>
    </Modal>
</>
  )
}

export default HomePageMobile