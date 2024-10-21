"use client"
import { useWallet } from "./_contexts/WalletContext";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronRight, Wallet, Image as ImageIcon, Zap, Menu, X } from 'lucide-react';
import { TextHoverEffect } from "@/components/ui/text-hover-effect";


export default function Homepage() {
  const { account, connectWallet, disconnectWallet } = useWallet();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWalletOpen, setIsWalletOpen] = useState(false);

  const navItems = ['Explore', 'Create', 'Community'];
  const features = [
    {
      title: 'Feature 1',
      description: 'List your NFTs in seconds',
      icon: Zap, // Replace with actual icon component
    },
    {
      title: 'Feature 2',
      description: 'Buy and sell NFTs with ease',
      icon: Wallet, // Replace with actual icon component
    },
    {
      title: 'Feature 3',
      description: 'Discover one-of-a-kind digital art',
      icon: ImageIcon, // Replace with actual icon component
    },
  ];

  return (
    <div className="min-h-screen bg-black text-cyan-400">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">NF2Z</Link>
          <div className="hidden md:flex space-x-6 items-center">
            {navItems.map((item) => (
              <Link key={item} href="#" className="hover:text-cyan-300 transition-colors">
                {item}
              </Link>
            ))}

            {account ? (
              <Button onClick={disconnectWallet} variant="outline" className="bg-red-500 text-black hover:bg-red-400 hover:text-black">
                Disconnect ({account.slice(0, 6)}...{account.slice(-4)})
              </Button>
            ) : (
              <Button onClick={connectWallet} variant="outline" className="bg-cyan-500 text-black hover:bg-cyan-400 hover:text-black">
                Connect Wallet
              </Button>
            )}
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-16 left-0 right-0 bg-black/90 backdrop-blur-sm md:hidden z-40"
      >
        <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link key={item} href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              {item}
            </Link>
          ))}
          <Dialog open={isWalletOpen} onOpenChange={setIsWalletOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="bg-cyan-500 text-black hover:bg-cyan-400 hover:text-black w-full">
                Connect Wallet
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-black border border-cyan-500">
              <DialogHeader>
                <DialogTitle className="text-cyan-400">Connect your wallet</DialogTitle>
                <DialogDescription className="text-cyan-300">
                  Choose a wallet to connect to our NFT marketplace.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <Button onClick={connectWallet} className="bg-cyan-500 text-black hover:bg-cyan-400">
                  MetaMask
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <div className="text-sm mb-6">
            <TextHoverEffect 
              text="NF2Z" 
              duration={500} 
              automatic={false}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/dashboard"
              className="bg-cyan-500 text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-cyan-400 transition-colors inline-flex items-center"
            >
              Get Started <ChevronRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose NFT Realm?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-cyan-900/30 p-6 rounded-lg hover:bg-cyan-900/50 transition-colors"
              >
                <feature.icon className="w-12 h-12 mb-4 text-cyan-400" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-cyan-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cyan-900/20 to-black">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Start Your NFT Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-10 text-cyan-300"
          >
            Join thousands of artists and collectors in the NFT revolution
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="#"
              className="bg-cyan-500 text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-cyan-400 transition-colors inline-flex items-center"
            >
              Explore NFTs <ChevronRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}