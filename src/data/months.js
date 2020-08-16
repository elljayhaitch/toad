const monthCount = 17
const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export const firstDay = new Date("2020-09-01")

const blah = new Date(firstDay.setHours(0, 0, 0, 0))
const blah2 = new Date(blah.setMonth(blah.getMonth() + monthCount))
export const lastDay = new Date(blah2.setDate(blah2.getDate() - 1))

const getMonths = () => {
  let months = [{
    'date': firstDay,
    'formatted': monthNames[firstDay.getMonth()] + firstDay.getFullYear().toString().substring(2, 4)
  }]

  for (let i = 1; i < monthCount; i++) {
    const blah = new Date(months[i - 1].date.setHours(0, 0, 0, 0))
    const blah2 = new Date(blah.setMonth(blah.getMonth() + 1))
    months.push({
      'date': blah2,
      'formatted': monthNames[blah2.getMonth()] + blah2.getFullYear().toString().substring(2, 4)
    })
  }

  return months
}
export const months = getMonths()