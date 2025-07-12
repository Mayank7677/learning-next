"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("snippets")) || [];
    setSnippets(stored);
  }, []);

  return (
    <div>
      <h1 className="font-light text-4xl md:text-6xl">
        Welcome to the <br /> Snippet Saver.
      </h1>
      <p className="md:text-xl font-light tracking-tighter text-neutral-400 mt-3">
        Save and manage code snippets locally
      </p>

      <div className="mt-7">
        <Link href="/create">
          <button className="px-4 font-semibold cursor-pointer hover:bg-blue-500 py-1.5 rounded-4xl border border-neutral-400 bg-blue-400">
            Create Snippet
          </button>
        </Link>
      </div>

      <div className="mt-5 md:mt-10 border-t border-neutral-300 pt-5 md:pt-10">
        <p className="text-neutral-400 text-3xl">Your snippets :</p>

        <div className="mt-5 md:pt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
          {snippets.length > 0 ? (
            snippets.map((dets) => {
              return (
                <Link key={dets.id} href={`/snippet/${dets.id}`}>
                  <div className="bg-neutral-900 px-4 py-2 md:py-4 md:px-8 rounded-3xl flex items-center justify-between">
                    <h1 className=" font-light tracking-tight text-2xl ">
                      {dets.title}{" "}
                      <span className="text-neutral-500">
                        ({new Date(dets.id).toLocaleDateString()})
                      </span>
                    </h1>

                    <div className="flex items-center gap-5 mt-3 ">
                      <button className="bg-blue-400 px-3 rounded-3xl cursor-pointer hover:bg-blue-500">
                        View
                      </button>
                    </div>
                  </div>
                </Link>
              );
            })
          ) : (
            <p className="text-neutral-400">No snippets saved yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
