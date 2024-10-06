import type { PrimeReactPTOptions } from "primereact/api";

export const PTOptions: PrimeReactPTOptions = {
    dialog: {
        mask: {
            className: "bg-gray-200 opacity-10"
        }
    }
}

export const PTOptions2: PrimeReactPTOptions = {
    dropdown: {


    },

    splitbutton: {
        root: {
            className: "flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
        },
        menu: { className: "divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700 p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400" },
        menuItem: { className: "cursor-pointer group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" },
        button: {
            root: {
                className: "bg-red-400"
            }
        },
        menuButton: {
            root: {
                className: "bg-blue-400"
            }
        }
    },

    button: {
        root: {
            className: "rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
        }
    },
    card: {
        root: {
            className: "rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
        },
        title: {
            className: "mt-4"
        }
    }
}