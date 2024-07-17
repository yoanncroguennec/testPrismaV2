"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";


export default function AddPost() {
    const router = useRouter();

  const [inputs, setInputs] = useState({});

  function hanfleSubmit(e) {
    e.preventDefault();
    // console.log("inputs", inputs);
    axios
      .post("/api/posts", inputs)
      .then((res) => {
        console.log("res :", res);
      })
      .catch((err) => {
        console.log("err :", err);
      })
      .finally(() => {
        setInputs({});
        // setModalOpen(false)
        router.refresh()
      });
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((prevState) => ({...prevState, [name]: value }));
  }

  return (
    <form onSubmit={hanfleSubmit}>
      <input
        name='title'
        onChange={handleChange}
        placeholder='Titre'
        type='text'
        value={inputs.title || ""}
      />
      <input
        name='desc'
        onChange={handleChange}
        placeholder='Description'
        type='text'
        value={inputs.desc || ""}
      />
      <button type='contained' variant='outlined'>
        Envoyez
      </button>
    </form>
  );
}
