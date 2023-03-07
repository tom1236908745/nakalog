export const adjustDate = (data: string | undefined) => {
  if (!data) return;
  data = data.substring(0, data.indexOf('T'));
  let time: string[] = data.split('-');
  if (time[1][0] === '0') time[1] = time[1][1];
  if (time[2][0] === '0') time[2] = time[2][1];
  console.log('time ' + time);
  data = time[0] + '.' + time[1] + '.' + time[2];
  return data;
};
