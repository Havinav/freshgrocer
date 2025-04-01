import React from "react";

export const DashboardJumbtron = () => {
  return (
    <div className=" bg-green-100 text-red-500 shadow-lg rounded-lg p-2">
      <div className="flex"></div>

      <section class=" dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-green-500">
            Welcome to Fresh Grocer
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400 text-pink-500">
            Your favourite Fresh Grocer shop is now online.
          </p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0"></div>
        </div>
      </section>
    </div>
  );
};
