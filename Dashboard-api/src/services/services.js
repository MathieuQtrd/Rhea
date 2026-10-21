const API_URL = 'https://jsonplaceholder.typicode.com/todos'

export async function getTasks(limit = 10) {
    const response = await fetch(`${API_URL}?_limit=${limit}`)
    
    if(!response.ok) {
        throw new Error('Erreur lors du chargement des tâches')
    }

    const data = await response.json()
    console.log(data)

    return data.map((task) => ({
        id: task.id,
        title: task.title,
        description: 'Tâche provenant de l\'api',
        priority: task.id % 3 === 0 ? 'high' : task.id % 2 === 0 ? 'medium' : 'low',
        done: task.completed 
    }))
}

export async function createTask(task) {
    const response = await fetch(`${API_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: task.title,
            description: task.description,
            completed: task.done 
        })
    })

    if(!response.ok) {
        throw new Error('Erreur lors de l\'ajout de la tâche')
    }

    const data = await response.json()
    console.log(data)

    return {
        id: Date.now(),
        title: task.title,
        description: task.description,
        priority: task.priority,
        done: !task.done 
    } 
}

export async function deleteTask(taskId) {
  const response = await fetch(`${API_URL}/${taskId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Erreur lors de la suppression de la tâche");
  }

  return true;
}