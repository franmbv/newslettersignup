function Phrase(props) {
    return (
      <>
        <h1 className="content_title">{props.fText}</h1>
        <p className="content_subtitle">{props.sText}</p>
      </>
    );
  }
  
  export default Phrase;