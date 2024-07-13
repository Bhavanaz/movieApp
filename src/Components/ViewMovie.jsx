import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

const View = () => {
  //const[data,setData]=useState([]);
  const [rows, setCards] = useState([]);
  var navigate=useNavigate()

  useEffect(() => {
    axios.get('http://localhost:4000/movies')
      .then((res) => {
          setCards(res.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  function del_value(a){
    axios.delete('http://localhost:4000/deletemovies/'+a).then((res)=>{
      alert('Data Deleted');
      window.location.reload()
    }).catch((error)=>{
      console.log(error)
    })
  }

  function update_value(val){
    navigate('/Add',{state:{val}})
  }

  return (
    <Box sx={{ flexGrow: 1,backgroundColor:'white', padding: 5}}>
      <Grid container spacing={2}>
        {rows.length > 0 ? (
          rows.map((row) => (
            <Grid item xs={12} sm={6} md={4} key={row.id}>
              <Card style={{marginTop:10,backgroundColor:'black',borderRadius:10}} sx={{ minWidth: 275, marginBottom: 2, display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%'}}>
                <CardMedia
                  component="img"
                  height="500"
                  image={row.movieImage}
                  style={{color:'white'}}
                  alt={row.movieName}
                />
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {/* <a style={{color:'white'}} href={row.imdb_url} target="_blank" rel="noopener noreferrer">{row.imdb_url}</a> */}
                  </Typography>
                  <Typography style={{color:'white'}} variant="h5" component="div">
                    {row.movieName}
                  </Typography>
                  <Typography style={{color:'white'}} sx={{ mb: 1.5 }} color="text.secondary">
                    {row.movieDescription}
                  </Typography>
                  {/* Uncomment if you want to display additional information */}
                  <Typography style={{color:'white'}} sx={{ mb: 1.5 }} color="text.secondary">
                    Director: {row.movieDirector}
                  </Typography>
                  {/* <Typography variant="body2">
                    Actor: {row.actor}
                    <br />
                    Year: {row.year}
                  </Typography> */}
                </CardContent>
                <CardActions>
                  <Button variant='contained'onClick={()=>{
                    update_value(row)
                  }
                  }>Update</Button>
                  <Button variant='contained'onClick={()=>
                    del_value(row._id)
                  }>Delete</Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography variant="body2" color="text.secondary">
              No movies available
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default View;