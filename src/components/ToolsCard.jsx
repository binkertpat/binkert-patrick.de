const ToolsCard = ({ props }) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img
          src={props.IMG}
          className="card-img-top p-2"
          alt={props.TITLE}
          title={props.TITLE}
        />
        <div className="card-body">
          <h5 className="card-title">{props.TITLE}</h5>
          <p className="card-text"> {props.TEXT} </p>
          <a href={props.LINK} className="btn btn-primary">
            {" "}
            {props.BUTTON_TEXT}
          </a>
        </div>
        <ul className="list-group list-group-flush">
          {props.HINT != "" && (
            <li className="list-group-item">
              <div
                className="alert alert-warning m-0"
                role="alert"
                dangerouslySetInnerHTML={{ __html: props.HINT }}
              ></div>
            </li>
          )}
          <li className="list-group-item">
            {Object.values(props.TAGS).map((item, i) => {
              return (
                <span key={i} className={"badge me-1 " + item.TYPE}>
                  #{item.VALUE}
                </span>
              );
            })}
          </li>
        </ul>
        {props.COPYRIGHT != "" && (
          <div className="card-footer text-body-secondary">
            {props.COPYRIGHT}
          </div>
        )}
      </div>
    </div>
  );
};

export default ToolsCard;
