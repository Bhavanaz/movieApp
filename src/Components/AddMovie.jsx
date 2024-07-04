import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const AddMovie = ({movie}) => {
  const [page,setPage]=useState('Movie')
  const [form,setForm]=useState({
  mName:movie?.name||'',
  mDesc:movie?.mDesc||'',
  mDirector:movie?.mDirector||''
 })
 function valueAdd(){
 // setCount(count+1)
  console.log(form)
}
function valueCap(e){
  //console.log(e)
  setForm({...form,[e.target.name]:e.target.value})
}
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
          name='mName'
          value={form.mName}
          onChange={valueCap}
        />
        </div>
        <div>
        <TextField
          id="outlined-disabled"
          label="Movie Description"
          name='mDesc'
          value={form.mDesc}
          onChange={valueCap}
        />
        </div>
        <div>
        <TextField
          id="outlined-password-input"
          label="Movie Image"
        />
        </div>
        <div>
        <TextField
          id="outlined-read-only-input"
          label="Movie Director"
          name='mDirector'
          value={form.mDirector}
          onChange={valueCap}
        />
    </div>
    </Box>
    <Button variant='contained' onClick={valueAdd}> Search</Button>
    </div>
  )
}

export default AddMovie