function EmailForm(props) {
    const handleSubmit = (event) => {
      event.preventDefault();
      props.onSignIn();
    };
  
    const handleError = () => {
      props.onSignError();
    };
  
    const handleEmail = (event) => {
      props.onSignEmail(event);
    };
  
    return (
      <form
        onSubmit={handleSubmit}
        className={!props.error ? "form" : "form form--error"}
      >
        <div className="form_state">
          <label htmlFor="email" className="form_label">
            Email address
          </label>
          <small className="form_status">Valid email required</small>
        </div>
  
        <input
          onBlur={handleError}
          type="email"
          name="email"
          id="email"
          className="form_input-email"
          placeholder="email@company.com"
          value={props.email}
          onChange={handleEmail}
        />
  
        <button type="submit" className="form_submit-button button">
          Subscribe to monthly newsletter
        </button>
      </form>
    );
  }
  
  export default EmailForm;
  