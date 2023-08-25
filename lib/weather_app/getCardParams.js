export const getCardParams = (unix_timestamp, timezone) => {
    var date = new Date((unix_timestamp + timezone) * 1000);
    var hours = date.getUTCHours();
    
    if (hours == 5 || hours == 6) return {cardColor: 'linear(to-b, #F69C23, #F5B65F)', fontColor: 'white', dayMoment: 'Dawn'};
    if (hours >= 21 || hours < 7 || hours == 0) return {cardColor: 'linear(to-b, #1B335F, #5F83C4)', fontColor: 'white', dayMoment: 'Night'};
    if (hours >= 7 || hours <= 20) return {cardColor: 'linear(to-b, #ADCCD1, white)', fontColor: 'rgba(0,0,0,0.7)', dayMoment: 'Day'};
};
