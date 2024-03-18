import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Paper, Button} from '@mui/material';

export default function StudentsTextfield() {

    const paperStyle = {padding: '50px 20px', width:600, margin:'20px auto'};


    //setting the name
    const[name, setName] = React.useState('')
    //setting the address
    const[address, setAddress] = React.useState('')

    //setting thrìe retrieve of the students
    const[students, setStudents] = React.useState([])


    //handle of the submit
    const handleClick = (event) =>{
      event.preventDefault()

      //testing of datas that has been inserted
      const student = {name, address}
      console.log(student)

      //fetching of data in the database
      fetch(
        "http://localhost:8080/student/add",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(student)
        }).then(()=>{
          alert("New Student Added!")
        })
    }

    React.useEffect(()=>{
      fetch("http://localhost:8080/student/all",{
        method:"GET"
      })
      .then(res => res.json())
      .then((result)=>{
        setStudents(result);
      }
    )
    },[])

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      display={'flex'}
    >
        <Paper elevation={3} style={paperStyle} >
            <h1 color='blue'><b>Welcome</b></h1>
            <h2><b>Student Register Section</b></h2>

            <TextField id="outlined-basic" label="Student Name" variant="outlined" 
            value={name}
            onChange={(event) => setName(event.target.value)}/>
            <TextField id="outlined-basic" label="Student Address" variant="outlined"
             value={address}
             onChange={(event) => setAddress(event.target.value)}/><br/><br/>

            <Button variant="contained" onClick={handleClick}>Submit</Button>


            <h1>All Registered Students</h1>

            {students.map(student=>(
              <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left", overflowY: 'auto'}} key={student.id}>
              Id:{student.id}<br/>
              Name:{student.name}<br/>
              Address:{student.address}

              </Paper>
            ))
          }


        </Paper>

        
    </Box>
    
    
  );
}