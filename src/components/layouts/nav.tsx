import { cn } from "@/lib/utils";
import type { MenuItem } from "primereact/menuitem";
import { Menubar, type MenubarPassThroughOptions } from 'primereact/menubar';

type NavProps = {
    url: string;
};
export const Nav: React.FC<NavProps> = ({ url }) => {

    const items: MenuItem[] = [
        {
            url: "/",
            label: "Home",
        },
        {
            url: "/events",
            label: "Events",
        },
        {
            url: "/products",
            label: "Products",
        },
        {
            url: "/bears",
            label: "Bears",
        },
        {
            url: "/gallery",
            label: "Gallery",
        },
        {
            url: "/contact",
            label: "Contact",
        },
    ];

    const start = <div>Amanda's Emporium</div>;

    const pt: MenubarPassThroughOptions = {
        root: {
            className: "px-2 md:px-8 justify-content-between bg-indigo-500 text-white"
        },
        menu: {
            className: "text-white"
        },
        menuitem: {
            className: "text-white",
            content: {
                className: "text-white"
            }

        }
    }

    return (
        <Menubar start={start} model={items} pt={pt} />

    )
}
