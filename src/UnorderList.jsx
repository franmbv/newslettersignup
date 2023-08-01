function UnorderList(props) {
    const elements = props.elements;
    const listItems = elements.map((element) => (
      <li key={element.id} className="content_benefits_benefit">
        {element.content}
      </li>
    ));
    return <ul className="content_benefits">{listItems}</ul>;
  }
  
  export default UnorderList;