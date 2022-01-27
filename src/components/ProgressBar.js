function ProgressBar({ title, percentage }) {
  return (
    <div className="progress-comp">
      <div className="title">{title}</div>
      <div className="progress-bar">
        <div className="progress" style={{ width: percentage + "%" }}>
          {percentage + "%"}
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
