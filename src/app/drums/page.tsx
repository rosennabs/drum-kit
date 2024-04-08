"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import "tailwindcss/tailwind.css";
import { drumHits } from "./helpers";

function Drums() {
  const [borderColor, setBorderColor] = useState({});

  const playSound = (hit) => {
     // Create an Audio object for the sound
    const sound = new Audio(`/sounds/${hit}.wav`);
    sound.play();
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      const hit = drumHits.find(
        (hit) => event.key.toLowerCase() === hit.key.toLowerCase()
      );

      if (hit) {
        setBorderColor((prev) => ({
          ...prev,
          [hit.key]: "border-amber-400",
        }));
        
        playSound(hit.sound.toLowerCase());
      }
    };

    const handleKeyUp = () => {
      setBorderColor("border-green-400");
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div
      className="h-screen w-100 flex flex-col items-center justify-center"
      style={{ backgroundImage: `url('images/gameBackground.jpg')` }}
    >
      <div className="w-90 flex flex-col items-center">
        <h1 className="text-5xl text-white mb-16">Hit the keyboard keys!</h1>

        <div className="flex flex-row justify-evenly">
          {drumHits.map((hit) => (
            <div
              key={hit.key}
              className={`flex flex-col items-center border-solid border-4 ${
                borderColor[hit.key] || "border-green-400"
              } mx-4 py-4 px-8 mb-16`}
              style={{
                width: "100px",
                boxShadow: borderColor[hit.key] ? "0 0 20px #FFC107" : "none", // Apply shadow when the corresponding key is pressed
              }}
            >
              <kbd className="text-4xl text-white">{hit.key}</kbd>
              <p className="text-amber-400 text-sm">{hit.sound}</p>
            </div>
          ))}
        </div>

        <Link href="/">
          <span className="text-2xl underline underline-offset-4 text-amber-400">
            Exit
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Drums;
