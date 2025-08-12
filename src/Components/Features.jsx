import SectionWrapper from "./SectionWrapper";
import { features } from "../data/features";

export default function Features() {
  return (
    <SectionWrapper>
      <h2>Features</h2>
      <div className="Features-grid">
        {features.map((f, i) => (
          <div key={i}>
            <div>{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
