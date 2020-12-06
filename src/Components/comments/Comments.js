import React from 'react';
import Container from '@material-ui/core/Container';
import './Comments.css'

const Comments = (props) => {
    const {img, email, body} = props.comment;
    return (
        <div className='cmt-styling'>
            <Container fixed>
                    <div className="cmt-inner">
                        <div className="img-styling">
                            <img src={img} alt=""/>
                            <h4>{email}</h4>
                        </div>
                        <div className="cmt-body">
                            <p>{body}</p>
                        </div>
                    </div>
                    
            </Container>
        </div>
        
    );
};

export default Comments;