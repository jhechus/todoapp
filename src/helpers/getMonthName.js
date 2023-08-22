export const getMonthName = (date) => {
    const monthNumber = date.getMonth();
    let MonthNames = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ags', 'Sep', 'Oct', 'Nov', 'Dic']

    return MonthNames[monthNumber]
}