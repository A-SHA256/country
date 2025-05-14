import dom from "../dom.js";
import clickHandler from "../handlers/clickHandler.js";

const event = dom.form.addEventListener('submit', (e) => clickHandler(e));

export default event;