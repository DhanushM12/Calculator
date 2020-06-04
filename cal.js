/*var buttons = document.getElementsByClassName("button");
var display = document.getElementsByClassName("display");
var op1 = 0;
var op2 = null;
var operator = null;
var ans = 0;

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    var value = this.getAttribute("data-value");
    if (value == "+") {
      operator = value;
      op1 = parseFloat(display.textContent);
    } else if (value == "=") {
      op2 = parseFloat(display.textContent);
      if (operator == "/" && op2 == 0) {
        ans = "Error";
      } else {
        ans = eval("op1 operator op2");
      }
      display.innerText = ans;
    } else {
      display.innerText += value;
    }
  });
}*/
"use strict";
var op1, op2, operator, result;

function assign(event) {
  if (!op1) {
    op1 = document.getElementById("display").textContent;
    console.log(op1);
  } else {
    op2 = document.getElementById("display").textContent;
    console.log(op2);
  }
}

function ope(event) {
  operator = event.target.innerHTML;
  console.log(operator);
}

var dis = document.getElementById("display");

function display(event) {
  if (
    (dis.textContent >= 0 && dis.textContent < 10) ||
    dis.textContent == null
  ) {
    dis.textContent += event.target.innerHTML;
  } else {
    dis.textContent = event.target.innerHTML;
  }
}

var equal = document.querySelector("#equal");
equal.addEventListener("click", function() {
  assign(event);
  if (operator == "/" && op2 == 0) {
    dis.textContent = "ERROR";
    op1 = null;
  } else {
    dis.textContent = eval(op1 + " " + operator + " " + op2);
    op1 = eval(op1 + " " + operator + " " + op2);
  }
  op2 = null;
  operator = null;
});

var clear = document.querySelector("#clear");
clear.addEventListener("click", function(event) {
  op1 = null;
  op2 = null;
  operator = null;
  dis.textContent = "";
});

var point = document.querySelector("#point");
point.addEventListener("click", function(event) {
  display(event);
});

var zero = document.querySelector("#zero");
zero.addEventListener("click", function(event) {
  display(event);
});

var one = document.querySelector("#one");
one.addEventListener("click", function(event) {
  display(event);
});

var two = document.querySelector("#two");
two.addEventListener("click", function() {
  display(event);
  //document.getElementById("visual").textContent += "2";
  // assign(event);
});
var three = document.querySelector("#three");
three.addEventListener("click", function() {
  display(event);
  //document.getElementById("visual").textContent += "3";
  // assign(event);
});
var four = document.querySelector("#four");
four.addEventListener("click", function() {
  display(event);
  //document.getElementById("visual").textContent += "4";
  // assign(event);
});
var five = document.querySelector("#five");
five.addEventListener("click", function() {
  display(event);
  //document.getElementById("visual").textContent += "5";
  // assign(event);
});
var six = document.querySelector("#six");
six.addEventListener("click", function() {
  display(event);
  //document.getElementById("visual").textContent += "6";
  // assign(event);
});
var seven = document.querySelector("#seven");
seven.addEventListener("click", function() {
  display(event);
  //document.getElementById("visual").textContent += "7";
  // assign(event);
});
var eight = document.querySelector("#eight");
eight.addEventListener("click", function() {
  display(event);
  //document.getElementById("visual").textContent += "8";
  // assign(event);
});
var nine = document.querySelector("#nine");
nine.addEventListener("click", function() {
  display(event);
  //document.getElementById("visual").textContent += "9";
  // assign(event);
});

var plus = document.querySelector("#plus");
plus.addEventListener("click", function() {
  assign(event);
  document.getElementById("visual").textContent = "+";
  ope(event);
});

var minus = document.querySelector("#minus");
minus.addEventListener("click", function() {
  assign(event);
  document.getElementById("visual").textContent = "-";
  ope(event);
});

var mul = document.querySelector("#mul");
mul.addEventListener("click", function() {
  assign(event);
  document.getElementById("visual").textContent = "*";
  ope(event);
});
var divide = document.querySelector("#divide");
divide.addEventListener("click", function() {
  assign(event);
  document.getElementById("visual").textContent = "/";
  ope(event);
});
