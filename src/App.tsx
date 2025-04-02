import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Example() {
  return (
    <div className="h-screen w-full pt-32 px-4">
      <div className="mx-auto w-full max-w-lg divide-y divide-gray-200 dark:divide-gray-700 rounded-xl bg-gray-100 dark:bg-gray-800">
        <Disclosure as="div" className="p-6">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100 group-data-[hover]:text-gray-700 dark:group-data-[hover]:text-gray-200">
              Disclosure with interactible content - no auto focus
            </span>
            <ChevronDownIcon className="h-5 w-5 text-gray-600 dark:text-gray-300 group-data-[hover]:text-gray-500 dark:group-data-[hover]:text-gray-200 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <div className="mt-2 text-sm text-gray-600 dark:text-gray-400 p-2 flex justify-between">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
              Button 1
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded-md">
              Button 2
            </button>
          </div>
          <DisclosurePanel className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <div className="p-2 flex justify-between">
              <button className="px-4 py-2 bg-red-500 text-white rounded-md">
                Button 3
              </button>
              <button className="px-4 py-2 bg-yellow-500 text-white rounded-md">
                Button 4
              </button>
            </div>
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  );
}
