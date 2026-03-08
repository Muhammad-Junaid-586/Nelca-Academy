import React from 'react'
import { useRouter } from "next/navigation";

const Button = () => {
  const router = useRouter();
  return (
    <button
  onClick={() => router.push("/admissions")}
  className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 sm:px-7 py-3 rounded-lg font-semibold shadow-lg transition transform hover:-translate-y-1"
>
  Apply Now →
</button>
  )
}

export default Button