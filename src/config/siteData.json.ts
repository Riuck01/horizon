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

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "Forest Events",
	// Your website's title and description (meta fields)
	title: "Forest Events",
	description:
		"Forest Events vous accompagne pour vos événements avec DJ, sonorisation, lumière et animations sur-mesure. Ambiance maîtrisée, musique adaptée et prestations professionnelles pour mariages, cérémonies et soirées privées.",
	useViewTransitions: true,
	// Your information!
	author: {
		name: "Tom Forest",
		email: "tom.forest@outlook.fr"
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/cosmic-themes-logo.jpg",
		alt: "Cosmic Themes logo",
	},
};

export default siteData;
