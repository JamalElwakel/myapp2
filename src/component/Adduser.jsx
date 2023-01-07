function Adduser() {
  return (
    <>
      <section class="form_section">
        <div class="container form_section_container">
          <h2>Add User</h2>
          <div class="alert_message success">
            <p>this is error</p>
          </div>
          <form action="" enctype="multipart/form-data">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Create Password" />
            <input type="password" placeholder="Confirm password" />
            <select>
              <option value="0">auther</option>
              <option value="1">admin</option>
            </select>

            <div class="form_control">
              <label for="avatar">User avatar</label>
              <input type="file" id="avatar" />
            </div>
            <button type="submit" class="btn">
              Add User
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Adduser;
