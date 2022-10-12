function List({ footer, deleteFooter }) {
  return (
    <div>
      <div>
        <ul className="list">
          {footer.map((footer, i) => (
            <li key={i}>
              {footer.work}{" "}
              <button onClick={() => deleteFooter(footer)}>x</button>
            </li>
          ))}
        </ul>
      </div>
      <p>Total Work: {footer.length}</p>
    </div>
  );
}

export default List;
