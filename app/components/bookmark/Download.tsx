import Image from "next/image";

function Download() {
  return (
    <div>
      <section className="py-20 mt-20">
        <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
          <h1 className="text-3xl text-center text-bookmark-blue">
            Download the extension
          </h1>
          <p className="text-center text-bookmark-grey mt-4">
            Weve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </p>
        </div>

        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16">
          <div className="flex flex-col rounded-md shadow-md lg:mb-16">
            <div className="p-6 flex flex-col items-center">
              <Image
                src={"/images/logo-chrome.svg"}
                width={200}
                height={200}
                alt=""
              />
              <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">
                Add to Chrome
              </h3>
              <p className="mb-2 text-bookmark-grey font-light">
                Minimum version 62
              </p>
            </div>
            <hr className="border-b border-bookmark-white" />
            <div className="flex p-6">
              <button
                type="button"
                className="flex-1 btn btn-purple hover:bg-bookmark-white hover:text-black"
              >
                Add & Install Extension
              </button>
            </div>
          </div>
          <div className="flex flex-col rounded-md shadow-md lg:my-8">
            <div className=" p-6 flex flex-col items-center ">
              <div className="relative w-[200px] h-[200px] mt-5 mb-2 text-bookmark-blue text-lg">
                <Image fill src={"/images/logo-firefox.svg"} alt="" />
              </div>
              <h3 className="">Add to Firefox</h3>
              <p className="mb-2 text-bookmark-grey font-light">
                Minimum version 62
              </p>
            </div>
            <hr className="border-b border-bookmark-white" />
            <div className="flex p-6">
              <button
                type="button"
                className="flex-1 btn btn-purple hover:bg-bookmark-white hover:text-black"
              >
                Add & Install Extension
              </button>
            </div>
          </div>

          <div className="flex flex-col rounded-md shadow-md lg:mt-16">
            <div className="p-6 flex flex-col items-center">
              <Image
                src={"/images/logo-opera.svg"}
                width={200}
                height={200}
                alt=""
              />
              <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">
                Add to Opera
              </h3>
              <p className="mb-2 text-bookmark-grey font-light">
                Minimum version 62
              </p>
            </div>
            <hr className="border-b border-bookmark-white" />
            <div className="flex p-6">
              <button
                type="button"
                className="flex-1 btn btn-purple hover:bg-bookmark-white hover:text-black"
              >
                Add & Install Extension
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Download;
