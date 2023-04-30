import Link from "next/link";

function HomePage() {
  return <div>
    <h1>Welcome to Next.js!</h1>
    <p>read my <Link href='/posts/first-post'>first post</Link></p>

  </div>

}

export default HomePage