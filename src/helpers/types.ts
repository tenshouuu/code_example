
export interface RouteType {
    Component: any;
    auth?: boolean;
    exact?: boolean;
    path: string;
}

export type RoutesType = RouteType[]

export type TextFormsType = [string, string, string];
