import { getProfile } from "@repo/profile-service";

async function testProfilesPackage() {
  const profile = await getProfile({ name: "msescortplus", baseUrl: "/api" });
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
