import Link from "next/link";
import Image from "next/image";
import pic from '/public/next.svg'
import flower from '/public/assets/56810001.jpg'

export default function FirstPost() {
  return (
    <div>
      <h1>First Post</h1>
      <Link href='/'>go back</Link>
      <br />
      <Image src={pic} height={400} width={400} alt=''/>
      <Image src={flower} height={400} width={500} alt=''/>
    </div>
  )
}