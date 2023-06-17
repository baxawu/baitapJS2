// BT1:
function kiemTra() {
  let tagScoreSchool = parseFloat(document.getElementById("scoreSchool").value);
  let tagScoreSub1 = parseFloat(document.getElementById("scoreSub1").value);
  let tagScoreSub2 = parseFloat(document.getElementById("scoreSub2").value);
  let tagScoreSub3 = parseFloat(document.getElementById("scoreSub3").value);
  let tagLocation = parseFloat(document.getElementById("location").value);
  let tagUser = parseInt(document.getElementById("user").value);

  let uuTienScore = 0;

  if (tagUser === 1) {
    uuTienScore += 2.5;
  } else if (tagUser === 2) {
    uuTienScore += 1.5;
  } else if (tagUser === 3) {
    uuTienScore += 1;
  }

  if (tagLocation === "A") {
    uuTienScore += 2;
  } else if (tagLocation === "B") {
    uuTienScore += 1;
  } else if (tagLocation === "C") {
    uuTienScore += 0.5;
  }

  let tongDiem = tagScoreSub1 + tagScoreSub2 + tagScoreSub3 + uuTienScore;

  let tagResult = (document.getElementById("result").innerHTML = tagResultText);
  let tagResultText = "";

  if (tagScoreSub1 === 0 || tagScoreSub2 === 0 || tagScoreSub3 === 0) {
    tagResultText = " Rot vi co mon thi diem 0.";
  } else if (tongDiem >= tagScoreSchool) {
    tagResultText = "Dau voi so diem:" + tongDiem;
  } else {
    tagResultText = "Rot voi so diem:" + tongDiem;
  }
}

// BT2
function calculate() {
  const tagName = document.getElementById("name").value;
  const tagKw = parseFloat(document.getElementById("kwNumber").value);

  let hoaDon = 0;
  if (tagKw <= 50) {
    hoaDon = tagKw * 500;
  } else if (tagKw <= 100) {
    hoaDon = 50 * 500 + (tagKw - 50) * 650;
  } else if (tagKw <= 200) {
    hoaDon = 50 * 500 + 50 * 650 + (tagKw - 100) * 850;
  } else if (tagKw <= 350) {
    hoaDon = 50 * 500 + 50 * 650 + 100 * 850 + (tagKw - 200) * 1100;
  } else {
    hoaDon =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (tagKw - 350) * 1300;
  }

  document.getElementById(
    "electricity-result"
  ).innerText = `Tên: ${tagName}\nTiền điện: ${hoaDon}đ`;
}

// BT3
function calculateCome() {
  const tagHoTen = document.getElementById("hoTen").value;
  const tagIncome = parseFloat(document.getElementById("thuNhap").value);
  const tagGiaDinh = parseInt(document.getElementById("giaDinh").value);

  const thueThuNhap = tagIncome - 4 - tagGiaDinh * 1.6;

  let taxRate = 0;
  if (thueThuNhap <= 60) {
    taxRate = 5;
  } else if (thueThuNhap <= 120) {
    taxRate = 10;
  } else if (thueThuNhap <= 210) {
    taxRate = 15;
  } else if (thueThuNhap <= 384) {
    taxRate = 20;
  } else if (thueThuNhap <= 624) {
    taxRate = 25;
  } else if (thueThuNhap <= 960) {
    taxRate = 30;
  } else {
    taxRate = 35;
  }

  const taxAmount = thueThuNhap * (taxRate / 100);

  document.getElementById(
    "tax-result"
  ).innerText = `Họ tên: ${tagHoTen}\nThuế thu nhập cá nhân: ${taxAmount} triệu VNĐ`;
}

//BT4
function handleChangeCustomerType() {
  const customerTypeSelect = document.getElementById("customer-type");
  const connectionsInput = document.getElementById("connections");

  if (customerTypeSelect.value === "doanhnghiep") {
    connectionsInput.removeAttribute("disabled");
    connectionsInput.setAttribute("required", "");
  } else {
    connectionsInput.setAttribute("disabled", "");
    connectionsInput.removeAttribute("required");
  }
}

function handleChangeCustomerType() {
  const customerTypeSelect = document.getElementById("customer-type");
  const connectionsInput = document.getElementById("connections");

  if (customerTypeSelect.value === "doanhnghiep") {
    connectionsInput.removeAttribute("disabled");
    connectionsInput.setAttribute("required", "");
  } else {
    connectionsInput.setAttribute("disabled", "");
    connectionsInput.removeAttribute("required");
  }
}

function calculateBill() {
  const customerTypeSelect = document.getElementById("customer-type");
  const customerCodeInput = document.getElementById("customer-code");
  const connectionsInput = document.getElementById("connections");
  const premiumChannelsInput = document.getElementById("premium-channels");
  const resultDiv = document.getElementById("result");

  const customerType = customerTypeSelect.value;
  const customerCode = customerCodeInput.value;
  const connections =
    customerType === "doanhnghiep" ? parseInt(connectionsInput.value) || 0 : 0;
  const premiumChannels = parseInt(premiumChannelsInput.value) || 0;

  let processingFee, basicServiceFee, premiumChannelsFee;

  if (customerType === "doanhnghiep") {
    processingFee = 15;
    basicServiceFee = 75;

    if (connections > 10) {
      basicServiceFee += (connections - 10) * 5;
    }

    premiumChannelsFee = premiumChannels * 50;
  } else {
    processingFee = 4.5;
    basicServiceFee = 20.5;
    premiumChannelsFee = premiumChannels * 7.5;
  }

  const total = processingFee + basicServiceFee + premiumChannelsFee;

  resultDiv.textContent = `Hóa đơn cho khách hàng ${customerCode}: $${total.toFixed(
    2
  )}`;
}
