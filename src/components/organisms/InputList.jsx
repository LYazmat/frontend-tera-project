import { Row } from "react-bootstrap";
import LabelField from "../molecules/LabelField";

export default function InputList(props) {
  return (
    <Row>
      {props.row.map((col) => {
        return <LabelField col={col} key={col.name} />;
      })}
    </Row>
  );
}
