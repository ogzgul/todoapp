import { useState, useEffect } from "react";
import "./style.css";
import List from "./List";
import Form from "./Form";
function Footer() {
  const [footer, setFooter] = useState([]);

  useEffect(() => {
    console.log(footer);
  }, [footer]);

  function deleteFooter(params) {
    let filteredData = footer.filter((x) => x.work != params.work);
    setFooter(filteredData);
  }

  return (
    <div id="container">
      <h1>Bugün Yapacaklarım!</h1>
      <Form addFooter={setFooter} footer={footer} />
      <List footer={footer} deleteFooter={deleteFooter} />
    </div>
  );
}

export default Footer;
