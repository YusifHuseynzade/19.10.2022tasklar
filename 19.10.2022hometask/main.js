let addbtn = document.getElementById('todo');
addbtn.addEventListener('click',function(){
    let datetime = this.previousElementSibling;
    let task = datetime.previousElementSibling;
    datetime.style.borderColor = '#ced4da';
    task.style.borderColor = '#ced4da';
    if (task.value.trim().length > 0 && datetime.value.trim().length > 0) {
        let list = document.getElementById('list');
        let date = datetime.value.split('T')[0];
        let time = datetime.value.split('T')[1];
        list.innerHTML+=`<li class="list-group-item">
            <div class="row align-items-center">
                <p class="col-md-4 m-0">${task.value}</p>
                <p class="col-md-4 m-0">${date} | ${time}</p>
                <div class="col-md-4 row justify-content-between">
                    <button onclick="this.parentElement.parentElement.parentElement.style.backgroundColor ='red'" class="btn btn-success done-btn col-md-5">Done</button>
                    <button onclick="this.parentElement.parentElement.parentElement.remove()" class="btn btn-danger col-md-5">Delete</button>
                </div>
            </div>
        </li>`
        datetime.value = "";
        task.value="";
        checkAllItem();
    }
    else{
        datetime.style.borderColor = 'red';
        task.style.borderColor = 'red';
    }
})

function checkAllItem() {
    let items = document.querySelectorAll(".list-group-item");
    for (const item of items) {
        let datetime = item.children[0].children[1].innerText.split('|');
        let result = checkTime(datetime[0],datetime[1])
        item.style = 'background-color:'+result+ '!important'
    }
}
function checkTime(taskDate, taskTime) {
    let dateObj = new Date();
    let date = dateObj.toLocaleDateString("az").trim();
    let time = dateObj.toLocaleTimeString().trim();
    taskDate = taskDate.trim();
    taskTime = taskTime.trim();

    timearr = taskTime.split(':');
    localtimearr = time.split(':');
    datearr = taskDate.split('-');
    
    
    if((parseInt(timearr[0])-parseInt(localtimearr[0])<=3) && date == taskDate) {
        return 'rgb(248, 68, 2);'
    }
    else if (date == taskDate) {
        return '#fff';
    }
    else if (date < taskDate) {
        return 'rgb(119, 154, 55);';
    }
    else{
        date.split('-')
    }
    return 'rgb(219, 204, 91);';
}



