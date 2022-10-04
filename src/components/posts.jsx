import React from "react";
import Post from "./common/post";
import post1 from "../images/post1.jpg";
import post2 from "../images/post2.jpg";
import post3 from "../images/post3.jpg";
import post4 from "../images/post4.jpg";
import post5 from "../images/post5.jpg";

const Posts = () => {
  return (
    <div className="posts">
      <div className="p-left">
        <Post
          post={post1}
          title="Hire from Anywhere"
          description="Away from your desk? No problem. Our mobile app gives you access to everything you need to make hiring decisions on the go."
        />
        <Post
          post={post2}
          title="World-Class Support"
          description="Our best-in-class customer support will give you personalized and outstanding service, plus regular, free webinars."
        />
        <Post
          post={post3}
          title="Free Templates & Resources"
          description="Pull from more than 800 HR and recruiting templates, and stay in the know with Breezy’s Help Center and Hire Learning Blog."
        />
      </div>
      <div className="p-right">
        <Post
          post={post4}
          title="All the Integrations You Need"
          description="Whether you need to run a background check, personality assessment, or integrate with your own employee management system, Breezy’s got your back."
        />
        <Post
          post={post5}
          title="Stay Secure, Stay Compliant"
          description="We're ISO/IEC certified, so you can rest easy knowing your data — and your candidates' — is protected."
        />
      </div>
    </div>
  );
};

export default Posts;
