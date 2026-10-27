import logoNav from "@assets/images/site-logo.png"; // Ajuste le chemin selon l'emplacement de ton logo

export interface navLinkItem {
    text: string;
    link: string;
    newTab?: boolean; // adds target="_blank" rel="noopener noreferrer" to link
    image?: ImageMetadata; // Ajout de la propriété pour l'image
}

export interface navDropdownItem {
    text: string;
    dropdown: navLinkItem[];
}

export type navItem = navLinkItem | navDropdownItem;

// note: 1 level of dropdown is supported
const navConfig: navItem[] = [
    { text: "Vivez l'experience", link: "/experience" },
    { text: "Materiel", link: "/materiel" },
    { text: "Deco", link: "/deco" },
    { text: "Votre animateur", link: "/about" },
    { text: "Tarifs", link: "/tarifs" },
    { text: "Contacts", link: "/contact" },
];

export default navConfig;