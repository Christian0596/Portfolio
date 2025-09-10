tasks.forEach(tasks => {
    document.getElementById("result").innerHTML += `

    <div class="card mx-2 my-2" style="width: 18rem">
    <img src="${tasks.Bild}" class="card-img-top img-fluid" alt="No Image found">
    <div class="card-body">
      <h5 class="card-title">${tasks.Aufgabenname}</h5>
      <p class="card-text">${tasks.Beschreibung}.</p>
    </div>
    <div class="card-body text-center">
    <button class="btn btn-outline-success text-black myBtn sizebutton-btn">Priority Level  <span class="seen"><br>${tasks.Wichtigkeit}</span</button>
    <button type="button" class=" btn btn-info sizebutton-btn col-12">Done</button>
    <button type="button" class=" btn btn-danger sizebutton-btn col-12">Delete</button>
    </div>
  </div>
  `
        ;
});

let btns = document.querySelectorAll(".myBtn");
btns.forEach((button, i) => {
    button.addEventListener("click", function () {
        counter(i, button);
    })

});

function counter(index, button) {
    if (tasks[index].Wichtigkeit < 5) {
        tasks[index].Wichtigkeit++;
        document.querySelectorAll(".seen")[index].innerText = tasks[index].Wichtigkeit

        if (tasks[index].Wichtigkeit <= 1) {
            button.classList.remove("btn-warning", "btn-danger");
            button.classList.add("btn-success");
        } else if (tasks[index].Wichtigkeit <= 3) {
            button.classList.remove("btn-success", "btn-danger");
            button.classList.add("btn-warning");
        } else {
            button.classList.remove("btn-success", "btn-warning");
            button.classList.add("btn-danger");
        }
    }
}
document.getElementById("sort-button").addEventListener("click", function () {
    let newVar = tasks.sort((b, a) => a.Wichtigkeit - b.Wichtigkeit);
    document.getElementById("result").innerHTML = "";
    newVar.forEach(tasks => {
        document.getElementById("result").innerHTML += `
        <div class="card mx-2 my-2" style="width: 18rem">
    <img src="${tasks.Bild}" class="card-img-top img-fluid" alt="No Image found">
    <div class="card-body">
      <h5 class="card-title">${tasks.Aufgabenname}</h5>
      <p class="card-text">${tasks.Beschreibung}.</p>
    </div>
    <div class="card-body text-center">
    <button class="btn myBtn btn-outline-success text-black sizebutton-btn">Priority Level  <span class="seen"><br>${tasks.Wichtigkeit}</span</button>
    <button type="button" class=" btn btn-info sizebutton-btn col-12">Done</button>
    <button type="button" class=" btn btn-danger sizebutton-btn col-12">Delete</button>
    </div>
  </div>
        `;
    });
});