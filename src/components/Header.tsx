import Image from 'next/image';
import { VFC } from 'react';

import Logo_ORANGE_PNG from '../../public/images/Logo_orange.png';
import Logo_ORANGE_SVG from '../../public/images/Logo_orange.svg';

export const Header: VFC = () => {
	return (
		<header className="fixed w-full h-20 bg-blue-900 flex justify-center justify-items-center top-0 z-10">
			<h1 className="relative w-40 h-20">
				<picture>
					<Image
						src={Logo_ORANGE_SVG}
						alt=""
						layout="fill"
						objectFit="contain"
					/>
					<Image
						src={Logo_ORANGE_PNG}
						alt=""
						layout="fill"
						objectFit="contain"
					/>
				</picture>
			</h1>
		</header>
	);
};
