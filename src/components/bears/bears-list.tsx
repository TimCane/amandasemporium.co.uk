import { cn } from "@/lib/utils";
import { useStore } from "@nanostores/react";
import { useEffect, useState, type Key } from "react";
import { $favourites, $filteredBears, $sortDirection, $sortOrder, incrementShowMoreCount, initialise, setSortDirection, setSortOrder, toggleFavourite } from "./bears.store";
import type { Bear } from "./types/bear.type";
import { SortAge, SortAlphabetical, SortFavourites, SortStatus, type SortId } from "./types/sort-option.enum";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Image } from 'primereact/image';
import { SplitButton } from 'primereact/splitbutton';
import type { MenuItem } from "primereact/menuitem";
import { Dialog } from "primereact/dialog";

type BearsListProps = {
    bears: Bear[];
};
export const BearsList: React.FC<BearsListProps> = ({ bears }) => {
    const filteredBears = useStore($filteredBears);

    useEffect(() => {
        initialise({ bears })
    }, []);

    const handleShowMore = () => {
        incrementShowMoreCount();
    }

    return (
        <section className="py-4">
            <div className="py-4 flex gap-4 justify-content-end">
                <FilterMenu />
                <SortButton />
            </div>
            <div className="grid">
                {
                    filteredBears && filteredBears.map((bear: Bear, i: Key) => (
                        <ListItem key={bear.slug} bear={bear} />
                    ))
                }
            </div>
            <div className="w-full text-center">
                <Button onClick={handleShowMore} label="Show more" />
            </div>
        </section>
    )
}

type FilterMenuProps = {
}
const FilterMenu: React.FC<FilterMenuProps> = ({ }) => {
    const [visible, setVisible] = useState<boolean>(false);
    return (
        <>
            <Button label="Filters" icon="pi pi-filter" onClick={() => setVisible(true)} />
            <Dialog header="Filters" visible={visible} style={{ width: '50vw' }} onHide={() => { if (!visible) return; setVisible(false); }} maximized={true}>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Dialog>
        </>

    )
}

type SortButtonProps = {
}
const SortButton: React.FC<SortButtonProps> = ({ }) => {
    const sortDirection = useStore($sortDirection);
    const sortOrder = useStore($sortOrder);

    const sortOptions: MenuItem[] = [{
        id: SortAge,
        label: SortAge,
        command: () => setSelectedSortOrder(SortAge),
        icon: "pi pi-sort-numeric-down"
    },
    {
        id: SortAlphabetical,
        label: SortAlphabetical,
        command: () => setSelectedSortOrder(SortAlphabetical),
        icon: "pi pi-sort-alpha-down"
    },
    {
        id: SortStatus,
        label: SortStatus,
        command: () => setSelectedSortOrder(SortStatus),
        icon: "pi pi-home"
    },
    {
        id: SortFavourites,
        label: SortFavourites,
        command: () => setSelectedSortOrder(SortFavourites),
        icon: "pi pi-heart"
    }]

    const setSelectedSortOrder = (id: SortId) => {
        setSortOrder(id as SortId);
    };

    const toggleSelectedSortDirection = () => {
        setSortDirection(sortDirection == "ASC" ? "DESC" : "ASC");
    };

    return (
        <>
            <SplitButton aria-label="Sort" label={sortOrder} onClick={(e) => toggleSelectedSortDirection()} icon={sortDirection == "ASC" ? "pi pi-sort-amount-down" : "pi pi-sort-amount-down-alt"} model={sortOptions} />
        </>
    )
}
2
type ListItemProps = {
    bear: Bear;
};
const ListItem: React.FC<ListItemProps> = ({ bear }) => {
    const [favourite, setFavourite] = useState(false);

    useEffect(() => {
        var existingEntry = $favourites.get()[bear.slug];
        if (existingEntry) {
            setFavourite(true);
        }
    }, []);

    const handleToggleFavorite = () => {
        setFavourite(!favourite);
        toggleFavourite(bear);
    }

    const { name, status, picture, slug, species } = bear;

    const header = (
        <a href={"/bears/" + slug}>
            <Image src={picture.src} alt={"A picture of " + name} width="250" />
        </a>
    );

    const title = (
        <div className="mb-4 flex items-center justify-between gap-4">
            <a
                href={"/bears/" + slug}
            > {name} </a>

            <div className="flex items-center justify-end gap-1">
                <Button icon={favourite ? "pi pi-heart-fill" : "pi pi-heart"} className={favourite ? "text-red-400" : ""} onClick={handleToggleFavorite} tooltip="Add to favorites" tooltipOptions={{ position: 'bottom' }} />
            </div>
        </div>
    )

    const footer = (
        <>
            <ul className="mt-2 flex items-center justify-between gap-4">
                <li className="flex items-center gap-2">
                    <i className="pi pi-star-fill"></i>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {species}
                    </p>
                </li>

                <li className={cn(
                    status == "rehomed" ? "text-green-500" : "text-red-500",
                    "flex items-center gap-2")}>
                    <i className="pi pi-home"></i>
                    <p className="text-sm font-medium">
                        {status == "rehomed" ? "Rehomed" : "Rescued"}
                    </p>
                </li>
            </ul>
        </>
    );

    return (
        <div className="col-12 md:col-6 xl:col-3 p-3">
            <Card title={title} footer={footer} header={header} />
        </div>
    )
}