import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface CardProps {
    title: string;
    amount: number;
    icon: IconDefinition;
    icon_variant?: string;
    arrow: IconDefinition;
    arrow_variant?: string;
    percent?:string;
}

export interface SubtitlesProps {
    text: string;
    variants?: string;
}