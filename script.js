document.addEventListener("DOMContentLoaded", function () {
  const offers = document.querySelectorAll(".offer-box .radio");
  const radio = document.getElementById("radio");
  const radio2 = document.getElementById("radio2");
  const radio3 = document.getElementById("radio3");
  const offer1 = document.getElementById("offer1");
  const offer2 = document.getElementById("offer2");
  const offer3 = document.getElementById("offer3");
  const tag1 = document.getElementById("tag1");
  const tag2 = document.getElementById("tag2");
  const tag3 = document.getElementById("tag3");
const discount1 =document.getElementById("discount1")
const discount2 =document.getElementById("discount2")
const discount3 =document.getElementById("discount3")


  //console.log("offers--", offers);
  const totalPrice = document.querySelector(".total-price");

  offers.forEach((offer) => {
    offer.addEventListener("change", function () {
      const prices = {
        buy1get2: "$18.00 USD",
        buy2get4: "$24.00 USD",
        buy3get6: "$36.00 USD",
      };
      console.log("id", this);
      console.log(offer);
      if (this.id == "buy1get2") {
        discount1.style.display ='inline-block'
        discount2.style.display ='none'
         discount3.style.display ='none'


        tag1.style.display = "none";
        tag2.style.display = "block";
        tag3.style.display = "block";
        offer1.style.border = "1px solid #ff5c8d";
        offer2.style.border = "none";
        offer3.style.border = "none";
        radio.checked = true;
        radio2.checked = false;
        radio3.checked = false;
      } else if (this.id == "buy2get4") {
        discount1.style.display ='none'
        discount2.style.display ='inline-block'
         discount3.style.display ='none'


        tag1.style.display = "block";
        tag2.style.display = "none";
        tag3.style.display = "block";

        offer2.style.border = "1px solid #ff5c8d";
        offer1.style.border = "none";
        offer3.style.border = "none";
        radio2.checked = true;
        radio.checked = false;
        radio3.checked = false;
      } else if (this.id == "buy3get6") {
        discount1.style.display ='none'
        discount2.style.display ='none'
         discount3.style.display ='inline-block'


        tag1.style.display = "block";
        tag2.style.display = "block";
        tag3.style.display = "none";
        offer3.style.border = "1px solid #ff5c8d";
        offer1.style.border = "none";
        offer2.style.border = "none";
        radio2.checked = false;
        radio.checked = false;
        radio3.checked = true;
      }

      totalPrice.textContent = `Total: ${prices[this.id]}`;
    });
  });
});
