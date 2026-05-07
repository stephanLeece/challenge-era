import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { getProfile } from "@repo/profile-service";
const proxyBaseUrl = import.meta.env.VITE_HUNQZ_PROXY_PATH;
async function testProfilesPackage() {
    const profile = await getProfile({ name: "msescortplus", baseUrl: proxyBaseUrl });
    console.log("Profile:", profile);
}
function App() {
    const profile = testProfilesPackage();
    console.log("Profile:", profile);
    return (_jsx(_Fragment, { children: _jsx("h1", { children: "React SPA" }) }));
}
export default App;
