import { useState } from "react";

function Faq() {
  const [active, setActive] = useState();

  const faqs = [
    {
      title: "When will the Crypto Punk be fractionalized for the community?",
      content: "Soon after the project selling out.",
    },
    {
      title:
        "If I own more than 1 Diamond Hand will I have more fractions of the Crypto Punk?",
      content:
        "Yes. Fractions will be distributed based on how many Diamond Hand NFTs you own.",
    },
    {
      title: 'What does the term "Diamond Hands" mean?',
      content:
        '"Diamond Hands" refers to someone who has a high risk tolerance to stomach through the high volatility of the asset that they own. These people understand the value of their asset and have conviction that volatility will be short lived. Individuals who display Diamond Hand values and qualities don’t cave under pressure. This is likely to be in reference to a Diamond’s unyielding material strength. As they say, Diamonds last forever.',
    },
  ];

  return (
    <section id="faqs" className="container faq-section">
      <h2 className="heading">FAQ's</h2>
      <p className="sub-heading">
        Frequently Asked Questions... If you don't know 😀
      </p>
      <div className="faqs">
        {faqs.map((faq, index) => (
          <Accordion
            title={faq.title}
            content={faq.content}
            active={active}
            setActive={setActive}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}

const Accordion = ({ title, content, active, setActive }) => {
  const handleClick = () => {
    if (title === active) {
      setActive("");
    } else {
      setActive(title);
    }
  };

  return (
    <div className="accordion">
      <div className="accordion-item">
        <button
          aria-expanded={title === active ? "true" : "false"}
          onClick={handleClick}
        >
          <p className="accordion-title">{title}</p>
          <span className="icon"></span>
        </button>
        <div className="accordion-content">
          <div>{content}</div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
