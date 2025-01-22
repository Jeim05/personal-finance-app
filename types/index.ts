import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface CardProps {
    title: string;
    amount: number;
    variant?: string;
    icon: IconDefinition;
    icon_variant?: string;
}

export interface SubtitlesProps {
    text: string;
    variants?: string;
}