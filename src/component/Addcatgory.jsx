function Addcatgory() {
    return ( 
        <>
        <section className="form_section">
        <div className="container form_section_container">
            <h2>Add Category</h2>
            <div className="alert_message success">
                <p>this is error</p>
            </div>
            <form action="">
                <input type="text" placeholder="Title"/>
        <textarea rows="4" placeholder="Description"></textarea>
                <button type="submit" className="btn">Add Category</button>
                
            </form>
        </div>
    </section>
        </>
     );
}

export default Addcatgory;