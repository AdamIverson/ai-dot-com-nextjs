import Image from "next/image"

const Profile = () => (

  <Image
    src='/public/images/profile_photo.jpg'
    height={500}
    width={400}
    alt="profile photo"
  />

)

export default Profile;