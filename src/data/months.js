const monthCount = 17
const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export const firstDay = new Date('2020-09-01')

const withoutHours = new Date(firstDay.setHours(0, 0, 0, 0))
const lastMonth = new Date(withoutHours.setMonth(withoutHours.getMonth() + monthCount))
export const lastDay = new Date(lastMonth.setDate(lastMonth.getDate() - 1))

const getMonths = () => {
  let months = [{
    'date': firstDay,
    'formatted': monthNames[firstDay.getMonth()] + firstDay.getFullYear().toString().substring(2, 4)
  }]

  for (let i = 1; i < monthCount; i++) {
    const withoutHours = new Date(months[i - 1].date.setHours(0, 0, 0, 0))
    const nextMonth = new Date(withoutHours.setMonth(withoutHours.getMonth() + 1))
    months.push({
      'date': nextMonth,
      'formatted': monthNames[nextMonth.getMonth()] + nextMonth.getFullYear().toString().substring(2, 4)
    })
  }

  return months
}
export const months = getMonths()