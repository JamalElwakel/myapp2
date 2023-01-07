import { useEffect, useState } from "react";

function Category() {
  const [post, setpost] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((r) => r.json())
      .then((res) => {
        setpost(res);
        console.log(res);
      });
  },[]);
  return (
    <>
      <header className="category_title">
        <div className="container category_title-container">
          <h2></h2>
        </div>
      </header>

      <section className="posts">
        <div className="container posts_container">
          {post.map((c) => {
            return (
              <article className="post">
                <div className="post_thumbnail">
                  <img style={{ height: "400px" }} src={c.image} alt="" />
                </div>
                <div className="post_info">
                  <a
                    href="category_post.html"
                    className="category_button mr20 mrt"
                  >
                    wild Life
                  </a>
                  <h3 style={{ height: "53px", overflow: "hidden" }} className="post_title mr20">
                    <a  href="post.html">
                      {c.title}
                    </a>
                  </h3>
                  <p
                    style={{ height: "90px", overflow: "hidden" }}
                    className="mr20"
                  >
                    {" "}
                    {c.description}{" "}
                  </p>
                  <div className="post_autner">
                    <div className="post_auther_avatar mr20">
                      <img src="./assets/avatar3.jpg" alt="" />
                    </div>
                    <div className="post_auther_info">
                      <div className="post_auther_info">
                        <h5>{"Price: " + c.price}</h5>
                        <small style={{ color: "gold" }}>
                          {"rate: " + c.rating.rate}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="category_buttons">
        <div className="container category_buttons_container">
          <a href="" className="category_button">
            Art
          </a>
          <a href="" className="category_button">
            Wild Life
          </a>
          <a href="" className="category_button">
            Travel
          </a>
          <a href="" className="category_button">
            Science & Technology
          </a>
          <a href="" className="category_button">
            Food
          </a>
          <a href="" className="category_button">
            Music
          </a>
        </div>
      </section>
    </>
  );
}

export default Category;
