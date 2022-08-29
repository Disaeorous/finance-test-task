function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

export const formatDate = (date) => {
  return (
    [
      // date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('/') +
    ' ' +
    [
      padTo2Digits(date.getHours()),
      padTo2Digits(date.getMinutes()),
      padTo2Digits(date.getSeconds()),
    ].join(':')
  );
};

// 👇️ 2022/01/15 13:02:17 (yyyy/mm/dd hh:mm:ss)
// const utcDate = '2022-01-15T11:02:17Z';
// console.log(formatDate(new Date(utcDate)));
