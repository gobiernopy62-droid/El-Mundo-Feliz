import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: "com.ignacio.mundofeliz",   
  appName: "El Mundo Feliz",
  webDir: "www",
  android: {
    allowMixedContent: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,        // Oculta la splash screen casi inmediatamente
      launchAutoHide: true,
      backgroundColor: "#000000",
      showSpinner: true
    }
  }
};

export default config;