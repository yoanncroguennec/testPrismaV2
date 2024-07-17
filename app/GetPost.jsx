import React from "react";

export default async function GetPost() {
  async function getdata() {
    const res = await fetch("http://localhost:3000/api/posts", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed ti fetch data");
    }

    return res.json();
  }

  const posts = await getdata();
  // console.log("posts :", posts);

  return (
    <div>
      {posts.map(({ title }) => (
        <div key={title} style={{ background: "red" }}>
          {title}
        </div>
      ))}
    </div>
  );
}
