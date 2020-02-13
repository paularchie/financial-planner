import { NavigationItemProps } from "../NavigationItems/NavigationItemsProps.type";

export type HeaderProps = {
    navigationItems: NavigationItemProps[],
    menuIconClickHandler: () => void;
    navigationItemClickHandler: (route: string) => void;
    activeUrl: string;
}