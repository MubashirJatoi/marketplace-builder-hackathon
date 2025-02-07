export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-21'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "sk16llsielLfdAsnypwyJUh81ptdzfGGaB0P49acN9mjn4w0zwwuNeKm0q9dh65qeH2JDrc23FsWsJhzVy7bcvfSJTymug5kZgOmpBh4doHIzMRfbNY5gxJ1xYsxPe82ZJpAOjVnKCkrNTt33t4PjIDYdBtjxZYsNWORA6jegHMV3hRFjvOK",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
