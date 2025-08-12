import SectionWrapper from "./SectionWrapper";
import { pricingPlans } from "../data/pricing";

export default function Pricing() {
  return (
    <SectionWrapper>
      <h2>Pricing</h2>
      <div className="Pricing-grid">
        {pricingPlans.map((p, i) => (
          <div key={i}>
            <h3>{p.plan}</h3>
            <p>{p.price}</p>
            <ul>
              {p.features.map((f, j) => (
                <li key={j}>✅ {f}</li>
              ))}
            </ul>
            <button>Choose Plan</button>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
