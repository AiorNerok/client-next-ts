export interface ILink {
    href: string;
    text?: string;
    children?: React.ReactNode;
    type: "link" | "wrapper";
};


export interface ILinkStyle {
    padding?: string;
    color?: string;
    fontWeight?: string;
    width?: number | string;
    '&:hover'?: {
        opacity: number
    }
}