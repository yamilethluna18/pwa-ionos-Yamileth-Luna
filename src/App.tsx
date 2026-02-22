import { useState, useEffect } from 'react';
import { addTask, getTasks, updateTask } from './db';
import { styles } from './styles/AppStyles';

interface Task {
  id?: number;
  title: string;
  completed: boolean;
}

function App() {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed'>('all');

  useEffect(() => {
    refreshTasks();
  }, []);

  const refreshTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  const today = new Date().toLocaleDateString('es-MX', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });

  const pending = tasks.filter(t => !t.completed).length;
  const completed = tasks.filter(t => t.completed).length;

  const visibleTasks = tasks.filter(task => {
    if (filter === 'pending') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const createTask = async () => {
    if (!input.trim()) return;

    await addTask({
      title: input,
      completed: false
    });

    setInput('');
    refreshTasks();
  };

  const changeStatus = async (task: Task) => {
    await updateTask({
      ...task,
      completed: !task.completed
    });

    refreshTasks();
  };

  return (

    <div style={styles.container}>

      <div style={styles.card}>

        {/* PANEL SUPERIOR */}
        <div style={{
          marginBottom: "25px",
          paddingBottom: "15px",
          borderBottom: "1px solid #ffc1d6"
        }}>

          <h1 style={{
            color: "#ff8fab",
            marginBottom: "5px"
          }}>
            SweetPlanner 🌸
          </h1>

          {/* FRASE */}
          <span style={{
            fontSize: "14px",
            color: "#c48aa0",
            display: "block",
            marginBottom: "5px"
          }}>
            Organiza tus tareas con dulzura y claridad 
          </span>

        </div>


        {/* ESTADISTICAS */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
          fontSize: "14px"
        }}>

          <span> Pendientes: {pending}</span>
          <span> Completadas: {completed}</span>

        </div>


        {/* INPUT */}
        <div style={{
          display: "flex",
          marginBottom: "20px"
        }}>

          <input
            style={{
              ...styles.input,
              borderRadius: "20px 0 0 20px"
            }}
            value={input}
            placeholder="Agregar nueva tarea..."
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && createTask()}
          />

          <button
            style={{
              ...styles.button,
              borderRadius: "0 20px 20px 0"
            }}
            onClick={createTask}
          >
            ➕
          </button>

        </div>


        {/* FILTROS */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "20px"
        }}>

          <button style={styles.button} onClick={() => setFilter('all')}>
            Todas
          </button>

          <button style={styles.button} onClick={() => setFilter('pending')}>
            Pendientes
          </button>

          <button style={styles.button} onClick={() => setFilter('completed')}>
            Completadas
          </button>

        </div>


        {/* LISTA */}
        <div style={styles.list}>

          {visibleTasks.length === 0 && (
            <div style={{
              padding: "20px",
              textAlign: "center",
              color: "#c48aa0"
            }}>
              No hay tareas 🌸
            </div>
          )}

          {visibleTasks.map(task => (

            <div
              key={task.id}
              style={{
                ...styles.taskItem,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >

              <span
                style={{
                  cursor: "pointer",
                  textDecoration: task.completed ? "line-through" : "none",
                  opacity: task.completed ? 0.5 : 1
                }}
                onClick={() => changeStatus(task)}
              >
                {task.title}
              </span>

              <button
                style={styles.button}
                onClick={() => changeStatus(task)}
              >
                {task.completed ? "✔" : "○"}
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}

export default App;