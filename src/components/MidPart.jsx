import React, { useEffect, useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import {  faComment, faPaperPlane, faPhotoFilm } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { addPostApi } from '../services/allApi';


function MidPart({ show ,  addPost }) {
  const [file, setFile] = useState(null); // File selected by the user
  const [isUploaded, setIsUploaded] = useState(false); // Tracks if the file has been uploaded
  const [image, setImage] = useState(""); // Image (binary) file to be uploaded
  const [postCaption, setPostCaption] = useState(""); // User-entered caption for the post
  const [proceed, setProceed] = useState(''); // Track if proceed button was clicked
  const [post, setPost] = useState(''); // Track if post was shared
  const [hidePost, setHidePost] = useState(false);
  
  
  // Handle the proceed button click
  const handleProceed = () => {
    setProceed(isUploaded);
    console.log('entered proceed');
     // Set proceed state when the file is uploaded
  };
  
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setImage(URL.createObjectURL(selectedFile)); // Generate a preview URL
      setIsUploaded(true);
      console.log(selectedFile);
    }
  };
  
  // Handle file selection and set the file
  
  
  // Function to handle the post submission
 const handlePost = async () => {
  
  if (!file) {
    alert("Please upload an image first.");
    return;
  }

  const formData = new FormData();
  formData.append('image', file);
  formData.append('caption', postCaption);
  console.log(formData);
  

  try {
    const result = await addPostApi(formData);
    console.log(result);
    addPost({ file, caption: postCaption });
    alert("Post shared successfully!");
    // Reset state after posting
    setFile(null);
    setPostCaption("");
    setPost(true);
    setIsUploaded(true);
    setImage("");
  } catch (error) {
    console.error("Error adding post:", error);
    alert("Failed to share the post.");
  }
};


