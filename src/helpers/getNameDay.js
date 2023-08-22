export const getNameDay = (date) => {
    const NumberDay = date.getDay();
    const weekDays = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']

    return weekDays[NumberDay]
}