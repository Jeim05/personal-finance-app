import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface CardProps {
    title: string;
    amount: number;
    icon: IconDefinition;
    icon_variant?: string;
    variant?: string;
}