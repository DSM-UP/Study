const todoform = document.querySelector(".js-todoform"),
    todoinput = todoform.querySelector("input"),
    todolist = document.querySelector(".js-todo");

    const todos_LS = "todos";

    let todos = [];

    function deltodo(event)
    {
        const btn = event.target;
        const li = btn.parentNode;
        todolist.removeChild(li);
        const cleantodo = todos.filter(function(todo)
        {
            return todo.id !== parseInt(li.id);
        });
        todos = cleantodo;
        savetodo();
    }

    function savetodo()
    {
        localStorage.setItem(todos_LS, JSON.stringify(todos));
    }

    function painttodo(text)
    {
        const li = document.createElement("li");
        const del = document.createElement("span");
        del.className = "delete";
        del.innerText = "✖";
        del.addEventListener("click", deltodo);
        const span = document.createElement("span");
        const newId = todos.length + 1;
      
        if(JSON.parse(newId) <= 10)
        {
            span.innerText = text;
            li.appendChild(span);
            li.appendChild(del);
            li.id = newId;
            todolist.appendChild(li);
            const todoobj = {
                text : text ,
                id : newId
            };

            todos.push(todoobj);
            savetodo();
        }
    }

    function handlesubmit(event)
    {
        event.preventDefault();
        const currentvalue = todoinput.value;
        painttodo(currentvalue);
        todoinput.value = "";
    }

    function loadtodo(){
        const todos = localStorage.getItem(todos_LS);
        if(todos !== null)
        { 
            const parsedtodos = JSON.parse(todos);
            parsedtodos.forEach(function(todo)
            {
               painttodo(todo.text); 
            });
        }
    }

    function init()
    {
        loadtodo();
        todoform.addEventListener("submit", handlesubmit);
    }

    init();