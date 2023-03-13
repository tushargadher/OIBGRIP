//variable and const declare
// in javascript if we assisn element by id then we can direct access that element in javascript
const pendingTask = document.querySelector('.pendingTask');
const compTask = document.querySelector('.compTask');
const description = document.getElementById('description');
let taskTitle;
let taskDesc;

//create taskdiv
function creatTask(taskTitle, taskDesc) {
    const wrap_task = document.createElement('div');
    wrap_task.classList.add('wrap_task');
    const HtmlData =
        ` <div class="task">
                 <span style="margin-right: 15px;" class="span"><b> ${taskTitle}</b></span>
                 <span class="span">${taskDesc}</span>
          </div>
          <div class="compBtn">
                <img src="complete.png" alt="compBtn" class="compImg">
          </div>`;
    wrap_task.insertAdjacentHTML('beforeend', HtmlData);
    pendingTask.appendChild(wrap_task);


    const compImg = wrap_task.querySelector('.compImg');

    //move task to the complete task list when button clicked
    compImg.addEventListener('click', () => {

        setTimeout(() => {
            wrap_task.remove();
        }, 100)

        //adding task into complete list
        const wrap_Comptask = document.createElement('div');
        wrap_Comptask.classList.add('wrap_Comptask');
        const HtmlData =
            `<div class="task">
                   <span style="margin-right: 15px;" class="span"><b> ${taskTitle}</b></span>
                   <span class="span">${taskDesc}</span>
             </div>
            <div class="deleteBtn"><img src="delete.png" alt="Delete" class="deleImg"></div>`;
        wrap_Comptask.insertAdjacentHTML('beforeend', HtmlData);
        compTask.appendChild(wrap_Comptask);

        const deleteBtn = wrap_Comptask.querySelector('.deleteBtn');
        deleteBtn.addEventListener('click', () => {
            setTimeout(() => {
                wrap_Comptask.remove();
            }, 100)
        })
    })
}
//main logic start here
btn.addEventListener('click', (e) => {
    e.preventDefault();
    taskTitle = title.value;
    taskDesc = description.value;
    if (taskTitle.split('').filter((ele) => { return ele !== ' ' && ele !== '\n' }).length !== 0 && taskDesc.split('').filter((ele) => { return ele !== ' ' && ele !== '\n' }).length !== 0) //if the taskTitle is not empty then this condition become true
    {
        creatTask(taskTitle, taskDesc);
    }
    else {
        alert(`Empty task can't be added..!`)
    }
})
