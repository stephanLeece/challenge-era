import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getProfile } from '../src';
import { GET_PROFILE_RESPONSE_MOCK } from './mocks/get-profile.response.mock';

describe('getProfile', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  const mockFetchSuccess = () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => GET_PROFILE_RESPONSE_MOCK,
    } as any);
  };

  const mockFetchNotFound = () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 404,
    } as any);
  };

  const mockFetchServerError = () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
    } as any);
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
    it('throws PROFILE_NOT_FOUND when profile does not exist (404)', async () => {
      mockFetchNotFound();

      await expect(
        getProfile({ name: 'does-not-exist' })
      ).rejects.toThrow('PROFILE_NOT_FOUND');
    });

    it('throws PROFILE_FETCH_ERROR for server errors', async () => {
      mockFetchServerError();

      await expect(
        getProfile({ name: 'msescortplus' })
      ).rejects.toThrow('PROFILE_FETCH_ERROR:500');
    });
  });
});