import { useEffect, useState, useRef } from "react";
 import Typed from "typed.js";

function Home() {
    const [post, setpost] = useState([]);

    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
        .then((r) => r.json())
        .then((res) => {
          setpost(res);
          console.log(res);
        });
    }, []);

    const el2 = useRef(null);

    useEffect(() => {
      const typed = new Typed(el2.current, {
        strings: ["Web Developer", "Junior Front End Developer"],
        startDelay: 500,
        typeSpeed: 350,
        backSpeed: 350,
        backDelay: 500,
        showCursor: false,
        loop: true,
        // smartBackspace:false,
        fadeOut: false,
      });
    });
  return (
    <>
      <section className="featured">
        <div className="container featuerd_container ">
          <div className="post_thumbnail">
            <img src="./assets/blog19.jpg" alt="" />
          </div>
          <div className="post_info">
            <a href="category_post.html" className="category_button">
              Wild Life
            </a>
            <h2 className="post_title">
              <a href="post.html">
                Hello, My Name Is Gamal Elwakel 
              </a>
            </h2>
            <p>
              I'm a Junior Web Developer (Front End Developer) with experience
              in HTML, CSS, JS, BOOTSTRAP, JQUERY, REACT.JS
            </p>
            <div className="post_auther">
              <div className="post_auther_avatar">
                <img src="./assets/avatar2.jpg" alt="" />
              </div>
              <div className="post_auther_info">
                <h5>
                  <span style={{fontSize: "20px"}} ref={el2}> </span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  <h3
                    style={{ height: "53px", overflow: "hidden" }}
                    className="post_title mr20"
                  >
                    <a href="post.html">{c.title}</a>
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

export default Home;
