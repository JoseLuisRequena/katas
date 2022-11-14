export default function daysToXmas(date) {
    // ¡Y no olvides compartir tu solución en redes!
    const navidad = new Date('Dec, 25, 2021')
    const d = `${date.getMonth()+1}` + `, ${date.getDate()}` + `, ${date.getFullYear()}`;
    const date1 = new Date(d)
    let days = 0;
    if(date1 < navidad){
      while (date1 < navidad){
        days++;
        date1.setDate(date1.getDate() + 1);
      }
      return days;
    } else if(date1 > navidad ){
      if(date1 > navidad){
        while (date1 > navidad){
          days--;
          date1.setDate(date1.getDate() - 1);
        }
        return days;
      }
    } else return 0;
}
// datos de prueba
const date1 = new Date('Dec 1, 2021')
daysToXmas(date1) // 24
const date2 = new Date('Dec 24, 2021 00:00:01')
daysToXmas(date2) // 1
const date3 = new Date('Dec 24, 2021 23:59:59')
daysToXmas(date3) // 1
const date4 = new Date("December 20, 2021 03:24:00")
daysToXmas(date4) // 5
const date = new Date('Dec 25, 2021')
daysToXmas(date) // 0
const date5 = new Date('Dec 26, 2021')
daysToXmas(date5) // -1
const date6 = new Date('Dec 31, 2021')
daysToXmas(date6) // -6
const date7 = new Date('Jan 1, 2022 00:00:01')
daysToXmas(date7) // -7
const date8 = new Date('Jan 1, 2022 23:59:59')
daysToXmas(date8) // -7