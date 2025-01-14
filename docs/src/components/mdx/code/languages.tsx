import { configureLanguages } from './languagetypes';

export const LanguagePresets = configureLanguages({
    typescript: {
        icon: '/icons/typescript.png',
        name: 'Typescript',
        language: 'typescript',
        fallback: ['javascript'],
    },
    javascript: {
        icon: '/icons/javascript.png',
        name: 'Javascript',
        language: 'javascript',
        fallback: [],
    },
    ethers: {
        icon: '/icons/ethers.svg',
        language: 'typescript',
        name: 'Ethers',
        fallback: ['typescript', 'javascript'],
    },
    viem: {
        icon: '/icons/viem.svg',
        language: 'typescript',
        name: 'Viem',
        fallback: ['typescript', 'javascript'],
    },
    rust: {
        icon: '/icons/rust.svg',
        name: 'Rust',
        language: 'rust',
    },
    go: {
        icon: '/icons/go.svg',
        name: 'Go',
        language: 'go',
    },
    react: {
        icon: '/icons/react.svg',
        name: 'React',
        language: 'typescript',
        fallback: ['typescript'],
    },
    wagmi: {
        icon: '/icons/wagmi.svg',
        name: 'Wagmi',
        language: 'typescript',
        fallback: ['react', 'viem', 'typescript', 'javascript'],
    },
    rainbowkit: {
        icon: '/icons/rainbow.svg',
        name: 'Rainbowkit',
        language: 'typescript',
        fallback: ['wagmi', 'react', 'viem', 'typescript', 'javascript'],
    },
    connectkit: {
        icon: '/icons/family.svg',
        name: 'Connectkit',
        language: 'typescript',
        fallback: ['wagmi', 'react', 'viem', 'typescript', 'javascript'],
    },
});
