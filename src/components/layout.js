import React from "react"
import { Link } from "gatsby"

export default function Layout({ children }) {
  return (
    <div
      style={{
        margin: "2rem auto",
        maxWidth: 700,
      }}
    >
      <header style={{ textAlign: "center" }}>
        <Link to="/">
          <h3 style={{ display: "inline" }}>Interesting Cat Facts</h3>
        </Link>
      </header>
      {children}
    </div>
  )
}
