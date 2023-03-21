import BaseButton from "./BaseButton";

function ButtonMedium({textContent = ""}) {
    return(
        <div className="_button-medium">
            <BaseButton textContent={textContent} />
        </div>
    )
}

export default ButtonMedium;