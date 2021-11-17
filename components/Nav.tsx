import { useRouter } from "next/router"
import Link from "next/link"
import React, { useState } from "react"

export default function Nav() {
  const router = useRouter()

  const [count, setCount] = useState(0)
  return (
    <div>
      Paths
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
      Locales
      <ul>
        <li>
          <Link href={router.asPath} locale="en">
            en
          </Link>
        </li>
        <li>
          <Link href={router.asPath} locale="de">
            de
          </Link>
        </li>
      </ul>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        {count}
      </button>
    </div>
  )
}
