import React from "react";

export default function DonorShoutout() {
  return (
    <div className="black-text flex flex-col justify-center items-center">
      <h1 className="text-center text-2xl dark:white-text md:text-3xl lg:text-5xl font-bold playfair mt-5">
        Some Recent Donors
      </h1>
      <div className="h-fit py-20 md:w-4/5 lg:w[90%] flex-wrap dancing gap-20 flex items-center justify-center">
        <div className="flex items-center justify-center flex-col">
          <img
            src="https://imgs.search.brave.com/I-ESPwqsPPPl14R7_r2_KHQNaYQofcIyh2xmZsVL_34/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlcy9r/Y0tvajhwNWkucG5n"
            className="w-80 absolute brightness-125"
          />
          <div className="flex flex-col items-center justify-between h-52">
            <div>
              <h6 className=" z-10 relative w-60 text-center text-2xl font-bold">
                ₹2001
              </h6>
              <h5 class="z-10 w-60 text-center relative mb-2 text-4xl font-bold tracking-tight">
                Anita Mishra
              </h5>
              <p class="z-10 w-60 relative mb-3 text-xl font-normal">
                "I'm thrilled to support such a meaningful cause. Keep up the
                fantastic work!"
              </p>
            </div>
            <p class="z-10 w-40 sanspro text-right relative mb-3 text-sm font-normal">
              5 minutes ago
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center flex-col">
          <img
            src="https://imgs.search.brave.com/I-ESPwqsPPPl14R7_r2_KHQNaYQofcIyh2xmZsVL_34/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlcy9r/Y0tvajhwNWkucG5n"
            className="w-80 absolute brightness-125"
          />
          <div className="flex flex-col items-center justify-between h-52">
            <div>
              <h6 className=" z-10 relative w-60 text-center text-2xl font-bold">
                ₹2000
              </h6>
              <h5 class="z-10 w-60 text-center relative mb-2 text-4xl font-bold tracking-tight">
                Sarah Wilson
              </h5>
              <p class="z-10 w-60 relative mb-3 text-xl font-normal">
                "I'm inspired by your dedication and impact. Proud to be a
                supporter!"
              </p>
            </div>
            <p class="z-10 w-40 sanspro text-right relative mb-3 text-sm font-normal">
              5 minutes ago
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center flex-col">
          <img
            src="https://imgs.search.brave.com/I-ESPwqsPPPl14R7_r2_KHQNaYQofcIyh2xmZsVL_34/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlcy9r/Y0tvajhwNWkucG5n"
            className="w-80 absolute brightness-125"
          />
          <div className="flex flex-col items-center justify-between h-52">
            <div>
              <h6 className=" z-10 relative w-60 text-center text-2xl font-bold">
                ₹2500
              </h6>
              <h5 class="z-10 w-60 text-center relative mb-2 text-4xl font-bold tracking-tight">
                Harsh Modi
              </h5>
              <p class="z-10 w-60 relative mb-3 text-xl font-normal">
                "Paisa Bahut hai merepe"
              </p>
            </div>
            <p class="z-10 w-40 sanspro text-right relative mb-3 text-sm font-normal">
              5 minutes ago
            </p>
          </div>
        </div>

        <div className="hidden sm:flex items-center justify-center flex-col">
          <img
            src="https://imgs.search.brave.com/I-ESPwqsPPPl14R7_r2_KHQNaYQofcIyh2xmZsVL_34/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlcy9r/Y0tvajhwNWkucG5n"
            className="w-80 absolute brightness-125"
          />
          <div className="flex flex-col items-center justify-between h-52">
            <div>
              <h6 className=" z-10 relative w-60 text-center text-2xl font-bold">
                ₹1001
              </h6>
              <h5 class="z-10 w-60 text-center relative mb-2 text-4xl font-bold tracking-tight">
                Manoj Bajpai
              </h5>
              <p class="z-10 w-60 relative mb-3 text-xl font-normal">
                "It's a pleasure to contribute to your noble efforts."
              </p>
            </div>
            <p class="z-10 w-40 sanspro text-right relative mb-3 text-sm font-normal">
              10 minutes ago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
