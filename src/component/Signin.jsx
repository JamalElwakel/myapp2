function Signin() {
    return ( 
        <>
        <section className="form_section">
        <div className="container form_section_container">
            <h2>Sign In</h2>
            <div className="alert_message success">
                <p>this is success</p>

            </div>
            <form action="">
                <input type="text" placeholder="Username or Email"/>
                <input type="password" placeholder=" Password"/>
       
                <button type="submit" className="btn">Sign in</button>
                <small>Don't have an account?<a href="singout.html">Sign Up</a></small>
                
            </form>
        </div>
    </section>
        </>
     );
}

export default Signin;
<></>