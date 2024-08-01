import {useState} from "react";

/**hooks that fips a playing card when called and stores the state of flipped card
 * @returns Array with state of flipped card and flip card handle function
 */
function useFlip () {
    const [isFacingUp, setIsFacingUp] = useState(true);
    const flipCard = () => {
        setIsFacingUp(isUp => !isUp);
    };

    return [isFacingUp, flipCard];
}

export default useFlip;