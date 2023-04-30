import {BrowserProvider, Eip1193Provider, ethers} from 'ethers';

declare global {
  interface Window {
    ethereum: Eip1193Provider & BrowserProvider;
  }
}

const isInstalled = Boolean(window.ethereum);

const signMessage = async (message: string) => {
  if(!window.ethereum) throw new Error('metamask not installed');

  const accounts = await window.ethereum?.request({
    method: "eth_requestAccounts",
  }) as string[];

  // account will be the signer of this message
  const account = accounts[0];

  return window.ethereum?.request({
    method: "personal_sign",
    params: [
      ethers.keccak256(ethers.toUtf8Bytes(message)),
      account,
    ],
  });
}

export const ethereum = {
  isInstalled,
  signMessage,
}
