import LinkButton from "./LinkButton";

const ExportJsonLink = ({ className, data }) => {
  return (
    <LinkButton
      label="Export JSON"
      className={className}
      to={
        "data:text/json;charset=utf-8," +
        encodeURIComponent(JSON.stringify(data))
      }
      download="text.json"
    />
  );
};

export default ExportJsonLink;
