// Imprint Core Type Definitions
// Defines the shape of Physical Assets, CIP Standards, and Hardware States.

// --- 1. ASSET DEFINITIONS ---

export interface PhysicalAsset {
  id: string;              // Internal UUID
  tempImageUri?: string;   // Local path to photo before upload
  ipfsImageUri?: string;   // Permanent IPFS CID (ipfs://...)
  metadata: AssetMetadata; // The JSON payload for the blockchain
  status: MintingStatus;   // Current state in the workflow
  createdAt: string;       // ISO Date string
}

export type MintingStatus = 
  | 'DRAFT'        // Photo taken, data entered, not saved
  | 'UPLOADING'    // Uploading image to IPFS
  | 'READY'        // Ready to mint
  | 'MINTING'      // Transaction submitted to NMKR
  | 'CONFIRMED'    // On-chain
  | 'ERROR';       // Failed state

// --- 2. CARDANO METADATA STANDARDS (CIP-25 & CIP-68) ---

// Standard CIP-25 (NFT) Structure
export interface AssetMetadata {
  name: string;        // Title of the work (e.g., "Handstitched Satchel #4")
  image: string;       // Main display image (ipfs://...)
  mediaType: string;   // e.g., "image/jpeg"
  description: string | string[]; // The story behind the object
  
  // Custom Artisan Attributes (Flexible)
  attributes?: Record<string, string | number>; 
  
  // Files array for high-res backups or additional angles
  files?: {
    name: string;
    mediaType: string;
    src: string;
  }[];
}

// Placeholder for CIP-68 (Dynamic/Reference Token) structure
export interface DynamicAssetMetadata extends AssetMetadata {
  standard: "cip68";
  version: 1;
  extra: Record<string, any>; // Mutable fields
}

// --- 3. HARDWARE & PRINTER TYPES ---

export interface PrinterDevice {
  id: string;          // Bluetooth Device ID
  name: string;        // Display Name (e.g., "Niimbot B21")
  isConnected: boolean;
  batteryLevel?: number;
}

export interface PrintJob {
  assetId: string;
  qrPayload: string;   // The data encoded in the QR (e.g., "imprint.io/v/12345")
  labelSize: 'small' | 'medium' | 'large';
}
