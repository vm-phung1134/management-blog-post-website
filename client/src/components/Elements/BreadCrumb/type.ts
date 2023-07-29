export interface IBreadCrumbItem {
    name: string;
    link: string;
    active?: boolean;
}

export interface IBreadCrumbProps{
    items: IBreadCrumbItem[];
}