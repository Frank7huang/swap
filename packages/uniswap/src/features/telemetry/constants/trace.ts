import {
  InterfaceElementName,
  InterfaceModalName,
  InterfacePageName,
  InterfaceSectionName,
} from '@uniswap/analytics-events'
import { OnboardingCardLoggingName } from 'uniswap/src/features/telemetry/types'

export const ModalName = {
  AccountBlocked: 'account-blocked-modal',
  AccountEdit: 'account-edit-modal',
  AccountEditLabel: 'account-edit--label-modal',
  AccountSwitcher: 'account-switcher-modal',
  AcrossRoutingInfo: 'across-routing-info-modal',
  AddLiquidity: 'add-liquidity',
  AddressClaim: 'address-claim-modal',
  AddressQR: 'address-qr-modal',
  AddWallet: 'add-wallet-modal',
  AppRatingModal: 'app-rating-modal',
  BackupReminder: 'backup-reminder-modal',
  BackupReminderWarning: 'backup-reminder-warning-modal',
  BlockedAddress: 'blocked-address',
  BiometricsModal: 'biometrics-modal',
  BridgingWarning: 'bridging-warning-modal',
  BuyNativeToken: 'buy-native-token-modal',
  CancelOrders: 'cancel-orders-modal',
  ChooseProfilePhoto: 'choose-profile-photo-modal',
  ChooseProviderModal: 'choose-provider-modal',
  ClaimFee: 'claim-fee-modal',
  CloudBackupInfo: 'cloud-backup-info-modal',
  ConnectionError: 'connection-error-modal',
  ContractAddressExplainer: 'contract-address-explainer-modal',
  ConnectionsDappListModal: 'connections-dapp-list-modal',
  CreatePosition: 'create-position-modal',
  ConfirmCreatePosition: 'confirm-create-position-modal',
  CurrencySearch: 'currency-search-modal',
  DappRequest: 'dapp-request',
  DownloadApp: 'download-app-modal',
  Dialog: 'dialog-modal',
  EditLabelSettingsModal: 'edit-label-settings-modal',
  EditProfileSettingsModal: 'edit-profile-settings-modal',
  ENSClaimPeriod: 'ens-claim-period',
  EnterPassword: 'enter-password-modal',
  EstimatedTimeInfo: 'estimated-time-info-modal',
  ExchangeTransferModal: 'exchange-transfer-modal',
  Experiments: 'experiments',
  Explore: 'explore-modal',
  ExploreProtocolFilter: 'explore-pools-protocol-filter',
  FaceIDWarning: 'face-id-warning',
  FeatureFlags: 'feature-flags-modal',
  FeeClaim: 'fee-claim-modal',
  FeeTierSearch: 'fee-tier-search-modal',
  FiatCurrencySelector: 'fiat-currency-selector',
  FiatOnramp: 'fiat-onramp-modal',
  FiatOnRampAggregator: 'fiat-on-ramp-aggregator',
  FiatOnRampCountryList: 'fiat-on-ramp-country-list',
  FiatOnRampTokenSelector: 'fiat-on-ramp-token-selector',
  FiatOffRampUnsupportedTokenModal: 'fiat-off-ramp-unsupported-token-modal',
  ForceUpgradeModal: 'force-upgrade-modal',
  ForgotPassword: 'forgot-password',
  FOTInfo: 'fee-on-transfer',
  FundWallet: 'fund-wallet',
  HiddenNFTInfoModal: 'hidden-nft-info-modal',
  HiddenTokenInfoModal: 'hidden-token-info-modal',
  Hook: 'hook',
  KoreaCexTransferInfoModal: 'korea-cex-transfer-info-modal',
  LanguageSelector: 'language-selector-modal',
  Legal: 'legal',
  LowNativeBalanceWarning: 'low-native-balance-warning',
  ManageWalletsModal: 'manage-wallets-modal',
  MigrateLiquidity: 'migrate-liquidity',
  NativeBalanceInfo: 'native-balance-info',
  NewAddressWarning: 'new-address-warning-modal',
  NetworkFeeInfo: 'network-fee-info',
  NetworkSelector: 'network-selector-modal',
  NftCollection: 'nft-collection',
  NotificationsOSSettings: 'notifications-os-settings-modal',
  OffchainActivity: 'offchain-activity-modal',
  OnDeviceRecoveryConfirmation: 'on-device-recovery-confirmation',
  OtpInputExpired: 'otp-input-expired',
  OtpScanInput: 'otp-scan-input',
  PriceImpact: 'price-impact-modal',
  PrivacyChoices: 'privacy-choices-modal',
  PortfolioBalanceModal: 'portfolio-balance-modal',
  PermissionsModal: 'permissions-modal',
  QRCodeNetworkInfo: 'qr-code-network-info',
  QueuedOrderModal: 'queued-order-modal',
  ReceiveCryptoModal: 'receive-crypto-modal',
  RecipientSelectErc20Warning: 'recipient-select-erc20-warning',
  RecipientSelectNewWarning: 'recipient-select-new-warning',
  RecipientSelectSelfSendWarning: 'recipient-select-self-send-warning',
  RecipientSelectSmartContractWarning: 'recipient-select-smart-contract-warning',
  RecipientSelectViewOnlyWarning: 'recipient-select-view-only-warning',
  RecoveryPhrase: 'recovery-phrase-modal',
  RecoverySpeedBump: 'recovery-speed-bump',
  RemoveLiquidity: 'remove-liquidity',
  RemoveSeedPhraseWarningModal: 'remove-seed-phrase-warning-modal',
  RemoveWallet: 'remove-wallet-modal',
  ResetCreatePositionsForm: 'reset-create-positions-form',
  RestoreWallet: 'restore-wallet-modal',
  Scantastic: 'scantastic',
  ScreenshotWarning: 'screenshot-warning',
  Search: 'search-modal',
  SeedPhraseWarningModal: 'seed-phrase-warning-modal',
  SettingsAppearance: 'appearance-settings-modal',
  Send: 'send-modal',
  SendReview: 'send-review-modal',
  SendWarning: 'send-warning-modal',
  SignIn: 'sign-in-modal',
  SlippageInfo: 'slippage-info-modal',
  SlippageWarningModal: 'slippage-warning-modal',
  StorageWarning: 'storage-warning-modal',
  Swap: 'swap-modal',
  SwapError: 'swap-error-modal',
  SwapProtection: 'swap-protection-modal',
  SwapReview: 'swap-review-modal',
  SwapSettings: 'swap-settings-modal',
  SwapSettingsDefaultRoutingInfo: 'swap-settings-default-routing-info-modal',
  SwapWarning: 'swap-warning-modal',
  TestnetMode: 'testnet-mode-modal',
  TestnetSwitchModal: 'testnet-switch-modal',
  TokenSafety: 'token-safety-modal',
  TokenSelector: 'token-selector',
  TokenWarning: 'token-warning',
  TokenWarningModal: 'token-warning-modal',
  TooltipContent: 'tooltip-content',
  TransactionActions: 'transaction-actions',
  TransactionConfirmation: 'transaction-confirmation-modal',
  TransactionDetails: 'transaction-details',
  UkDisclaimer: 'uk-disclaimer-modal',
  UniconsDevModal: 'unicons-dev-modal',
  UniconsV2: 'unicons-v2-intro-modal',
  UniswapXInfo: 'uniswapx-info-modal',
  UnitagsChange: 'unitags-change-modal',
  UnitagsChangeConfirm: 'unitags-change-confirm-modal',
  UnitagsDelete: 'unitags-delete-modal',
  UnitagsIntro: 'unitags-intro-modal',
  UniWalletConnect: 'uniwallet-connect-modal',
  UnsupportedCurrency: 'unsupported-currency-modal',
  UwULinkErc20SendModal: 'uwulink-erc20-send-modal',
  ViewOnlyExplainer: 'view-only-explainer-modal',
  ViewSeedPhraseWarning: 'view-seed-phrase-warning',
  WalletConnectScan: 'wallet-connect-scan-modal',
  WCDappConnectedNetworks: 'wc-dapp-connected-networks-modal',
  WCPendingConnection: 'wc-pending-connection-modal',
  WCSignRequest: 'wc-sign-request-modal',
  WCViewOnlyWarning: 'wc-view-only-warning-modal',
  // alphabetize additional values.
} as const

