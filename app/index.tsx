import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

// Imprint Landing Screen
// The first touchpoint for the Artisan. 
// Simulates an "Auth" flow by redirecting to the main (tabs) layout.

export default function WelcomeScreen() {
  const router = useRouter();

  const handleGetStarted = () => {
    // In a real app, check for Wallet Connection / Auth Token here.
    // For prototype, we navigate directly to the main workspace.
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Background with a subtle overlay to ensure text readability */}
      <View style={styles.backgroundAccent} />

      <SafeAreaView style={styles.contentContainer}>
        
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.brandTitle}>Imprint.</Text>
          <Text style={styles.brandSubtitle}>
            Authenticate your craft.
          </Text>
        </View>

        {/* Value Prop Section */}
        <View style={styles.valueProps}>
          <ValueItem 
            icon="⚓️" 
            title="Anchor Reality" 
            desc="Link physical objects to the Cardano blockchain forever."
          />
          <ValueItem 
            icon="🏷️" 
            title="Print & Mint" 
            desc="Generate QR labels and mint NFTs in a single workflow."
          />
        </View>

        {/* Action Section */}
        <View style={styles.footer}>
          <TouchableOpacity 
            style={styles.primaryButton} 
            onPress={handleGetStarted}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Start Workshop</Text>
          </TouchableOpacity>
          
          <Text style={styles.versionText}>v0.1.0 (Prototype)</Text>
        </View>

      </SafeAreaView>
    </View>
  );
}

// Helper Component for the list items
const ValueItem = ({ icon, title, desc }: { icon: string, title: string, desc: string }) => (
  <View style={styles.itemContainer}>
    <View style={styles.iconBox}>
      <Text style={{ fontSize: 24 }}>{icon}</Text>
    </View>
    <View style={styles.textColumn}>
      <Text style={styles.itemTitle}>{title}</Text>
      <Text style={styles.itemDesc}>{desc}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A', // Slate 900 - Deep professional dark blue/black
  },
  backgroundAccent: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#1E293B', // Slate 800
    opacity: 0.5,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    paddingBottom: 40,
    paddingTop: 60,
  },
  header: {
    marginTop: 40,
  },
  brandTitle: {
    fontSize: 48,
    fontWeight: '800',
    color: '#F8FAFC', // Slate 50
    letterSpacing: -1,
  },
  brandSubtitle: {
    fontSize: 20,
    fontWeight: '400',
    color: '#94A3B8', // Slate 400
    marginTop: 8,
  },
  valueProps: {
    gap: 32,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#334155', // Slate 700
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColumn: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#E2E8F0', // Slate 200
    marginBottom: 4,
  },
  itemDesc: {
    fontSize: 14,
    color: '#94A3B8', // Slate 400
    lineHeight: 20,
  },
  footer: {
    gap: 16,
    alignItems: 'center',
  },
  primaryButton: {
    width: '100%',
    height: 56,
    backgroundColor: '#3B82F6', // Blue 500
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#3B82F6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  versionText: {
    color: '#475569', // Slate 600
    fontSize: 12,
  },
});
