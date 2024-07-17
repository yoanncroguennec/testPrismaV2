"use client";

import React, { useEffect, useState } from "react";
// const baseURL = "http://localhost:3000";
// const baseURL = "https://test-prisma-v2-as45vas65-yoann-croguennec.vercel.app";

export default function GetPost() {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    async function getAllData() {
      try {
        const res = await fetch("/api/posts");
        if (!res.ok) {
          throw new Error("Error fetching events");
        }
        const { posts } = await res.json();
        setAllData(posts);

      } catch (error) {
        console.log("Error fetching events");
      }
    }
    getAllData();
  }, []);

  console.log('====================================');
  console.log(allData);
  console.log('====================================');


  function getdata() {
    
  }
  // async function getdata() {
  //   const res = await fetch(`${baseURL}/api/posts`, {
  //     cache: "no-store",
  //   });

  //   if (!res.ok) {
  //     throw new Error("Failed ti fetch data");
  //   }

  //   return res.json();
  // }

  // const posts = await getdata();
  // // console.log("posts :", posts);

  // return (
  //   <div>
  //     {posts.map(({ title }) => (
  //       <div key={title} style={{ background: "red" }}>
  //         {title}
  //       </div>
  //     ))}
  //   </div>
  // );

  return (
    <div>
      {allData.map(({ title }) => (
        <div key={title} style={{ background: "red" }}>
          {title}
        </div>
      ))}
    </div>
  );
}
