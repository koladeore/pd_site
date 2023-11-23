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
            { name: "Youtube Messages", link: "https://www.youtube.com/@officialdavidmakanjuolapd3858" },
            { name: "Messages", link: "/allMessages" },
            { name: "Books", link: "/" },
        ],
    },
    {
        name: "Ministry",
        submenu: true,
        sublinks: [
            { name: "SOS", link: "https://www.facebook.com/profile.php?id=100068085294838" },
        ],
    },
];