useEffect(() => {
  if (post) {
    const timer = setTimeout(() => {
      setHidePost(true);
    }, 1000); // 1 second

    // Clear timer on component unmount or when `post` changes
    return () => clearTimeout(timer);
  }
}, [post]);

  return (
    <div style={{ position: 'relative' }}>
      {/* Story */}
      <div className='mt-3 mx-5 d-flex'>
        {[...Array(8)].map((_, index) => (
          <div className='mx-2' key={index}>
            <img
              src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsQTBpkKbm_tjVmSLCcb1iAiPCpX7-zysYZw&s}`}
              alt=""
              className='rounded-circle mb-2'
              style={{ width: '50px', height: '50px' }}
            />
            <p style={{ color: 'grey', fontSize: '13px' }}>actorsuriya</p>
          </div>
        ))}
      </div>

      {/* File Upload Card */}
      {show && !isUploaded &&  (
        <Card className="text-center" style={{ width: '100%', maxWidth: '300px', margin: 'auto', height:'300px' }}>
          <Card.Header className='text-light' style={{ backgroundColor: 'black' }}>
            Create new Post
          </Card.Header>
          <Card.Body className='d-flex flex-column justify-content-center text-white bg-dark rounded-bottom border-dark'>
            <FontAwesomeIcon icon={faPhotoFilm} className='fa-2x mt-5' />
            <Card.Title>Drag photos and videos here</Card.Title>
            <input
              type="file"
              id="file-upload"
              className="form-control mt-2"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />

            {/* Custom Button */}
            <Button variant="primary" className="mt-2 w-full" onClick={() => document.getElementById('file-upload').click()}>
              Select from Computer
            </Button>
          </Card.Body>
        </Card>
      )}

      {/* post */}
      {isUploaded && !proceed && (
        <Card className="text-center bg-dark text-light ms-5 pt-2" style={{ width: '60%',  height:'300px' }}>

          <div className='d-flex justify-content-between mx-5'>
            <div><p className='ps-5'>Back</p></div>
            <div><h6 className='text-light'>Create a post</h6></div>
            <div><button className='btn btn-primary me-5' onClick={handleProceed}>Next</button></div>
          </div>
          <Card.Body>
            <img
              src={image}
              alt="Uploaded"
              style={{ width: '80%', height: '50%', borderRadius: '10px' }}
            />
          </Card.Body>
        </Card>
      )}

      {/* uploading */}
      {proceed && !post && (<div className="card mb-3 bg-dark text-light " style={{ width: '60%',  margin: 'auto', height:'300px' }}>
        <div className="d-flex justify-content-between mx-5 ">
          <div>Back</div>
          <p className="text-light">Create new Post</p>
          <button className="btn btn-primary me-5 p-3" onClick={handlePost} >Share</button>
        </div>

        <div className="row g-0">
          <div className="col-md-4">
            <img src={image} className="img-fluid rounded-start ms-2" alt="Uploaded" style={{ width: '100%',  margin: 'auto', height:'200px' }}  />
          </div>
          <div className="col-md-8">
            <div className="card-body">
            <textarea
              className="form-control mt-3"
              placeholder="Add a caption..."
              value={postCaption}
              onChange={(e) => setPostCaption(e.target.value)}
              rows="3"
            />
            </div>
          </div>
        </div>

      </div>)}

      {/* uploaded */}

     {post && !hidePost &&  ( 
       <div className='ms-5' id='shared'
          style={{
            backgroundColor: 'black',
            padding: '10px 20px',
            borderRadius: '8px',
            marginBottom: '20px',
            // Space between heading and circle
            width: '50%'
          }}
        >
          <p className='text-center' style={{ color: 'white', fontSize: '20px', margin: 0 }}>Post Shared</p>
  
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#1c1c1c', // Dark background
              color: 'white',
              width: '100%',
              height: '50vh',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            {/* Heading */}
  
  
            {/* Gradient Circle */}
            <div
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: 'linear-gradient(45deg, #ffcc00, #ff2dac, #6600ff)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundColor: '#1c1c1c', // Matches background to create a circular border effect
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {/* Tick Mark */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: '50px', height: '50px' }}
                >
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ffcc00" />
                      <stop offset="50%" stopColor="#ff2dac" />
                      <stop offset="100%" stopColor="#6600ff" />
                    </linearGradient>
                  </defs>
                  <polyline points="5 12 10 17 20 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
    )}



      {/* Post Content */}
      <div className='mx-5 px-5 w-100'>
        <div className='mb-1 d-flex mx-3'>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgg5CF9O4l9RlFg8HK0z1ddAnp4KabcHv5Fg&s
            "
            alt=""
            className='rounded-circle'
            style={{ width: '40px', height: '40px' }}
          />
          <p className='ms-3 mt-2' style={{ fontSize: '15px' }}>meme_hub</p>
          <ul className='mt-2' style={{ color: 'grey', fontSize: '15px' }}>
            <li>1 h</li>
          </ul>
        </div>
        <div className='mx-3' >
          <img
            className='rounded'
            src="https://file.forms.app/sitefile/55+Hilarious-developer-memes-that-will-leave-you-in-splits-18.jpg"
            alt="post-meme"
           
          />
        </div>
        <div className='d-flex justify-content-between mt-2 w-100 me-3'>
          <div className='d-flex ms-3'>
            <FavoriteBorderIcon />
            <FontAwesomeIcon icon={faComment} className='fa-lg mt-1 ms-3' />
            <FontAwesomeIcon icon={faPaperPlane} className='fa-lg mt-1 ms-3' />
          </div>
          <div>
            <BookmarkBorderIcon />
          </div>
        </div>
        <div className='d-flex mt-2 mx-lg-3 mx-0 ' style={{ fontSize: '14px' }}>
          <p className='mx-2'>
            <span className='w-full' style={{ fontWeight: 600 }}>meme_hub </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo libero
            voluptate ratione dolores consectetur necessitatibus.
          </p>
        </div>
      </div>
    </div>




  );
}

export default MidPart;