export type ModalNameType = (typeof ModalName)[keyof typeof ModalName] | InterfaceModalName

/**
 * Possible names for the telement property in TraceContext
 */
export const ElementName = {
  AcceptNewRate: 'accept-new-rate',
  AccountCard: 'account-card',
  AddManualBackup: 'add-manual-backup',
  AddViewOnlyWallet: 'add-view-only-wallet',
  AddCloudBackup: 'add-cloud-backup',
  AddHook: 'add-hook',
  AlreadyHaveWalletSignIn: 'already-have-wallet-sign-in',
  BackButton: 'back-button',
  Buy: 'buy',
  BuyNativeTokenButton: 'buy-native-token-button',
  BridgeNativeTokenButton: 'bridge-native-token-button',
  Cancel: 'cancel',
  ChainEthereum: 'chain-ethereum',
  ChainUnichain: 'chain-unichain',
  ChainUnichainSepolia: 'chain-unichain-sepolia',
  ChainSepolia: 'chain-sepolia',
  ChainOptimism: 'chain-optimism',
  ChainArbitrum: 'chain-arbitrum',
  ChainPolygon: 'chain-polygon',
  ChainCelo: 'chain-celo',
  ChainBNB: 'chain-bnb',
  ChainAvalanche: 'chain-avalanche',
  ChainBase: 'chain-base',
  ChainBlast: 'chain-blast',
  ChainMonadTestnet: 'chain-monad-testnet',
  ChainSoneium: 'chain-soneium',
  ChainWorldChain: 'chain-world-chain',
  ChainZora: 'chain-zora',
  ChainZkSync: 'chain-zksync',
  ChooseInputToken: 'choose-input-token',
  ChooseOutputToken: 'choose-output-token',
  Confirm: 'confirm',
  Continue: 'continue',
  Copy: 'copy',
  CopyAddress: 'copy-address',
  CreateAccount: 'create-account',
  EmptyStateBuy: 'empty-state-buy',
  EmptyStateImport: 'empty-state-get-import',
  EmptyStateReceive: 'empty-state-receive',
  Enable: 'enable',
  EtherscanView: 'etherscan-view',
  ExtensionPopupOpenButton: 'extension-popup-open-button',
  FiatOnRampTokenSelector: 'fiat-on-ramp-token-selector',
  FiatOnRampWidgetButton: 'fiat-on-ramp-widget-button',
  FiatOnRampCountryPicker: 'fiat-on-ramp-country-picker',
  GetHelp: 'get-help',
  ImportAccount: 'import-account',
  InlineWarningCardCheckbox: 'inline-warning-card-checkbox',
  LimitOrderButton: 'limit-order-button',
  MaybeLaterButton: 'maybe-later-button',
  MoonpayExplorerView: 'moonpay-explorer-view',
  NetworkButton: 'network-button',
  Next: 'next',
  NftItem: 'nft-item',
  OK: 'ok',
  OnboardingIntroCardFundWallet: 'onboarding-intro-card-fund-wallet',
  OnboardingIntroCardEnablePushNotifications: 'onboarding-intro-card-enable-push-notifications',
  OnboardingImportBackup: 'onboarding-import-backup',
  OnboardingImportSeedPhrase: 'onboarding-import-seed-phrase',
  OnDeviceRecoveryImportOther: 'on-device-recovery-import-other',
  OnDeviceRecoveryWallet: 'on-device-recovery-wallet',
  OnDeviceRecoveryModalCancel: 'on-device-recovery-modal-cancel',
  OnDeviceRecoveryModalConfirm: 'on-device-recovery-modal-confirm',
  OpenCameraRoll: 'open-camera-roll',
  OpenNftsList: 'open-nfts-list',
  QRCodeModalToggle: 'qr-code-modal-toggle',
  Receive: 'receive',
  RecoveryHelpButton: 'recovery-help-button',
  Remove: 'remove',
  RestoreFromCloud: 'restore-from-cloud',
  Sell: 'sell',
  Send: 'send',
  SetMaxInput: 'set-max-input',
  SetMaxOutput: 'set-max-output',
  Skip: 'skip',
  Swap: 'swap',
  SwapFormHeader: 'swap-form-header',
  SwapReview: 'swap-review',
  SendReview: 'send-review',
  SwapRoutingPreferenceDefault: 'swap-routing-preference-default',
  SwapRoutingPreferenceUniswapX: 'swap-routing-preference-UniswapX',
  SwapRoutingPreferenceV2: 'swap-routing-preference-v2',
  SwapRoutingPreferenceV3: 'swap-routing-preference-v3',
  SwapRoutingPreferenceV4: 'swap-routing-preference-v4',
  SwitchCurrenciesButton: 'switch-currencies-button',
  TDPActionMenuButton: 'tdp-action-menu-button',
  TimeFrame1H: 'time-frame-1H',
  TimeFrame1D: 'time-frame-1D',
  TimeFrame1W: 'time-frame-1W',
  TimeFrame1M: 'time-frame-1M',
  TimeFrame1Y: 'time-frame-1Y',
  TimeFrameAll: 'time-frame-All',
  TokenAddress: 'token-address',
  TokenInputSelector: 'token-input-selector',
  TokenItem: 'token-item',
  TokenLinkEtherscan: 'token-link-etherscan',
  TokenLinkTwitter: 'token-link-twitter',
  TokenLinkWebsite: 'token-link-website',
  TokenOutputSelector: 'token-output-selector',
  TokenWarningCard: 'token-warning-card',
  Unwrap: 'unwrap',
  WalletCard: 'wallet-card',
  WalletConnectScan: 'wallet-connect-scan',
  WalletQRCode: 'wallet-qr-code',
  Wrap: 'wrap',
  // alphabetize additional values.
} as const

