import { useState } from "react";
import "./index.css";
import { AiFillDelete } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import Confirmation from "./Confirmation";
import { HiPlus } from "react-icons/hi";
import { AiOutlineClear } from "react-icons/ai";

export default function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [todo, setTodo] = useState({ task: "", description: "" });
  const [items, setItems] = useState([]);
  const [confirmation, setConfirmation] = useState({
    show: false,
    remove: false,
    clears: false
  });
  const [deleteId, setDeleteId] = useState(0);

  const showAlert = (s = false, d = false, c = false) => {
    setConfirmation({ show: s, remove: d, clears: c });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTodo({ ...todo, [name]: value });
  };

  const { task, description } = todo;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task && description && description.length <= 40 && task.length <= 25) {
      const newTask = { ...todo, id: new Date().getTime().toString() };
      setItems([...items, newTask]);
      setTodo({ task: "", description: "" });
    }
  };
  // let popupState = "hide-popup";
  // if (showPopup === true) {
  //   popupState = "show-popup";
  // }
  const removeItem = (id) => {
    let newItems = items.filter((item) => {
      return item.id != id;
    });
    setItems(newItems);
  };

  return (
    <>
      {confirmation.show && (
        <Confirmation
          {...confirmation}
          showConfirmation={showAlert}
          deleteid={deleteId}
          removeItem={removeItem}
          setItems={setItems}
        />
      )}
      <div className="container">
        <header className="head">
          <h1>TO-DO APP</h1>
          <button
            className="add-task-btn btn"
            onClick={() => {
              setShowPopup(true);
            }}
          >
            <HiPlus /> ADD TASK
          </button>
        </header>
        <main className="todo-container">
          {items.length > 0 && <p className="taskList">TASKS LIST</p>}
          <section className="todo-list">
            {items.map((item, index) => {
              const { task, description } = item;
              return (
                <div class="item" key={index}>
                  <div className="taskandheader">
                    <h1 className="task">{task}</h1>
                    <p>{description}</p>
                  </div>
                  <button
                    className="delete-btn btn"
                    onClick={() => {
                      showAlert(true, true, false);
                      setDeleteId(item.id);
                      // removeItem(item.id);
                    }}
                  >
                    {" "}
                    <AiFillDelete />{" "}
                  </button>
                </div>
              );
            })}
          </section>
          {items.length > 0 ? (
            <button
              className="clear-btn btn"
              onClick={() => {
                showAlert(true, false, true);
              }}
            >
              <AiOutlineClear /> CLEAR TASKS
            </button>
          ) : (
            <p className="empty">List Empty 😢 </p>
          )}
        </main>

        {/* Forms pop-up */}
        <div
          className={`forms-popup ${showPopup ? `show-popup` : `hide-popup`}`}
        >
          <article className="popup-header">
            <button
              className="back-btn"
              onClick={() => {
                setShowPopup(false);
              }}
            >
              <BsArrowLeft />
            </button>
            <h1>Create New Task</h1>
          </article>
          <form className="form-control">
            <input
              className="todo-input"
              type="text"
              id="task"
              name="task"
              value={task}
              placeholder="Task Name"
              onChange={handleChange}
            />

            <div>
              <input
                htmlFor="description"
                className="todo-input"
                id="description"
                name="description"
                value={description}
                onChange={handleChange}
                type="text"
                placeholder="Description"
              />
            </div>

            <input
              className="submit-btn btn"
              type="submit"
              value="CREATE TASK"
              onClick={handleSubmit}
            />
          </form>
        </div>
      </div>
    </>
  );
}
