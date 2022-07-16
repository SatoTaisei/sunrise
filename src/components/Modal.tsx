import { Label } from "@/components/Label";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, VFC } from "react";

export const Modal: VFC<{
  imgURL: string;
  name: string;
  category: string;
  tag: [string];
  description: string;
}> = ({ imgURL, name, category, tag, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="w-5 h-5 inline-block rounded-md bg-neutral-400 bg-opacity-20 text-sm font-bold text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 mt-3 ml-2"
      >
        →
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={imgURL} alt="" />
                  <div className="flex items-center pt-8">
                    <Label category={category} />
                    {tag &&
                      tag.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-bold text-neutral-300 px-1"
                        >
                          #{tag}
                        </span>
                      ))}
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {
                      <h3 className="inline-block font-bold text-2xl py-1">
                        {name}
                      </h3>
                    }
                  </Dialog.Title>

                  <p
                    dangerouslySetInnerHTML={{ __html: description }}
                    className="my-6"
                  />

                  <div className="flex justify-center mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
