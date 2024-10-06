
type FooterProps = {
};
export const Footer: React.FC<FooterProps> = ({ }) => {
    const year = new Date().getFullYear();

    return (
        <div>
            <div className="px-4 py-6 md:px-6 lg:px-8 text-center">
                <div className="font-medium text-900 mt-4 mb-3">© {year} Amanda's Emporium</div>
                <p className="text-600 line-height-3 mt-0 mb-4">We improve our products and advertising by using Microsoft Clarity
                    to see how you use our website. By using our site, you agree that we
                    and Microsoft can collect and use this data. Our <a
                        href="/privacy"
                        className="hover:underline"
                    >
                        privacy statement
                    </a> has more details.</p>
                <div className="flex align-items-center justify-content-center">
                    <a className="cursor-pointer text-700 mr-5">
                        <i className="pi pi-facebook"></i>
                    </a>
                    <a className="cursor-pointer text-700">
                        <i className="pi pi-envelope"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}