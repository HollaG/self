import React, { ReactElement } from "react";

export interface TimelineItemStruct {
    date: string;
    title: string;
    description: string;
    image: ReactElement;
    github?: string[];
    website?: string[];
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
    icon: ReactElement,
    status: "Completed"|"In development"|"Stopped development"|string
}
