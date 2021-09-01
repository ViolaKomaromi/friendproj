
export default function Wrapper(props) {
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">{props.children}</div>
      </div>
    );
  }
