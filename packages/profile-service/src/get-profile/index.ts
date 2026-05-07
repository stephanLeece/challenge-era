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
        if (res.status === 404) {
            throw new Error('PROFILE_NOT_FOUND');
        }

        throw new Error(`PROFILE_FETCH_ERROR:${res.status}`);
    }

    return res.json();
}
