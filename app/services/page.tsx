import Image from "next/image";

function Form() {
  return (
    <div className="min-h-screen py-40 bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="flex flex-col items-center relative justify-center w-1/2">
            <Image fill src={"/images/bg.jpg"} alt="Baground" />
            <h1 className="text-white  text-3xl mb-3 z-10 relative">Welcome</h1>
            <div className="flex flex-col items-center justify-center p-12 z-10 relative">
              <p className="text-white ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
                blanditiis voluptates ut error beatae perferendis quas quam eius
                veritatis{" "}
                <a href="#" className="text-purple-500 font-semibold">
                  Learn moresdfsdfsfdfsdfefsdf
                </a>
              </p>
            </div>
          </div>
          <div className="w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4">Registar</h2>
            <p className="mb-4">Create your account</p>
            <form action="#">
              <div className="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border border-gray-400 py-1 px-2"
                />
                <input
                  type="text"
                  placeholder="Sur Name"
                  className="border border-gray-400 py-1 px-2"
                />
              </div>
              <div className="mt-5">
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div className="mt-5">
                <input
                  type="password"
                  placeholder="Password"
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div className="mt-5">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div className="mt-5">
                <input type="checkbox" className="border border-gray-400" />
                <span>
                  I accpet the
                  <a href="#" className="text-purple-500 font-semibold">
                    Terms of use
                  </a>
                  &
                  <a href="#" className="text-purple-500 font-semibold">
                    Privacy Policy
                  </a>
                </span>
              </div>
              <div className="mt-5">
                <button className="w-full bg-purple-500 text-white text-center py-3">
                  Resigster Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
