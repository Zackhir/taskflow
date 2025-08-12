import { useEffect, useState } from "react";
import SectionWrapper from "./SectionWrapper";

export default function Reviews() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=3")
      .then((res) => res.json())
      .then((data) => setUsers(data.results));
  }, []);

  return (
    <SectionWrapper>
      <h2>What Users Say</h2>
      <div className="Reviews-grid">
        {users.length > 0 &&
          users.map((u, i) => (
            <div key={i}>
              <img src={u.picture.large} alt="" />
              <p>"TaskFlow has completely changed how I organize my day!"</p>
              <p>
                {u.name.first} {u.name.last}
              </p>
            </div>
          ))}
      </div>
    </SectionWrapper>
  );
}
