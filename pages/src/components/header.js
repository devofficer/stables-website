import { useRouter } from "next/router"
import React from "react"

const Header = () => {
  const router = useRouter()

  const handleHomeClick = () => {
    router.push("/")
  }

  return (
    <header>
      <h1 onClick={handleHomeClick}>My Site</h1>
    </header>
  )
}

export default Header