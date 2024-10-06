import { toTitleCase } from "@/lib/utils";
import { BreadCrumb, type BreadCrumbPassThroughOptions } from "primereact/breadcrumb";
import type { MenuItem } from "primereact/menuitem";

type BreadcrumbProps = {
    url: string;
};
export const Breadcrumb: React.FC<BreadcrumbProps> = ({ url }) => {
    const home: MenuItem = { icon: "pi pi-home", url: "/" };
    const items: MenuItem[] = [];

    const paths = url.split("/").filter((crumb: string) => crumb);
    paths.forEach((text: string, index: number) => {
        const generateHref = `/${paths.slice(0, index + 1).join("/")}`;
        const finalHref = "" + generateHref;

        const matches = text.match(/^(.+?)(\.[a-z0-9]+)?$/i);

        if (matches && matches[2]) {
            text = matches[1];
        }
        text = text.replace(/[-_]/g, " ");
        text = toTitleCase(text);

        items.push({
            label: text,
            url: finalHref,
        });
    });

    const pt: BreadCrumbPassThroughOptions = {
        root: {
            className: "px-2 md:px-8 bg-indigo-500 text-white"
        }
    }

    return (
        <>
            <BreadCrumb id="breadcrumb" model={items} home={home} pt={pt} />
        </>
    )
}