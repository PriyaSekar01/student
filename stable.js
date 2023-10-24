function NextFunction() {
  window.location.href = "Sform.html";
}
function BackFunction() {
  window.location.href = "index.html";
}
let detail = [];

let editText;
function page() {
  get();
}
function get() {
  editText = undefined;
  let url = "https://64cc86e22eafdcdc8519ed83.mockapi.io/Employee/student";

  fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((Result) => Result.json())
    .then((string) => {
      console.log(string);
      detail = string;
      table();

      console.log(`Title of our response :  $(detail[0].Name)`);
    })
    .catch((errorMsg) => {
      console.log(errorMsg);
    });
}
function table() {
  // editText = undefined;
  var v = "";

  for (i = 0; i < detail.length; i++) {
    v += "<tr>";
    v += "<td>" + detail[i].Name + "</td>";
    v += "<td>" + detail[i].FatherName + "</td>";
    v += "<td>" + detail[i].Age + "</td>";
    v += "<td>" + detail[i].DateofBirth + "</td>";
    v += "<td>" + detail[i].City + "</td>";
    v += "<td>" + detail[i].Address + "</td>";
    v += "<td>" + detail[i].Pincode + "</td>";
    v += "<td>" + detail[i].Gender + "</td>";
    v +=
      '<td><button class="btn btn-primary mr-3 mt-1" style="" onclick="Edit(' +
      detail[i].id +
      ')">Edit</button><button class="btn btn-danger mt-1 mx-1 "  onclick="Delete(' +
      detail[i].id +
      ')">Delete</button></td>';
  }
  document.getElementById("displayArea").innerHTML = v;
}
function Delete(id) {
  let url = "https://64cc86e22eafdcdc8519ed83.mockapi.io/Employee/student";

  fetch(url + "/" + id, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  })
    .then((Result) => Result.json())
    .then((string) => {
      console.log(string);
      get();
      console.log(`Title of our response:${string.Name}`);
    })
    .catch((errorMsg) => {
      console.log(errorMsg);
    });
}
function Edit(id) {
  editText = id;
  window.location.href = "Sform.html?id=" + id;
}
