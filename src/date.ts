export function isDateValid(...value: any[]): boolean {
  // @ts-expect-error
  return !Number.isNaN(new Date(...value).valueOf())
}

