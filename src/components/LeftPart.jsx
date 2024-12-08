import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Link } from 'react-router-dom';

function LeftPart({showfunc , file}) {
 
  return (
    <>
     <div className='mt-2' style={{position:'fixed'}}>
       
            <img src="./Images/insta-logo.png" alt="instagram" style={{width:'150px'}}className='p-3 my-3' />
            
            
            <Link to={'/'} style={{textDecoration:'none'}}>
            <div className='d-flex px-3' style={{color:'white'}} >
              <HomeIcon style={{ fontSize: 30}} />
              <p className='ms-3 p-1' >Home</p>
              </div>
            </Link>
           

            <div className='d-flex px-3 cursor-pointer'>
            <SearchOutlinedIcon style={{ fontSize: 30}} />
            <p className='ms-3 p-1' >Search</p>
            </div>

            <div className='d-flex px-3 cursor-pointer'>
            <ExploreOutlinedIcon style={{ fontSize: 30}} />
            <p className='ms-3 p-1' >Explore</p>
            </div>

            <div className='d-flex px-3 '>
            <MovieCreationOutlinedIcon className='cursor-pointer' style={{ fontSize: 30}} />
            <p className='ms-3 p-1' >Reels</p>
            </div>

            <div className='d-flex px-3'>
            <ChatIcon style={{ fontSize: 30}} />
            <p className='ms-3 p-1' >Messages</p>
            </div>

            <div className='d-flex px-3'>
            <FavoriteBorderIcon style={{ fontSize: 30}} />
            <p className='ms-3 p-1' >Notifications</p>
            </div>

            <div className='d-flex px-3 cursor-pointer' onClick={showfunc} >
            <AddBoxOutlinedIcon className='cursor-pointer' style={{ fontSize: 30}} />
            <p className='ms-3 p-1'>Create
            </p>
            </div>

            
            <Link to={'/profile'} style={{textDecoration:'none'}}>
            <div className='d-flex px-3'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvGOaxXnbSHcaztTWXYqFQX5VSZiqUfDbhg9IHc922gIFOuX7hkR6RQIZNhNvvXAD96kM&usqp=CAU" alt="dp" style={{width:'30px',height:'30px' }} className='rounded-circle'/>
              <p className='ms-3 p-1' style={{color:'white'}} >Profile</p>
              </div>
            </Link>
            

            <div className='d-flex px-3'>
            <MenuOutlinedIcon style={{ fontSize: 30}} />
            <p className='ms-3 p-1' >More</p>
            </div>

     </div>

     </>
  )
}

export default LeftPart