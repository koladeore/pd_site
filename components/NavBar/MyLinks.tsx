interface Sublink {
    name: string; 
    link: string 
};

interface Link {
    name: string;
    submenu: boolean;
    sublinks: Sublink[];
}
export const links: Link[] = [
    {
        name: "Teachings",
        submenu: true,
        sublinks: [
            { name: "Youtube Messages", link: "/" },
            { name: "Audio Messages", link: "/" },
            { name: "Messages(pdf)", link: "/" },
            { name: "Books", link: "/" },
        ],
    },
    {
        name: "Ministry",
        submenu: true,
        sublinks: [
            { name: "SOS", link: "/" },
            { name: "TFPAW", link: "/" },
            
        ],
    },
];