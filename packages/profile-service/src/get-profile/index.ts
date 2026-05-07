import { ProfileResponse } from "../types/profile";

type GetProfileArgs = {
    name: string;
    baseUrl?: string;
};

const DEFAULT_BASE_URL = "https://www.hunqz.com";

export async function getProfile({ name = 'msescortplus', baseUrl = DEFAULT_BASE_URL }: GetProfileArgs): Promise<ProfileResponse> {
    const res = await fetch(
        `${baseUrl}/api/opengrid/profiles/${name}`
    );

    if (!res.ok) {
        if (res.status === 404) {
            throw new Error('PROFILE_NOT_FOUND');
        }

        throw new Error(`PROFILE_FETCH_ERROR:${res.status}`);
    }

    /**
     *  return type validation would be good here via a check against a schema, 
     *  since we are just relying on trust that the response data does match the expected type,
     *  but perhaps out of scope for the code challenge unless time permits.
     */
    const data = await res.json();
    return data as ProfileResponse;
}
