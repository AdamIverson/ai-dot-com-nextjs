import Link from "next/link"
import Navbar from "./components/Navbar"

function HomePage() {
  return (
    <div>
      <Navbar />
      <div>welcome to ai dot com</div>
      <h1><Link href='/posts/first-post'>first post</Link></h1>
      {/* <Footer /> */}
    </div>
  )
}

export default HomePage
