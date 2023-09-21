import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  //console.error(error);

  return (
    
     <>
     <div id="error-page">
        
          <div id="error-status">
             
              <p>Sorry, unable to get movie details now!</p>
              
            </div>
           
        
            <button><Link to='/'>back</Link></button>
       </div>
       
      
     </>
      
    
  );
}