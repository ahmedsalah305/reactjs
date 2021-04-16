import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Col, Row, Image} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function Avatar(props) {
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);


  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = e => {
        current.src = e.target.result;
        props.updateavatar(current.src)
      };
      reader.readAsDataURL(file);

    }
  };
   
  function remove(){
     props.removeAvatar(uploadedImage.current.src)
  }

  return (
    <div>
     <Container style={{marginTop:"15px",backgroundColor:"#efefef"}} >
        <Row>
          <Col md={{span:9}}>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              ref={imageUploader}
              style={{
                display: "none"
              }}
            />

            <div>
              <Image roundedCircle
                onClick={() => imageUploader.current.click()}
                src={props.avatar}
                ref={uploadedImage}
                style={{
                  width: "80px",
                  height: "80px",
                  position: "acsolute",
                }}
              />
              <br /> 
              <FontAwesomeIcon icon={faTrashAlt} style={ {fontSize:"medium", color:"#95999c"} } onClick={remove}/>
            </div>
            <hr style={{borderTop:"1px solid #2980ba",width:"90%"}}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Avatar