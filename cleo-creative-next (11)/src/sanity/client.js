import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: '2geocfye',
  dataset: 'production',
  apiVersion: '2026-06-11',
  useCdn: true,
})
