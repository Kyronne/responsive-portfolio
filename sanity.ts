import { createClient } from "next-sanity"
import createImageURLBuilder from "@sanity/image-url"
import { isPropertyAccessExpression } from "typescript"

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    apiVersion: "2021-03-25",
    useEdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);

export const urlFor = (source: any) => 
    createImageURLBuilder(config).image(source);