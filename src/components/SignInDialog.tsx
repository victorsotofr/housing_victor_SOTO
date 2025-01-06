import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface SignInDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignInDialog = ({ isOpen, onClose }: SignInDialogProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Will be implemented when Supabase is connected
    console.log("Sign in attempt", { email, password });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] backdrop-blur-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4">
            Welcome to getarent.com
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-2 pt-4">
            <Button type="submit" className="w-full">
              Sign In
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={() => {
                // Will be implemented when Supabase is connected
                console.log("Create account clicked");
              }}
            >
              Create Account
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SignInDialog;