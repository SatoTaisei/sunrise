import { Dialog, Transition } from '@headlessui/react';
import { Fragment, VFC } from 'react';

import type { ModalProps } from './Modal';

type Props = {
	isOpen: boolean;
	closeModal: () => void;
} & Omit<ModalProps, 'message'>;

export const ModalDialog: VFC<Props> = ({
	imgUrl,
	name,
	tag,
	description,
	videoUrl,
	isOpen,
	closeModal,
}) => {
	return (
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
									<img src={imgUrl} alt="" className="h-64 object-cover" />
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
									<p className="inline-block font-bold text-2xl py-1">{name}</p>
								</Dialog.Title>

								<p
									dangerouslySetInnerHTML={{ __html: description }}
									className="my-2"
								/>

								{videoUrl && <video src={videoUrl} controls />}

								<div className="flex justify-center mt-4">
									{/* NOTE: <button>だとModalが開いた瞬間にFocusしてしまい表示位置が下になるため<a>としている */}
									<a
										type="button"
										className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
										onClick={closeModal}
									>
										Close
									</a>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
};
