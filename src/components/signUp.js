import React,{useState} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Sign_img from "../Sign_img";
import userService from "../config/authontication"


const Home = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [birthday,setBirthday] = useState("")
  const [password,setPassword] = useState("")

  const onSubmit = async () => {
    if(name === "" || email==="" || birthday ==="" || password===""){
      alert("All fields are mandatory!");
      return;
    }
    console.log(name + " " + email + " " + birthday + " " + password)
    const newUser = {
      name:name,
      email:email,
      birthday:birthday,
      password:password,
    };
    console.log(newUser);
    try {
      await userService.addUser(newUser)
      .then((docRef) => {
        alert("Registration successfully!")
      })
      
    } catch (error) {
      alert(error.message)
    }

    
  };

  const onChangeName = (e)=>{
    setName(e.target.value)
    console.log(name)
  }
  const onChangeEmail = (e)=>{
    setEmail(e.target.value)
    console.log(email)
  }
  const onChangeBirthday = (e)=>{
    setBirthday(e.target.value)
    console.log(birthday)
  }
  const onChangePassword = (e)=>{
    setPassword(e.target.value)
    console.log(password)
  }

  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{width:"100%"}}>
            <h3 className="text-center col-lg-6">Sign Up</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                
                <Form.Control type="text" placeholder="Your Name" value={name} 
                onChange ={onChangeName} />
                
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                
                <Form.Control type="email" placeholder="Your Email" value={email} onChange={onChangeEmail}/>
                
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                
                <Form.Control type="date" value={birthday} onChange ={onChangeBirthday} />
                
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                
                <Form.Control type="password" placeholder="Password" value={password} onChange ={onChangePassword}/>

              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember Me" />
                </Form.Group>

              <Button variant="primary" className="col-lg-3" onClick={onSubmit}>
                Submit
              </Button>
            </Form>
            <p className="right_data mt-5">Already Have an Account <span> Signin</span></p>
          </div>
          <Sign_img />
        </section>
      </div>
    </>
  );
};

export default Home;
