"use client";
import { Editor } from "@monaco-editor/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const EditPage = ({ params }) => {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const router = useRouter();

  useEffect(() => {
    const snippets = JSON.parse(localStorage.getItem("snippets")) || [];
    const found = snippets.find((s) => s.id.toString() === params.id);
    if (found) {
      setTitle(found.title);
      setCode(found.code);
    }
  }, [params.id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let snippets = JSON.parse(localStorage.getItem("snippets")) || [];
    const found = snippets.find((s) => s.id.toString() === params.id);

    if (found) {
      found.title = title;
      found.code = code;
    }

    localStorage.setItem("snippets", JSON.stringify(snippets));
    setTitle("");
    setCode("");
    router.push(`/snippet/${params.id}`);
  };

  return (
    <div>
      <h1 className="font-light text-4xl md:text-6xl">Edit Snippet :</h1>

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
            Update Snippet
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPage;
