export default function Hero(){
    return (
    <div className="mx-auto w-full lg:px-24 max-w-7xl md:px-12 items-center px-8 lg:py-24 md:py-12 py-12 ">
    <div>
      <div className="text-center max-w-4xl mx-auto">
        <div className="sm:mb-4 sm:flex sm:justify-center">
          <div
            className="z-10 w-full max-w-xl px-5 xl:px-0">
            {/* <a
              href="https://twitter.com/rahul_jalindar"
              className="font-semibold text-indigo-600"
              ><span className="absolute inset-0" aria-hidden="true"></span>
              <span className="block lg:inline">
                Follow on Twitter for updates <span aria-hidden="true"
                  >&rarr;</span
                >
              </span>
            </a> */}

        <a
          href="https://twitter.com/steventey/status/1613928948915920896"
          target="_blank"
          rel="noreferrer"
          className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
        >
          <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 248 204"
            className="h-5 w-5 text-[#1d9bf0]"
          >
            <path
              fill="currentColor"
              d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5v-.64c7.02 3.91 14.88 6.08 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71c25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.2 26.16z"
            />
          </svg>
          </div>
          <p className="text-sm font-semibold text-[#1d9bf0]">
            Introducing PicWish
          </p>
        </a>
          </div>
        </div>



        <h1
          className="text-black animate-fade-up bg-gradient-to-br lg:text-5xl bg-clip-text font-display text-4xl font-bold tracking-tight lg:mt-4 mb:mt-4 mt-4">
          AI Powered Image Processing Tools
        </h1>

        <p className="text-slate-500 lg:text-xl max-w-2xl mt-4 mx-auto text-base">
          PicWish is a AI powered image enhancement, object removal, image background removal tool.
        </p>
      </div>
      <div className="flex justify-center gap-3 mt-10 flex-col sm:flex-row">

        <a
          className="items-center justify-center font-medium rounded-xl focus-visible:outline-black focus:outline-none inline-flex bg-black border-2 border-black duration-200 focus-visible:ring-black hover:bg-transparent hover:border-black hover:text-black lg:w-auto px-6 py-3 text-center text-white"
          href="https://lexingtonthemes.com"
          >Try for Free &nbsp; &rarr;
        </a>
      </div>
      </div>
      </div>

    );
}