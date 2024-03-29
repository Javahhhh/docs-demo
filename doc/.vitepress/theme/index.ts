import DefaultTheme from "vitepress/theme";
 
import { install} from "element-plus";
import "element-plus/dist/index.css";
 
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
   install(app)
  }
};