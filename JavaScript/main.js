// start user
let timed = document.querySelectorAll(".ti");

timed.forEach(function (e) {
  e.addEventListener("click", function () {
    timed.forEach(function (ti) {
      ti.classList.remove("active");
    });
    e.classList.add("active");
  });
});
// end user

// start tracker
let time = document.querySelectorAll(".time");
let analiz = document.querySelectorAll(".analiz");

time.forEach(function (el) {
  el.innerHTML = el.dataset.week;
});
analiz.forEach(function (ele) {
  let data = ele.dataset.week;
  ele.innerHTML = `Last week - ${data}`;
});
// end tracker

let day = document.querySelector(".ti.day");
let week = document.querySelector(".ti.week");
let month = document.querySelector(".ti.month");

day.addEventListener("click", function () {
  time.forEach(function (el) {
    el.innerHTML = el.dataset.day;
  });
  analiz.forEach(function (ele) {
    let data = ele.dataset.day;
    ele.innerHTML = `Last Day - ${data}`;
  });
});

week.addEventListener("click", function () {
  time.forEach(function (el) {
    el.innerHTML = el.dataset.week;
  });
  analiz.forEach(function (ele) {
    let data = ele.dataset.week;
    ele.innerHTML = `Last Week - ${data}`;
  });
});

month.addEventListener("click", function () {
  time.forEach(function (el) {
    el.innerHTML = el.dataset.month;
  });
  analiz.forEach(function (ele) {
    let data = ele.dataset.month;
    ele.innerHTML = `Last Month - ${data}`;
  });
});
