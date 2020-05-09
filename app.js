const reasonInput = document.querySelector("#input_reason");
const amountInput = document.querySelector("#input_amount");
const cancelBtn = document.querySelector("#btn_cancel");
const confirmBtn = document.querySelector("#btn_confirm");
const expenseList = document.querySelector("#expense_list");
const totalExpensesOutput = document.querySelector("#total_expenses");
const alert = document.createElement("ion-alert");

let totalExpenses = 0;

const clear = () => {
  reasonInput.value = "";
  amountInput.value = "";
};

confirmBtn.addEventListener("click", () => {
  const reason = reasonInput.value;
  const amount = amountInput.value;

  if (reason.trim().length <= 0 || amount <= 0 || amount.trim() <= 0) {
    
    alert.header = "invalid input";
    alert.subHeader = "enter valid";
    alert.message = "enter valid";
    alert.buttons = ["OK"];
    document.body.appendChild(alert);
    return alert.present();
  }
  const newItem = document.createElement("ion-item");
  newItem.textContent = reason + ": $" + amount;
  expenseList.appendChild(newItem);
  totalExpenses += +amount;
  totalExpensesOutput.textContent = totalExpenses;
  clear();
});

cancelBtn.addEventListener("click", clear);
