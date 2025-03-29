import React from "react";

export const DashboardJumbtron = () => {
  return (
    <div>
      <section class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-green-700 bg-blend-multiply">
        <div class="px-4 mx-auto max-w-screen-xl text-center py-10 lg:py-30 rounded-lg">
          <h1 class=" text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Welcome to Fresh Grocer
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Your favourite Fresh Grocer shop is now online

          </p>
        </div>
      </section>
    </div>
  );
};
