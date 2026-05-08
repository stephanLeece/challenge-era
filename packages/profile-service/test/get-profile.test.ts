import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getProfile } from '../src';
import { GET_PROFILE_RESPONSE_MOCK } from './mocks/get-profile.response.mock';

describe('getProfile', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  const mockFetchSuccess = () => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => GET_PROFILE_RESPONSE_MOCK,
    });
  };

  const mockFetchNotFound = () => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 404,
    });
  };

  const mockFetchServerError = () => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
    });
  };

  describe('happy path', () => {
    beforeEach(() => {
      mockFetchSuccess();
    });

    it('fetches a profile by name', async () => {
      const result = await getProfile({ name: 'msescortplus' });

      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('/msescortplus')
      );

      expect(result).toEqual(GET_PROFILE_RESPONSE_MOCK);
    });
  });

  describe('unhappy path', () => {
    it('throws prpfile not found when profile does not exist (404)', async () => {
      mockFetchNotFound();

      await expect(
        getProfile({ name: 'does-not-exist' })
      ).rejects.toThrow('Profile not found');
    });

    it('throws a fecth error for server errors', async () => {
      mockFetchServerError();

      await expect(
        getProfile({ name: 'msescortplus' })
      ).rejects.toThrow('There was an error fetching this profile: 500');
    });
  });
});