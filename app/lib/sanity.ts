import { createClient } from "next-sanity";

const projectId = "ojtrgg8j";
const dataset = "production";
const apiVersion = "2023-11-09";

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true
})