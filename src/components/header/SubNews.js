import { Link } from "react-router-dom";

const SubNews = ({ sub, count, setCount }) => {
  console.log();

  return (
    <>
      {count === 1 ? (
        <div
          className="depth1-wrap active"
          onMouseOver={() => {
            setCount(1);
          }}
        >
          <ul className="submenu">
            {sub.map((v, i) => {
              return (
                <li className="depth2" key={i}>
                  <Link to="/">{v.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SubNews;
