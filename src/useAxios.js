import { useState } from "react";
import axios from "axios";
import {v1 as uuid} from "uuid";

/**
 * 
 * @param {String} url 
 * @returns return an array with two elements: The first element is an array of data obtained from previous AJAX requests (since we will add to this array, it’s a piece of state). The second element is a function that will add a new object of data to our array.
 */
function useAxios (url) {
    const [responses, setResponses] = useState([]);

    async function addResponse () {
        const newResponse = await axios.get(url);
        //data is the previous state and is used to make a new array with all the previous responses and the new one. ALso add a is key to response object
        setResponses(data => [...data, { ...newResponse.data, id: uuid() }]);
    }

    return [responses, addResponse];
}

export default useAxios;