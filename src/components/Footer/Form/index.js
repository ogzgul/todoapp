import { useState } from "react";

const initialFormValue = { work: "" };
function Form({ addFooter, footer }) {
  const [form, setForm] = useState(initialFormValue);
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.work === "") {
      return false;
    }

    addFooter([...footer, form]);
    setForm(initialFormValue);
  };
  return (
    <form onSubmit={onSubmit} className="form">
      <div>
        <input
          name="work"
          value={form.work}
          placeholder="Bugün Neler Yapıcam?"
          onChange={onChangeInput}
        />
      </div>
      <div>
        <button>Add</button>
      </div>
    </form>
  );
}

export default Form;
