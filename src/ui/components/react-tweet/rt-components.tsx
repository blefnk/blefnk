import type { TwitterComponents } from "react-tweet";

import Image from "next/image";

export const components: TwitterComponents = {
	AvatarImg: (props) => <Image {...props} />,
	MediaImg: (props) => <Image {...props} fill unoptimized />,
};
