import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(
    "https://image.shutterstock.com/image-vector/no-user-profile-picture-hand-260nw-99335579.jpg"
  );
  const [body, setBody] = useState("");
  const [time, setTime] = useState("00:00");
  const [distance, setDistance] = useState("0");
  const [author, setAuthor] = useState("Haukur");
  const history = useHistory();
  const date = new Date();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blogYear = date.getFullYear();
    const blogMonth = date.getMonth();
    const blogDate = date.getDate();
    const blogTime = date.getHours();
    const blogMinute = date.getMinutes();
    const blogClock = `${blogTime}:${blogMinute} ${blogMonth}.${blogDate} ${blogYear}`;
    const blog = { title, image, time, distance, body, author, blogClock };

    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      // history.go(-1);
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Bæta Við Róðri</h2>
      <form onSubmit={handleSubmit}>
        <label>Titill Róðurs:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Viðeigandi Mynd:</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <label>Lengd  Róðurs:</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <label>Vegalengd Róðurs:</label>
        <input
          type="number"
          step="500"
          value={distance}
          onChange={(e) => {
            setDistance(e.target.value);
          }}
        />

        <label>Hvernig var?:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Hver Ert Þú?:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Mamma">Mamma</option>
          <option value="Pabbi">Pabbi</option>
          <option value="Biggi">Biggi</option>
          <option value="Haukur">Haukur</option>
          <option value="Þóra">Þóra</option>
          <option value="Svampur Sveinnson">
            Svampur Sveinnson 🧽 Agagagagagagaga!
          </option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
