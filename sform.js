function HomeFunction() {
  window.location.href = "Stable.html";
}

let detail = [];
let obj = {};
let editText;
function mydetail() {
  var Name = document.getElementById("name").value;
  var FatherName = document.getElementById("fatherName").value;
  var Age = document.getElementById("age").value;
  var DateofBirth = document.getElementById("dateofBirth").value;
  var City = document.getElementById("city").value;
  var Address = document.getElementById("address").value;
  var Pincode = document.getElementById("pincode").value;
  var Gender = document.getElementById("gender").value;

  console.log(Name);
  console.log(FatherName);
  console.log(Age);
  console.log(DateofBirth);
  console.log(City);
  console.log(Address);
  console.log(Pincode);
  console.log(Gender);

  if (Name == "") {
    document.getElementById("name_err").innerHTML = "Name Required";
  } else {
    document.getElementById("name_err").innerHTML = "";
  }
  if (FatherName == "") {
    document.getElementById("name0_err").innerHTML = "FatherName Required";
  } else {
    document.getElementById("name0_err").innerHTML = "";
  }
  if (Age == "") {
    document.getElementById("name1_err").innerHTML = "Age Required";
  } else {
    document.getElementById("name1_err").innerHTML = "";
  }
  if (DateofBirth == "") {
    document.getElementById("name2_err").innerHTML = "DateofBirth Required";
  } else {
    document.getElementById("name2_err").innerHTML = "";
  }
  if (City == "") {
    document.getElementById("name3_err").innerHTML = "City Required";
  } else {
    document.getElementById("name3_err").innerHTML = "";
  }
  if (Address == "") {
    document.getElementById("name4_err").innerHTML = "Address Required";
  } else {
    document.getElementById("name4_err").innerHTML = "";
  }
  if (Pincode == "") {
    document.getElementById("name5_err").innerHTML = "Pincode Required";
  } else {
    document.getElementById("name5_err").innerHTML = "";
  }
  if (Gender == "") {
    document.getElementById("name6_err").innerHTML = "Gender Required";
  } else {
    document.getElementById("name6_err").innerHTML = "";
  }
  if (
    Name == "" ||
    FatherName == "" ||
    Age == "" ||
    DateofBirth == "" ||
    City == "" ||
    Address == "" ||
    Pincode == "" ||
    Gender == ""
  ) {
    return false;
  }

  obj["Name"] = Name;
  obj["FatherName"] = FatherName;
  obj["Age"] = Age;
  obj["DateofBirth"] = DateofBirth;
  obj["City"] = City;
  obj["Address"] = Address;
  obj["Pincode"] = Pincode;
  obj["Gender"] = Gender;
  const Birth = new Date(obj.DateofBirth);
  const formatteddate = Birth.toLocaleDateString("en-GB");
  obj["DateofBirth"] = formatteddate;

  if (editText != undefined) {
    let url = "https://64cc86e22eafdcdc8519ed83.mockapi.io/Employee/student";

    fetch(url + "/" + editText, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    })
      .then((Result) => Result.json())
      .then((string) => {
        console.log(string);
        window.location.replace("Stable.html");
        // get();
        console.log(`Title of our response :  ${string.Name}`);
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  } else {
    let url = "https://64cc86e22eafdcdc8519ed83.mockapi.io/Employee/student";

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    })
      .then((Result) => Result.json())
      .then((string) => {
        console.log(string);
        // get();
        window.location.replace("Stable.html");
        console.log(`Title of our response :  ${string.Name}`);
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  }

  document.getElementById("name").value = "";
  document.getElementById("fatherName").value = "";
  document.getElementById("age").value = "";
  document.getElementById("dateofBirth").value = "";
  document.getElementById("city").value = "";
  document.getElementById("address").value = "";
  document.getElementById("pincode").value = "";
  document.getElementById("gender").value = "";
}

function page() {
  //   get();
  Edit();
}
function Edit() {
  console.log(window);
  var url_string = window.location.href.toLocaleLowerCase();
  console.log(url_string);
  var url1 = new URL(url_string);
  console.log(url1);
  var id = url1.searchParams.get("id");
  editText = id;
  if (id) {
    let url = "https://64cc86e22eafdcdc8519ed83.mockapi.io/Employee/student";

    fetch(url + "/" + id, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((Result) => Result.json())
      .then((string) => {
        // Printing our response
        console.log(string);
        detail = string;
        document.getElementById("name").value = detail.Name;
        document.getElementById("fatherName").value = detail.FatherName;
        document.getElementById("age").value = detail.Age;
        detail.DateofBirth = detail.DateofBirth.split("/").reverse().join("-");
        document.getElementById("dateofBirth").value = detail.DateofBirth;
        document.getElementById("city").value = detail.City;
        document.getElementById("address").value = detail.Address;
        document.getElementById("pincode").value = detail.Pincode;
        document.getElementById("gender").value = detail.Gender;

        console.log(`Title of our response :  ${string.Name}`);
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  }
}
