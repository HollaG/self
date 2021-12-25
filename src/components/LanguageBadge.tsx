const TechBadge: React.FC<{
    tech: string;
}> = ({ tech }) => {
    let src = "";
    switch (tech) {
        case "React":
            src =
                "https://img.shields.io/badge/-ReactJS-61DAFB?logo=react&logoColor=white&style=flat";
            break;
        case "Bootstrap":
            src =
                "https://img.shields.io/badge/-Bootstrap%205-7952B3?logo=bootstrap&logoColor=white&style=flat";

            break;
        case "Material-UI":
            src =
                "https://img.shields.io/badge/-MUI-007FFF?logo=mui&logoColor=white&style=flat";

            break;
        case "Tailwind":
            src =
                "https://img.shields.io/badge/-TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white&style=flat";

            break;
        case "TypeScript":
            src =
                "https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white&style=flat";

            break;
        case "JavaScript":
            src =
                "https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=white&style=flat";

            break;
        case "NodeJS":
            src =
                "https://img.shields.io/badge/-NodeJS-339933?logo=nodedotjs&logoColor=white&style=flat";

            break;
        case "ExpressJS":
            src =
                "https://img.shields.io/badge/-ExpressJS-000000?logo=express&logoColor=white&style=flat";
            break;
        case "Pug":
            src =
                "https://img.shields.io/badge/-Pug-A86454?logo=pug&logoColor=white&style=flat";
            break;
        case "MySQL":
            src =
                "https://img.shields.io/badge/-MySQL-4479A1?logo=mysql&logoColor=white&style=flat";

            break;
        case "MongoDB":
            src =
                "https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white&style=flat";

            break;
        case "FusionCharts":
            src =
                "https://img.shields.io/badge/-FusionCharts-373c8b?logoColor=white";
            break;
        case "ChartJS":
            src =
                "https://img.shields.io/badge/-ChartJS-FF6384?logo=chartdotjs&logoColor=white";
            break;
    }
    return <img style={{ margin: 2 }} src={src} alt={tech} />;
};

export default TechBadge;
