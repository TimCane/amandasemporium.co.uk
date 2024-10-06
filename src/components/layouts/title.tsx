type TitleProps = {
    title: string;
};
export const Title: React.FC<TitleProps> = ({ title }) => {

    return (<div>
        <div className="surface-section pt-5 pb-2">
            <div className="border-bottom-1 surface-border">
                <span className="block text-3xl font-medium text-900 mb-3">
                    {title}
                </span>
            </div>
        </div>
    </div>

    )

}