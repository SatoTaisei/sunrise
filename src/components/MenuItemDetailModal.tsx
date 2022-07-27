import { Fragment, useState, VFC } from "react";
import { Dialog, Transition } from "@headlessui/react";

export const MenuItemDetailModal: VFC<{
  imgURL: string;
  name: string;
  tag: string[];
  message: string;
  description: string;
}> = ({ imgURL, name, tag, message, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      {/* Modalクリックエリア */}
      <a
        className="block w-full cursor-pointer drop-shadow-md bg-white rounded-2xl px-2 py-4"
        onClick={openModal}
      >
        <div className="flex items-center">
          <div className="flex justify-center h-20 w-20 mr-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imgURL} alt="" className="h-20 object-cover max-w-fit" />
          </div>
          <div>
            <div className="flex items-center">
              {tag.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs font-bold text-rose-500 px-1 whitespace-nowrap"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <div className="flex items-start">
              <span className="inline-block font-bold text-xl py-1 whitespace-pre-line">
                {name}
              </span>
            </div>
            <p className="inline-block text-xs text-neutral-500 break-normal">
              {message}
            </p>
          </div>
        </div>
      </a>

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
                {/* Modal内コンテンツ */}
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={imgURL} alt="" className="h-64 object-cover" />
                  </div>
                  <div className="flex items-center pt-8">
                    {tag &&
                      tag.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-bold text-rose-500 px-1"
                        >
                          #{tag}
                        </span>
                      ))}
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <h3 className="inline-block font-bold text-2xl py-1">
                      {name}
                    </h3>
                  </Dialog.Title>

                  <p
                    dangerouslySetInnerHTML={{ __html: description }}
                    className="my-2"
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
