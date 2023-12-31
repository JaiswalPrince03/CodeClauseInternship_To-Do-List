document.querySelector('#push').onclick = function () {
    if (document.querySelector('#newtask input').
        value.length == 0) {
        alert("Please enter any task")
    }
    else {
        document.querySelector('#tasks').innerHTML +=
            `   
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                <i class="fa fa-trash" aria-hidden="true"></i>

                </button>
            </div >
        `;
// remove the task
        var current_tasks = document.querySelectorAll(".delete");
        for (let  i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }
// task has been completed 
        var tasks = document.querySelectorAll(".task");
        for (let i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function () {
                this.classList.toggle('completed');
            }
        }

        document.querySelector("#newtask input").
            value = "";
    }
}