export type ElementNameType =
  | (typeof ElementName)[keyof typeof ElementName]
  | InterfaceElementName
  | OnboardingCardLoggingName

/**
 * Possible names for the section property in TraceContext
 */
export const SectionName = {
  CurrencyInputPanel: 'currency-input-panel',
  CurrencyOutputPanel: 'currency-output-panel',
  ExploreFavoriteTokensSection: 'explore-favorite-tokens-section',
  ExploreSearch: 'explore-search',
  ExploreTopTokensSection: 'explore-top-tokens-section',
  HomeActivityTab: 'home-activity-tab',
  HomeExploreTab: 'home-explore-tab',
  HomeNFTsTab: 'home-nfts-tab',
  HomeTokensTab: 'home-tokens-tab',
  ImportAccountForm: 'import-account-form',
  ProfileActivityTab: 'profile-activity-tab',
  ProfileNftsTab: 'profile-nfts-tab',
  ProfileTokensTab: 'profile-tokens-tab',
  SwapForm: 'swap-form',
  SwapPending: 'swap-pending',
  SwapReview: 'swap-review',
  TokenSelector: 'token-selector',
  TokenDetails: 'token-details',

  // These name / values don't match because we refactored code to use "send", but wanted to preserve old names for dashboards
  SendForm: 'transfer-form',
  SendReview: 'transfer-review',
  SendRecipientSelectFullScreen: 'send-recipient-select',

  ChainSelector: 'chain-selector',
  CreatePositionDepositStep: 'create-position-deposit-step',
  CreatePositionPriceRangeStep: 'create-position-price-range-step',
  CreatePositionSelectTokensStep: 'create-position-select-tokens-step',
  // alphabetize additional values.
} as const

export type SectionNameType = (typeof SectionName)[keyof typeof SectionName] | InterfaceSectionName

export const InterfacePageNameLocal = {
  Send: 'send-page',
  Limit: 'limit-page',
  Buy: 'buy-page',
  Positions: 'positions-page',
  PositionDetails: 'position-details-page',
  CreatePosition: 'create-position-page',
  MigrateV2: 'migrate-v2-page',
  MigrateV2Pair: 'migrate-v2-pair-page',
  MigrateV3: 'migrate-v3-page',
}

export type InterfacePageNameType =
  | (typeof InterfacePageNameLocal)[keyof typeof InterfacePageNameLocal]
  | InterfacePageName
