import { NavigationItemProps } from "../NavigationItems/NavigationItemsProps.type";

export type LayoutProps = {
    navigationItems: NavigationItemProps[],
    menuIconClickHandler: () => void;
    backdropClickHandler: () => void;
    showSideDrawer: boolean;
    navigationItemClickHandler?: (route: string) => void;
    activeUrl?: string;
    children?: any; 
};