import Image from "next/image";
import { BsFillEyeFill, BsGoogle } from "react-icons/bs";

export default function Blog() {
  return (
    <div>
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5">
          <div className="md:w-1/2 px-16">
            <h2 className="font-bold text-2xl">Login</h2>
            <p className="text-sm mt-4">
              If you are already a member, easily login
            </p>

            <form action="#" className="flex flex-col gap-4">
              <input
                className="p-2 mt-8 rounded-xl border"
                type="email"
                name="email"
                placeholder="Email"
              />
              <div className="relative">
                <input
                  className="p-2 rounded-xl border w-full"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <span>
                  <BsFillEyeFill className="absolute top-1/2 right-3 -translate-y-1/2" />
                </span>
              </div>
              <button className="bg-cyan-600 rounded-xl py-2 text-white hover:scale-105 duration-300">
                Login
              </button>
            </form>
            <div className="mt-10 grid-cols-3 items-center text-gray-500">
              <hr className="text-gray-500" />
              <p className="text-center">OR</p>
              <hr className="text-gray-500" />
            </div>

            <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300">
              <span>
                <BsGoogle className="mr-3" />
              </span>
              Login with Google
            </button>
            <p className="mt-5 text-xs border-b py-6">Forget your Password?</p>
          </div>
          <div className="md:block hidden w-1/2">
            <Image
              className="rounded-2xl"
              src="/images/login.jpg"
              alt="Login"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
