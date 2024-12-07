import React, { useEffect, useState } from 'react';
import { deletePostApi, getPostApi } from '../services/allApi'; // Import the API
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import { serverUrl } from '../services/serverUrl';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import GridOnOutlinedIcon from '@mui/icons-material/GridOnOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PortraitSharpIcon from '@mui/icons-material/PortraitSharp';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function User() {
    const [posts, setPosts] = useState([]); 
    const [deleted,SetDeleted]=useState('')
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

    // Fetch posts from the server
    const getPost = async () => {
        try {
            const result = await getPostApi();
            console.log(result);
            setPosts(result.data); // Assuming the response contains a 'data' field with post details
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    const deletePost = async (id) => {
        console.log("Entered the function to delete");
        try {
            const result = await deletePostApi(id);
            console.log(result);
            if (result.status >= 200 && result.status < 300) {
                console.log("Post deleted successfully");
                SetDeleted(result)
            }
        } catch (error) {
            console.error("Error deleting post:", error);
           
        }
    };
    
    useEffect(() => {
        getPost();
    }, [deleted]);


    return (
        <>
            <div className="d-flex m-5">
                <div>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvGOaxXnbSHcaztTWXYqFQX5VSZiqUfDbhg9IHc922gIFOuX7hkR6RQIZNhNvvXAD96kM&usqp=CAU"
                        alt=""
                        className="rounded-circle mx-5"
                        style={{ height: '150px', width: '150px' }}
                    />
                </div>
                <div className="mx-5">
                    <div className="d-flex">
                        <div>
                            <p className="me-3 mt-2 text-light">Eulalia</p>
                        </div>
                        <div>
                            <button type="button" className="me-3 btn btn-dark">
                                Edit Profile
                            </button>
                        </div>
                        <div>
                            <button type="button" className="me-3 btn btn-dark">
                                View archive
                            </button>
                        </div>
                        <div><FontAwesomeIcon icon={faGear} className='fa-lg mt-2' /></div>
                    </div>
                    <div className="d-flex ">
                        <div>
                            <p className="me-2">0 posts</p>
                        </div>
                        <div>
                            <p className="me-2">100 followers</p>
                        </div>
                        <div>
                            <p className="me-2">120 following</p>
                        </div>
                    </div>
                    <div>
                        <p>
                            My$t!c_Re@lm <br />
                            <span>Wanderer</span>
                        </p>
                    </div>
                </div>
            </div>
            {/* highlights */}
            <div className='mx-4 mt-4' style={{height:'100px', width:'160px'}}>
       
        <AddOutlinedIcon style={{height:'60px',width:'60px'}} className='rounded-circle p-2 mx-5 border border-light'/>
        {/* < />  */}
        
       
        <p className='text-center pt-2'>New</p>
    </div>

    <hr className='mx-5 mt-5' />
    {/*  */}
            <div className='d-flex justify-content-center mx-5' style={{fontSize:'15px'}}>
        <div className='mx-3 d-flex ' >
                {/* icon */}
               <GridOnOutlinedIcon/>     
                {/* post */}
                <p className='ms-2 '>POSTS</p>
        </div>
        <div className='mx-3 d-flex '>
                {/* icon */}
                <BookmarkBorderOutlinedIcon/> 
                {/* post */}
                <p className='ms-2'>SAVED</p>
              
        </div>
        <div className='mx-3 d-flex '>
                {/* icon */}
               <PortraitSharpIcon/>     
                {/* post */}
                <p className='ms-2'>POSTS</p>
        </div>
    </div>
            {/* Display posts */}
            {posts?.length > 0 ? (
                <div className="row mt-5 mx-5 mb-5">
                {posts.map((post, index) => (
                  <div key={index} style={{position:'relative'}} className="col-md-4 mb-4"> {/* Each post in a 3-column layout */}
                    {/* Display the image from the uploads folder */}
                    <img
                      src={`${serverUrl}/${post.image}`} // Assuming post.image contains the image filename
                      alt="Uploaded Preview"
                      style={{ width: '100%', height: '100%' }} // Set the width to 100% to make it responsive
                    />
                     <button onClick={()=>deletePost(post?.id)} className='btn btn-danger' style={{position:'absolute', marginLeft:'-40px'}}><DeleteOutlineOutlinedIcon /></button> 
                    <p>{post.caption}</p> {/* Display the caption */}
                  </div>
                ))}
              </div>
              
            ) : (
                <div className="d-flex justify-content-center align-items-center mt-5 flex-column">
                    <div>
                        <CameraAltOutlinedIcon
                            style={{ height: '80px', width: '80px' }}
                            className="rounded-circle p-3 border border-light"
                        />
                    </div>

                    <h4>Share photos</h4>
                    <p>When you share photos, they will appear on your profile.</p>
                    <span className="text-primary">Share your first photo</span>
                </div>
            )}
{/* modal */}

            <footer className="mt-5 mx-5">
                <ul style={{ textDecoration: 'none', fontSize: '13px' }} className=" d-flex">
                    <li className="mx-2">Meta</li>
                    <li className="mx-2">About</li>
                    <li className="mx-2">Blog</li>
                    <li className="mx-2">Jobs</li>
                    <li className="mx-2">Help</li>
                    <li className="mx-2">API</li>
                    <li className="mx-2">Privacy</li>
                    <li className="mx-2">Terms</li>
                    <li className="mx-2">Locations</li>
                    <li className="mx-2">Instagram Lite</li>
                    <li className="mx-2">Threads</li>
                    <li className="mx-2">Contact uploading and non-users</li>
                    <li className="mx-2">Meta Verified</li>
                </ul>
                <ul style={{ textDecoration: 'none', fontSize: '13px' }} className="d-flex text-center">
                    <li>English (UK)</li>
                    <li>© 2024 Instagram from Meta</li>
                </ul>
            </footer>
        </>
    );
}

export default User;
