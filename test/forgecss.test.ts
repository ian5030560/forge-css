import { join } from "path";
import forgeCss from "../src/index";

test("This is the test for the 'forgeCss' function.", () => {
    const css = forgeCss(join(__dirname, "forgecss.config.json"));
    expect(css).toMatchSnapshot();
});