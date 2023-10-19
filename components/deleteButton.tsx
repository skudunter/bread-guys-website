"use client";
import { useState } from "react";
export default function DeleteButton({ ID }: { ID: number }) {
  function handleClick() {
    
  }
  return (
    <button
      onClick={handleClick}
      type="button"
      data-id={ID}
      data-modal-toggle="delete-modal"
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out"
    >
      Delete
    </button>
  );
}
