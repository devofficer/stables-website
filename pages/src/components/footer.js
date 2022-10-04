import { useRouter } from "next/router"
import React from "react"

const Footer = () => {
  const router = useRouter()

  const handleHomeClick = () => {
    router.push("/")
  }

  return (
    <footer>
      <h1 onClick={handleHomeClick}>My Site</h1>
    </footer>
  )
}

export default Footer