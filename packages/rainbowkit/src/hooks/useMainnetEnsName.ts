import { useMainnet } from './useMainnet';
import { useEnsName } from 'wagmi';

export function useMainnetEnsName(address: string | undefined) {
  const { chainId, enabled } = useMainnet();

  const { data: ensName } = useEnsName({
    address,
    chainId,
    enabled,
  });

  return ensName;
}
