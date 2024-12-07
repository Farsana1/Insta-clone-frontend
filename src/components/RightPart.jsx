import React from 'react'

function RightPart() {
  return (
    <>
      <div className='mt-5 d-flex justify-content-between mx-3'>
       <div className='d-flex '>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvGOaxXnbSHcaztTWXYqFQX5VSZiqUfDbhg9IHc922gIFOuX7hkR6RQIZNhNvvXAD96kM&usqp=CAU" alt="dp" style={{width:'50px',height:'50px'}} className='rounded-circle'/>
          <div className='ms-3 d-flex flex-column '>
            <h6>Eulalia</h6>
            <p style={{fontSize:'13px', color:'grey'}}>My$t!c_Re@lm</p>
            </div>
       </div>
          <p className='text-primary ms-3 pt-2' style={{fontSize:'14px'}} >Switch</p>
      </div>


      <div>
        <div className='d-flex justify-content-between mt-3 mx-3'>
          <p style={{color:'grey', fontSize:'15px'}}>Suggested for you</p>
          <p className='text-light' style={{fontSize:'12px'}}>See all</p>
        </div>

        <div className='mt-2' >
          <div className='d-flex justify-content-evenly mt-2'>
            <img src="https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg" alt="dp" style={{width:'50px',height:'50px'}} className='rounded-circle'/>
            <div>
              <h6 style={{fontSize:'15px'}}>Vijay</h6>
              <p style={{fontSize:'13px',color:'grey'}}>Followed by _@mir_kh@n</p>
            </div>
            <p className='text-primary ms-3 pt-2' style={{fontSize:'14px'}} >Follow</p>

          </div>

          <div className='d-flex justify-content-evenly mt-2'>
            <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vbnVtZW50fGVufDB8fDB8fHww" alt="dp" style={{width:'50px',height:'50px'}} className='rounded-circle'/>
            <div>
              <h6 style={{fontSize:'15px'}}>Vijay</h6>
              <p style={{fontSize:'13px',color:'grey'}}>Followed by _@mir_kh@n</p>
            </div>
            <p className='text-primary ms-3 pt-2' style={{fontSize:'14px'}} >Follow</p>

          </div>

          <div className='d-flex justify-content-evenly mt-2'>
            <img src="https://i.pinimg.com/736x/e4/28/4b/e4284bfa874d5319c3eb160ec74bc7fd.jpg" alt="dp" style={{width:'50px',height:'50px'}} className='rounded-circle'/>
            <div>
              <h6 style={{fontSize:'15px'}}>Vijay</h6>
              <p style={{fontSize:'13px',color:'grey'}}>Followed by _@mir_kh@n</p>
            </div>
            <p className='text-primary ms-3 pt-2' style={{fontSize:'14px'}} >Follow</p>

          </div>
          
          <div className='d-flex justify-content-evenly mt-2'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfLD12bfRs_mp5-YPwIvqR6zfLkcGjrZhVFw&ss" alt="dp" style={{width:'50px',height:'50px'}} className='rounded-circle'/>
            <div>
              <h6 style={{fontSize:'15px'}}>Vijay</h6>
              <p style={{fontSize:'13px',color:'grey'}}>Followed by _@mir_kh@n</p>
            </div>
            <p className='text-primary ms-3 pt-2' style={{fontSize:'14px'}} >Follow</p>

          </div>


        </div>

      </div>


{/* footer */}

      <div className='mt-3'>     
        <ul style={{fontSize:'11px',color:'grey'}}>
         <div className='d-flex'>
            <li className='me-2'><span style={{position:'relative',left:'-10px'}}>About</span></li>
            <li className='mx-2'><span style={{position:'relative',left:'-10px'}}>Help</span></li>
            <li className='mx-2'><span style={{position:'relative',left:'-10px'}}>Press</span></li>
            <li className='mx-2'><span style={{position:'relative',left:'-10px'}}>API</span></li>
            <li className='mx-2'><span style={{position:'relative',left:'-10px'}}>Jobs</span></li>
            <li className='mx-2'><span style={{position:'relative',left:'-10px'}}>Privacy</span></li>
            <li className='ms-2'><span style={{position:'relative',left:'-10px'}}>Terms</span></li>
         </div>
          <div className='d-flex'>
            <li className='me-2'><span style={{position:'relative',left:'-10px'}}>Locations</span></li>
            <li className='me-2'><span style={{position:'relative',left:'-10px'}}>Language</span></li>
            <li className='me-2'><span style={{position:'relative',left:'-10px'}}>Meta Verified</span></li>
          </div>
        </ul>
      </div>
      <div>
        {/* copyright */}
        <p className='mt-2 mx-3' style={{color:'grey',fontSize:'13px'}}>©️ 2024 INSTAGRAM FROM META</p>
      </div>
    </>
  )
}

export default RightPart