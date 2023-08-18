import { Chain } from '../../../components/RainbowKitProvider/RainbowKitChainContext';
import { isIOS } from '../../../utils/isMobile';
import { Wallet } from '../../Wallet';
/* eslint-disable sort-keys-fix/sort-keys-fix */
import type { InjectedConnectorOptions } from '@wagmi/core/connectors/injected';
import { InjectedConnector } from 'wagmi/connectors/injected';

export interface DawnWalletOptions {
  chains: Chain[];
}

export const dawnWallet = ({
  chains,
  ...options
}: DawnWalletOptions & InjectedConnectorOptions): Wallet => ({
  id: 'dawn',
  name: 'Dawn',
  iconUrl: async () => (await import('./dawnWallet.svg')).default,
  iconBackground: '#000000',
  installed:
    typeof window !== 'undefined' &&
    typeof window.ethereum !== 'undefined' &&
    window.ethereum.isDawn,
  hidden: () => !isIOS(),
  downloadUrls: {
    ios: 'https://apps.apple.com/us/app/dawn-ethereum-wallet/id1673143782',
    mobile: 'https://dawnwallet.xyz',
  },
  createConnector: () => ({
    connector: new InjectedConnector({
      chains,
      options,
    }),
  }),
});
