import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export default function ResellStore() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-black text-white p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">ReSell Hub</h1>
        <Button className="flex gap-2">
          <ShoppingCart size={18} /> Cart
        </Button>
      </header>

      {/* Hero */}
      <section className="text-center py-20 px-4">
        <h2 className="text-4xl font-extrabold mb-4">Resell Clothes & Electronics</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Buy and sell verified clothing and electronics at unbeatable prices.
        </p>
        <Button size="lg">Start Shopping</Button>
      </section>

      {/* Products */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pb-20">
        {["Streetwear Hoodie", "Wireless Headphones", "Sneakers", "Smartwatch", "Graphic T‑Shirt", "Bluetooth Speaker"].map((item, i) => (
          <Card key={i} className="shadow-lg rounded-2xl">
            <CardContent className="p-6">
              <div className="h-40 bg-gray-200 rounded-xl mb-4" />
              <h3 className="font-semibold text-lg mb-2">{item}</h3>
              <p className="text-gray-500 mb-4">Resell condition • Limited stock</p>
              <Button className="w-full">Buy Now</Button>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center p-6">
        <p className="text-sm">© 2026 ReSell Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}
