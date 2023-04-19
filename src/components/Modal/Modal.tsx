import { useState, VFC } from 'react';
import { ModalProvider } from './ModalProvider';
import { ModalDialog } from './ModalDialog';

export type ModalProps = {
	imgUrl: string;
	name: string;
	tag: string[];
	message: string;
	description: string;
	videoUrl?: string;
};

export const Modal: VFC<ModalProps> = ({
	imgUrl,
	name,
	tag,
	message,
	description,
	videoUrl,
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const closeModal = () => {
		setIsOpen(false);
	};

	const openModal = () => {
		setIsOpen(true);
	};

	return (
		<>
			<ModalProvider
				imgUrl={imgUrl}
				name={name}
				tag={tag}
				message={message}
				openModal={openModal}
			/>

			<ModalDialog
				imgUrl={imgUrl}
				name={name}
				tag={tag}
				description={description}
				videoUrl={videoUrl}
				isOpen={isOpen}
				closeModal={closeModal}
			/>
		</>
	);
};
