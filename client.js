// client.js
import sanityClient from "@sanity/client"

export default sanityClient({
  projectId: process.env.SANITY_API_PROJECT_ID,
  dataset: process.env.SANITY_API_DATASET,
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: "2021-03-25", // use a UTC date string
})
