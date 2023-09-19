import React from "react";
import { TagCloud } from "@frank-mayer/react-tag-cloud";
// same as: import TagCloud from "@frank-mayer/react-tag-cloud"
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const data = technologies.map(technology => technology.name);

const TechCloud = () => {
    return (
        <TagCloud
            options={{ radius: 400, maxSpeed: "fast", useItemInlineStyles: true }}
        >
            {data}
        </TagCloud>
    )
}

export default SectionWrapper(TechCloud);