function Edituser() {
    return ( 
        <>
        <section className="form_section">
        <div className="container form_section_container">
            <h2>Edit User</h2>
            <form action=""enctype="multipart/form-data">
                <input type="text" placeholder="First Name"/>
                <input type="text" placeholder="Last Name"/>
              <select >
                <option value="0">auther</option>
                <option value="1">admin</option>
              </select>
                <button type="submit" className="btn">Update User</button>
            </form>
        </div>
    </section>
        </>
     );
}

export default Edituser;
<></>