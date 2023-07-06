import Image from "next/image";
import { BsEye } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

function Form() {
  return (
    <div className="flex items-center justify-center w-screen">
      <div className="bg-gray-200 grid grid-cols-2 rounded-md m-40">
        <div className="p-20">
          <h2 className="text-2xl font-semibold mt-3 px-6">Login</h2>
          <p className="text-sm mt-6 px-6">
            If you are already a member, easily login
          </p>
          <div className="p-6">
            <form action="#" className="mt-20 flex flex-col gap-8">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 rounded-lg"
              />
              <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-2 rounded-lg"
                />
                <span>
                  <BsEye className="absolute top-1/2 right-3 -translate-y-1/2" />
                </span>
              </div>

              <button className="p-2 w-full bg-blue-500 text-white rounded-md">
                Login
              </button>
            </form>
            <div className="mt-5 ml-28">
              <hr /> <p>OR</p> <hr />
            </div>
            <button className="mt-5 p-2 w-full bg-white rounded-md flex items-center justify-center">
              <FcGoogle className="mr-3" /> Login with Google
            </button>
          </div>
        </div>
        <div className="p-10">
          <Image
            src={"/images/login.jpg"}
            width={400}
            height={400}
            className="rounded-xl"
            alt="pic"
          />
        </div>
      </div>
    </div>
  );
}

export default Form;
