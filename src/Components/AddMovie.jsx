import { Box, Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const AddMovie = ({movie}) => {
  const [page,setPage]=useState('Movie')
  const [form,setForm]=useState({
  movieName:'',
  movieDescription:'',
  movieImage:'',
  movieDirector:''
 })
 const location=useLocation()
 function sendData(){
  if(location.state!=null){
    axios.put('http://localhost:4000/editmovies/'+location.state.val._id,form).then((res)=>{
      alert('Data Updated');
    }).catch((error)=>{
      console.log(error);
    })
  }else{
    axios.post('http://localhost:4000/addmovies',form).then((res)=>{
      alert('Data added')
    }).catch((error)=>{
      console.log(error)
    })
  }
 }
function valueFetch(e){
  //console.log(e)
  setForm({...form,[e.target.name]:e.target.value})
}

useEffect(()=>{
  if(location.state!=null){
    setForm({...form,
      movieName:location.state.val.movieName,
      movieDescription:location.state.val.movieDescription,
      movieImage:location.state.val.movieImage,
      movieDirector:location.state.val.movieDirector
    })
  }
},[])
  return (
    <div>
         <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <h1>Welcome to {page} Page</h1>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Movie Name"
          name='movieName'
          value={form.movieName}
          onChange={valueFetch}
        />
        </div>
        <div>
        <TextField
          id="outlined-disabled"
          label="Movie Description"
          name='movieDescription'
          value={form.movieDescription}
          onChange={valueFetch}
        />
        </div>
        <div>
        <TextField
          id="outlined-password-input"
          label="Movie Image"
          name='movieImage'
          value={form.movieImage}
          onChange={valueFetch}
        />
        </div>
        <div>
        <TextField
          id="outlined-read-only-input"
          label="Movie Director"
          name='movieDirector'
          value={form.movieDirector}
          onChange={valueFetch}
        />
    </div>
    </Box>
    <Button variant='contained' onClick={sendData}> Add</Button>
    </div>
  )
}

export default AddMovie;
