"use client";
import { useForm } from "react-hook-form";
import React from "react";
import Image from "next/image";
import Logo from "@/components/Logo";
export default function SignIn() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="relative w-full h-screen flex justify-center items-center">
      <Logo />
      <div className="absolute inset-0 z-0">
        <Image
          src="/signIn.jpg"
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
      </div>
      <div className="formContainer relative z-10 w-[25%] h-[55%] mx-auto  bg-white bg-opacity-90 p-8 border border-gray-300 shadow-md">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="h-full flex flex-col justify-evenly"
        >
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 cursor-pointer"
            >
              Email
            </label>
            <input
              id="username"
              {...register("username", { required: true })}
              type="email"
              className={`mt-1 block w-full border border-gray-300 rounded-md p-2 ${
                errors.username ? "border-red-500" : ""
              }`}
            />
            {errors.username && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 cursor-pointer"
            >
              Password
            </label>
            <input
              id="password"
              {...register("password", { required: true })}
              type="password"
              className={`mt-1 block w-full border border-gray-300 rounded-md p-2 ${
                errors.password ? "border-red-500" : ""
              }`}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          <input
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
}
