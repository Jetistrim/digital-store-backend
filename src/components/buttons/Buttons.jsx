import { Button as But } from "primereact/button";
import "./Buttons.css";

const Button = (props) => {
    return (
        <But
            style={{ fontFamily: "Inter, primeicons" }}
            className={`button ${
                props.buttonType === "icon-button"
                    ? `pi pi-plus ${props.buttonType}`
                    : props.buttonType
            }`}
            label={` ${props.label}`}
            disabled={props.disabled}
        >
            {props.children}
        </But>
    );
};

export default Button;
