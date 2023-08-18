import { useMainnet } from './useMainnet';
import { useEnsAvatar } from 'wagmi';

export function useMainnetEnsAvatar(name: string | null | undefined) {
  const { chainId, enabled } = useMainnet();

  const { data: ensAvatar } = useEnsAvatar({
    chainId,
    enabled,
    name,
  });

  return ensAvatar;
}
