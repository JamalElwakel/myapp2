function Singout() {
    return ( 
        <>
        <section class="form_section">
        <div class="container form_section_container">
            <h2>Sign Up</h2>
            <div class="alert_message error">
                <p>this is an error</p>

            </div>
            <form action=""enctype="multipart/form-data">
                <input type="text" placeholder="First Name"/>
                <input type="text" placeholder="Last Name"/>
                <input type="text" placeholder="Username"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Create Password"/>
                <input type="password" placeholder="Confirm password"/>
                <div class="form_control">
                    <label for="avatar"></label>

                    <input type="file"id="avatar"/>
                </div>
                <button type="submit" class="btn">Sign Up</button>
                <small>Already have an account? <a href="signin.html">Sign in</a></small>
                
            </form>
        </div>
    </section>
        </>
     );
}

export default Singout;
<></>