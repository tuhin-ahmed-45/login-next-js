import Image from "next/image";
import {
  BsCameraVideoFill,
  BsFillInfoCircleFill,
  BsFillTelephoneFill,
} from "react-icons/bs";

const MessangerHeader = () => {
  return (
    <div className="bg-gray-900 p-3 flex justify-between">
      {/* Profile Name */}
      <div className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded-md">
        <div className="w-12 h-12 relative rounded-full overflow-hidden">
          <Image fill src={"/images/profile.jpg"} alt="Habibullah Bahar" />
        </div>
        <h1 className="font-semibold text-lg text-white">
          Habibullah Bahar Piash
        </h1>
      </div>

      {/* Icons  */}
      <div className="flex gap-1 items-center text-blue-500">
        <span className="p-2.5 w-10 h-10 rounded-full hover:bg-gray-700">
          <BsFillTelephoneFill className="text-xl" />
        </span>
        <span className="p-2.5 w-10 h-10 rounded-full hover:bg-gray-700">
          <BsCameraVideoFill className="text-xl" />
        </span>
        <span className="p-2.5 w-10 h-10 rounded-full hover:bg-gray-700">
          <BsFillInfoCircleFill className="text-xl" />
        </span>
      </div>
    </div>
  );
};

export default MessangerHeader;
