const addBusinessLink = () => {
  const list = document.querySelector("#links");
  const newItem = document.createElement("li");
  const newLink = document.createElement("a");

  newLink.href = "https://www.csulb.edu/college-of-business";
  newLink.textContent = "College of Business";

  newItem.appendChild(newLink);

  const informationSystemsItem = document.querySelector("#is");
  list.insertBefore(newItem, informationSystemsItem);
};

addBusinessLink();