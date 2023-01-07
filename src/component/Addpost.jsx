function Addpost() {
    return ( 
        <>
        <section className="form_section">
        <div className="container form_section_container">
            <h2>Add Post</h2>
            <div className="alert_message success">
                <p>this is error</p>

            </div>
            <form action="" enctype="multipart/form-data">
                <input type="text" placeholder="Title"/>
                <select name="" id="">
                    <option value="1">Travel</option>
                    <option value="1">art</option>
                    <option value="1">Science & Technology</option>
                    <option value="1">Music
                    </option>
                    <option value="1">Travel</option>
                    <option value="1">Travel</option>
                </select>
                <textarea rows="4" placeholder="Description"></textarea>

                <div className="form_control inline">
                    <input type="checkbox" id="is_featured" checked/>
                    <label for="is_featured">featured</label>
                </div>
                <div className="form_control">
                    <label for="thumbnail">Add thumbnail</label>
                    <input type="file" id="thumbnail"/>
                </div>
                <button type="submit" className="btn">Add Post</button>
                
            </form>
        </div>
    </section>
        </>
     );
}

export default Addpost;