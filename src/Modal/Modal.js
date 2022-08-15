import ReactDom from 'react-dom'

const Modal = ({children, isOpen}) => {
    if(!isOpen) return null

  return ReactDom.createPortal(
  <>
    <div id='portalbackground' className='fixed flex justify-center items-center top-0 left-0 right-0 bottom-0 bg-fadedblack z-50'>
      <div className='flex bg-[#FFF] h-[85%] w-[90%] p-1 z-50'>
        {children}
      </div>
    </div>
  </>,
  document.getElementById('portal')
  )
}

export default Modal