import Link from "next/link";
import Profile from "../components/profile";

export default function FirstPost() {
  return (
    <div>
      <h1>First Post</h1>
      <Link href='/'>go back</Link>
      <br />
      <Profile />
    </div>
  )
}