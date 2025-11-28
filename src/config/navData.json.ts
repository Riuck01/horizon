
export interface navLinkItem {
	text: string;
	link: string;
	newTab?: boolean; // adds target="_blank" rel="noopener noreferrer" to link
}

export interface navDropdownItem {
	text: string;
	dropdown: navLinkItem[];
}

export type navItem = navLinkItem | navDropdownItem;

// note: 1 level of dropdown is supported
const navConfig: navItem[] = [
	{ text: "Accueil", link: "/" },
	{ text: "Vivez l'experience", link: "/experience" },
	{ text: "Materiel", link: "/materiel" },
	{ text: "Deco", link: "/deco" },
	{ text: "Votre animateur", link: "/about" },
	{ text: "Tarifs", link: "/tarifs" },
	{ text: "Contacts", link: "/contact" },
];


export default navConfig;
