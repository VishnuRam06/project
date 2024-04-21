"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Modal } from "./components";
import { Form } from "./components/Form";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);

  const modalRef = useRef();

  const fetchMonitors = useCallback(() => {
    setLoading(true);
    fetch("/api/monitors")
      .then((res) => res.json())
      .then(({ data }) => setData(data))
      .finally(() => setLoading(false));
  }, []);

  const createMonitor = useCallback((monitor: any) => {
    setLoading(true);
    fetch("/api/monitors", {
      method: "POST",
      body: JSON.stringify(monitor),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(console.log)
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => fetchMonitors(), [fetchMonitors]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-4">White</td>
              <td className="px-6 py-4">Laptop PC</td>
              <td className="px-6 py-4">$1999</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Magic Mouse 2
              </th>
              <td className="px-6 py-4">Black</td>
              <td className="px-6 py-4">Accessories</td>
              <td className="px-6 py-4">$99</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Modal
        title="Create Monitor"
        triggerContent="Create New Monitor"
        ref={modalRef}
      >
        <Form
          onSubmit={(data) => {
            // do the create api call

            createMonitor(data);

            if (modalRef.current) {
              const current = modalRef.current as any;
              current.closeModal();
            }
          }}
        />
      </Modal>
    </main>
  );
}
