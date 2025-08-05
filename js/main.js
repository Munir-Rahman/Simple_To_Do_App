let listsdata = JSON.parse(localStorage.getItem("listdata")) ?? [];
let name_input = document.getElementById("task_name");
let date_input = document.getElementById("task_date");
let task_time = document.getElementById("task_time");
let add_btn = document.getElementById("add_btn");
let list_body = document.querySelector(".details");

let add_list = () => {
    add_btn.addEventListener('click', () => {
        if(!name_input.value == ""  || !task_time.value == "" || !date_input.value == ""){
            listsdata.push({
                'name':name_input.value,
                'time':task_time.value,
                'date':date_input.value,
            });
            localStorage.setItem(("listdata"),JSON.stringify(listsdata));
        }
            name_input.value = "";
            date_input.value = "";
            task_time.value="";
            display();
    });
}

let display = () => {
    localStorage.setItem(("listdata"),JSON.stringify(listsdata));
            let data = '';
            listsdata.forEach((element,index) => {
                data += `
                <div class="details_list">
                    <div class="list_name">
                        <span>${element.name}</span>
                    </div>
                    <div class="list_date">
                        <span>${element.time}</span>
                    </div>
                    <div class="list_date">
                        <span>${element.date}</span>
                    </div>
                    <div class="delete_list">
                        <button onclick = 'deletelist(${index})'>Delete</button>
                    </div>
                </div>
                `;
            });
            name_input.value = "";
            date_input.value = "";
            list_body.innerHTML = data;
}

let deletelist = (index) => {
    listsdata = JSON.parse(localStorage.getItem("listdata")) ?? [];
    listsdata.splice(index,1);
    display();
}

window.onload = () => {
    display();
    add_list();
}