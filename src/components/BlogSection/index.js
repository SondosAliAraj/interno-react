import React from "react";
import "./style.css";
import BlogCard from "./BlogCard";

const blogsInfo = [
  {
    id: 0,
    image: "./assets/blog_pic1.png",
    tag: "Kitchan Design",
    title: "Let’s Get Solution For Building Construction Work",
    date: "26 December,2022",
    cStyle: "cardBlog",
  },
  {
    id: 1,
    image: "./assets/blog_pic2.png",
    tag: "Living Design",
    title: "Low Cost Latest Invented Interior Designing Ideas.",
    date: "22 December,2022",
    cStyle: "cardBlog2",
  },
  {
    id: 2,
    image: "./assets/blog_pic3.png",
    tag: "Interior Design",
    title: "Best For Any Office & Business Interior Solution",
    date: "25 December,2022",
    cStyle: "cardBlog",
  },
];

const BlogSection = () => {
  return (
    <>
      <section id="blog">
        <div class="container py-5 mt-5 text-center blogContainer paddingBottomZero">
          <h1>Articles & News</h1>
          <p class="text-muted">
            It is a long established fact that a reader will be distracted by
            the of readable content
            <br />
            of a page when lookings at its layouts the points of using.
          </p>
        </div>
        <div class="container">
          <div class="row py-5">
            {blogsInfo.map((item) => {
              const styleeeee = (item.id === 1) ? "blogCard2" : "blogCard";
              return (
                <>
                  <div class="col-md-4">
                    <BlogCard
                      photo={item.image}
                      cardTag={item.tag}
                      cardTitle={item.title}
                      cardDate={item.date}
                      blogCard2={styleeeee}
                    />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSection;
