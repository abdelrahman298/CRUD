var siteNameInput = document.getElementById("siteName");
var siteUrlInput = document.getElementById("siteUrl");
var submitBtn = document.getElementById("submitBtn");
var tableBody = document.getElementById("tableBody");
var invalidPage = document.getElementById("inValidPage");
var closeInvalid = document.getElementById("closeInvalid");

var websites = [];
if (localStorage.getItem("websitesList") != null) {
  websites = JSON.parse(localStorage.getItem("websitesList"));
  displayWebsites(websites);
  // console.log(websites.push(JSON.parse(localStorage.getItem("websitesList"))));
}

function addWebsite() {
  //?save website in object
  var websiteData = {
    siteName: siteNameInput.value,
    siteUrl: siteUrlInput.value,
  };
  var validateResult = validationCheck(siteNameInput.value, siteUrlInput.value);

  if (validateResult == false) {
    displayInvalid();
  } else {
    //?send it to array
    websites.push(websiteData);
    //?send it to local storage
    localStorage.setItem("websitesList", JSON.stringify(websites));
    //?display the array in the page
    displayWebsites(websites);
    //?clear the inputs
    // clearInput();
  }
}

function clearInput() {
  siteNameInput.value = "";
  siteUrlInput.value = "";
}

function displayWebsites(array) {
  var cartoona = ``;

  for (var i = 0; i < array.length; i++) {
    var site = `
      <tr>
      <th scope="row">${i + 1}</th>
      <td>${array[i].siteName}</td>
      <td>
      <a href="https://${array[i].siteUrl}"  target="_blank">
      <button type="button" class="btn btn-visit">
        <i class="fa-solid fa-eye"></i> Visit
      </button>
      </a>
        
      </td>
      <td>
        <button type="button" class="btn btn-danger" onClick="deleteWebsite(${i})">
          <i class="fa-solid fa-trash-can"></i> Delete
        </button>
      </td>
    </tr>`;
    cartoona += site;
  }
  tableBody.innerHTML = cartoona;
}

function deleteWebsite(index) {
  websites.splice(index, 1);
  localStorage.setItem("websitesList", JSON.stringify(websites));
  displayWebsites(websites);
}

function displayInvalid() {
  invalidPage.classList.toggle("d-none");
}

// //? validation function
function validationCheck(name, url) {
  var regexName = /[a-zA-Z\d]{3,}/;
  var regexUrl = /^(https:\/\/)?(www.)?[a-zA-Z0-9_\.]{1,}\.[a-z]{3}$/;

  if (regexName.test(name) && regexUrl.test(url)) {
    return true;
  } else {
    return false;
  }
}
