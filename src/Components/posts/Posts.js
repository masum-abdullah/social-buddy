import React from 'react';
import './posts.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Posts = (props) => {
    const {title, body, id} = props.post;

    const classes = useStyles();
    return (
        <div className="post-body">
          <Container fixed>
          <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h2">
                    {title}
                    </Typography>
                    <Typography variant="body2" component="p">
                    {body}
                    </Typography>
                </CardContent>
                <CardActions>
                  <Link to={"/postDetails/"+id}><button className = "crd-btn" >See More</button></Link>
                </CardActions>
            </Card>
          </Container>
           
             
        </div>
    );
};

export default Posts;