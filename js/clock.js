'use strict';

const currentTime = () => {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.querySelector('.clock').textContent = `${hour}:${min}:${sec}`;
  let t = setTimeout(function () { currentTime() }, 1000);
};

const updateTime = (i) => {
  if (i < 10) {
    return `0${i}`;
  }
  else {
    return i;
  }
};

currentTime();

