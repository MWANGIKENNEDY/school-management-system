import { zodResolver } from "@hookform/resolvers/zod";
import React, { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "primereact/button";
import InputField from "../InputField";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long!" })
    .max(20, { message: "Username must be up to 20 characters long!" }),
  email: z.string().email({ message: "Invalid email address!" }),
  password: z
    .string()
    .min(8, { message: "Username must be at least 3 characters long!" }),
  firstName: z.string().min(1, { message: "First name is required!" }),
  lastName: z.string().min(8, { message: "Last name is required!" }),
  phone: z.string().min(8, { message: "Phone is required!" }),
  address: z.string().min(8, { message: "Address is required!" }),
  bloodType: z.string().min(8, { message: "Blood type is required!" }),
  birthday: z.date({ message: "Birthday is required!" }),
  sex: z.enum(["male", "female"], { message: "Sex is required!" }),
  img: z.instanceof(File, { message: "Image is required!" }),
});

const ParentForm = ({
  type,
  data,
  setOpen,
  relatedData,
}: {
  type: "create" | "update";
  data?: any;
  setOpen: Dispatch<SetStateAction<boolean>>;
  relatedData?: any;
}) => {
  type Inputs = z.infer<typeof schema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className=" flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className=" text-xl font-semibold">
      {type === "create" ? "Create a new parent" : "Update parent"}
      </h1>

      <span className="text-xs text-gray-400 font-medium">
        Authentication Information
      </span>

      <div className="input-wrapper grid grid-cols-1 lg:grid-cols-3 gap-5">
        <InputField
          label="Username"
          name="username"
          defaultValue={data?.username}
          register={register}
          error={errors?.username}
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          defaultValue={data?.email}
          register={register}
          error={errors?.email}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          defaultValue={data?.password}
          register={register}
          error={errors?.password}
        />
      </div>

      <span className="text-xs text-gray-400 font-medium">
        Personal Information
      </span>

      <div className="input-wrapper grid grid-cols-1 lg:grid-cols-3 gap-5">
        <InputField
          label="First Name"
          name="firstName"
          defaultValue={data?.firstName}
          register={register}
          error={errors?.firstName}
        />
        <InputField
          label="Last Name"
          name="lastName"
          type="text"
          defaultValue={data?.lastName}
          register={register}
          error={errors?.lastName}
        />
        <InputField
          label="Phone"
          name="phone"
          type="text"
          defaultValue={data?.phone}
          register={register}
          error={errors?.phone}
        />

        <InputField
          label="Address"
          name="address"
          type="text"
          defaultValue={data?.address}
          register={register}
          error={errors?.address}
        />
        <InputField
          label="Blood Type"
          name="bloodType"
          type="text"
          defaultValue={data?.bloodType}
          register={register}
          error={errors?.bloodType}
        />

        <InputField
          label="Birthday"
          name="birthday"
          type="date"
          defaultValue={data?.birthday}
          register={register}
          error={errors?.birthday}
        />

        <div className=" flex flex-col gap-2">
          <label className=" text-xs text-gray-500">Sex</label>

          <select
            className=" ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm"
            {...register("sex")}
            defaultValue={data?.sex}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          {errors.sex?.message && (
            <p className=" text-xs text-red-400">
              {errors.sex.message.toString()}
            </p>
          )}
        </div>

        <div className=" flex flex-col justify-center gap-2">
          <label
            className=" text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
            htmlFor="myfile"
          >
            <i className="pi pi-file-arrow-up" style={{ fontSize: "1rem" }}></i>{" "}
            <span>Upload a photo</span>
          </label>

          <input
            type="file"
            className="hidden"
            id="myfile"
            {...register("img")}
          />

          {errors.img?.message && (
            <p className=" text-xs text-red-400">
              {errors.img.message.toString()}
            </p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        label={type === "create" ? "Create" : "Update"}
        style={{
          backgroundColor: "green",
          outline: "none",
          border: "none",
          color: "white",
        }}
      ></Button>
    </form>
  );
};

export default ParentForm;
