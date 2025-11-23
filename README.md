# Imprint

**Mobile-first tooling for bringing physical assets to the Cardano blockchain.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Status: Prototype](https://img.shields.io/badge/Status-Prototype_Design-blueviolet.svg)](https://github.com/Imprint/blob/main/README.md)

Imprint is a mobile-first tool designed for creators, artisans, and makers. It streamlines the process of authenticating physical objects on the Cardano blockchain by removing the friction of desktop-based minting. 

With Imprint, the minting process happens where the work happens: right at the point of creation.

## 📖 Vision

For physical creators (artisans, sculptors, leatherworkers, bespoke furniture makers,etc.) the computer is often a barrier. The act of registering an item on a blockchain usually requires moving files, managing wallets, and navigating complex minting interfaces on a desktop.

**Imprint** moves the blockchain layer into the background. It utilizes a Print, Scan, Mint workflow that feels as natural as taking a photo. By leveraging portable printing hardware and mobile cameras, we allow creators to effortlessly create an RWA token on Cardano.

## 🛠 The Workflow

Imprint changes the order of operations to suit physical production flows:

1.  **Generate & Print:** The app generates a unique QR code linked to a pre-reserved asset ID. The user prints this instantly on a portable bluetooth label printer.
2.  **Attach & Capture:** The label is adhered to the object. The user photographs the object using the app, capturing the item *with* its tag in the same frame.
3.  **Enrich Metadata:** The user inputs the custom metadata (title, materials, dimensions, and description - the story behind the object,etc.) directly on their phone.
4.  **Mint:** Using the NMKR SDK, the asset is minted on-chain.
5.  **Verify:** Anyone can subsequently scan the QR code on the physical object to view its digital passport, proving authenticity and provenance.

## 🎯 Use Cases

### The Artisan & The One-of-a-Kind
A leatherworker finishes a bespoke travel bag. Instead of shipping it with a paper certificate that can be lost or forged, they use Imprint. They print a small, aesthetic QR label and sew or stick it into the lining. They snap a photo of the finished bag. The resulting NFT serves as an immutable Certificate of Authenticity (CoA) that travels with the bag forever, proving it came from that specific workshop on that specific date.

### Fine Art & Sculpture
For physical artworks, provenance is everything. Imprint allows artists to "sign" their work digitally. The metadata can carry the story of the piece, the date of completion, and high-resolution imagery, all anchored to the physical label on the back of the canvas or the base of the sculpture.

### Small Batch Production
For makers producing limited runs (e.g., 50 numbered ceramic vases), Imprint speeds up the authentication process. The mobile interface allows for rapid sequential scanning and minting, ensuring each item in the batch has its own unique digital identity without manual data entry errors.

## ⚙️ Technical Architecture

Imprint is built to be lightweight, modular, and user-centric.

* **Mobile Environment:** React Native (Expo) for cross-platform iOS and Android compatibility.
* **Blockchain Integration:** **NMKR SDK**. We leverage NMKR to abstract the complexities of node management, policy locking, and transaction handling. This ensures enterprise-grade reliability without the need to maintain custom infrastructure.
* **Hardware Integration:** Support for standard Bluetooth command sets to communicate with portable printers.
* **Metadata Standards:**
    * **CIP-25:** For standard immutable assets and CoAs.
    * **CIP-68 for Dynamic Capabilities:** Support for updatable metadata standards where supply chain history or event logging is required.

## 🚀 Current Status

Imprint is currently in the **Prototyping** phase. 

The current focus is on:
1.  Validating the mobile UX for the "Scan-to-Mint" flow.
2.  Integrating the NMKR API for testnet interactions.
3.  Establishing the Bluetooth handshake protocol for mobile printing.

## 📄 License

This project is open source and available under the **MIT License**.
