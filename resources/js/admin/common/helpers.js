import moment from "moment"

const restyleString = item => item.trim().replace(/ {1,}/g, "_").toLowerCase()

export const fixHeadStyle = arr => {
    return arr.map((row, i) => {
        if (i === 0) {
            return row.map(item => restyleString(item))
        }
        return row
    })
}

export const makeOptions = arr => {
    return arr.map(v => ({label: v, value: v}))
}

export const makeProjectOptions = arr => [...arr].map(v => ({ label: v.label_user, value: v }))

export const formatDate = (excelDate, timeFormat) => {
    const dateParse = (excelDate - 25569) * 86400 * 1000
    const day = moment(dateParse).format(timeFormat)
    return day

}