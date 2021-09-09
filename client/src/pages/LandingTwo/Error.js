export default function Error(props) {
    return (
      <>
        {props.isVisible ? (
          <>
            <p className="error-message">{props.errorMessage}</p>
          </>
        ) : null}
      </>
    );
  }
  