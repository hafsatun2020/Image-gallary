import React from "react"
import { useLoaderData, Form } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from'./loginbtn'
  
  export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    // process this info however I wanted
    // pass the email and password to the loginUser function
    console.log(email, password)
    return null
}
export default function Login() {
    
    //const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const message = useLoaderData()
    //const [error, setError] = React.useState(null)
    //function handleSubmit(e) {
       // e.preventDefault()
        //get data  from loginform
        //loginUser(loginFormData)
        //.then(data => console.log(data))
        //setError(null)
       // loginUser(loginFormData)
          //  .then(data => console.log(data))
            //.catch(err => setError(err))
          //  .finally(() => setStatus("idle"))
        //console.log(loginFormData)
  //  }

   // function handleChange(e) {
       // const { name, value } = e.target
       // setLoginFormData(prev => ({
        //    ...prev,
        //    [name]: value
      //  }))
  //  }
    //console.log(message)
    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            { message && <h2  className="red">{message}</h2> }
            {/*error && <h3 className="red">{error.message}</h3>*/}
            <Form method="post" className="login-form">
                <input
                    name="email"                  
                    type="email"
                    
                />
                <input
                    name="password"                    
                    type="password"
                    
                />
                <button>Log in</button>
            </Form>
        </div>
    )

}