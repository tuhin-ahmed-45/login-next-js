import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";

function Profile() {
  return (
    <div className="bg-gray-900">
      <div className="flex flex-col items-center gap-2">
        <div className="w-14 h-14 rounded-full overflow-hidden relative">
          <Image fill src={"/images/profile.jpg"} alt="profile" />
        </div>
        <h2 className="text-white font-semibold">Habibullah Bahar Piash</h2>
      </div>
      <div className="text-white flex justify-center gap-1">
        <span className="">
          <BsFacebook />
        </span>
        <span className="">
          <IoMdNotifications />
        </span>
        <span className="">
          <AiOutlineSearch />
        </span>
      </div>
    </div>
  );
}

export default Profile;
