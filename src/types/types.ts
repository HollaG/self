
import React, { ReactElement } from "react";

export interface TimelineItemStruct {
    id: string;
    type: "software" | "hardware" | "photography";
    date: string;
    title: string;
    description: string;
    image: ReactElement;
    totalImages: number;
    links: { github?: string[]; website?: string[] };
    techs: (
        | "React"
        | "Bootstrap"
        | "Material-UI"
        | "Tailwind"
        | "TypeScript"
        | "JavaScript"
        | "NodeJS"
        | "ExpressJS"
        | "Pug"
        | "MySQL"
        | "MongoDB"
        | string
    )[];
    techsBrief?: (
        | "React"
        | "Bootstrap"
        | "Material-UI"
        | "Tailwind"
        | "TypeScript"
        | "JavaScript"
        | "NodeJS"
        | "ExpressJS"
        | "Pug"
        | "MySQL"
        | "MongoDB"
        | string
    )[];
    icon: ReactElement;
    status: "Completed" | "In development" | "Stopped development" | string;
    
    detailed: {
        overview?: any;
        goals?: any;
        testimonials?: any;
        technical?: any;
    [key: string]: any;

    };
    [key: string]: any;
}

export type SectionType = "overview" | "goals" | "testimonials" | "technical";
