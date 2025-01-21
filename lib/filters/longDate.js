const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const tz = require("dayjs/plugin/timezone");
dayjs.extend(utc);
dayjs.extend(tz);

module.exports = (date) => {
  // return dayjs(date).utc().format('D MMMM YYYY hh:mm A');
  // return dayjs(date).utc().format("dddd, MMMM DD, YYYY");
  return dayjs().tz(date, "UTC").format("dddd, MMMM DD, YYYY");
};
