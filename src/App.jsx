import Phrase from "./Phrase.jsx";
import Ilustration from "./Ilustration.jsx";
import UnorderList from "./UnorderList.jsx";
import EmailForm from "./EmailForm.jsx";
import SignUpDesktop from "./assets/images/sign-up-desktop.svg";
import SignUpMobile from "./assets/images/sign-up-mobile.svg";
import IconSuccess from "./assets/images/icon-success.svg";
import { useState } from "react";

function App() {
  const [error, setError] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [submit, setSubmit] = useState(false);

  let mailValidationRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const isValidEmail = mailValidationRegex.test(userEmail);

  const elements = [
    { id: 0, content: "Product discovery and building what matters" },
    { id: 1, content: "Measuring to ensure updates are a success" },
    { id: 2, content: "And much more!" },
  ];

  const signError = () => {
    setError(!isValidEmail);
  };

  const signIn = () => {
    if (isValidEmail) {
      setSubmit(true);
    }
  };

  const signEmail = (event) => {
    setUserEmail(event.target.value);
  };

  return (
    <>
      <main className={!submit ? "container" : "container form--submit"}>
        <section className="content">
          <Phrase
            fText="Stay updated!"
            sText="Join 60,000+ product managers receiving monthly updates on:"
          />

          <UnorderList elements={elements} />

          <EmailForm
            onSignIn={signIn}
            onSignError={signError}
            onSignEmail={signEmail}
            value={userEmail}
            error={error}
          />
        </section>

        <section className="ilustration">
          <Ilustration
            image={SignUpDesktop}
            alt="Sign up desktop ilustration"
            className="ilustration_image-desktop"
          />

          <Ilustration
            image={SignUpMobile}
            alt="Sign up mobile ilustration"
            className="ilustration_image-mobile"
          />
        </section>
      </main>

      <div className={!submit ? "success form--submit" : "success"}>
        <Ilustration
          image={IconSuccess}
          alt="icon success"
          className="success__icon"
        />

        <p className="success__title">Thanks for subscribing!</p>

        <p className="success__description">
          A confirmation email has been sent to <strong>{userEmail}</strong>.
          Please open it and click the button inside to confirm your
          subscription
        </p>

        <button className="success_dismiss button">Dismiss message</button>
      </div>
    </>
  );
}

export default App;
