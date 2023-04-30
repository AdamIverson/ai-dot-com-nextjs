import Link from "next/link";
import Image from "next/image";
import flower from '/public/assets/56810001.jpg'

export default function FirstPost() {
  return (
    <div>
      <h1>First Post</h1>
      <Link href='/'>go back</Link>
      <br />
      <Image src={flower}
        height={800}
        width={1200}
        alt='flower'
      />
    </div>
  )
}