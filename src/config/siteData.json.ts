export interface SiteDataProps {
	name: string;
	title: string;
	description: string;
	useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
	author: {
		name: string;
		email: string;
	};
	defaultImage: {
		src: string;
		alt: string;
	};
}

const siteData: SiteDataProps = {
	name: "Tom DJ",
	title: "Tom DJ – DJ professionnel pour mariages et événements",
	description:
		"Tom DJ vous accompagne pour vos événements avec des prestations DJ professionnelles : sonorisation, lumière, animations et ambiance sur-mesure pour mariages, cérémonies et soirées privées.",
	useViewTransitions: true,
	author: {
		name: "Tom Forest",
		email: "tom.forest@outlook.fr"
	},
	defaultImage: {
		src: "/images/cosmic-themes-logo.jpg",
		alt: "Tom DJ – DJ professionnel",
	},
};

export default siteData;