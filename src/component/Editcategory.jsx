function Editcategory() {
    return ( 
        <>
        <section className="form_section">
        <div className="container form_section_container">
            <h2>Edit Category</h2> 
            <form action="">
                <input type="text" placeholder="Title"/>
        <textarea rows="4" placeholder="Description"></textarea>
                <button type="submit" className="btn">update Category</button>
                
            </form>
        </div>
    </section>
        </>
     );
}

export default Editcategory;