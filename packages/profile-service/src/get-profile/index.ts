type GetProfileArgs = {
    name: string;
    baseUrl?: string;
};

const DEFAULT_BASE_URL = "https://www.hunqz.com";

export async function getProfile({ name = 'msescortplus', baseUrl = DEFAULT_BASE_URL }: GetProfileArgs) {
    const res = await fetch(
        `${baseUrl}/api/opengrid/profiles/${name}`
    );

    if (!res.ok) {
        throw new Error(`Failed to fetch profile: ${res.status}`);
    }

    return res.json();
}

export function testProfilesPackage() {
    console.log("Profiles package is connected");
}