import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useEffect, useRef } from 'react';

export default function Example() {
  return (
    <div className="h-screen w-full pt-32 px-4">
      <div className="mx-auto w-full max-w-lg divide-y divide-gray-200 dark:divide-gray-700 rounded-xl bg-gray-100 dark:bg-gray-800">
        <Disclosure as="div" className="p-6">
          <code>// This one follows the disclosure pattern</code>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100 group-data-[hover]:text-gray-700 dark:group-data-[hover]:text-gray-200">
              Disclosure with interactible content - no auto focus
            </span>
            <ChevronDownIcon className="h-5 w-5 text-gray-600 dark:text-gray-300 group-data-[hover]:text-gray-500 dark:group-data-[hover]:text-gray-200 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <InteractiveContentNonAutoFocus />
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="p-6">
          <code>// This one overrides the disclosure status announcement</code>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100 group-data-[hover]:text-gray-700 dark:group-data-[hover]:text-gray-200">
              Disclosure with interactible content - auto focus
            </span>
            <ChevronDownIcon className="h-5 w-5 text-gray-600 dark:text-gray-300 group-data-[hover]:text-gray-500 dark:group-data-[hover]:text-gray-200 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <InteractiveContentAutoFocus />
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="p-6">
          <DisclosurePanel className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <InteractiveContentNonAutoFocus />
          </DisclosurePanel>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100 group-data-[hover]:text-gray-700 dark:group-data-[hover]:text-gray-200">
              Inverted Disclosure with interactive content
            </span>
            <ChevronDownIcon className="h-5 w-5 text-gray-600 dark:text-gray-300 group-data-[hover]:text-gray-500 dark:group-data-[hover]:text-gray-200 group-data-[open]:rotate-180" />
          </DisclosureButton>
        </Disclosure>
        <Disclosure as="div" className="p-6">
          <DisclosurePanel className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <NonInteractiveContent />
          </DisclosurePanel>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100 group-data-[hover]:text-gray-700 dark:group-data-[hover]:text-gray-200">
              Inverted Disclosure with non-interactive content
            </span>
            <ChevronDownIcon className="h-5 w-5 text-gray-600 dark:text-gray-300 group-data-[hover]:text-gray-500 dark:group-data-[hover]:text-gray-200 group-data-[open]:rotate-180" />
          </DisclosureButton>
        </Disclosure>
      </div>
    </div>
  );
}

const InteractiveContentNonAutoFocus = () => {
  return (
    <div className='p-2 flex justify-between'>
      <button>I am button</button>
      <button>Me too</button>
    </div>
  )
}

const InteractiveContentAutoFocus = () => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    buttonRef.current?.focus()
  }, [])
  return (
    <div className='p-2 flex justify-between'>
      <button ref={buttonRef}>I am button</button>
      <button>Me too</button>
    </div>
  )
}


const NonInteractiveContent = () => {
  const textRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    textRef.current?.focus()
  }, [])
  return (
    <div className='p-2 flex justify-between'>
      <div ref={textRef} tabIndex={-1}>I am text</div>
      <div>Me too</div>
    </div>
  )
}