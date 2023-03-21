import BaseButton from "./BaseButton";

function ButtonLarge({textContent = "", iconSrc = ""}) {
    return(
        <div className="_button-large">
            <BaseButton textContent={textContent} iconSrc={iconSrc} />
        </div>
    )
}

export default ButtonLarge;