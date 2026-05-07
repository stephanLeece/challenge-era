import { getProfile } from "@repo/profile-service";

const proxyBaseUrl = import.meta.env.VITE_HUNQZ_PROXY_PATH;

async function testProfilesPackage() {
  const profile = await getProfile({ name: "msescortplus", baseUrl: proxyBaseUrl });
  console.log("Profile:", profile);
}

function App() {
  const profile = testProfilesPackage();
  console.log("Profile:", profile);
  return (
    <>
      <h1>React SPA</h1>
    </>
  )
}

export default App
