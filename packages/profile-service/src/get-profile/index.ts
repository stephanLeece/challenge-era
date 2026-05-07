type GetProfileArgs = {
    name: string;
};

const BASE_URL = "https://www.hunqz.com/api/opengrid";

export async function getProfile({ name = 'msescortplus' }: GetProfileArgs) {
    const res = await fetch(`${BASE_URL}/profiles/${name}`);

    if (!res.ok) {
        throw new Error(`Failed to fetch profile: ${res.status}`);
    }

    return res.json();
}

export function testProfilesPackage() {
    console.log("Profiles package is connected");
}