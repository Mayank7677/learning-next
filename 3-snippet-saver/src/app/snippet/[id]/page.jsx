"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const SnippetDetails = ({ params }) => {
  const [snippet, setSnippet] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("snippets") || "[]");
    const found = stored.find((s) => s.id.toString() === params.id);
    setSnippet(found);
  }, [params.id]);

  const handledelete = () => {
    const stored = JSON.parse(localStorage.getItem("snippets") || "[]");
    const filtered = stored.filter((s) => s.id.toString() !== params.id);
    localStorage.setItem("snippets", JSON.stringify(filtered));
    router.push("/");
  };

  if (!snippet) return <p className="p-4">Loading snippet...</p>;

  return (
    <div>
      <h1 className="font-light text-4xl md:text-6xl">Snippet Details :</h1>
      <div className="mt-10 md:mt-20">
        <div>
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Link href={`/snippet/${snippet.id}/edit`}>
                <button className="px-4 py-1 cursor-pointer hover:bg-yellow-700 bg-yellow-600 rounded-2xl">
                  Edit
                </button>
              </Link>
              <button
                onClick={handledelete}
                className="px-4 py-1 cursor-pointer hover:bg-red-600 bg-red-500 rounded-2xl"
              >
                Delete
              </button>
            </div>
            <h2 className="text-2xl md:text-4xl font-light">{snippet.title}</h2>
          </div>{" "}
          <pre className="mt-5 md:text-xl p-4 border rounded-2xl">
            {snippet.code}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default SnippetDetails;
