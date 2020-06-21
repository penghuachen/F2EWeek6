import { 
  calculateDays,
  periodOfDays 
} from '@/assets/utils/dateConvertor.js';

export const calculatePrice = (holidayDayPrice, normalDayPrice) => {  
  return !(holidayDayPrice + normalDayPrice)
    ? 0
    : holidayDayPrice + normalDayPrice 
};

export const calculateRoomPrice = (dayType, cost, selected) => {
    // 取得 selected 長度 - 1 的價錢
    let allDaysPrices =  selected.reduce((total, day, index) => {
      let isSelectedNormal = dayType.some(selected => selected == day);
      const lastIndex = selected.length - 1;
      if (!isSelectedNormal || index == lastIndex) return total;
      
      total += cost;
      return total;
    }, 0);
    return allDaysPrices;
};
  
export const getSelectedDays = (start, end) => {
  const daysNumber = [];
  const week = ['日', '一', '二', '三', '四', '五', '六'];
  const period = periodOfDays(start, end);

  for (let i = 0; i < period; i++) {
    let periodTimestamps = calculateDays(start, i);
    daysNumber.push(new Date(periodTimestamps).getDay());
  }

  return daysNumber.map(num => week[num]);
}