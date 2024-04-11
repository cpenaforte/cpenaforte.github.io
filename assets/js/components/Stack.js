import VueLogo from "./logos/VueLogo.js";
import NodeLogo from "./logos/NodeLogo.js";
import TypescriptLogo from "./logos/TypescriptLogo.js";
import PythonLogo from "./logos/PythonLogo.js";
import ElmLogo from "./logos/ElmLogo.js";

export default Infimo.default.defineComponent({
    name: "Stack",
    components: [VueLogo, NodeLogo, TypescriptLogo, PythonLogo, ElmLogo],
    props: {
        type: {
            type: String,
            required: true
        }
    },
    methods: {
        log(text) {
            console.log(this.type);

            console.log(text === 'typescript', text);

            return text;
        },
    },
    template: `
        <div class="p-1 bg-gray-900 z-10 shadow-[0_0_4px_1px_rgba(0,0,0,0.3)] rounded">
            <VueLogo i-if="type === 'vue'" :height="64" :width="64"></VueLogo>
            <TypescriptLogo i-if="type === 'typescript'" :height="64" :width="64"></TypescriptLogo>
            <ElmLogo i-if="type === 'elm'" :height="64" :width="64"></ElmLogo>
            <NodeLogo i-if="type === 'node'" :width="64" :height="64"></NodeLogo>
            <PythonLogo i-if="type === 'python'" :height="64" :width="64"></PythonLogo>
        </div>
    `
});