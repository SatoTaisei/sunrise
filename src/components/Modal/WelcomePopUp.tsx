import { Dialog, Transition } from "@headlessui/react";
import { Dispatch, Fragment, SetStateAction, VFC } from "react";
import Image from "next/image";

import Logo_ORANGE_SVG from "../../../public/images/Logo_orange.svg";

export const WelcomePopUp: VFC<{
  isPopUpOpen: boolean;
  setIsPopUpOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ isPopUpOpen, setIsPopUpOpen }) => {
  const closePopUp = () => {
    setIsPopUpOpen(false);
  };

  return (
    <>
      <Transition appear show={isPopUpOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closePopUp}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto cursor-pointer">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="w-screen h-screen flex items-center justify-center transform overflow-hidden bg-black text-left align-middle shadow-xl transition-all"
                  onClick={() => setIsPopUpOpen(false)}
                >
                  {/* <Dialog.Title
                    as="h3"
                    className="text-3xl font-medium leading-6 text-gray-900"
                  >
                    Welcome !
                  </Dialog.Title> */}
                  <picture>
                    <Image
                      src={Logo_ORANGE_SVG}
                      alt=""
                      width={400}
                      height={200}
                      className="transition-opacity delay-100 duration-1000 ease-in opacity-100"
                    />
                  </picture>

                  {/* <div className="flex justify-center mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closePopUp}
                    >
                      close
                    </button>
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
