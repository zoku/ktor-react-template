export const DateTimeFormatter = (format: string) => {
  return {
    format: (date: Date): string => {
      if (format === "iso") return `${date.getFullYear()}-${`0${date.getMonth() + 1}`.slice(-2)}-${`0${date.getDate()}`.slice(-2)}`

      return "d'oh"
    }
  }
}