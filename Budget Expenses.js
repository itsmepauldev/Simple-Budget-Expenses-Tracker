const checkBudget = document.getElementById("checkBudget");

let allBudget;
let totalBudget = 0;
let totalExpenses = 0;
let isBudget = false;
let all = [];

checkBudget.onclick = () => {
  allBudget();
  let expensess = document.getElementById("typeofExpenses").value;
  let expensesInput = document.getElementById("expensesInput").value;
  all.push({ task: expensess, price: expensesInput });
  if (totalExpenses > totalBudget) {
  } else {
    document.getElementById("div").innerHTML = all
      .map(
        (item, index) => `
    <div>
      <p>Item ${index + 1}: ${item.task} ₱${item.price}</p>
    </div>
  `
      )
      .join("");
  }
};

allBudget = () => {
  let budgetInput = document.getElementById("budgetInput").value;
  let expensesInput = document.getElementById("expensesInput").value;

  if (!isBudget) {
    totalBudget = parseInt(budgetInput) || 0;
    isBudget = true;
    document.getElementById("totalBudget").innerHTML = `Budget:${totalBudget}`;
  }
  totalExpenses += parseInt(expensesInput) || 0;

  let Balance = totalBudget - totalExpenses;

  if (Balance < 0) {
    document.getElementById("Balance").style.color = "red";
  }
  document.getElementById("Balance").innerHTML = `Balance:${Balance}`;
  document.getElementById("Expenses").innerHTML = `Expenses:${totalExpenses}`;
};
