export default function renderTime(minuteTime){
    return minuteTime < 60
      ? `${minuteTime}м`
      : `${(minuteTime-minuteTime%60)/60}ч ${minuteTime%60}м`
}