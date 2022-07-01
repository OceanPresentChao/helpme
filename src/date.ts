export function isDateValid(...value: any[]): boolean {
    //@ts-ignore
    return !Number.isNaN(new Date(...value).valueOf())
}


