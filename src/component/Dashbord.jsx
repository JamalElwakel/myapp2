function Dashbord() {
    return (
        <>
        <section className="dashboard mr_top">
        <div className="container dashboard_container">
            <aside>
                <ul>
                    <li>
                        <a href="add_pos.html"><i className="uil uil-pen"></i><h5>Add Post</h5></a>
                    </li>
                    <li>
                        <a href="dashbord.html"><i className="uil uil-postcard"></i><h5>manage posts</h5></a>
                    </li>
                    <li>
                        <a href="add_user.html"><i className="uil uil-user-plus"></i><h5>add user</h5></a>
                    </li>
                    <li>
                        <a href="mange_user.html"><i className="uil uil-users-alt"></i><h5>manage user</h5></a>
                    </li>
             
                    <li>
                        <a href="add_catgory.html"><i className="uil uil-edit"></i><h5>Add category</h5></a>
                    </li>
                    <li>
                        <a href="mange_category.html"><i className="uil uil-clipboard"></i><h5>manage category</h5></a>
                    </li>
                </ul>
            </aside>
            <main>
                <h2>manage users</h2>
                <table>
                    <thead>
                        <tr>
                            <th>title</th>
                            <th>category</th>
                            <th>edit</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Lorem ipsum, dolor sit amet consectetur adipisicing.</td>
                            <td> wild life</td>
                            <td><a href="edit_post.html" className="btn sm">edit</a></td>
                            <td><a href="edit_category.html" className="btn sm danger">delete</a></td>
                        </tr>
                        <tr>
                            <td>Lorem ipsum, dolor sit amet consectetur adipisicing.</td>
                            <td> wild life</td>
                            <td><a href="edit_post.html" className="btn sm">edit</a></td>
                            <td><a href="edit_category.html" className="btn sm danger">delete</a></td>
                        </tr>
                        <tr>
                            <td>Lorem ipsum, dolor sit amet consectetur adipisicing.</td>
                            <td> wild life</td>
                            <td><a href="edit_post.html" className="btn sm">edit</a></td>
                            <td><a href="edit_category.html" className="btn sm danger">delete</a></td>
                        </tr>
                        <tr>
                            <td>Lorem ipsum, dolor sit amet consectetur adipisicing.</td>
                            <td> wild life</td>
                            <td><a href="edit_post.html" className="btn sm">edit</a></td>
                            <td><a href="edit_category.html" className="btn sm danger">delete</a></td>
                        
                        </tr>
                   
                    </tbody>
                </table>
            </main>
        </div>
    </section>
        </>
      );
}

export default Dashbord;
<></>