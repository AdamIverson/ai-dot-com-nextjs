import Link from "next/link"

function HomePage() {
  return (
    <div>
      <div>welcome to ai dot com</div>
      <h1><Link href='/posts/first-post'>first post</Link></h1>
    </div>
  )
}

export default HomePage
