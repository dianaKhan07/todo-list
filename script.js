const todoList = {
    trigger(e) {
        console.log(e)
        const target = e.target
        if(target.classList.contains('addBtn')){
            this.add()
        } else if(target.classList.contains('active')
        || target.classList.contains('done')) {
            this.changeStatus(target)
        } else if (target.classList.contains("deleteTodo")) {
            target.parentElement.remove();
        }
    },
    add() {
        let text = document.querySelector('input[type="text"]');
        let todo = document.querySelector('.todo-list');
        todo.insertAdjacentHTML('afterbegin',`
        <div class='active done todo-item'>
          ${text.value}
         <button class="deleteTodo"></button>
          </div>
        `)
    },
    changeStatus (target) {
        if(target.classList.contains('active')) {
            target.classList.add('done')
            target.classList.remove('active')
    }
    else { 
        target.classList.add('active')
        target.classList.remove('done')
    }
    },
    init(){
        document.addEventListener('click', this.trigger.bind(this))
    }
}

todoList.init();