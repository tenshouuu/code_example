export type ButtonType = 'default' | 'rounded' | 'long' | 'large' | 'arrow';

export type ButtonGutter = '8' | '16' | '24' | '32' | '48';


export interface ButtonTypesInterface {
    default: string;
    rounded: string;
    long: string;
    large: string;
    arrow: string;
}

export const ButtonTypes: ButtonTypesInterface = {
    default: 'default',
    rounded: 'rounded',
    long: 'long',
    large: 'large',
    arrow: 'arrow',
};
