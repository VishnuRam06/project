import React from "react";
import { useFormik, FormikValues } from "formik";

export type FormProps = {
  onSubmit: (data: FormikValues) => void;
};

const Form = ({ onSubmit }: FormProps) => {
  const {
    values: { message, name, query, type },
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      message: "",
      name: "",
      query: "",
      type: "",
    },
    onSubmit: (data, { resetForm }) => {
      resetForm();
      onSubmit(data);
    },
  });

  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
      <div className="mb-5">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Message
        </label>
        <input
          type="text"
          name="message"
          id="message"
          onChange={handleChange}
          value={message}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          value={name}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="query"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Query*
        </label>
        <input
          type="text"
          name="query"
          id="query"
          onChange={handleChange}
          value={query}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="type"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Type*
        </label>
        <input
          type="text"
          name="type"
          id="type"
          onChange={handleChange}
          value={type}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
