"use client";
import { useState } from "react";
export default function DeleteButton({ ID }: { ID: number }) {
  async function handleClick() {
    try {
      const res: Response = await fetch("/api/handleDelete", {
        method: "DELETE",
        body: JSON.stringify({
          ID,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("Failed to delete user");
      }
    } catch (e) {
      console.log(e);
    }
    location.reload();
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
