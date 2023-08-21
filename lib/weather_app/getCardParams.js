export const getCardParams = (unix_timestamp, timezone) => {
    var date = new Date((unix_timestamp + timezone) * 1000);
    var hours = date.getUTCHours();
    
    if (hours == 5 || hours == 6) return {cardColor: '#FAAD64', fontColor: 'white', dayMoment: 'Dawn'};
    if (hours >= 21 || hours < 7 || hours == 0) return {cardColor: '#1B335F', fontColor: 'white', dayMoment: 'Night'};
    if (hours >= 7 || hours <= 20) return {cardColor: '#C6E2E8', fontColor: 'rgba(0,0,0,0.8)', dayMoment: 'Day'};
};
