import type { ModalProps } from './Modal';
import { VFC } from 'react';

type Props = {
	openModal: () => void;
} & Pick<ModalProps, 'imgUrl' | 'name' | 'tag' | 'message'>;

export const ModalProvider: VFC<Props> = ({
	imgUrl,
	name,
	tag,
	message,
	openModal,
}) => {
	return (
		<a
			className="block w-full cursor-pointer drop-shadow-md bg-white rounded-2xl px-2 py-4"
			onClick={openModal}
		>
			<div className="flex items-center">
				<div className="flex justify-center h-20 w-20 mr-2">
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img src={imgUrl} alt="" className="h-20 object-cover max-w-fit" />
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
	);
};
