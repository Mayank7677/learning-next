"use client";
import { Editor } from "@monaco-editor/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CreateSnippets = () => {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    const snippets = JSON.parse(localStorage.getItem("snippets")) || [];
    const newSnippet = { title, code, id: Date.now() };
    snippets.push(newSnippet);
    localStorage.setItem("snippets", JSON.stringify(snippets));

    setTitle("");
    setCode("");
    router.push("/");
  };

  return (
    <div>
      <h1 className="font-light text-4xl md:text-6xl">Create a Snippet :</h1>

      <div className="mt-10 md:mt-10 ">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label
              htmlFor="title"
              className="font-light tracking-tight text-2xl"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-neutral-500 rounded-md p-2 mt-2 w-full outline-none bg-neutral-800"
            />
          </div>

          <div>
            <label
              htmlFor="title"
              className="font-light tracking-tight text-2xl"
            >
              Code
            </label>
            <div className="h-64 md:h-80 mt-2 border rounded-md border-neutral-500 overflow-hidden">
              <Editor
                height="100%"
                defaultLanguage="javascript"
                defaultValue={code}
                onChange={(value) => setCode(value || "")}
                theme="vs-dark"
              />
            </div>
          </div>

          <button className="px-4 font-light cursor-pointer hover:bg-blue-500 py-1.5 rounded-4xl border border-neutral-400 bg-blue-400 w-fit">
            Create Snippet
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateSnippets;
