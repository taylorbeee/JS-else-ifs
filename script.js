var weekday = new Date().toLocaleString("en-US", { weekday: "long" });

// console.log(`Today is ${weekday}`);
if (weekday === "Monday") {
  console.log(`Let's get this week started!`);
} else if (weekday === "Tuesday") {
  console.log(`Worky work!`);
} else if (weekday === "Wednesday") {
  console.log(`Halfway there!`);
} else if (weekday === "Thursday") {
  console.log(`The week is almost over!`);
} else if (weekday === "Friday") {
  console.log(`Weekend's almost here!`);
} else {
  console.log(`WEEKEND YAYYY!!!`);
}
